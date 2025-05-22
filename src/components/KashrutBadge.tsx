import React from 'react';

interface KashrutBadgeProps {
  type: 'badatz' | 'yoreDea';
  size?: 'sm' | 'md' | 'lg';
}

const KashrutBadge: React.FC<KashrutBadgeProps> = ({ type, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  const getBadgeImage = () => {
    if (type === 'badatz') {
      return (
        <div className={`rounded-full bg-white p-2 border-2 border-primary flex items-center justify-center ${sizeClasses[size]}`}>
          <div className="text-center">
            <div className="text-xs font-bold text-primary">בד״ץ</div>
            <div className="text-xxs text-dark">העדה החרדית</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`rounded-full bg-white p-2 border-2 border-tertiary flex items-center justify-center ${sizeClasses[size]}`}>
          <div className="text-center">
            <div className="text-xs font-bold text-tertiary">יורה דעה</div>
            <div className="text-xxs text-dark">כשר למהדרין</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="inline-block">
      {getBadgeImage()}
    </div>
  );
};

export default KashrutBadge;