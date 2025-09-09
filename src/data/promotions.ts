import { Promotion } from '../types/promotion';
import frozenYerek from '../Assets/frozenYerek.jpg';
import antrikotleloetsem from '../Assets/antrikotleloetsem.jpg';
import kraaayim from '../Assets/kraaayim.jpg';
import amnonleloor from '../Assets/amnonleloor.jpg';

const currentDate = new Date();
const nextFriday = new Date(currentDate);
nextFriday.setDate(currentDate.getDate() + (5 + 7 - currentDate.getDay()) % 7);

// const formatDate = (date: Date): string => {
//   return date.toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric', year: 'numeric' });
// };

const promotions: Promotion[] = [
    {
      id: 1,
      title: 'מבצעי ירקות קפואים',
      description: 'לביבות כרובית, לביבות ברוקולי, עיגולי פירה, כרובית מצופה, שניצל תירס, כוכבי תירס\nהכל 2 ב־55 ₪',
      salePrice: 55,
      imageSrc: `${frozenYerek}`
    },
    {
      id: 2,
      title: 'מבצעי דגים',
  description: 'פילה אמנון (מושט) 4 קילו ב־100 ₪, מנות סלמון 79 ₪ לקילו, פילה סול 3 קילו ב־120 ₪, קציצות דג / אצבעות דג / שניצל דג חבילה 2 ב־60 ₪',
      imageSrc: `${amnonleloor}`
    },
    {
      id: 3,
      title: 'מבצעי עוף',
  description: "קרטון עופות מחולק לשניצל פרגית וכו' (בערך 14 קילו בקרטון) 35 ₪ לקילו",
      salePrice: 35,
      imageSrc: `${kraaayim}`
    },
    {
      id: 4,
      title: 'מבצעי עוף נוספים',
      description: `עוף טחון\n 3 ק"ג ב-150 ₪\nכנפיים עוף\n 3 ק"ג ב-60 ₪\nכרעיים עוף\n3  ק"ג ב-130 ₪\nחזה עוף\n3  ק"ג ב-150 ₪\nנקניקיות\n2 חב' ב-22 ₪ שווארמה ביתית מוכנה פרגית/הודו/בקר 2 חב' ב-130 `,
      imageSrc: `${kraaayim}`
    },
    {
      id: 5,
      title: 'מבצעי עוף נוספים',
      description: `\nשווארמה ביתית מוכנה פרגית/הודו/בקר\n2 חב' ב-130 ₪\nכבד צלי\n2  חב' ב-60 ₪\nקבב כבש, המבורגר, מרגז, קציצות עוף – הכל ביתי\n 2 חב' ב-130 ₪\nשניצלים בצל, כדורי פירה, קובות סולת, צ'יפס קריבוי והוקי\n2  חב' ב-65 ₪`,
      imageSrc: `${kraaayim}`
    },
    {
      id: 6,
      title: 'מבצעי בקר ',
      description: `בשר טחון\n 3 ק"ג ב-160 ₪\nאנטריקוט קפוא (לא מעובד)\nב-115 ₪ לק"ג\nאצבעות אנטריקוט\nב-79.9 ₪ לק"ג\nגולש עגל\n 2 ק"ג ב-130 ₪\nאנטריקוט טרי עם עצם\nב-170 ₪ לק"ג\nאסאדו עם עצם\n 2 ק"ג ב-130 ₪`,
      imageSrc: `${antrikotleloetsem}`
    },
    {
      id: 7,
      title: 'מבצעי חגים ',
    description: `קרטון עוף מפורק ארוז לפי בקשת הלקוח משקל ממוצע כ־14 ק"ג (שניצל, פרגית וכו')\nב־38 ₪ לק"ג\nעוף טחון\n3  ק"ג ב־150 ₪\nבשר בקר טחון\n 3 ק"ג ב־160 ₪\nריאות בקר\nעטרה\מחפוד\n 2 ק"ג ב־110 ₪\nאוסובוקו\n 2 ק"ג ב־130 ₪\nאצבעות אנטריקוט\nב־69 ₪ לק"ג\nאנטריקוט מיושן\nמינימום 30 יום\nב־220 ₪ לק"ג`,
      imageSrc: `${antrikotleloetsem}`
    },
    {
      id: 8,
      title: 'מבצעים נוספים לחגים',
    description: `אסאדו עם עצם\n 2 ק"ג ב־130 ₪\nפילה מושט (אמנון)\nעם עור\n3 ק"ג ב-70 ש"ח \nבלי עור\n3 ק"ג ב־100 ₪\nחטיפי אלקיים\nכל הסוגים\n2  חב' ב־30 ₪\nטבעות בצל, כדורי פירה, כרובית מצופה, לביבות כרובית וברוקולי\n 2 חב' ב־60 ₪\nקבב כבש/אגנוס המברוגר, מרגז, קציצות הבית-ביתי\n 2 ק"ג ב־130 ₪`,
      imageSrc: `${antrikotleloetsem}`
    }
];

export default promotions;

// import React, { useState } from 'react';
// import { Search, MapPin, Star, Clock, Phone } from 'lucide-react';

// // דוגמה לקומפוננטה של מוצר עם SEO אופטימיזציה
// const ProductCard = ({ product }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//       <div className="flex items-start justify-between mb-4">
//         <div className="flex-1">
//           <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
//           <div className="flex items-center mb-2">
//             <MapPin className="w-4 h-4 text-red-500 mr-1" />
//             <span className="text-sm text-gray-600">{product.location}</span>
//           </div>
//           <div className="flex items-center mb-2">
//             <Star className="w-4 h-4 text-yellow-500 mr-1" />
//             <span className="text-sm text-gray-600">{product.kosher}</span>
//           </div>
//         </div>
//         <div className="text-right">
//           <div className="text-2xl font-bold text-green-600">₪{product.price}</div>
//           <div className="text-sm text-gray-500">לק"ג</div>
//         </div>
//       </div>
      
//       <div className="mb-4">
//         <p className="text-gray-700 text-sm">{product.description}</p>
//       </div>
      
//       <div className="flex flex-wrap gap-2 mb-4">
//         {product.tags.map((tag, index) => (
//           <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
//             {tag}
//           </span>
//         ))}
//       </div>
      
//       <div className="flex items-center justify-between">
//         <div className="flex items-center text-sm text-gray-500">
//           <Clock className="w-4 h-4 mr-1" />
//           <span>זמין כעת</span>
//         </div>
//         <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
//           הזמן עכשיו
//         </button>
//       </div>
//     </div>
//   );
// };

// // דוגמה לעמוד קטגוריה עם SEO
// const CategoryPage = () => {
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [selectedKosher, setSelectedKosher] = useState('');
  
//   const products = [
//     {
//       name: "אנטריקוט פרימיום",
//       location: "גוש דן",
//       kosher: "בד״ץ למהדרין",
//       price: 89,
//       description: "אנטריקוט איכותי ביותר, טרי מהמתקן",
//       tags: ["אטליז למהדרין גוש דן", "בשר בד״ץ בגוש דן", "סטייק בגוש דן"]
//     },
//     {
//       name: "פילה מיגנון",
//       location: "כפר שלם",
//       kosher: "הרב מחפוד",
//       price: 120,
//       description: "פילה מיגנון עדין וטרי",
//       tags: ["אטליז בכפר שלם", "בשר הרב מחפוד", "חנות בשר הרב מחפוד בכפר שלם"]
//     },
//     {
//       name: "כרעיים עוף טרי",
//       location: "גוש דן",
//       kosher: "בד״ץ למהדרין",
//       price: 24,
//       description: "כרעיים עוף טריות וטעימות",
//       tags: ["כרעיים עוף בגוש דן", "עוף טרי בד״ץ", "עוף למהדרין"]
//     }
//   ];
  
//   const locations = ["גוש דן", "כפר שלם", "תל אביב", "רמת גן", "צרעה"];
//   const kosherTypes = ["בד״ץ למהדרין", "הרב מחפוד", "בית יוסף", "הרב מוצפי"];
  
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header עם SEO */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex items-center justify-between">
//             <h1 className="text-3xl font-bold text-gray-900">
//               איטליז כשר למהדרין - בשר טרי איכותי
//             </h1>
//             <div className="flex items-center space-x-4">
//               <Phone className="w-5 h-5 text-green-600" />
//               <span className="text-green-600 font-semibold">050-1234567</span>
//             </div>
//           </div>
          
//           <div className="mt-4">
//             <p className="text-gray-600 text-lg">
//               חנות בשר כשרה למהדרין בגוש דן וכפר שלם | אטליז טרי בהכשר הרב מחפוד ובד״ץ
//             </p>
//           </div>
//         </div>
//       </div>
      
//       {/* מסננים */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-4">מצא בשר כשר באזור שלך</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 מיקום
//               </label>
//               <select 
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2"
//                 value={selectedLocation}
//                 onChange={(e) => setSelectedLocation(e.target.value)}
//               >
//                 <option value="">כל המיקומים</option>
//                 {locations.map(location => (
//                   <option key={location} value={location}>{location}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 הכשר
//               </label>
//               <select 
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2"
//                 value={selectedKosher}
//                 onChange={(e) => setSelectedKosher(e.target.value)}
//               >
//                 <option value="">כל ההכשרים</option>
//                 {kosherTypes.map(kosher => (
//                   <option key={kosher} value={kosher}>{kosher}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 חיפוש
//               </label>
//               <div className="relative">
//                 <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
//                 <input 
//                   type="text"
//                   placeholder="חפש מוצר..."
//                   className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* רשת מוצרים */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product, index) => (
//             <ProductCard key={index} product={product} />
//           ))}
//         </div>
        
//         {/* תגיות SEO */}
//         <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
//           <h2 className="text-xl font-semibold mb-4">תגיות פופולריות</h2>
//           <div className="flex flex-wrap gap-2">
//             {[
//               "אטליז למהדרין בד״ץ",
//               "בשר כשר תל אביב",
//               "חנות בשר בגוש דן",
//               "עוף טרי בד״ץ",
//               "בשר הרב מחפוד",
//               "אטליז כפר שלם"
//             ].map((tag, index) => (
//               <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer">
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
        
//         {/* תוכן SEO */}
//         <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
//           <h2 className="text-2xl font-bold mb-4">
//             איטליז כשר למהדרין - המדריך המלא
//           </h2>
//           <div className="prose prose-lg max-w-none">
//             <p className="text-gray-700 mb-4">
//               חנות הבשר שלנו מתמחה באטליז כשר למהדרין בגוש דן וכפר שלם. 
//               אנחנו מספקים בשר טרי איכותי בהכשר הרב מחפוד ובד״ץ למהדרין.
//             </p>
//             <p className="text-gray-700 mb-4">
//               המבחר שלנו כולל: אטליז בהכשר הרב מחפוד, בשר בד״ץ בגוש דן, 
//               עוף טרי בד״ץ, כרעיים עוף טרי גוש דן, וסטייק בגוש דן.
//             </p>
//             <p className="text-gray-700">
//               כל המוצרים שלנו עוברים בדיקות איכות קפדניות ומגיעים טריים מדי יום.
//               זמינים לחנות ולהזמנות בטלפון 050-1234567.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;