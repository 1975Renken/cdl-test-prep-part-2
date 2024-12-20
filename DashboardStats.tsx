// src/components/dashboard/DashboardStats.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Clock, 
  BarChart3, 
  TrendingUp,
  Brain,
  Target
} from 'lucide-react';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  additionalInfo?: string;
  trend?: number;
}

interface DashboardStatsProps {
  loading?: boolean;
  error?: string;
  stats?: {
    testsCompleted: number;
    totalStudyTime: string;
    averageScore: number;
    currentStreak: number;
    correctAnswers: number;
    testsPassed: number;
  };
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, additionalInfo, trend }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="rounded-lg p-2 bg-blue-50">
            {icon}
          </div>
        </div>
        {trend !== undefined && (
          <div className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 && '+'}
            {trend}%
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <p className="mt-2 text-2xl font-semibold">{value}</p>
        {additionalInfo && (
          <p className="mt-1 text-sm text-gray-500">{additionalInfo}</p>
        )}
      </div>
    </CardContent>
  </Card>
);

const DashboardStats: React.FC<DashboardStatsProps> = ({ 
  loading = false,
  error,
  stats 
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <LoadingSpinner size="large" text="Loading statistics..." />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!stats) {
    return <ErrorMessage message="No statistics available" type="info" />;
  }

  const statItems = [
    {
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      label: "Tests Completed",
      value: stats.testsCompleted,
      additionalInfo: `${stats.testsPassed} passed`
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      label: "Study Time",
      value: stats.totalStudyTime,
      additionalInfo: "Total time spent"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-green-500" />,
      label: "Average Score",
      value: `${stats.averageScore}%`,
      trend: 5 // Example trend, should come from backend
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
      label: "Current Streak",
      value: `${stats.currentStreak} days`
    },
    {
      icon: <Brain className="h-6 w-6 text-indigo-500" />,
      label: "Correct Answers",
      value: stats.correctAnswers
    },
    {
      icon: <Target className="h-6 w-6 text-red-500" />,
      label: "Tests Passed",
      value: stats.testsPassed,
      additionalInfo: `${((stats.testsPassed / stats.testsCompleted) * 100).toFixed(1)}% pass rate`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Your Progress</h2>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statItems.map((stat, index) => (
          <StatCard 
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            additionalInfo={stat.additionalInfo}
            trend={stat.trend}
          />
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Overall Progress</h3>
          <Progress value={65} className="h-2" />
          <p className="mt-2 text-sm text-gray-500">
            65% of CDL test content mastered
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;