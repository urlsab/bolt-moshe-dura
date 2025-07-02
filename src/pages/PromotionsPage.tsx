import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';
import PromotionCard from '../components/PromotionCard';
import promotions from '../data/promotions';
import { Calendar, AlertTriangle } from 'lucide-react';

const PromotionsPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title={`${t('promotions.title')} - ${t('common.siteTitle')}`}
        description={t('promotions.subtitle')}
      />
      
      <div className="container-custom">
        <SectionTitle 
          title={t('promotions.title')}
          subtitle={t('promotions.subtitle')}
          center
        />
        
        {/* Validity Notice */}
        <div className="bg-primary/10 p-4 rounded-md flex items-start mb-8">
          <Calendar size={24} className="text-primary mt-1 ml-3 shrink-0" />
          <div>
            <p className="font-bold">תוקף המבצעים</p>
            <p>המבצעים בתוקף מיום ראשון עד יום שישי. המחירים המוצגים תקפים רק בתאריכים המצוינים.</p>
          </div>
        </div>
        
        {/* Promotions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {promotions.map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </div>
        
        {/* Disclaimer */}
        <div className="bg-light p-6 rounded-lg shadow-sm mb-8">
          <div className="flex items-start">
            <AlertTriangle size={24} className="text-warning mt-1 ml-3 shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">הבהרות חשובות</h3>
              <ul className="space-y-2 text-dark/80">
                <li>• {t('promotions.disclaimer')}</li>
                <li>• אין כפל מבצעים והנחות</li>
                <li>• המחירים אינם כוללים משלוח</li>
                <li>• ייתכנו שינויים במחירים בהתאם לשינויי שוק</li>
                <li>• התמונות להמחשה בלבד</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Weekly Subscription */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">רוצים לקבל עדכונים על מבצעים חדשים?</h2>
            <p className="text-dark/70">הירשמו לרשימת התפוצה שלנו וקבלו מבצעים והטבות ישירות למייל</p>
          </div>
          
          <form className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="הזינו את כתובת המייל שלכם"
                className="form-input flex-grow"
                required
              />
              {/* <button type="submit" className="btn-primary whitespace-nowrap">
                הרשמה למבצעים
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;