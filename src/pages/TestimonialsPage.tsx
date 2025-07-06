import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'הרב יגאל כהן',
    text: 'הבשר שם הוא בשר מהודר ואיכותי! כדאי לכם לעשות את כל הקניות של הבשר שלכם רק אצלו! אני בעצמי קונה רק אצלו! אני סומך על יראת השמים שלו',
    location: '',
    stars: 5,
  },
  {
    name: 'סופי, אור יהודה',
    text: 'חווית הקניה אצל משה כיפית, מקבלים שירות מכל הלב. הכל נקי טרי ואיכותי!',
    location: '',
    stars: 5,
  },
  {
    name: 'אלמליח כהן, בני ברק',
    text: 'לל',
    location: '',
    stars: 5,
  },
  {
    name: 'אלמליח כהן, בני ברק',
    text: 'בראש ובראשונה האיכות שלכם מעל כולם! עברתי בהרבה איטליזים ולא מצאתי בשר איכותי כמו שיש אצלכם. מעבר לזה, השירות שלכם סוף הדרך. נותנים את מלוא היחס והכבוד לכל לקוח באשר הוא. כבר כמה שנים שאני קונה אצלכם ומרוצה מאוד!',
    location: '',
    stars: 5,
  },
  {
    name: 'אלמליח כהן, בני ברק',
    text: 'בראש ובראשונה האיכות שלכם מעל כולם! עברתי בהרבה איטליזים ולא מצאתי בשר איכותי כמו שיש אצלכם. מעבר לזה, השירות שלכם סוף הדרך. נותנים את מלוא היחס והכבוד לכל לקוח באשר הוא. כבר כמה שנים שאני קונה אצלכם ומרוצה מאוד!',
    location: '',
    stars: 5,
  },
  {
    name: 'אלמליח כהן, בני ברק',
    text: 'בראש ובראשונה האיכות שלכם מעל כולם! עברתי בהרבה איטליזים ולא מצאתי בשר איכותי כמו שיש אצלכם. מעבר לזה, השירות שלכם סוף הדרך. נותנים את מלוא היחס והכבוד לכל לקוח באשר הוא. כבר כמה שנים שאני קונה אצלכם ומרוצה מאוד!',
    location: '',
    stars: 5,
  }
  // ניתן להוסיף המלצות נוספות כאן
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <div className="container-custom">
        <SectionTitle title="המלצות לקוחות" center />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-light p-6 rounded-lg">
              <div className="mb-4 text-secondary">{'★★★★★'.slice(0, t.stars)}</div>
              <p className="italic mb-4">"{t.text}"</p>
              <div className="font-bold">{t.name}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/" className="btn-outline">חזרה לבית</Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
