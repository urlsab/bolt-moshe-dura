import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import moshelogo from '../Assets/moshelogo.png';

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
            <ul className="space-y-2">
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
                <span className="text-light/80">{t('common.footer.address')}</span>
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
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-light/60 text-sm">
          <p>© {currentYear} {t('common.siteTitle')} - {t('common.footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;