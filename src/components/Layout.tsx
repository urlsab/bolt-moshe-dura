import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title={t('common.siteTitle')}
        description={t('common.tagline')}
        keywords={t('seo.keywords')}
      />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;