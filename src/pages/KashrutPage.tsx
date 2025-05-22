import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';
import KashrutBadge from '../components/KashrutBadge';
import { Check, ArrowRight, Shield } from 'lucide-react';
import articles from '../data/articles';

const KashrutPage: React.FC = () => {
  const { t } = useTranslation();
  
  const kashrutArticles = articles.filter(article => article.category === 'כשרות');
  
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
        
        {/* Kashrut Levels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Badatz */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary p-6 text-white">
              <div className="flex items-center mb-4">
                <KashrutBadge type="badatz" size="md" />
                <h2 className="text-2xl font-bold mr-4">{t('kashrut.badatz.title')}</h2>
              </div>
              <p>{t('kashrut.badatz.content')}</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">דרישות מחמירות</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={20} className="text-primary mt-1 ml-2 shrink-0" />
                  <span>שחיטה על ידי שוחטים יראי שמיים מובהקים</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-primary mt-1 ml-2 shrink-0" />
                  <span>בדיקות מחמירות של כלי הדם והריאות</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-primary mt-1 ml-2 shrink-0" />
                  <span>ניקור מחמיר במיוחד של כל החלקים האסורים</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-primary mt-1 ml-2 shrink-0" />
                  <span>השגחה מלאה 24/7 בכל שלבי הייצור</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-primary mt-1 ml-2 shrink-0" />
                  <span>הקפדה על כלים נפרדים וטהרה בתהליך</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Yore Dea */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-tertiary p-6 text-white">
              <div className="flex items-center mb-4">
                <KashrutBadge type="yoreDea" size="md" />
                <h2 className="text-2xl font-bold mr-4">{t('kashrut.yoreDea.title')}</h2>
              </div>
              <p>{t('kashrut.yoreDea.content')}</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">יסודות הכשרות</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={20} className="text-tertiary mt-1 ml-2 shrink-0" />
                  <span>הקפדה על כל סעיפי השולחן ערוך הנוגעים לשחיטה</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-tertiary mt-1 ml-2 shrink-0" />
                  <span>בדיקות מקיפות לפי כל הסימנים המובאים ביורה דעה</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-tertiary mt-1 ml-2 shrink-0" />
                  <span>ניקור מלא של כל החלקים האסורים</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-tertiary mt-1 ml-2 shrink-0" />
                  <span>הקפדה מיוחדת על הלכות מליחה והכשרת הבשר</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-tertiary mt-1 ml-2 shrink-0" />
                  <span>פיקוח רבני על כל התהליך</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Kashrut Process */}
        <div className="mb-16">
          <SectionTitle 
            title={t('kashrut.process.title')}
            center
          />
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="relative">
              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Step 1 */}
                <div className="text-center relative z-10">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-bold mb-2">שחיטה</h3>
                  <p className="text-sm">{t('kashrut.process.steps.step1')}</p>
                </div>
                
                {/* Step 2 */}
                <div className="text-center relative z-10">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-bold mb-2">בדיקה</h3>
                  <p className="text-sm">{t('kashrut.process.steps.step2')}</p>
                </div>
                
                {/* Step 3 */}
                <div className="text-center relative z-10">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-bold mb-2">ניקור</h3>
                  <p className="text-sm">{t('kashrut.process.steps.step3')}</p>
                </div>
                
                {/* Step 4 */}
                <div className="text-center relative z-10">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-bold mb-2">הכשרה</h3>
                  <p className="text-sm">{t('kashrut.process.steps.step4')}</p>
                </div>
                
                {/* Step 5 */}
                <div className="text-center relative z-10">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    5
                  </div>
                  <h3 className="font-bold mb-2">השגחה</h3>
                  <p className="text-sm">{t('kashrut.process.steps.step5')}</p>
                </div>
              </div>
              
              {/* Connecting Line - visible only on md+ screens */}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-primary/20 z-0"></div>
            </div>
          </div>
        </div>
        
        {/* Supervision */}
        <div className="mb-16">
          <SectionTitle 
            title={t('kashrut.supervision.title')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg mb-6">{t('kashrut.supervision.content')}</p>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <Shield size={24} className="text-primary mt-1 ml-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">התחייבות שלנו לכשרות</h3>
                    <p>אנו מתחייבים לספק רק בשר בכשרות מהודרת, תחת פיקוח צמוד ובהתאם לכל כללי ההלכה.</p>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-8 space-x-reverse mt-6">
                  <KashrutBadge type="badatz" />
                  <KashrutBadge type="yoreDea" />
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/6210812/pexels-photo-6210812.jpeg" 
                alt="השגחת כשרות" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        {kashrutArticles.length > 0 && (
          <div>
            <SectionTitle 
              title="מאמרים בנושא כשרות"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {kashrutArticles.map(article => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={article.imageSrc} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                      />
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
        )}
      </div>
    </div>
  );
};

export default KashrutPage;