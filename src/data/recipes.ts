import { Recipe } from '../types/recipe';
import asadobasir from '../Assets/asadobasir.jpg';
import tslaotkevesisbetibul from '../Assets/tslaotkevesisbetibul.png';
import tslistake from '../Assets/tslistake.png';
import sukariotfile from '../Assets/sukariotfile.jpeg';
import perukof from '../Assets/perukof.jpg'; // Assuming this is the correct path for the video
import file from '../Assets/file.mp4';
import peruk from '../Assets/peruk.mp4'; // Assuming this is the correct path for the video
import bakarmap from '../Assets/bakarmap.png'; // Assuming this is the correct path for the image
import mikra from '../Assets/mikra.png'; // Assuming this is the correct path for the image

const recipes: Recipe[] = [
  {
    id: 1,
    title: 'אסאדו ברוטב טריאקי',
    shortDescription: 'מתכון אסאדו עסיסי ברוטב טריאקי, מושלם לאירוח',
    fullDescription: 'אסאדו ברוטב טריאקי – מתכון מפורט להכנת אסאדו רך, טעים ועסיסי עם רוטב עשיר, מתאים לארוחה חגיגית.',
    category: 'בקר',
    prepTime: '30',
    cookTime: '240',
    servings: 8,
    ingredients: [
      '1 קילו נתח אסאדו',
      'חצי כוס רוטב טריאקי',
      'מים',
      'מלח – כף או לפי הטעם',
      'פלפל שחור – חצי כפית'
    ],
    instructions: [
      'שמים בסיר את נתח האסאדו.',
      'אפשר לחתוך ל-4 קוביות או יותר.',
      'מכסים את הבשר במים – מעל גובה הבשר.',
      'מתחילים את הבישול, לאחר שהמים רותחים מנמיכים אש, מבשלים על חום נמוך.',
      'בבישול איטי – שעתיים עד שהבשר רך כולו.',
      'לאחר שהבשר רך מעבירים אותו לתבנית, רצוי עם מלקחיים.',
      'מחממים תנור ל-200 מעלות, תוכנית גריל.',
      'בתבנית מורחים על הבשר רוטב טריאקי בנדיבות.',
      'מפזרים על הבשר מלח ופלפל שחור. אפשר לשים מעט עם תבלינים – לא חובה.',
      'מכניסים לתנור, בשר חשוף.',
      'זמן הצלייה הוא בערך 30-40 דק׳.',
      'חשוב לעקוב ולראות כי הרוטב לא מתקרמל ונשרף.',
      'לאחר שרואים שהבשר קיבל צבע הופכים בעזרת מלקחיים לצד השני.',
      'שוב, ממשיכים לצלות לכל הצדדים.'
    ],
    kashrutNotes: 'יש להקפיד על בשר בהשגחה מהודרת.',
    imageSrc: `${asadobasir}`,
    relatedProducts: []
  },
  {
    id: 2,
    title: 'צלעות כבש עם עשבי תיבול',
    shortDescription: 'צלעות כבש עסיסיות בתיבול עשבי תיבול ותבלינים',
    fullDescription: 'מתכון חגיגי לצלעות כבש עם עשבי תיבול, תיבול עשיר וצלייה מושלמת בתנור.',
    category: 'כבש',
    prepTime: '20',
    cookTime: '40',
    servings: 5,
    ingredients: [
      '10 צלעות כבש',
      '3 בצלים חצויים ופרוסים דק',
      '1/3 כוס שמן זית',
      'כפית פטרוזיליה מיובשת',
      'חצי כפית טימין מיובש',
      'כפית פפריקה',
      'כף סילאן',
      'כף דבש',
      'אבקת מרק',
      'פלפל שחור טחון',
      'מלח'
    ],
    instructions: [
      'לערבב את כל המרכיבים לתבל את הצלעות ולהשרות כשעה. לפזר את הבצל בתבנית ולהניח מעל את הצלעות ולכסות עם נייר כסף.',
      'לחמם בתנור על טמפרטורה בינונית 180 מעלות 40 דקות.'
    ],
    kashrutNotes: 'יש להקפיד על כבש בכשרות מהודרת.',
    imageSrc: `${tslaotkevesisbetibul}`,
    relatedProducts: []
  },
  {
    id: 3,
    title: '7 טיפים לצליית סטייק',
    shortDescription: 'טיפים חשובים לצלייה מושלמת של סטייק',
    fullDescription: 'אוסף טיפים מקצועיים לצליית סטייק עסיסי, רך וטעים.',
    category: 'בקר',
    prepTime: '-',
    cookTime: '-',
    servings: 0,
    ingredients: ['סטייק'],
    instructions: [
      ' יש לתת לסטייק להגיע לטמפרטורת החדר לפני הצלייה.',
      ' התחל בצלייה בחום גבוה וסיים בחום נמוך.',
      ' הפוך את הבשר מספר פעמים בזמן הצלייה.',
      ' לכסות את הבשר בנייר כסף ולתת לו לנוח לאחר הצלייה – 5 דקות לנתחים דקים יותר ועד 15 דקות לנתחים עבים יותר.',
      ' השתמש בסכין חדה לחיתוך (ללא שיניים).',
      ' פרוס את הסטייק כנגד הסיבים.',
      ' נקה את הגריל לאחר כל שימוש.'
    ],
    kashrutNotes: '',
    imageSrc: `${tslistake}`,
    relatedProducts: []
  },
  {
    id: 4,
    title: 'סוכריות פילה',
    shortDescription: 'המדריך המלא להכנת סוכריות פילה מעולות',
    fullDescription: 'סרטון הדרכה להכנת סוכריות פילה',
    category: 'כבש, עוף, בקר',
    prepTime: '-',
    cookTime: '-',
    servings: 0,
    ingredients: ['פילה בקר, שומן כבש, שניצל'],
    instructions: [
      'עקבו אחר ההוראות בסרטון',
    ],
    kashrutNotes: '',
    imageSrc: `${sukariotfile}`,
    relatedProducts: [],
    videoSrc: `${file}`
  },
  {
    id: 5,
    title: 'פירוק עוף לשניצל ופרגית',
    shortDescription: 'המדריך המלא לפירוק עוף לשניצל ופרגית',
    fullDescription: 'סרטון הדרכה לפירוק עוף לשניצל ופרגית',
    category: 'עוף',
    prepTime: '-',
    cookTime: '-',
    servings: 0,
    ingredients: ['עוף שלם'],
    instructions: [
      'עקבו אחר ההוראות בסרטון',
    ],
    kashrutNotes: '',
    imageSrc: `${perukof}`,
    relatedProducts: [],
    videoSrc: `${peruk}`
  },
  {
    id: 6,
    title: 'מפת הבקר המלאה',
    shortDescription: 'מפת הבקר המלאה לפי מספרים',
    fullDescription: 'מפת בשר בקר המלאה לפי מספרים וסוגי הכנה',
    category: 'בקר',
    prepTime: '-',
    cookTime: '-',
    servings: 0,
    ingredients: ['בשר בקר'],
    instructions: [
      'עקבו אחר ההוראות במפה',
    ],
    kashrutNotes: '',
    imageSrc: `${bakarmap}`,
    relatedProducts: [],
    bigImg: `${bakarmap}`,
    bigImg2: `${mikra}` // Assuming this is the correct path for the second large image
  }
];

export default recipes;

// // 1. קומפוננטה לניהול SEO Meta Tags
// import React from 'react';
// import { Helmet } from 'react-helmet-async';

// const SEOHead = ({ 
//   title, 
//   description, 
//   keywords, 
//   canonicalUrl,
//   ogImage,
//   structuredData 
// }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={keywords} />
//       <link rel="canonical" href={canonicalUrl} />
      
//       {/* Open Graph */}
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={ogImage} />
//       <meta property="og:url" content={canonicalUrl} />
//       <meta property="og:type" content="website" />
      
//       {/* Twitter Card */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={ogImage} />
      
//       {/* Structured Data */}
//       {structuredData && (
//         <script type="application/ld+json">
//           {JSON.stringify(structuredData)}
//         </script>
//       )}
//     </Helmet>
//   );
// };

// // 2. הוק לניהול תגיות SEO
// import { useMemo } from 'react';

// const useSEOTags = () => {
//   const tags = [
//     "אטליז בהכשר הרב מחפוד",
//     "אטליז בכפר שלם",
//     "אטליז כשר בגוש דן",
//     "אטליז כשר למהדרין תל אביב",
//     "אטליז כשר תל אביב",
//     "אטליז למהדרין בד״ץ",
//     "אטליז למהדרין גוש דן",
//     "אטליז למהדרין כפר שלם",
//     "אטליז למהדרין צרעה",
//     "אטליז רמת גן",
//     "אטליז מחפוד גוש דן",
//     "אטליז עטרה",
//     "בשר בגוש דן",
//     "בשר בד״ץ",
//     "בשר בד״ץ בגוש דן",
//     "בשר בד״ץ בכפר שלם",
//     "בשר בית יוסף",
//     "בשר הזמנות",
//     "בשר הרב מוצפי",
//     "בשר הרב מחפוד",
//     "בשר טחון תל אביב",
//     "בשר טרי מחפוד",
//     "בשר לאירועים גוש דן",
//     "בשר למסעדות בד״ץ",
//     "עוף כשר",
//     "עוף טרי בד״ץ",
//     "עוף למהדרין",
//     "כרעיים עוף בגוש דן",
//     "חנות בשר בגוש דן",
//     "חנות בשר כשרה למהדרין בתל אביב",
//     "חנות בשר כשרה למהדרין בכפר שלם"
//   ];
  
//   const getTagsByCategory = (category) => {
//     switch(category) {
//       case 'entrecote':
//         return tags.filter(tag => tag.includes('אטליז'));
//       case 'chicken':
//         return tags.filter(tag => tag.includes('עוף'));
//       case 'kosher':
//         return tags.filter(tag => tag.includes('כשר') || tag.includes('בד״ץ'));
//       case 'location':
//         return tags.filter(tag => 
//           tag.includes('גוש דן') || 
//           tag.includes('כפר שלם') || 
//           tag.includes('תל אביב')
//         );
//       default:
//         return tags;
//     }
//   };
  
//   const generateKeywords = (category, location) => {
//     const categoryTags = getTagsByCategory(category);
//     const locationTags = location ? categoryTags.filter(tag => tag.includes(location)) : categoryTags;
//     return locationTags.slice(0, 15).join(', ');
//   };
  
//   return {
//     tags,
//     getTagsByCategory,
//     generateKeywords
//   };
// };

// // 3. עמוד מוצר עם SEO אופטימיזציה
// const ProductPage = ({ product }) => {
//   const { generateKeywords } = useSEOTags();
  
//   const seoData = useMemo(() => {
//     const title = `${product.name} - ${product.kosher} | אטליז כשר ${product.location}`;
//     const description = `${product.name} איכותי בהכשר ${product.kosher} ב${product.location}. הזמינו אטליז טרי עם משלוח מהיר. מחיר: ₪${product.price} לק"ג`;
//     const keywords = generateKeywords(product.category, product.location);
    
//     const structuredData = {
//       "@context": "https://schema.org",
//       "@type": "Product",
//       "name": product.name,
//       "description": product.description,
//       "category": "Food",
//       "brand": {
//         "@type": "Brand",
//         "name": "אטליז כשר"
//       },
//       "offers": {
//         "@type": "Offer",
//         "price": product.price,
//         "priceCurrency": "ILS",
//         "availability": "https://schema.org/InStock",
//         "seller": {
//           "@type": "Organization",
//           "name": "אטליז כשר"
//         }
//       },
//       "aggregateRating": {
//         "@type": "AggregateRating",
//         "ratingValue": "4.8",
//         "reviewCount": "127"
//       }
//     };
    
//     return {
//       title,
//       description,
//       keywords,
//       canonicalUrl: `${window.location.origin}/products/${product.id}`,
//       ogImage: product.image,
//       structuredData
//     };
//   }, [product, generateKeywords]);
  
//   return (
//     <div>
//       <SEOHead {...seoData} />
      
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        
//         {/* Breadcrumbs for SEO */}
//         <nav className="mb-6 text-sm">
//           <ol className="flex space-x-2">
//             <li><a href="/" className="text-blue-600">דף הבית</a></li>
//             <li>/</li>
//             <li><a href="/products" className="text-blue-600">מוצרים</a></li>
//             <li>/</li>
//             <li className="text-gray-500">{product.name}</li>
//           </ol>
//         </nav>
        
//         {/* Product content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <img 
//               src={product.image} 
//               alt={`${product.name} - ${product.kosher}`}
//               className="w-full h-96 object-cover rounded-lg"
//             />
//           </div>
          
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">פרטי המוצר</h2>
//             <p className="text-gray-700 mb-4">{product.description}</p>
            
//             <div className="mb-4">
//               <h3 className="font-semibold mb-2">מיקום:</h3>
//               <p>{product.location}</p>
//             </div>
            
//             <div className="mb-4">
//               <h3 className="font-semibold mb-2">הכשר:</h3>
//               <p>{product.kosher}</p>
//             </div>
            
//             <div className="mb-6">
//               <h3 className="font-semibold mb-2">תגיות:</h3>
//               <div className="flex flex-wrap gap-2">
//                 {product.tags.map((tag, index) => (
//                   <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             <div className="text-3xl font-bold text-green-600 mb-4">
//               ₪{product.price} לק"ג
//             </div>
            
//             <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700">
//               הזמן עכשיו
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // 4. Sitemap Generator
// const generateSitemap = (products, categories) => {
//   const baseUrl = 'https://yourdomain.com';
//   const urls = [
//     { url: baseUrl, priority: 1.0 },
//     { url: `${baseUrl}/products`, priority: 0.8 },
//     { url: `${baseUrl}/about`, priority: 0.6 },
//     { url: `${baseUrl}/contact`, priority: 0.6 },
    
//     // Category pages
//     ...categories.map(category => ({
//       url: `${baseUrl}/category/${category.slug}`,
//       priority: 0.7
//     })),
    
//     // Product pages
//     ...products.map(product => ({
//       url: `${baseUrl}/products/${product.id}`,
//       priority: 0.6
//     }))
//   ];
  
//   return urls;
// };

// // 5. Router עם SEO
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/products/:id" element={<ProductPage />} />
//         <Route path="/category/:category" element={<CategoryPage />} />
//         <Route path="/location/:location" element={<LocationPage />} />
//         <Route path="/kosher/:kosher" element={<KosherPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;