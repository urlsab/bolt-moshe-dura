import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';
import promotions from '../data/promotions';
import { AlertTriangle } from 'lucide-react';
import mivtsaNisan from '../Assets/mivtsa nisan.jpg';
import kiseRahamim from '../Assets/kise rahamim kidush.jpg';
// import mivtsaKislev from '../Assets/mivtsaKislev.mp4';
// import basartahun from '../Assets/bakartahuntari.jpg';
// import hazeOf from '../Assets/hazeof.jpg';
// import kraaim from '../Assets/kraaayim.jpg';
// import knafaim from '../Assets/kenafaim.jpg';
// import ofTahun from '../Assets/oftachun.jpg';
// import asado from '../Assets/asado.webp';
// import antrikot from '../Assets/antrikotimetsem.jpg';
// import antrikoti from '../Assets/antrikotleloetsem.jpg';
// import golesh from '../Assets/garonhodu.jpg';
// import amnon from '../Assets/amnonimor.jpg';
// import meat from '../Assets/rotfilsh.jpg';
// import kabab from '../Assets/kababbb.jpg';
// import kavad from '../Assets/kaved.jpg';
// import shawarma from '../Assets/shuarma.jpg';
// import frozenYerek from '../Assets/frozenYerek.jpg';

const PromotionsPage: React.FC = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });
    observer.observe(video);

    return () => {
      if (observer && video) observer.unobserve(video);
    };
  }, []);

  
  
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

        
        
        {/* Divider */}
        {/* <div className="border-t-2 border-gray-300 my-12"></div> */}
        
        {/* Validity Notice */}
        {/* <div className="bg-primary/10 p-4 rounded-md flex items-start mb-8">
          <Calendar size={24} className="text-primary mt-1 ml-3 shrink-0" />
          <div>
            <p className="font-bold">תוקף המבצעים</p>
            <p>המבצעים בתוקף מיום ראשון עד יום שישי. המחירים המוצגים תקפים רק בתאריכים המצוינים.</p>
          </div>
        </div> */}
        
        {/* Additional Promotions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {promotions.map((promotion) => (
            <div
              key={promotion.id}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
              style={{ height: '206px' }}
            >
              {/* Background Image with Gradient Overlay */}
              {promotion.imageSrc && (
                <>
                  <img
                    src={promotion.imageSrc}
                    alt={promotion.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'brightness(45%)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </>
              )}
              
              {/* Diagonal Ribbon - Top Right */}
              <div className="absolute top-0 right-0 z-20">
                <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-8 py-1 shadow-lg transform rotate-45 translate-x-6 translate-y-2">
                  <span className="text-xs font-bold tracking-wider">מבצע!</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between p-4">
                {/* Center Content */}
                <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto px-2">
                  <div className="text-sm md:text-base lg:text-lg font-extrabold mb-1 text-white drop-shadow-2xl text-center leading-tight">
                    {promotion.title}
                  </div>
                  {promotion.description && (
                    <div className="text-[14px] md:text-md lg:text-md text-yellow-300 font-bold text-center drop-shadow-md mb-1 whitespace-pre-line leading-tight">
                      {promotion.description}
                    </div>
                  )}
                  {/* {promotion.salePrice && (
                    <div className="text-base md:text-lg lg:text-xl font-bold text-yellow-300 text-center drop-shadow-lg">
                      {promotion.salePrice} ₪
                    </div>
                  )} */}
                </div>
                
                {/* Bottom Badge */}
                {/* <div className="flex justify-center">
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    🔥 חם חם חם
                  </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Promotion Images */}
        <div className="flex flex-col items-center gap-8 mb-12">
          <img
            src={mivtsaNisan}
            alt="מבצע ניסן"
            className="promo-img rounded-2xl shadow-2xl w-full max-w-3xl"
          />
          <div className="relative promo-img rounded-2xl shadow-2xl overflow-hidden">
            <img
              src={kiseRahamim}
              alt="כיסא רחמים קידוש"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center leading-snug drop-shadow-lg">
                חזר למלאי המיץ ענבים לקידוש הכי טעים שיש של ישיבת כסא רחמים
              </p>
            </div>
          </div>
          <div className="mt-6 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white px-6 py-5 rounded-2xl shadow-xl text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug drop-shadow-md">
              🔥 הגיעה כמות מצומצמת של מעיים ומוח בכשרות מהודרת !!! 🔥
            </p>
          </div>
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
        {/* <div className="bg-white p-8 rounded-lg shadow-md">
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
              <button type="submit" className="btn-primary whitespace-nowrap">
                הרשמה למבצעים
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default PromotionsPage;