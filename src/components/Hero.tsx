import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import homepage from '../assets/homepage.webp';

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc = `${homepage}`,
  buttonText,
  buttonLink = '/products'
}) => {
  const { t } = useTranslation();
  
  // Use provided props or fallback to translations
  const heroTitle = title || t('home.hero.title');
  const heroSubtitle = subtitle || t('home.hero.subtitle');
  const heroButtonText = buttonText || t('common.buttons.viewProducts');

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden mt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative h-full flex items-center">
        <div className="max-w-2xl animate-slideRight">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-frank font-bold text-white mb-4">
            {heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-light mb-8">
            {heroSubtitle}
          </p>
          <p className="text-light/90 mb-8 text-lg">
            {t('home.hero.welcomeMessage')}
          </p>
          <Link 
            to={buttonLink} 
            className="btn-secondary"
          >
            {heroButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;