// src/pages/dashboard/Dashboard.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import {
  Star,
  ChevronRight,
} from 'lucide-react';
import { Jurisdiction } from '../../types/jurisdiction';
import { getJurisdictions } from '../../services/api';

// ScoreGauge component defined outside Dashboard
const ScoreGauge = ({ score }: { score: number }) => {
  const radius = 24;
  const circumference = Math.PI * radius;
  const arcLength = (score / 100) * circumference * 0.66;
  const startAngle = -225;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-16 h-16">
        <svg className="transform -rotate-90 w-16 h-16">
          {/* Background arc */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
            strokeDasharray={`${circumference * 0.75} ${circumference}`}
            strokeDashoffset={circumference * 0.125}
          />
          {/* Score arc */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke={score >= 80 ? '#22c55e' : '#ef4444'}
            strokeWidth="6"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={circumference * 0.125}
            className="transition-all duration-500"
          />
          {/* 80% hashmark */}
          <line
            x1="34"
            y1="27"
            x2="50"
            y2="60"
            transform={`rotate(${startAngle + (80/100) * 270} 32 32)`}
            stroke="black"
            strokeWidth="2"
            className="origin-center"
          />
        </svg>
      </div>
      <span className={`text-sm font-bold ${score >= 80 ? 'text-green-500' : 'text-red-500'}`}>
        {score}%
      </span>
    </div>
  );
};

// Constants defined outside Dashboard
const testTypes = [
  { id: 'general', name: 'General Knowledge' },
  { id: 'airbrakes', name: 'Air Brakes' },
  { id: 'combination', name: 'Combination Vehicles' },
  { id: 'hazmat', name: 'Hazardous Materials' },
];

const difficultyLevels = [
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' },
];

const recommendations = [
  {
    topic: 'Air Brakes System Components',
    score: 65,
    link: '/study-guide/air-brakes/components'
  },
  {
    topic: 'Hazmat Placarding',
    score: 85,
    link: '/study-guide/hazmat/placarding'
  },
  {
    topic: 'Vehicle Inspection',
    score: 72,
    link: '/study-guide/inspection'
  },
  {
    topic: 'Coupling and Uncoupling',
    score: 90,
    link: '/study-guide/coupling'
  }
];

// Main Dashboard Component
export default function Dashboard() {
  const navigate = useNavigate();
  const [jurisdictions, setJurisdictions] = useState<Jurisdiction[]>([]);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<Jurisdiction | null>(null);
  const [selectedStateCode, setSelectedStateCode] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('beginner');
  const isPremium = false;

  const progress = {
    totalQuestions: 150,
    correctAnswers: 98,
    percentage: 65,
  };

  useEffect(() => {
    const fetchJurisdictions = async () => {
      try {
        const data = await getJurisdictions();
        setJurisdictions(data);
      } catch (error) {
        console.error('Error loading jurisdictions:', error);
      }
    };

    fetchJurisdictions();
  }, []);

  const handleStartTest = () => {
    if (!selectedStateCode || !selectedTest) {
      alert('Please select both state and test type');
      return;
    }
    navigate(`/practice/${selectedTest}`);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Jurisdiction and Test Selection */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Test Selection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select Your State</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={selectedStateCode}
                onChange={(e) => {
                  setSelectedStateCode(e.target.value);
                  const jurisdiction = jurisdictions.find(j => j.code === e.target.value);
                  setSelectedJurisdiction(jurisdiction || null);
                }}
              >
                <option value="">Select a state...</option>
                {jurisdictions.map(jurisdiction => (
                  <option key={jurisdiction.code} value={jurisdiction.code}>
                    {jurisdiction.name}
                  </option>
                ))}
              </select>

              {/* Show jurisdiction details if selected */}
              {selectedJurisdiction && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium">{selectedJurisdiction.officialInfo.agencyName}</h4>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Minimum Age: {selectedJurisdiction.requirements.minAge}</p>
                    <p>Medical Certificate Required: {selectedJurisdiction.requirements.medicalCertificate ? 'Yes' : 'No'}</p>
                    <p>License Valid: {selectedJurisdiction.licenseInfo.validity.standard.time} {selectedJurisdiction.licenseInfo.validity.standard.unit}</p>
                    <p>Knowledge Test Fee: ${selectedJurisdiction.fees.knowledge}</p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Test Type</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={selectedTest}
                onChange={(e) => setSelectedTest(e.target.value)}
              >
                <option value="">Select a test...</option>
                {testTypes.map(test => (
                  <option key={test.id} value={test.id}>{test.name}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Selection (Premium Feature) */}
            <div className={`${!isPremium ? 'opacity-50' : ''}`}>
              <label className="block text-sm font-medium mb-2">
                Difficulty Level
                {!isPremium && <span className="text-yellow-600 ml-2">(Premium Feature)</span>}
              </label>
              <select
                className="w-full p-2 border rounded-lg"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                disabled={!isPremium}
              >
                {difficultyLevels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>
            </div>

            <Button
              className="w-full mt-4"
              onClick={handleStartTest}
              disabled={!selectedStateCode || !selectedTest}
            >
              Start Practice Test
            </Button>
          </CardContent>
        </Card>

        {/* Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Progress</span>
                <span>{progress.percentage}%</span>
              </div>
              <Progress value={progress.percentage} className="h-2" />
              <p className="text-sm text-gray-500 mt-2">
                {progress.correctAnswers} correct out of {progress.totalQuestions} questions
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Study Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Study Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <ScoreGauge score={rec.score} />
                  <div>
                    <h3 className="font-medium">{rec.topic}</h3>
                    <p className={`text-sm ${rec.score >= 80 ? 'text-green-600' : 'text-red-600'}`}>
                      {rec.score >= 80 ? 'Proficient' : 'Needs Review'}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => navigate(rec.link)}
                  className={`${
                    rec.score >= 80 
                      ? 'hover:bg-green-50 border-green-200' 
                      : 'hover:bg-red-50 border-red-200'
                  }`}
                >
                  Study Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Premium Upgrade Banner */}
      {!isPremium && (
        <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Upgrade to Premium</h3>
                  <p className="text-sm text-gray-600">
                    Get access to difficulty levels and more features
                  </p>
                </div>
              </div>
              <Button
                onClick={() => navigate('/premium')}
                className="bg-yellow-500 hover:bg-yellow-600"
              >
                Upgrade Now
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}