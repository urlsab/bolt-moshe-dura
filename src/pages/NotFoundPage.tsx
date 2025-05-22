import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title="דף לא נמצא - איטליז למהדרין"
        description="הדף המבוקש אינו קיים"
      />
      
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-4">הדף לא נמצא</h2>
            <p className="text-dark/70 mb-6">
              הדף שחיפשת אינו קיים או שהועבר למיקום אחר.
            </p>
            <Link 
              to="/" 
              className="btn-primary inline-flex items-center"
            >
              <Home size={18} className="ml-2" />
              <span>{t('common.buttons.backToHome')}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;