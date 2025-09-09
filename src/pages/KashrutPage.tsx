import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';
// import { ArrowRight } from 'lucide-react';
// import articles from '../data/articles';
// import { motion } from 'framer-motion';


const KashrutPage: React.FC = () => {
  const { t } = useTranslation();
  
  //const kashrutArticles = articles.filter(article => article.category === 'כשרות');
  
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title={`${t('kashrut.title')} - ${t('common.siteTitle')}`}
        description={t('kashrut.subtitle')}
      />
      
      <div className="container-custom">
        <SectionTitle 
          title={t('kashrut.title')}
          subtitle={t('kashrut.subtitle')}
          center
        />

        <div className="flex flex-wrap justify-center items-center gap-6 mt-20 mb-5 text-center">
          {[
            {  alt: 'בד״ץ העדה החרדית' },
            {  alt: 'בית יוסף' },
            {  alt: 'הרב מחפוד' },
            {  alt: 'בד״ץ נווה ציון' },
            {  alt: 'בד״ץ בני ציון' },
            {  alt: 'הרב לנדא' },
            {  alt: 'הרב רובין' },
            {  alt: 'אנש' },
          ].map((img, idx) => (
            <div
              key={img.alt}
              className="flex items-center justify-center bg-white rounded-lg"
              style={{
                width: 'clamp(110px, 22vw, 220px)',
                height: 'clamp(60px, 8vw, 80px)',
                maxWidth: idx === 4 ? 260 : idx === 5 ? 300 : idx === 6 ? 235 : idx === 7 ? 335 : 200,
                minWidth: 110,
                minHeight: 60,
                backgroundColor: 'white',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#1e40af',
                letterSpacing: '0.5px',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
                textAlign: 'center',
                flexWrap: 'wrap',
              }}
            >
              {img.alt}
            </div>
          ))}
        </div>
        
        {/* Related Articles */}
        {/* {kashrutArticles.length > 0 && (
          <div style={{ marginTop: '80px' }}>
            <SectionTitle 
              title="מאמרים בנושא כשרות"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {kashrutArticles.map(article => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div 
                        className="flex items-center justify-center bg-white rounded-lg"
                        style={{
                          width: '100%',
                          height: '80px',
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          fontWeight: 700,
                          fontSize: '1.1rem',
                          color: '#1e40af',
                          letterSpacing: '0.5px',
                          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {article.title}
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                      <p className="text-dark/70 mb-4">{article.shortDescription}</p>
                      <Link 
                        to={`/articles/${article.id}`} 
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <span>{t('common.buttons.readMore')}</span>
                        <ArrowRight size={16} className="mr-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default KashrutPage;