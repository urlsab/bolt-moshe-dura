import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';
import { Promotion } from '../types/promotion';

interface PromotionCardProps {
  promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  const { t } = useTranslation();
  
  return (
    <div className="card overflow-hidden border-2 border-primary/20">
      <div className="relative">
        <img 
          src={promotion.imageSrc} 
          alt={promotion.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 right-0 left-0 bg-primary/80 text-white p-2 text-center font-bold">
          חיסכון של {promotion.discount}%!
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl text-primary mb-2">{promotion.title}</h3>
        <p className="text-dark/70">{promotion.description}</p>
        
        <div className="mt-4 bg-light p-3 rounded-md">
          <div className="flex items-center text-sm text-dark/70 mb-2">
            <Calendar size={16} className="ml-1" />
            <span>{t('promotions.validUntil')}: {promotion.validUntil}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-dark/50 line-through">₪{promotion.regularPrice.toFixed(2)}</span>
              <span className="text-xl font-bold text-primary">₪{promotion.salePrice.toFixed(2)}</span>
            </div>
            <button className="btn-secondary">הוסף לסל</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;