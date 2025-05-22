import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title={`${t('contact.title')} - ${t('common.siteTitle')}`}
        description={t('contact.subtitle')}
      />
      
      <div className="container-custom">
        <SectionTitle 
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6 text-primary">פרטי התקשרות</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-primary mt-1 ml-4 shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">כתובת</h3>
                    <p>{t('contact.info.address')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-primary mt-1 ml-4 shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">טלפון</h3>
                    <p dir="ltr" className="text-left">{t('contact.info.phone')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-primary mt-1 ml-4 shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">דוא״ל</h3>
                    <p dir="ltr" className="text-left">{t('contact.info.email')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-primary mt-1 ml-4 shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">{t('contact.info.hours.title')}</h3>
                    <p>{t('contact.info.hours.weekdays')}</p>
                    <p>{t('contact.info.hours.friday')}</p>
                    <p>{t('contact.info.hours.saturday')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">הזמנות מיוחדות</h3>
              <p className="mb-4">מעוניינים בהזמנה מיוחדת לאירוע או חג? אנחנו כאן בשבילכם!</p>
              <p>ניתן ליצור איתנו קשר טלפוני או באמצעות טופס הפנייה לתיאום הזמנות מיוחדות, כמויות גדולות ומוצרים מותאמים אישית.</p>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-md h-96 mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.9273848764925!2d35.212227!3d31.778539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xfd04760a8f1288c5!2sHerzl%20St%20123%2C%20Jerusalem%2C%20Israel!5e0!3m2!1sen!2sus!4v1654287936721!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="מפת האיטליז"
          ></iframe>
        </div>
        
        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">שאלות נפוצות</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">האם יש משלוחים?</h3>
              <p>כן, אנו מציעים שירות משלוחים באזור ירושלים והסביבה. משלוח חינם בהזמנה מעל 300 ₪.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">מה רמת הכשרות שלכם?</h3>
              <p>כל המוצרים שלנו כשרים למהדרין בהשגחת בד״ץ העדה החרדית ויורה דעה. ניתן לראות את תעודות הכשרות בחנות.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">האם ניתן להזמין מראש?</h3>
              <p>בהחלט! מומלץ להזמין מראש, במיוחד לקראת שבתות וחגים. ניתן להזמין טלפונית או דרך טופס יצירת הקשר.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">האם ניתן לשלם בכרטיס אשראי?</h3>
              <p>כן, אנו מקבלים את כל סוגי כרטיסי האשראי, מזומן, והעברות בנקאיות.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;