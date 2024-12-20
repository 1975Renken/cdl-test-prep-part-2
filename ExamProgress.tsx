// src/components/dashboard/ExamProgress.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';

interface ExamSection {
  id: string;
  name: string;
  progress: number;
  questionsTotal: number;
  questionsCompleted: number;
  timeSpent: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'needs-review';
}

interface ExamProgressProps {
  loading?: boolean;
  error?: string;
  sections?: ExamSection[];
  onStartExam?: (sectionId: string) => void;
  onContinueExam?: (sectionId: string) => void;
  onReviewExam?: (sectionId: string) => void;
}

const getStatusColor = (status: ExamSection['status']) => {
  switch (status) {
    case 'completed':
      return 'text-green-500';
    case 'in-progress':
      return 'text-blue-500';
    case 'needs-review':
      return 'text-yellow-500';
    default:
      return 'text-gray-400';
  }
};

const getStatusIcon = (status: ExamSection['status']) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'in-progress':
      return <Clock className="h-5 w-5 text-blue-500" />;
    case 'needs-review':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    default:
      return <BookOpen className="h-5 w-5 text-gray-400" />;
  }
};

const ExamProgress: React.FC<ExamProgressProps> = ({
  loading = false,
  error,
  sections = [],
  onStartExam,
  onContinueExam,
  onReviewExam
}) => {
  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <LoadingSpinner text="Loading exam progress..." />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const getActionButton = (section: ExamSection) => {
    switch (section.status) {
      case 'not-started':
        return (
          <Button
            size="sm"
            onClick={() => onStartExam?.(section.id)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Start
          </Button>
        );
      case 'in-progress':
        return (
          <Button
            size="sm"
            onClick={() => onContinueExam?.(section.id)}
            className="bg-green-600 hover:bg-green-700"
          >
            Continue
          </Button>
        );
      case 'needs-review':
        return (
          <Button
            size="sm"
            variant="outline"
            onClick={() => onReviewExam?.(section.id)}
            className="text-yellow-600 border-yellow-600 hover:bg-yellow-50"
          >
            Review
          </Button>
        );
      case 'completed':
        return (
          <Button
            size="sm"
            variant="outline"
            onClick={() => onReviewExam?.(section.id)}
          >
            Review
          </Button>
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Exam Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(section.status)}
                  <h3 className="font-medium">{section.name}</h3>
                </div>
                {getActionButton(section)}
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{section.questionsCompleted} of {section.questionsTotal} questions</span>
                  <span>{section.progress}%</span>
                </div>
                <Progress value={section.progress} className="h-2" />
              </div>

              <div className="flex gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {section.timeSpent}
                </span>
                <span className={`flex items-center gap-1 ${getStatusColor(section.status)}`}>
                  {section.status === 'completed' && 'Completed'}
                  {section.status === 'in-progress' && 'In Progress'}
                  {section.status === 'needs-review' && 'Needs Review'}
                  {section.status === 'not-started' && 'Not Started'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamProgress;