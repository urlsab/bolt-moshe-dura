import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title={`מדיניות פרטיות - ${t('common.siteTitle')}`}
        description="מדיניות פרטיות של אתר אטליז למהדרין"
      />

      <div className="container-custom max-w-4xl">
        <SectionTitle 
          title="מדיניות פרטיות"
          center
        />

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. כללי</h2>
            <p className="text-dark/80 leading-relaxed">
              אטליז למהדרין ("החברה", "אנו", "שלנו") מכבדת את פרטיותך ומחויבת להגן על 
              המידע האישי שלך. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, 
              משתפים ומגינים על המידע האישי שלך בעת שימוש באתר שלנו.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. איסוף מידע</h2>
            <p className="text-dark/80 leading-relaxed mb-3">
              אנו עשויים לאסוף את סוגי המידע הבאים:
            </p>
            <ul className="list-disc list-inside text-dark/80 space-y-2 mr-4">
              <li><strong>מידע אישי:</strong> שם, מספר טלפון, כתובת דוא"ל, כתובת למשלוח</li>
              <li><strong>מידע הזמנות:</strong> פרטי מוצרים שהוזמנו, העדפות, היסטוריית רכישות</li>
              <li><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה, דפי האתר שבוקרו</li>
              <li><strong>עוגיות (Cookies):</strong> מידע על התנהגות הגלישה שלך באתר</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. שימוש במידע</h2>
            <p className="text-dark/80 leading-relaxed mb-3">
              אנו משתמשים במידע שנאסף למטרות הבאות:
            </p>
            <ul className="list-disc list-inside text-dark/80 space-y-2 mr-4">
              <li>עיבוד ואספקת הזמנות</li>
              <li>שיפור שירותי האתר והחנות</li>
              <li>תקשורת עם לקוחות בנוגע להזמנות, מבצעים ועדכונים</li>
              <li>אבטחת האתר ומניעת הונאות</li>
              <li>ניתוח סטטיסטי לשיפור חווית המשתמש</li>
              <li>עמידה בדרישות חוקיות</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. שיתוף מידע</h2>
            <p className="text-dark/80 leading-relaxed mb-3">
              אנו לא נמכור או נשכיר את המידע האישי שלך לצדדים שלישיים. עם זאת, 
              אנו עשויים לשתף מידע במקרים הבאים:
            </p>
            <ul className="list-disc list-inside text-dark/80 space-y-2 mr-4">
              <li><strong>ספקי שירות:</strong> חברות משלוחים, מעבדי תשלומים וספקי שירותים טכניים</li>
              <li><strong>דרישות חוק:</strong> כאשר נדרש על פי חוק או צו שיפוטי</li>
              <li><strong>הגנה על זכויותינו:</strong> כדי לאכוף את תנאי השימוש שלנו או להגן על זכויות החברה</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. אבטחת מידע</h2>
            <p className="text-dark/80 leading-relaxed">
              אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע האישי שלך מפני גישה לא 
              מורשית, שינוי, חשיפה או הרס. עם זאת, אף שיטת העברה באינטרנט או אחסון 
              אלקטרוני אינה מאובטחת ב-100%, ולכן איננו יכולים להבטיח אבטחה מוחלטת.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. עוגיות (Cookies)</h2>
            <p className="text-dark/80 leading-relaxed mb-3">
              אתר זה משתמש בעוגיות לשיפור חווית המשתמש. עוגיות הן קבצי טקסט קטנים 
              המאוחסנים במכשיר שלך. אנו משתמשים בעוגיות עבור:
            </p>
            <ul className="list-disc list-inside text-dark/80 space-y-2 mr-4">
              <li>שמירת העדפות שפה ותצוגה</li>
              <li>ניתוח דפוסי שימוש באתר</li>
              <li>זיהוי משתמשים חוזרים</li>
            </ul>
            <p className="text-dark/80 leading-relaxed mt-3">
              ניתן לנהל או למחוק עוגיות באמצעות הגדרות הדפדפן שלך. שים לב שחסימת 
              עוגיות עשויה להשפיע על פונקציונליות מסוימות באתר.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. זכויותיך</h2>
            <p className="text-dark/80 leading-relaxed mb-3">
              בהתאם לחוק הגנת הפרטיות, יש לך את הזכויות הבאות:
            </p>
            <ul className="list-disc list-inside text-dark/80 space-y-2 mr-4">
              <li>זכות לגשת למידע האישי שלך</li>
              <li>זכות לתקן מידע שגוי או לא מדויק</li>
              <li>זכות למחוק מידע (במקרים מסוימים)</li>
              <li>זכות להתנגד לעיבוד המידע שלך</li>
              <li>זכות למשוך הסכמה לשימוש במידע</li>
              <li>זכות להגיש תלונה לרשות להגנת הפרטיות</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. שימוש ילדים באתר</h2>
            <p className="text-dark/80 leading-relaxed">
              האתר אינו מיועד לשימוש ילדים מתחת לגיל 18. אנו לא אוספים במודע מידע 
              אישי מילדים. אם הינך הורה או אפוטרופוס וגילית שילדך סיפק לנו מידע אישי, 
              אנא צור איתנו קשר כדי שנוכל למחוק את המידע.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. קישורים לאתרים חיצוניים</h2>
            <p className="text-dark/80 leading-relaxed">
              האתר עשוי לכלול קישורים לאתרים חיצוניים. אנו אינם אחראים למדיניות 
              הפרטיות או התוכן של אתרים אלה. אנו ממליצים לקרוא את מדיניות הפרטיות 
              של כל אתר שאתה מבקר בו.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. שינויים במדיניות הפרטיות</h2>
            <p className="text-dark/80 leading-relaxed">
              אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים 
              מהותיים יפורסמו באתר עם תאריך העדכון החדש. המשך השימוש באתר לאחר 
              פרסום השינויים מהווה הסכמה למדיניות המעודכנת.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">11. יצירת קשר</h2>
            <p className="text-dark/80 leading-relaxed mb-3">
              לשאלות, בקשות או תלונות בנוגע למדיניות הפרטיות או לטיפול במידע האישי שלך, 
              ניתן ליצור קשר:
            </p>
            <ul className="list-none text-dark/80 space-y-2 mr-4">
              <li>📞 טלפון: 050-4257000</li>
              <li>📧 דוא"ל: M4257000@gmail.com</li>
              <li>📍 כתובת: צרעה 3, תל אביב</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">12. רשות להגנת הפרטיות</h2>
            <p className="text-dark/80 leading-relaxed">
              אם הינך סבור שפרטיותך נפגעה, ניתן להגיש תלונה לרשות להגנת הפרטיות:
            </p>
            <p className="text-dark/80 leading-relaxed mt-2">
              רשות הגנת הפרטיות<br />
              רח' קנפי 3, ירושלים 9546434<br />
              טלפון: 02-6515911<br />
              דוא"ל: privacy@justice.gov.il
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-dark/60 text-center">
              מדיניות פרטיות זו עודכנה לאחרונה ביום: {new Date().toLocaleDateString('he-IL')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
