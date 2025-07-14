import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0 py-4" dir="rtl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row-reverse items-center w-full text-right gap-1 justify-end"
        style={{padding: 0}}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-primary shrink-0" />
        </motion.div>
        <h3 className="font-bold text-lg mr-1 mb-0 text-right w-fit">{question}</h3>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-3 pb-1 text-right" dir="rtl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      question: "כיצד ניתן להגיע אליכם?",
      answer: "כתובתינו - רחוב צרעה 3 ת''א. בוויז ניתן לרשום כתובת זו או איטליז למהדרין"
    },
    {
      question: "האם יש לכם מבצעים?",
      answer: "בהחלט! מידי שבוע אנו מעדכנים מבצעים באתר. ניתן להירשם לניוזלטר שלנו באתר לקבלת עדכונים על מבצעים ישירות למייל."
    },
    {
      question: "מה רמת הכשרות של מוצרי הבשר והדגים שלכם?",
      answer: "כל מוצרי הבשר והדגים שלנו כשרים למהדרין בלבד -ביניהם: בד''ץ בית יוסף, בד''ץ העדה החרדית, הרב רובין, הרב לנדא, תפארת אנ''ש של חב''ד, הרב מחפוד ועוד."
    },
    {
      question: "אילו רבנים ממליצים עליכם?",
      answer: " הרב אברהם יוסף, ראש בית המדרש אהלי אברהם - הרב משה חזקיהו, ראש מוסדות יביע אומר וארגון ענפים - הרב יגאל כהן, ראש מוסדות וקרבנו לעבודתך - הרב רפאל זר ועוד. ניתן לראות באתר סרטונים של רבנים אלו ועוד הממליצים עלינו."
    },
    {
      question: "האם אתם עושים משלוחים?",
      answer: "בוודאי! אנו עושים משלוחים לכל גוש דן. למשלוח - חייגו 03-6312008. "
    },
    {
      question: "האם יש אפשרות להכנת מנות מיוחדות?",
      answer: "כן, אנחנו מתמחים בהכנת מנות מיוחדות לפי דרישה. ניתן להזמין נתחים מיוחדים, בשר קצוץ בהתאמה אישית, או מנות מוכנות לאירועים."
    },
    {
      question: "מה שעות הפתיחה שלכם?",
      answer: "למעט ימי שבת וראשון שאנו סגורים, אנו פתוחים משעות הבוקר עד שעות הערב.  את הפירוט המלא של השעות ניתן למצוא כאן באתר."
    },
    {
      question: "האם אתם פתוחים בערבי חג?",
      answer: "בערבי חג אנחנו פתוחים בשעות מיוחדות. מומלץ להתקשר מראש לבירור השעות המדויקות ולהזמין את המוצרים מבעוד מועד."
    }
  ];
  
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
                    <div className="flex flex-row gap-2 items-center flex-wrap">
                      <a
                        href="tel:+97236312008"
                        className="text-primary underline hover:text-secondary text-base text-left"
                        style={{ direction: 'ltr' }}
                      >
                        03-6312008
                      </a>
                      <span className="mx-1">|</span>
                      <a
                        href="https://api.whatsapp.com/send?phone=0504257000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:text-secondary text-base text-left"
                        style={{ direction: 'ltr' }}
                      >
                        050-4257000
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-primary mt-1 ml-4 shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">דוא״ל</h3>
                    <a
                      href="mailto:M4257000@gmail.com"
                      className="text-primary underline hover:text-secondary text-base text-left"
                    >
                      M4257000@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-primary mt-1 ml-4 shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">{t('contact.info.hours.title')}</h3>
                    <p>{t('contact.info.hours.weekdays')}</p>
                    <p>{t('contact.info.hours.friday')}</p>
                    {/* <p>{t('contact.info.hours.saturday')}</p> */}
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.8139450919143!2d34.8118581257419!3d32.0472271209259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b1986764251%3A0x13e3285c8a8bf6ef!2z15DXmNec15nXliDXnNee15TXk9eo15nXnw!5e0!3m2!1siw!2sil!4v1751791838338!5m2!1siw!2sil"
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
          <h2 className="text-2xl font-bold mb-8 text-center">שאלות נפוצות</h2>
          
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;