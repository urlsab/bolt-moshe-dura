import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';
import promotions from '../data/promotions';
import { AlertTriangle } from 'lucide-react';
import mivtsaKislev from '../Assets/mivtsaKislev.mp4';
import basartahun from '../Assets/bakartahuntari.jpg';
import hazeOf from '../Assets/hazeof.jpg';
import kraaim from '../Assets/kraaayim.jpg';
import knafaim from '../Assets/kenafaim.jpg';
import ofTahun from '../Assets/oftachun.jpg';
import asado from '../Assets/asado.webp';
import antrikot from '../Assets/antrikotimetsem.jpg';
import antrikoti from '../Assets/antrikotleloetsem.jpg';
import golesh from '../Assets/garonhodu.jpg';
import amnon from '../Assets/amnonimor.jpg';
import meat from '../Assets/rotfilsh.jpg';
import kabab from '../Assets/kababbb.jpg';
import kavad from '../Assets/kaved.jpg';
import shawarma from '../Assets/shuarma.jpg';
import frozenYerek from '../Assets/frozenYerek.jpg';

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

  const kislevPromotions = [
    { title: 'בשר טחון', description: '3 ק"ג ב-160 ₪', image: basartahun },
    { title: 'חזה עוף', description: '3 ק"ג ב-160 ₪', image: hazeOf },
    { title: 'כרעיים עוף', description: '3 ק"ג ב-160 ₪', image: kraaim },
    { title: 'כנפיים עוף', description: '3 ק"ג ב-60 ₪', image: knafaim },
    { title: 'עוף טחון', description: '3 ק"ג ב-150 ₪', image: ofTahun },
    { title: 'אסאדו עם עצם', description: '2 ק"ג ב-130 ₪', image: asado },
    { title: 'אנטריקוט טרי עם עצם', description: 'ב-220 ₪ לק"ג', image: antrikot },
    { title: 'גולש עגל', description: '2 ק"ג ב-130 ₪', image: golesh },
    { title: 'אצבעות אנטריקוט', description: 'ב-75 ₪ לק"ג', image: antrikoti },
    { title: 'פילה אמנון', description: '3 ק"ג ב-70 ₪', image: amnon },
    { title: 'אצבעות ותוספות', description: 'טבעות בצל, כדורי פירה, כרובית מצופה, לביבות כרובית וברוקולי - 2 חבילות ב-65 ₪', image: frozenYerek },
    { title: 'קבב ביתי', description: 'קבב כבש, המבורגר, מרגז, קציצות הבית - 2 חבילות ב-130 ₪', image: kabab },
    { title: 'כבד צלוי', description: '2 חבילות ב-60 ₪', image: kavad },
    { title: 'שווארמה ביתית', description: 'פרגית \\ הודו \\ בקר - 2 חבילות ב-130 ₪', image: shawarma },
    { title: 'מוצרי חורף', description: 'גידים, רגל, עצמות מח, בשר ראש, קישקע - בכשרויות מהודרות', image: meat }
  ];
  
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

        {/* Kislev Section: Video + Promotions */}
        <div className="mb-12 flex flex-col lg:flex-row gap-6 items-start">
          {/* Video on the right (first in RTL) */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start px-4 lg:px-0">
            <div className="w-full max-w-[250px]">
              <video
                ref={videoRef}
                src={mivtsaKislev}
                playsInline
                controls
                className="rounded-xl shadow-2xl w-full h-auto object-contain"
                style={{ aspectRatio: '9/16' }}
              >
              </video>
            </div>
          </div>

          {/* Promotions Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {kislevPromotions.map((promo, index) => (
              <div
                key={index}
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                style={{ height: '206px' }}
              >
                {/* Background Image with Gradient Overlay */}
                {promo.image && (
                  <>
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ filter: 'brightness(45%)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </>
                )}
                
                {/* Diagonal Ribbon - Top Right */}
                <div className="absolute top-0 right-0 z-20">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black px-8 py-1 shadow-lg transform rotate-45 translate-x-6 translate-y-2">
                    <span className="text-xs font-bold tracking-wider">מבצע!</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-4">
                  {/* Center Content */}
                  <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto">
                    <div className="text-[clamp(1.3rem,2.6vw,1.2rem)] md:text-sm lg:text-base font-extrabold mb-1 text-white drop-shadow-2xl text-center leading-tight">
                      {promo.title}
                    </div>
                    <div className="text-[clamp(0.9rem,2.2vw,0.75rem)] md:text-xs lg:text-sm text-yellow-300 font-semibold text-center drop-shadow-md">
                      {promo.description}
                    </div>
                  </div>
                  
                  {/* Bottom Badge */}
                  <div className="flex justify-center">
                    <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      🔥 חם חם חם
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t-2 border-gray-300 my-12"></div>
        
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
                    <div className="text-[14px] md:text-md lg:text-md text-yellow-300 font-medium text-center drop-shadow-md mb-1 whitespace-pre-line leading-tight">
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