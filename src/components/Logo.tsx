import React from 'react';
import moshelogo from '../Assets/moshelogo.png'

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`text-primary ${className}`}>
      <img src={moshelogo} alt="משה דורה לוגו" style={{height:"90px",width:"125px",borderRadius:"50%",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",background:"white",objectFit:"cover"}} />
    </div>
  );
};

export default Logo;