// src/components/dashboard/WelcomeSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  PlayCircle, 
  BookOpen, 
  Clock, 
  ChevronRight,
  History
} from 'lucide-react';

interface WelcomeSectionProps {
  userName?: string;
  lastTest?: {
    name: string;
    date: string;
    score: number;
  };
  onStartTest?: () => void;
  onResumeLearning?: () => void;
  onViewHistory?: () => void;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  userName = 'Driver',
  lastTest,
  onStartTest,
  onResumeLearning,
  onViewHistory
}) => {
  const getCurrentTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  return (
    <div className="space-y-4">
      {/* Greeting and Quick Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Good {getCurrentTimeOfDay()}, {userName}!
          </h1>
          <p className="text-gray-600 mt-1">
            Ready to continue your CDL test preparation?
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={onStartTest}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <PlayCircle className="mr-2 h-4 w-4" />
            Start New Test
          </Button>
          <Button
            variant="outline"
            onClick={onResumeLearning}
            className="border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Resume Learning
          </Button>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Last Test Card */}
        {lastTest && (
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-blue-800">Last Test Attempt</h3>
                  <p className="text-lg font-semibold text-blue-900">{lastTest.name}</p>
                  <div className="flex items-center gap-4 text-sm text-blue-700">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {lastTest.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      Score: {lastTest.score}%
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onViewHistory}
                  className="text-blue-700 hover:text-blue-800 hover:bg-blue-200/50"
                >
                  <History className="mr-1 h-4 w-4" />
                  View History
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Study Recommendation Card */}
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-green-800">Recommended Next Step</h3>
                <p className="text-lg font-semibold text-green-900">Air Brakes Section</p>
                <p className="text-sm text-green-700">
                  Complete this section to improve your overall score
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onResumeLearning}
                className="text-green-700 hover:text-green-800 hover:bg-green-200/50"
              >
                Start Now
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WelcomeSection;