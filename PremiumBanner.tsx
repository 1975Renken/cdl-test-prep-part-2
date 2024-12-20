// src/components/dashboard/PremiumBanner.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Clock, 
  BarChart2, 
  Zap,
  X,
  CheckCircle2
} from 'lucide-react';

interface PremiumBannerProps {
  onUpgrade?: () => void;
  onDismiss?: () => void;
  className?: string;
  showDismiss?: boolean;
}

const PremiumBanner: React.FC<PremiumBannerProps> = ({
  onUpgrade,
  onDismiss,
  className = '',
  showDismiss = true
}) => {
  const features = [
    {
      icon: <Zap className="h-4 w-4 text-yellow-400" />,
      text: "Ad-free experience"
    },
    {
      icon: <BarChart2 className="h-4 w-4 text-yellow-400" />,
      text: "Detailed performance analytics"
    },
    {
      icon: <Clock className="h-4 w-4 text-yellow-400" />,
      text: "Unlimited practice tests"
    }
  ];

  return (
    <Card className={`relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <CardContent className="p-6 relative">
        {showDismiss && onDismiss && (
          <button
            onClick={onDismiss}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <h3 className="font-semibold text-lg">Upgrade to Premium</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-auto flex items-center gap-2">
            <Button 
              onClick={onUpgrade}
              className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white"
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PremiumBanner;