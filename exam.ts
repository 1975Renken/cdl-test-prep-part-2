// src/types/exam.ts

// Main exam interfaces
export interface Exam {
    id: string;
    title: string;
    type: ExamType;
    status: ExamStatus;
    questions: Question[];
    timeLimit: number; // in minutes
    passingScore: number;
    createdAt: string;
    updatedAt: string;
    section: ExamSection;
    instructions: string[];
  }
  
  export interface ExamSection {
    id: string;
    name: string;
    description: string;
    totalQuestions: number;
    timeLimit: number;
    requiredForCDL: boolean;
    order: number;
    topics: Topic[];
    status: 'not-started' | 'in-progress' | 'completed' | 'needs-review';
    progress: number;
  }
  
  export interface Topic {
    id: string;
    name: string;
    description: string;
    questionCount: number;
    difficulty: Difficulty;
    importance: 'low' | 'medium' | 'high';
    progress: number;
    timeSpent: number;
  }
  
  export interface Question {
    id: string;
    text: string;
    options: Option[];
    correctOption: number;
    explanation: string;
    topicId: string;
    difficulty: Difficulty;
    imageUrl?: string;
    tags: string[];
    statistics: QuestionStatistics;
  }
  
  export interface Option {
    id: number;
    text: string;
    isCorrect: boolean;
  }
  
  export interface QuestionStatistics {
    timesAnswered: number;
    correctAnswers: number;
    averageTimeSpent: number; // in seconds
    difficulty: number; // calculated difficulty based on user performance
  }
  
  export interface ExamAttempt {
    id: string;
    userId: string;
    examId: string;
    startTime: string;
    endTime?: string;
    score?: number;
    status: ExamStatus;
    answers: Answer[];
    timeSpent: number;
    isPassing: boolean;
  }
  
  export interface Answer {
    questionId: string;
    selectedOption: number;
    isCorrect: boolean;
    timeSpent: number;
    confidence: Confidence;
  }
  
  export interface ExamProgress {
    sectionId: string;
    completedQuestions: number;
    totalQuestions: number;
    correctAnswers: number;
    timeSpent: number;
    lastAttempted?: string;
    topicProgress: Record<string, number>;
  }
  
  export interface ExamResult {
    attemptId: string;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    timeSpent: number;
    passingScore: number;
    isPassing: boolean;
    breakdown: TopicBreakdown[];
    recommendations: string[];
  }
  
  export interface TopicBreakdown {
    topicId: string;
    topicName: string;
    correctAnswers: number;
    totalQuestions: number;
    score: number;
    status: 'strong' | 'moderate' | 'weak';
  }
  
  // Types and Enums
  export type ExamType = 'practice' | 'mock' | 'quick' | 'full';
  export type ExamStatus = 'not-started' | 'in-progress' | 'completed' | 'reviewed';
  export type Difficulty = 'easy' | 'medium' | 'hard';
  export type Confidence = 'low' | 'medium' | 'high';
  
  // Constants
  export const EXAM_TYPES = {
    PRACTICE: 'practice',
    MOCK: 'mock',
    QUICK: 'quick',
    FULL: 'full'
  } as const;
  
  export const EXAM_SECTIONS = {
    GENERAL_KNOWLEDGE: 'general_knowledge',
    AIR_BRAKES: 'air_brakes',
    COMBINATION_VEHICLES: 'combination_vehicles',
    HAZMAT: 'hazmat',
    TANKER: 'tanker',
    DOUBLES_TRIPLES: 'doubles_triples'
  } as const;
  
  export const TIME_LIMITS = {
    PRACTICE: 30, // minutes
    MOCK: 120,
    QUICK: 15,
    FULL: 180
  } as const;
  
  // Utility functions
  export const calculateScore = (attempt: ExamAttempt): number => {
    if (!attempt.answers.length) return 0;
    const correct = attempt.answers.filter(a => a.isCorrect).length;
    return (correct / attempt.answers.length) * 100;
  };
  
  export const isPassing = (score: number, passingScore: number): boolean => {
    return score >= passingScore;
  };
  
  export const getTopicStatus = (score: number): TopicBreakdown['status'] => {
    if (score >= 80) return 'strong';
    if (score >= 60) return 'moderate';
    return 'weak';
  };
  
  export const formatTimeSpent = (timeSpent: number): string => {
    const hours = Math.floor(timeSpent / 3600);
    const minutes = Math.floor((timeSpent % 3600) / 60);
    const seconds = timeSpent % 60;
  
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    }
    return `${seconds}s`;
  };
  
  // Type guards
  export const isExamComplete = (exam: Exam): boolean => {
    return exam.status === 'completed' || exam.status === 'reviewed';
  };
  
  export const needsReview = (attempt: ExamAttempt): boolean => {
    return !attempt.isPassing && attempt.status === 'completed';
  };
  
  export interface ExamFilters {
    type?: ExamType;
    difficulty?: Difficulty;
    topic?: string;
    status?: ExamStatus;
  }
  
  export interface ExamSortOptions {
    field: 'date' | 'score' | 'timeSpent';
    direction: 'asc' | 'desc';
  }