// src/components/common/AdBanner.tsx
import React from 'react';

type AdSize = 'banner' | 'square' | 'skyscraper';

interface AdBannerProps {
  size?: AdSize;
  className?: string;
  showLabel?: boolean;
  position?: 'top' | 'bottom' | 'inline';
}

const AD_DIMENSIONS = {
  banner: { width: 728, height: 90 },      // Leaderboard banner
  square: { width: 300, height: 250 },     // Medium rectangle
  skyscraper: { width: 160, height: 600 }  // Wide skyscraper
};

const AdBanner: React.FC<AdBannerProps> = ({
  size = 'banner',
  className = '',
  showLabel = true,
  position = 'inline'
}) => {
  const dimensions = AD_DIMENSIONS[size];
  
  // Dynamic styles based on ad size
  const containerStyle = {
    width: '100%',
    maxWidth: `${dimensions.width}px`,
    height: `${dimensions.height}px`,
  };

  // Position-specific margin classes
  const positionClasses = {
    top: 'mb-6',
    bottom: 'mt-6',
    inline: 'my-4'
  };

  return (
    <div 
      className={`
        relative mx-auto bg-gray-100 flex items-center justify-center border border-gray-200 rounded-lg
        ${positionClasses[position]}
        ${className}
      `}
      style={containerStyle}
      role="complementary"
      aria-label="Advertisement"
    >
      {showLabel && (
        <div className="absolute top-0 right-0 text-xs text-gray-400 p-1">
          Ad
        </div>
      )}
      
      {/* Placeholder for actual ad content */}
      <div className="text-gray-400 text-sm">
        Advertisement Space ({dimensions.width}x{dimensions.height})
      </div>
    </div>
  );
};

export default AdBanner;