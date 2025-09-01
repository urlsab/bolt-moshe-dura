import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Promotion } from '../types/promotion';

interface PromotionCardProps {
  promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  //const { t } = useTranslation();
  const { imageSrc, title, description } = promotion;
  return (
    <div
      className="relative w-full h-72 rounded-xl overflow-hidden flex items-center justify-center"
      style={{ minHeight: 330, maxWidth: 700, margin: '0 auto' }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title || description || 'promotion'}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(40%)' }}
        />
      )}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        {title && (
          <div className="text-2xl font-bold mb-2 text-white drop-shadow-lg text-center">
            {title}
          </div>
        )}
        {description && (
          <div className="text-lg text-white text-center drop-shadow-md">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default PromotionCard;