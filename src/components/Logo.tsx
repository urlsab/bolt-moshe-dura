import React from 'react';
import moshelogo from '../Assets/moshelogo.png'

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`text-primary ${className} flex items-center justify-center`}>
      <img 
        src={moshelogo} 
        alt="משה דורה לוגו" 
        className="rounded-full bg-white shadow-md object-cover"
        style={{
          width: 'clamp(40px, 8vw, 72px)',
          height: 'clamp(40px, 8vw, 72px)',
          maxWidth: '100%',
          maxHeight: '100%',
          minWidth: 32,
          minHeight: 32
        }}
      />
    </div>
  );
};

export default Logo;