import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('common.nav.home'), path: '/' },
    { name: t('common.nav.products'), path: '/products' },
    { name: t('common.nav.kashrut'), path: '/kashrut' },
    { name: t('common.nav.recipes'), path: '/recipes' },
    { name: t('common.nav.promotions'), path: '/promotions' },
    { name: t('common.nav.contact'), path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className={`h-12 w-auto ${isScrolled ? 'text-primary' : 'text-primary'}`} />
          <div className="mr-3">
            <h1 className={`text-xl font-frank font-bold ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              {t('common.siteTitle')}
            </h1>
            <p className={`text-xs ${isScrolled ? 'text-dark/70' : 'text-dark/70'}`}>
              {t('common.tagline')}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 mx-1 rounded-md transition-colors font-medium ${
                location.pathname === link.path 
                  ? 'text-primary border-b-2 border-primary' 
                  : `${isScrolled ? 'text-dark hover:text-primary' : 'text-dark hover:text-primary'}`
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="container-custom py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 border-b border-gray-200 ${
                  location.pathname === link.path 
                    ? 'text-primary font-medium' 
                    : 'text-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;