import React from 'react';
import { Drumstick } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`text-primary ${className}`}>
      <Drumstick size={32} strokeWidth={2} />
    </div>
  );
};

export default Logo;