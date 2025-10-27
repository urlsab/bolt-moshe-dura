import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import moshelogo from '../Assets/moshelogo.png';
import { FaWhatsapp } from "react-icons/fa";
// import { FaWaze } from "react-icons/fa";
import wazelogo from '../Assets/wazelogo.jpg';
import catappLogo from '../Assets/catapp-logo.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              {/* <Logo className="h-12 w-auto text-secondary" /> */}
              <img src={moshelogo} alt="משה דורה לוגו" style={{height:"90px",width:"125px",borderRadius:"50%",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",background:"white",objectFit:"cover"}} />
              <div className="mr-3">
                <h3 className="text-xl font-frank font-bold text-white">
                  {t('common.siteTitle')}
                </h3>
                <p className="text-xs text-light/70">
                  {t('common.tagline')}
                </p>
              </div>
            </div>
            <p className="text-light/80 mb-4">
              {t('home.about.content').substring(0, 230)}
            </p>
            {/* <Link to="/contact" className="text-secondary hover:underline">
              {t('common.buttons.contactUs')}
            </Link> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-r-4 border-secondary pr-3">
              ניווט מהיר
            </h3>
            <ul className="space-y-2 grid grid-cols-2">
              <li>
                <Link to="/" className="text-light/80 hover:text-secondary transition-colors">
                  {t('common.nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/rabbis" className="text-light/80 hover:text-secondary transition-colors">
                  {t('common.nav.rabbis')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-light/80 hover:text-secondary transition-colors">
                  {t('common.nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/kashrut" className="text-light/80 hover:text-secondary transition-colors">
                  {t('common.nav.kashrut')}
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-light/80 hover:text-secondary transition-colors">
                  {t('common.nav.recipes')}
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="text-light/80 hover:text-secondary transition-colors">
                  {t('common.nav.promotions')}
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-light/80 hover:text-secondary transition-colors">
                  {t('common.nav.videos')}
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-light/80 hover:text-secondary transition-colors">
                  {t('common.nav.testimonials')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light/80 hover:text-secondary transition-colors">
                  {t('common.nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-r-4 border-secondary pr-3">
              צור קשר
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="text-secondary ml-2" />
                <a
                  href="https://waze.com/ul?q=צרעה+3+תל+אביב&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light/80 hover:text-secondary transition-colors underline"
                >
                  {t('common.footer.address')}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-secondary ml-2" />
                <a
                  href="tel:+97236312008"
                  className="text-light/80 hover:text-secondary transition-colors underline mr-2"
                  style={{ direction: 'ltr' }}
                >
                  03-6312008
                </a>
                <span className="mx-1">|</span>
                <a
                  href="https://api.whatsapp.com/send?phone=+972504257000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light/80 hover:text-secondary transition-colors underline"
                  style={{ direction: 'ltr' }}
                >
                  050-4257000
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-secondary ml-2" />
                <a
                  href="mailto:M4257000@gmail.com"
                  className="text-light/80 hover:text-secondary transition-colors underline"
                >
                  M4257000@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="text-secondary ml-2" />
                <span className="text-light/80">
                  {/* <span className="font-bold">שעות פתיחה:</span> */}
                  <ul className="list-none p-0 m-0">
                    {(t('common.footer.hours', { returnObjects: true }) as string[]).map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Kashrut Disclaimer */}
        <div className="bg-primary/20 p-4 rounded-md mb-8">
          <h4 className="font-bold text-white mb-2">{t('common.footer.kashrutDisclaimerTitle')}</h4>
          <p className="text-light/90">{t('common.footer.kashrutDisclaimer')}</p>
          
          {/* SEO Keywords - Hidden */}
          <div className="text-light/40 mt-2" aria-hidden="true" style={{fontSize:'2.1px', overflow:'hidden', opacity:'0', lineHeight:'1px'}}>
            <span>אטליז בהכשר הרב מחפוד, אטליז בכפר שלם, אטליז כשר בגוש דן, אטליז כשר למהדרין תל אביב, אטליז כשר תל אביב, אטליז למהדרין בד"ץ, אטליז למהדרין גוש דן, אטליז למהדרין כפר שלם, אטליז למהדרין צרעה, אטליז רמת גן, איטליז מחפוד גוש דן, איטליז עטרה, בשר בגוש דן, בשר בד"ץ, בשר בד"ץ בגוש דן, בשר בד"ץ בכפר שלם, בשר בית יוסף, בשר הזמנות, בשר הרב מוצפי, בשר הרב מחפוד, בשר טחון תל אביב, בשר טרי מחפוד, בשר לאירועים גוש דן, בשר למסעדות בד"ץ, הרב מחפוד כפר שלם, חנויות בשר בתל אביב, חנות בשר בגוש דן, חנות בשר בית יוסף בתל אביב, חנות בשר הרב מחפוד בכפר שלם, חנות בשר הרב מחפוד בתל אביב, חנות בשר טרי, חנות בשר כשרה למהדרין בכפר שלם, חנות בשר כשרה למהדרין בתל אביב, חנות בשר צרעה, כרעיים עוף בגוש דן, כרעיים עוף טרי, כרעיים עוף טרי גוש דן, סטייק בגוש דן, עוף הרב מוצפי, עוף והודו בכפר שלם, עוף טרי בד"ץ, עוף כשר, עוף למהדרין, עופות ובשר, שניצל פרוס גוש דן, אטליז למהדרין, חנות בשר בית יוסף בכפר שלם, כבש בהשגחת בית יוסף, כבש הרב מחפוד, עוף טרי שלם כפר שלם, אסאדו גוש דן, אנגוס בכפר שלם, בשר לפסח כפר שלם, צלעות עגל טרי גוש דן, צוואר כבש כפר שלם, בשר טרי למהדרין, קבב ביתי למהדרין, חלקי בשר אחורי למהדרין, חנות הבשר של הרב יגאל כהן</span>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-gray-700 pt-6">
          {/* First Row: Copyright, Terms, Privacy */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-4 text-sm text-light/60">
            <span>{currentYear}</span>
            <span className="text-light/50">|</span>
            <span>{t('common.siteTitle')}</span>
            <span className="text-light/50">|</span>
            <span>{t('common.footer.rights')} ©</span>
            <span className="text-light/50">|</span>
            <Link 
              to="/terms-of-service" 
              className="text-light/70 hover:text-secondary transition-colors underline"
            >
              תנאי שימוש
            </Link>
            <span className="text-light/50">|</span>
            <Link 
              to="/privacy-policy" 
              className="text-light/70 hover:text-secondary transition-colors underline"
            >
              מדיניות פרטיות
            </Link>
          </div>

          {/* Second Row: Developer Credit */}
          <div className="flex justify-center items-center gap-3 md:gap-4 text-sm">
            <span className="text-light/70">נבנה ע"י</span>
            <a
              href="https://api.whatsapp.com/send?phone=+972556611594"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-110 transition-transform"
            >
              <img 
                src={catappLogo} 
                alt="CatApp Logo" 
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=+972504257000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="צ'אט בוואטסאפ"
        style={{
          position: 'fixed',
          bottom: 65,
          left: 10,
          zIndex: 1000,
          transition: 'transform 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <FaWhatsapp style={{
          height: 'clamp(32px, 7vw, 44px)',
          width: 'clamp(32px, 7vw, 44px)',
          color: 'white',
          backgroundColor: 'green',
          borderRadius: '50% 50% 50% 40%',
          border:'3px solid green'
        }} />
      </a>
      <a
        href="https://waze.com/ul?q=צרעה+3+תל+אביב&navigate=yes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ניווט בוויז"
        style={{
          position: 'fixed',
          bottom: 10,
          left: 10,
          zIndex: 1000,
          transition: 'transform 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >

        {/* backgroundColor: 'white',
          borderColor:'RGB(5, 200, 247)',
          borderRadius: '40% 40% 40% 40%',
          border:'6px solid RGB(5, 200, 247)' */}
        <img 
          src={wazelogo} alt="Waze Icon" style={{
          height: 'clamp(32px, 7vw, 44px)',
          width: 'clamp(32px, 7vw, 44px)',
          color: 'black',
          backgroundColor: 'white',
          borderColor:'RGB(5, 200, 247)',
          borderRadius: '50%',
          border:'2px solid RGB(5, 200, 247)'
        }} />
      </a>
    </footer>
  );
};

export default Footer;