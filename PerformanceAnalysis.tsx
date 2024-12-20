// src/components/dashboard/PerformanceAnalysis.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  Clock,
  Brain,
  Target
} from 'lucide-react';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';

interface TopicPerformance {
  topic: string;
  score: number;
  questionsAttempted: number;
  totalQuestions: number;
  timeSpent: string;
  improvement: number;
}

interface PerformanceAnalysisProps {
  loading?: boolean;
  error?: string;
  weakestTopics?: TopicPerformance[];
  strongestTopics?: TopicPerformance[];
  overallPerformance?: {
    averageScore: number;
    totalTimeSpent: string;
    questionsAnswered: number;
    improvementRate: number;
  };
}

const TopicList: React.FC<{
  topics: TopicPerformance[];
  type: 'strong' | 'weak';
}> = ({ topics, type }) => (
  <div className="space-y-4">
    <h3 className="font-medium text-sm text-gray-700 flex items-center gap-2">
      {type === 'strong' ? (
        <>
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          Strong Topics
        </>
      ) : (
        <>
          <AlertCircle className="h-5 w-5 text-red-500" />
          Areas for Improvement
        </>
      )}
    </h3>
    <div className="space-y-4">
      {topics.map((topic, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{topic.topic}</span>
            <span className={type === 'strong' ? 'text-green-600' : 'text-red-600'}>
              {topic.score}%
            </span>
          </div>
          <Progress 
            value={topic.score} 
            className={`h-2 ${
              type === 'strong' 
                ? 'bg-green-100 [&>div]:bg-green-500' 
                : 'bg-red-100 [&>div]:bg-red-500'
            }`}
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{topic.questionsAttempted} of {topic.totalQuestions} questions</span>
            <span>{topic.timeSpent}</span>
          </div>
          {topic.improvement !== 0 && (
            <div className={`
              text-xs flex items-center gap-1
              ${topic.improvement > 0 ? 'text-green-600' : 'text-red-600'}
            `}>
              <TrendingUp className="h-3 w-3" />
              {topic.improvement > 0 ? '+' : ''}{topic.improvement}% from last week
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const PerformanceAnalysis: React.FC<PerformanceAnalysisProps> = ({
  loading = false,
  error,
  weakestTopics = [],
  strongestTopics = [],
  overallPerformance
}) => {
  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <LoadingSpinner text="Loading performance analysis..." />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          Performance Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        {overallPerformance && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg space-y-4">
            <h3 className="font-medium text-sm">Overall Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-gray-500">Average Score</div>
                <div className="font-semibold flex items-center gap-1">
                  <Target className="h-4 w-4 text-blue-500" />
                  {overallPerformance.averageScore}%
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-500">Time Studied</div>
                <div className="font-semibold flex items-center gap-1">
                  <Clock className="h-4 w-4 text-purple-500" />
                  {overallPerformance.totalTimeSpent}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-500">Questions Answered</div>
                <div className="font-semibold flex items-center gap-1">
                  <Brain className="h-4 w-4 text-green-500" />
                  {overallPerformance.questionsAnswered}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-500">Improvement Rate</div>
                <div className="font-semibold flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                  +{overallPerformance.improvementRate}%
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {strongestTopics.length > 0 && (
            <TopicList topics={strongestTopics} type="strong" />
          )}
          {weakestTopics.length > 0 && (
            <TopicList topics={weakestTopics} type="weak" />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceAnalysis;