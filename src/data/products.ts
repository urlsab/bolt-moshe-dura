import { Product } from '../types/product';

const products: Product[] = [
  // Beef Products
  {
    id: 1,
    name: 'אנטריקוט טרי',
    category: 'beef',
    shortDescription: 'נתח אנטריקוט טרי ועסיסי מפרות בקר מובחרות',
    fullDescription: 'נתח אנטריקוט טרי ועסיסי מפרות בקר מובחרות, בגידול מקומי. הבשר עובר תהליך הבחלה יבשה למשך 21 יום להעצמת הטעם והרכות. מושגח על ידי בד״ץ העדה החרדית.',
    price: 140,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg',
    isPromoted: true,
    preparationTips: 'מומלץ לצלות על מחבת לוהטת או על גריל חם למשך 4-5 דקות מכל צד לדרגת עשייה בינונית.'
  },
  {
    id: 2,
    name: 'סינטה טרי',
    category: 'beef',
    shortDescription: 'נתח סינטה רך ומובחר, מתאים לצלייה או סטייקים',
    fullDescription: 'נתח סינטה רך ומובחר מבקר מקומי, רזה יחסית ובעל טעם עשיר. מתאים במיוחד לצלייה, סטייקים או טיגון במחבת. כל נתחי הסינטה שלנו מגיעים מחלק אחורי כשר מוסמך.',
    price: 130,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg',
    isPromoted: false,
    preparationTips: 'מתאים לצלייה מהירה במחבת לוהטת או על גריל חם. שמרו על עשייה בינונית עד בינונית-נא לשמירה על עסיסיות הבשר.'
  },
  {
    id: 3,
    name: 'פילה בקר',
    category: 'beef',
    shortDescription: 'נתח הפילה העדין והרך ביותר בבקר, איכות פרימיום',
    fullDescription: 'נתח הפילה מגיע מאזור הצלעות התחתון של הבקר ונחשב לחלק הרך ביותר בבעל החיים. הנתח דל בשומן, עדין במרקם ובעל טעם אנין. מתאים לסטייקים גורמה, שווארמה, ופילה מדליונים.',
    price: 190,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/8477213/pexels-photo-8477213.jpeg',
    isPromoted: true,
    preparationTips: 'פילה עדין במיוחד ורך. מומלץ לצלות במחבת עם מעט שמן זית, מלח ופלפל. אל תבשלו יתר על המידה כדי לשמר את הרכות והעסיסיות.'
  },
  {
    id: 4,
    name: 'צלעות קצבים',
    category: 'beef',
    shortDescription: 'צלעות בקר עבות עם שומן שיוצר טעם עשיר במיוחד',
    fullDescription: 'צלעות קצבים עבות ומיוחדות, עם שיוש שומן מושלם שמעניק לבשר בזמן הצלייה טעם עשיר ומיוחד. הצלעות מגיעות עם העצם להעצמת הטעם בעת הבישול.',
    price: 120,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg',
    isPromoted: false
  },
  {
    id: 5,
    name: 'בשר טחון מובחר',
    category: 'beef',
    shortDescription: 'בשר בקר טחון טרי, מתאים להמבורגרים וקציצות',
    fullDescription: 'בשר בקר טחון טרי, נטחן במקום מדי יום. מכיל אחוז שומן מדויק לטעם מושלם. מתאים להכנת המבורגרים, קציצות, ממולאים ותבשילים שונים.',
    price: 70,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/4110178/pexels-photo-4110178.jpeg',
    isPromoted: false,
    ingredients: ['בשר בקר (85%)', 'שומן בקר (15%)']
  },
  {
    id: 6,
    name: 'אסאדו בקר',
    category: 'beef',
    shortDescription: 'נתח אסאדו מצלעות הבקר, מתאים לבישול ארוך',
    fullDescription: 'אסאדו בקר הוא נתח השריר והעצם מצלעות הבקר. הנתח עשיר בטעם ואידיאלי לבישול איטי וארוך. מושלם לתבשילים, צלי בתנור או מעושן בגריל.',
    price: 95,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/9800000/pexels-photo-9800000.jpeg',
    isPromoted: false
  },
  
  // Lamb Products
  {
    id: 7,
    name: 'צלעות כבש',
    category: 'lamb',
    shortDescription: 'צלעות כבש טריות, מתאימות לגריל או צלייה בתנור',
    fullDescription: 'צלעות כבש טריות מכבשים שגדלו במרעה טבעי. הצלעות מגיעות חתוכות ומוכנות לבישול, עם שומן מדויק להעשרת הטעם. מתאימות לגריל, צלייה בתנור או במחבת.',
    price: 150,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/8477101/pexels-photo-8477101.jpeg',
    isPromoted: true
  },
  {
    id: 8,
    name: 'כתף כבש',
    category: 'lamb',
    shortDescription: 'נתח כתף כבש עסיסי, מתאים לתבשילים מסורתיים',
    fullDescription: 'נתח כתף כבש עסיסי ורך, מושלם לתבשילים מסורתיים. הנתח מגיע ללא עצם וחתוך לקוביות על פי דרישה, מוכן לבישול איטי להפקת כל טעמי הבשר.',
    price: 120,
    weight: '1 ק"ג',
    kashrutLevel: 'יורה דעה',
    imageSrc: 'https://images.pexels.com/photos/5699629/pexels-photo-5699629.jpeg',
    isPromoted: false
  },
  {
    id: 9,
    name: 'רגל כבש שלמה',
    category: 'lamb',
    shortDescription: 'רגל כבש שלמה מעובדת, מתאימה לאירוח וחגים',
    fullDescription: 'רגל כבש שלמה מעובדת, מוכנה לצלייה בתנור. מתאימה במיוחד לאירוח, חגים ואירועים משפחתיים. הבשר עסיסי במיוחד לאחר צלייה איטית עם תבלינים.',
    price: 180,
    weight: 'יחידה',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg',
    isPromoted: false
  },
  
  // Chicken Products
  {
    id: 10,
    name: 'חזה עוף טרי',
    category: 'chicken',
    shortDescription: 'חזה עוף טרי ללא עור ועצמות, רזה ועשיר בחלבון',
    fullDescription: 'חזה עוף טרי ללא עור ועצמות, רזה ועשיר בחלבון. מגיע מעופות שגדלו בתנאים מבוקרים ותחת פיקוח כשרות מחמיר. מתאים לשניצלים, חזה על הגריל או לתבשילים.',
    price: 50,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/6210933/pexels-photo-6210933.jpeg',
    isPromoted: true,
    preparationTips: 'חזה עוף נוטה להתייבש, לכן מומלץ לא לבשל יתר על המידה. ניתן להכין שניצלים, לצלות בתנור עם תבלינים או לבשל ברוטב.'
  },
  {
    id: 11,
    name: 'כרעיים עוף',
    category: 'chicken',
    shortDescription: 'כרעיים עוף טריים, מתאימים לאפייה, גריל או תבשיל',
    fullDescription: 'כרעיים עוף טריים ועסיסיים, מתאימים לאפייה בתנור, צלייה על הגריל או בישול בתבשיל. מגיעים מעופות שגדלו בתנאים מבוקרים ותחת השגחה כשרותית מלאה.',
    price: 35,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg',
    isPromoted: false
  },
  {
    id: 12,
    name: 'כנפיים עוף',
    category: 'chicken',
    shortDescription: 'כנפיים עוף טריות, מושלמות לאירוח וארוחות משפחתיות',
    fullDescription: 'כנפיים עוף טריות, מושלמות לאירוח וארוחות משפחתיות. ניתן להכין אותן בסגנונות רבים - מטוגנות, אפויות, מתובלות או ברוטב. מגיעות ללא קצוות.',
    price: 30,
    weight: '1 ק"ג',
    kashrutLevel: 'יורה דעה',
    imageSrc: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    isPromoted: false,
    preparationTips: 'נהדרות למריחה ברוטב ברביקיו או דבש-חרדל ואפייה בתנור עד להזהבה.'
  },
  {
    id: 13,
    name: 'פרגיות טריות',
    category: 'chicken',
    shortDescription: 'פרגיות טריות ועסיסיות, חתוכות ומוכנות לבישול',
    fullDescription: 'פרגיות טריות ועסיסיות, חתוכות ומוכנות לבישול. הפרגיות מגיעות ללא עור ועצם, מה שהופך אותן למנה נוחה לאכילה. בשר עדין וטעים במיוחד.',
    price: 65,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg',
    isPromoted: true,
    preparationTips: 'מצוינות לשיפודים, צלייה על גריל או במחבת. ניתן גם להקפיץ עם ירקות.'
  },
  {
    id: 14,
    name: 'עוף שלם',
    category: 'chicken',
    shortDescription: 'עוף שלם טרי, מתאים לתבשילים משפחתיים',
    fullDescription: 'עוף שלם טרי, מנוקה ומוכן לבישול. מתאים לתבשילים משפחתיים, צלי עוף בתנור או לסיר מרק. העופות מגיעים מגידול מקומי במשקל של כ-1.4-1.8 ק"ג.',
    price: 40,
    weight: 'יחידה',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg',
    isPromoted: false
  },
  
  // Prepared Products
  {
    id: 15,
    name: 'קבב ביתי',
    category: 'prepared',
    shortDescription: 'קבב ביתי בתיבול מסורתי, מוכן לצלייה',
    fullDescription: 'קבב ביתי בתיבול מסורתי, מוכן לצלייה. עשוי מבשר בקר וכבש טחון ביחס מושלם, עם בצל, פטרוזיליה ותבלינים איכותיים. מיוצר טרי מדי יום.',
    price: 80,
    weight: '1 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/8250190/pexels-photo-8250190.jpeg',
    isPromoted: true,
    ingredients: ['בשר בקר טחון', 'בשר כבש טחון', 'בצל', 'פטרוזיליה', 'תבלינים', 'מלח']
  },
  {
    id: 16,
    name: 'המבורגר אנגוס',
    category: 'prepared',
    shortDescription: 'המבורגר מבשר אנגוס משובח, 200 גרם ליחידה',
    fullDescription: 'המבורגר מבשר אנגוס משובח, במשקל 200 גרם ליחידה. מיוצר מנתחים נבחרים ומכיל אחוז שומן אופטימלי של 20% לטעם עשיר. מוכן לצלייה על גריל או במחבת.',
    price: 90,
    weight: 'ארוז ב-5 יחידות',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
    isPromoted: false,
    ingredients: ['בשר בקר אנגוס (80%)', 'שומן בקר (20%)', 'מלח', 'פלפל שחור']
  },
  {
    id: 17,
    name: 'שיפודי פרגית',
    category: 'prepared',
    shortDescription: 'שיפודי פרגית מתובלים, מוכנים לצלייה',
    fullDescription: 'שיפודי פרגית טריים ומתובלים, מוכנים לצלייה. הפרגיות חתוכות לקוביות ומתובלות בתערובת תבלינים מיוחדת. מושחלות על שיפודי עץ ומוכנות לגריל.',
    price: 85,
    weight: 'אריזה של 10 שיפודים',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    isPromoted: false,
    ingredients: ['פרגית', 'שמן זית', 'תבלין פרגיות מיוחד', 'מלח ים', 'פלפל שחור']
  },
  {
    id: 18,
    name: 'צלי בקר מוכן',
    category: 'prepared',
    shortDescription: 'צלי בקר מתובל, מוכן לאפייה בתנור',
    fullDescription: 'צלי בקר מתובל, מוכן לאפייה בתנור. מיוצר מנתח הכתף, מתובל בשום, עשבי תיבול ורוטב מיוחד. מארז משפחתי המספיק ל-6-8 סועדים.',
    price: 110,
    weight: '1.5 ק"ג',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg',
    isPromoted: true,
    ingredients: ['נתח כתף בקר', 'שום', 'רוזמרין', 'תימין', 'מלח ים', 'פלפל שחור', 'שמן זית']
  },
  
  // Deli Products
  {
    id: 19,
    name: 'נקניקיות עגל',
    category: 'deli',
    shortDescription: 'נקניקיות עגל איכותיות, מתאימות לארוחות מהירות וילדים',
    fullDescription: 'נקניקיות עגל איכותיות, מיוצרות מבשר עגל נבחר ללא תוספת חומרים משמרים. מתאימות לארוחות מהירות, ילדים או כתוספת למנות שונות.',
    price: 40,
    weight: 'אריזה של 10 יחידות',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/8308321/pexels-photo-8308321.jpeg',
    isPromoted: false,
    ingredients: ['בשר עגל', 'מלח', 'תבלינים', 'מעטפת טבעית']
  },
  {
    id: 20,
    name: 'פסטרמה בקר',
    category: 'deli',
    shortDescription: 'פסטרמה בקר בעישון עדין, פרוסה',
    fullDescription: 'פסטרמה בקר בעישון עדין, פרוסה דק. מיוצרת מנתח החזה, מעושנת על עץ דובדבן ומתובלת בתערובת תבלינים מיוחדת. מתאימה לכריכים, מאפים ומנות פתיחה.',
    price: 120,
    weight: '200 גרם',
    kashrutLevel: 'בד״ץ העדה החרדית',
    imageSrc: 'https://images.pexels.com/photos/9928344/pexels-photo-9928344.jpeg',
    isPromoted: true,
    ingredients: ['חזה בקר', 'מלח', 'סוכר חום', 'תבלינים', 'עישון טבעי']
  },
];

export default products;