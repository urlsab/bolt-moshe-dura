import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';

const TermsOfServicePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title={`תנאי שימוש - ${t('common.siteTitle')}`}
        description="תנאי שימוש באתר אטליז למהדרין"
      />

      <div className="container-custom max-w-4xl">
        <SectionTitle 
          title="תנאי שימוש"
          center
        />

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. כללי</h2>
            <p className="text-dark/80 leading-relaxed">
              ברוכים הבאים לאתר אטליז למהדרין. השימוש באתר זה כפוף לתנאי השימוש המפורטים להלן. 
              גלישה באתר ו/או שימוש בשירותיו מהווים הסכמה מצדך לתנאים אלה. אם אינך מסכים לתנאים, 
              אנא הימנע משימוש באתר.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. שירותי האתר</h2>
            <p className="text-dark/80 leading-relaxed mb-3">
              אתר אטליז למהדרין מספק מידע על מוצרי בשר כשר למהדרין, כולל:
            </p>
            <ul className="list-disc list-inside text-dark/80 space-y-2 mr-4">
              <li>פרטים על מוצרים ומחירים</li>
              <li>מידע על כשרות ומפקחים</li>
              <li>מתכונים והמלצות</li>
              <li>מבצעים והנחות</li>
              <li>פרטי יצירת קשר והזמנות</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. כשרות</h2>
            <p className="text-dark/80 leading-relaxed">
              כל המידע על כשרות המוצרים המוצג באתר הוא למטרות מידע בלבד. הכשרות בפועל תלויה 
              בתעודות הכשרות המעודכנות במועד הרכישה. אנו ממליצים לוודא את פרטי הכשרות 
              ישירות עם המשגיח או הרב המקומי שלך. אטליז למהדרין אינה אחראית לשינויים 
              בסטטוס הכשרות שאינם מעודכנים באתר.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. מחירים ומלאי</h2>
            <p className="text-dark/80 leading-relaxed">
              המחירים המוצגים באתר הם למידע בלבד ועשויים להשתנות ללא הודעה מוקדמת. 
              המחירים הסופיים ייקבעו בעת ביצוע ההזמנה בפועל. זמינות המוצרים עשויה להשתנות 
              והינה בכפוף למלאי קיים. אנו שומרים לעצמנו את הזכות להגביל כמויות ולסרב למכירה.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. הזמנות ומשלוחים</h2>
            <p className="text-dark/80 leading-relaxed">
              הזמנות מתבצעות באמצעות יצירת קשר טלפוני או דרך וואטסאפ. תנאי המשלוח, 
              זמני האספקה והעלויות ייקבעו בהתאם לאזור המגורים. אנו עושים כמיטב יכולתנו 
              לעמוד בזמני האספקה המוסכמים, אך איננו אחראים לעיכובים שאינם בשליטתנו.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. זכויות יוצרים וקניין רוחני</h2>
            <p className="text-dark/80 leading-relaxed">
              כל התכנים באתר, לרבות טקסטים, תמונות, לוגו, עיצוב גרפי ומתכונים, הם 
              רכושה הבלעדי של אטליז למהדרין או בעלי הזכויות המתאימים. אין לעשות שימוש 
              בתכנים אלה ללא אישור בכתב מראש.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. הגבלת אחריות</h2>
            <p className="text-dark/80 leading-relaxed">
              השימוש באתר הינו באחריותך הבלעדית. האתר מסופק "כמות שהוא" ללא אחריות 
              מכל סוג. אטליז למהדרין לא תהיה אחראית לכל נזק ישיר, עקיף, מקרי או תוצאתי 
              הנובע משימוש או אי-יכולת להשתמש באתר.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. קישורים לאתרים חיצוניים</h2>
            <p className="text-dark/80 leading-relaxed">
              האתר עשוי לכלול קישורים לאתרים חיצוניים. אנו אינם אחראים לתכנים, 
              למדיניות הפרטיות או לפעילות של אתרים אלה. שימוש באתרים חיצוניים הינו 
              באחריותך הבלעדית.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. שינויים בתנאי השימוש</h2>
            <p className="text-dark/80 leading-relaxed">
              אנו שומרים לעצמנו את הזכות לעדכן את תנאי השימוש מעת לעת. שינויים יכנסו 
              לתוקף מיד עם פרסומם באתר. המשך השימוש באתר לאחר פרסום השינויים מהווה 
              הסכמה לתנאים המעודכנים.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. יצירת קשר</h2>
            <p className="text-dark/80 leading-relaxed mb-3">
              לשאלות או הבהרות בנוגע לתנאי השימוש, ניתן ליצור קשר:
            </p>
            <ul className="list-none text-dark/80 space-y-2 mr-4">
              <li>📞 טלפון: 050-4257000</li>
              <li>📧 דוא"ל: M4257000@gmail.com</li>
              <li>📍 כתובת: צרעה 3, תל אביב</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">11. דין וסמכות שיפוט</h2>
            <p className="text-dark/80 leading-relaxed">
              תנאי שימוש אלה יפורשו ויוסדרו על פי דיני מדינת ישראל. סמכות השיפוט 
              הבלעדית בכל עניין הנובע מתנאי שימוש אלה תהיה לבתי המשפט המוסמכים בתל אביב.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-dark/60 text-center">
              תנאי שימוש אלה עודכנו לאחרונה ביום: {new Date().toLocaleDateString('he-IL')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
