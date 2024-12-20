// src/hooks/useDashboardData.ts
import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { api } from '../services/api';

interface TestProgress {
  id: string;
  name: string;
  progress: number;
  questionsTotal: number;
  questionsCompleted: number;
  timeSpent: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'needs-review';
}

interface TopicPerformance {
  topic: string;
  score: number;
  questionsAttempted: number;
  totalQuestions: number;
  timeSpent: string;
  improvement: number;
}

interface DashboardStats {
  testsCompleted: number;
  totalStudyTime: string;
  averageScore: number;
  currentStreak: number;
  correctAnswers: number;
  testsPassed: number;
  overallProgress: number;
}

interface DashboardData {
  stats: DashboardStats;
  recentTests: TestProgress[];
  weakestTopics: TopicPerformance[];
  strongestTopics: TopicPerformance[];
  examProgress: TestProgress[];
}

interface UseDashboardDataReturn {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useDashboardData(): UseDashboardDataReturn {
  const { getAuthorizationHeader, isAuthenticated } = useAuth();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = async () => {
    if (!isAuthenticated) {
      setError('User not authenticated');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const headers = {
        Authorization: getAuthorizationHeader(),
      };

      // Fetch all dashboard data in parallel
      const [
        statsData,
        recentTestsData,
        topicsData,
        examProgressData
      ] = await Promise.all([
        api.get<DashboardStats>('/dashboard/stats', headers),
        api.get<TestProgress[]>('/dashboard/recent-tests', headers),
        api.get<{ weak: TopicPerformance[], strong: TopicPerformance[] }>('/dashboard/topics', headers),
        api.get<TestProgress[]>('/dashboard/exam-progress', headers)
      ]);

      setData({
        stats: statsData,
        recentTests: recentTestsData,
        weakestTopics: topicsData.weak,
        strongestTopics: topicsData.strong,
        examProgress: examProgressData
      });
    } catch (err) {
      setError('Failed to fetch dashboard data');
      console.error('Dashboard data fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on mount and when auth status changes
  useEffect(() => {
    fetchDashboardData();
  }, [isAuthenticated]);

  // Utility functions for data access
  const getTopicByName = (topicName: string) => {
    if (!data) return null;
    return [...data.weakestTopics, ...data.strongestTopics]
      .find(topic => topic.topic === topicName);
  };

  const getExamProgress = (examId: string) => {
    if (!data) return null;
    return data.examProgress.find(exam => exam.id === examId);
  };

  const calculateOverallProgress = () => {
    if (!data) return 0;
    return data.stats.overallProgress;
  };

  return {
    data,
    loading,
    error,
    refetch: fetchDashboardData,
  };
}

// Example API service integration:
// src/services/api.ts
interface ApiResponse<T> {
  data: T;
  status: number;
}

export const api = {
  async get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const result: ApiResponse<T> = await response.json();
    return result.data;
  },
};