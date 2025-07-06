import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Smooth scroll to top with a slight delay to ensure proper timing with route changes
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, [location.pathname]); // Trigger on route change

  return null; // This component doesn't render anything
};