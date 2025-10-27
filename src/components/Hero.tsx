import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import seakangos from '../Assets/seakangos.jpg';
// import tadmitatliz from '../Assets/tadmitatliz.mp4';

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
  imageSrc = `${seakangos}`,
  buttonText,
  buttonLink = '/products'
}) => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  // Use provided props or fallback to translations
  const heroTitle = title || t('home.hero.title');
  const heroSubtitle = subtitle || t('home.hero.subtitle');
  const heroButtonText = buttonText || t('common.buttons.viewProducts');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let observer: IntersectionObserver | null = null;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Play if visible
          video.play();
        } else {
          // Pause if not visible
          video.pause();
        }
      });
    };

    observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.5 // At least 50% visible
    });
    observer.observe(video);

    return () => {
      if (observer && video) observer.unobserve(video);
    };
  }, []);

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden mt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      {/* Content: Video + Text side by side */}
      <div className="container-custom relative flex flex-col md:flex-row items-center justify-between z-10 h-full">

      {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start max-w-2xl animate-slideRight p-4 md:p-8">
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

          {/* SEO Keywords - Hidden */}
          <div className="text-light/40 mt-2" aria-hidden="true" style={{fontSize:'2.1px', overflow:'hidden', opacity:'0', lineHeight:'1px'}}>
            <span>אטליז בהכשר הרב מחפוד, אטליז בכפר שלם, אטליז כשר בגוש דן, אטליז כשר למהדרין תל אביב, אטליז כשר תל אביב, אטליז למהדרין בד"ץ, אטליז למהדרין גוש דן, אטליז למהדרין כפר שלם, אטליז למהדרין צרעה, אטליז רמת גן, איטליז מחפוד גוש דן, איטליז עטרה, בשר בגוש דן, בשר בד"ץ, בשר בד"ץ בגוש דן, בשר בד"ץ בכפר שלם, בשר בית יוסף, בשר הזמנות, בשר הרב מוצפי, בשר הרב מחפוד, בשר טחון תל אביב, בשר טרי מחפוד, בשר לאירועים גוש דן, בשר למסעדות בד"ץ, הרב מחפוד כפר שלם, חנויות בשר בתל אביב, חנות בשר בגוש דן, חנות בשר בית יוסף בתל אביב, חנות בשר הרב מחפוד בכפר שלם, חנות בשר הרב מחפוד בתל אביב, חנות בשר טרי, חנות בשר כשרה למהדרין בכפר שלם, חנות בשר כשרה למהדרין בתל אביב, חנות בשר צרעה, כרעיים עוף בגוש דן, כרעיים עוף טרי, כרעיים עוף טרי גוש דן, סטייק בגוש דן, עוף הרב מוצפי, עוף והודו בכפר שלם, עוף טרי בד"ץ, עוף כשר, עוף למהדרין, עופות ובשר, שניצל פרוס גוש דן, אטליז למהדרין, חנות בשר בית יוסף בכפר שלם, כבש בהשגחת בית יוסף, כבש הרב מחפוד, עוף טרי שלם כפר שלם, אסאדו גוש דן, אנגוס בכפר שלם, בשר לפסח כפר שלם, צלעות עגל טרי גוש דן, צוואר כבש כפר שלם, בשר טרי למהדרין, קבב ביתי למהדרין, חלקי בשר אחורי למהדרין, חנות הבשר של הרב יגאל כהן</span>
          </div>
          
        </div>

        {/* Video Section */}
        {/* <div className="w-full md:w-1/2 flex justify-center items-center h-1/2 md:h-full p-4 md:p-8">
          <video
            ref={videoRef}
            src={tadmitatliz}
            loop
            playsInline
            controls
            className="rounded-xl shadow-2xl w-full h-full object-cover max-h-[320px] md:max-h-[420px] lg:max-h-[480px] bg-black"
            style={{background: '#222'}}
          >
            Your browser does not support the video tag.
          </video>
        </div> */}
        
      </div>
    </div>
  );
};

export default Hero;