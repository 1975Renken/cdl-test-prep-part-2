// src/hooks/useExamProgress.ts
import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { api } from '../services/api';

interface ExamSection {
  id: string;
  name: string;
  totalQuestions: number;
  completedQuestions: number;
  correctAnswers: number;
  progress: number;
  timeSpent: string;
  lastAttempted?: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'needs-review';
  score?: number;
}

interface ExamAttempt {
  id: string;
  sectionId: string;
  startTime: string;
  endTime?: string;
  score?: number;
  questionsAnswered: number;
  correctAnswers: number;
  timeSpent: string;
}

interface ExamQuestion {
  id: string;
  sectionId: string;
  question: string;
  options: string[];
  correctOption: number;
  explanation: string;
  userAnswer?: number;
  isCorrect?: boolean;
  timeSpent?: number;
}

interface UseExamProgressReturn {
  sections: ExamSection[];
  currentSection: ExamSection | null;
  attempts: ExamAttempt[];
  questions: ExamQuestion[];
  loading: boolean;
  error: string | null;
  // Actions
  startExam: (sectionId: string) => Promise<void>;
  continueExam: (sectionId: string) => Promise<void>;
  submitAnswer: (questionId: string, answer: number) => Promise<void>;
  completeSection: (sectionId: string) => Promise<void>;
  reviewSection: (sectionId: string) => Promise<ExamAttempt>;
  // Stats and utilities
  getSectionProgress: (sectionId: string) => number;
  getSectionScore: (sectionId: string) => number;
  getTimeSpent: (sectionId: string) => string;
  getTotalProgress: () => number;
}

export function useExamProgress(): UseExamProgressReturn {
  const { getAuthorizationHeader, isAuthenticated } = useAuth();
  const [sections, setSections] = useState<ExamSection[]>([]);
  const [currentSection, setCurrentSection] = useState<ExamSection | null>(null);
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch initial data
  useEffect(() => {
    if (isAuthenticated) {
      fetchExamData();
    }
  }, [isAuthenticated]);

  const fetchExamData = async () => {
    try {
      setLoading(true);
      const headers = { Authorization: getAuthorizationHeader() };
      
      const [sectionsData, attemptsData] = await Promise.all([
        api.get<ExamSection[]>('/exam/sections', headers),
        api.get<ExamAttempt[]>('/exam/attempts', headers)
      ]);

      setSections(sectionsData);
      setAttempts(attemptsData);
    } catch (err) {
      setError('Failed to fetch exam data');
      console.error('Exam data fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const startExam = async (sectionId: string) => {
    try {
      setLoading(true);
      const headers = { Authorization: getAuthorizationHeader() };
      
      // Start new attempt
      const newAttempt = await api.post<ExamAttempt>('/exam/start', {
        sectionId
      }, headers);

      // Fetch questions for this section
      const sectionQuestions = await api.get<ExamQuestion[]>(
        `/exam/sections/${sectionId}/questions`,
        headers
      );

      setAttempts(prev => [...prev, newAttempt]);
      setQuestions(sectionQuestions);
      setCurrentSection(sections.find(s => s.id === sectionId) || null);

    } catch (err) {
      setError('Failed to start exam');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const continueExam = async (sectionId: string) => {
    try {
      setLoading(true);
      const headers = { Authorization: getAuthorizationHeader() };
      
      // Get latest attempt
      const latestAttempt = attempts
        .filter(a => a.sectionId === sectionId)
        .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())[0];

      // Fetch current progress
      const currentQuestions = await api.get<ExamQuestion[]>(
        `/exam/attempts/${latestAttempt.id}/questions`,
        headers
      );

      setQuestions(currentQuestions);
      setCurrentSection(sections.find(s => s.id === sectionId) || null);

    } catch (err) {
      setError('Failed to continue exam');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const submitAnswer = async (questionId: string, answer: number) => {
    if (!currentSection) return;

    try {
      const headers = { Authorization: getAuthorizationHeader() };
      
      // Submit answer
      const result = await api.post<{ correct: boolean }>('/exam/submit-answer', {
        questionId,
        answer,
        sectionId: currentSection.id
      }, headers);

      // Update questions locally
      setQuestions(prev => prev.map(q => 
        q.id === questionId
          ? { ...q, userAnswer: answer, isCorrect: result.correct }
          : q
      ));

      // Update section progress
      updateSectionProgress(currentSection.id);

    } catch (err) {
      setError('Failed to submit answer');
      throw err;
    }
  };

  const completeSection = async (sectionId: string) => {
    try {
      const headers = { Authorization: getAuthorizationHeader() };
      
      const result = await api.post<ExamAttempt>('/exam/complete', {
        sectionId
      }, headers);

      // Update attempts
      setAttempts(prev => [...prev, result]);
      
      // Update section status
      setSections(prev => prev.map(s => 
        s.id === sectionId
          ? { ...s, status: 'completed' as const }
          : s
      ));

    } catch (err) {
      setError('Failed to complete section');
      throw err;
    }
  };

  const reviewSection = async (sectionId: string) => {
    try {
      const headers = { Authorization: getAuthorizationHeader() };
      
      const reviewData = await api.get<ExamAttempt>(
        `/exam/sections/${sectionId}/review`,
        headers
      );

      return reviewData;

    } catch (err) {
      setError('Failed to fetch review data');
      throw err;
    }
  };

  // Utility functions
  const updateSectionProgress = async (sectionId: string) => {
    try {
      const headers = { Authorization: getAuthorizationHeader() };
      const progress = await api.get<ExamSection>(
        `/exam/sections/${sectionId}/progress`,
        headers
      );

      setSections(prev => prev.map(s => 
        s.id === sectionId ? { ...s, ...progress } : s
      ));

    } catch (err) {
      console.error('Failed to update section progress:', err);
    }
  };

  const getSectionProgress = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    return section?.progress || 0;
  };

  const getSectionScore = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    return section?.score || 0;
  };

  const getTimeSpent = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    return section?.timeSpent || '0m';
  };

  const getTotalProgress = () => {
    if (sections.length === 0) return 0;
    return sections.reduce((acc, section) => acc + section.progress, 0) / sections.length;
  };

  return {
    sections,
    currentSection,
    attempts,
    questions,
    loading,
    error,
    startExam,
    continueExam,
    submitAnswer,
    completeSection,
    reviewSection,
    getSectionProgress,
    getSectionScore,
    getTimeSpent,
    getTotalProgress,
  };
}