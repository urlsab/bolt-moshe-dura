import { Promotion } from '../types/promotion';

const currentDate = new Date();
const nextFriday = new Date(currentDate);
nextFriday.setDate(currentDate.getDate() + (5 + 7 - currentDate.getDay()) % 7);

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric', year: 'numeric' });
};

const promotions: Promotion[] = [
  {
    id: 1,
    title: 'אנטריקוט במבצע מיוחד',
    description: 'נתח אנטריקוט טרי ועסיסי מפרות בקר מובחרות בהנחה מיוחדת לכבוד חג הפסח',
    productId: 1,
    regularPrice: 140,
    salePrice: 119,
    discount: 15,
    validUntil: formatDate(nextFriday),
    imageSrc: 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg'
  },
  {
    id: 2,
    title: 'מבצע על פרגיות טריות',
    description: 'פרגיות טריות ועסיסיות במחיר מיוחד. מושלמות לארוחת ערב משפחתית',
    productId: 13,
    regularPrice: 65,
    salePrice: 50,
    discount: 23,
    validUntil: formatDate(nextFriday),
    imageSrc: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg'
  },
  {
    id: 3,
    title: 'קבב ביתי בהנחה',
    description: 'קבב ביתי בתיבול מסורתי, מוכן לצלייה. מושלם לאירוח ושמחות',
    productId: 15,
    regularPrice: 80,
    salePrice: 65,
    discount: 19,
    validUntil: formatDate(nextFriday),
    imageSrc: 'https://images.pexels.com/photos/8250190/pexels-photo-8250190.jpeg'
  },
  {
    id: 4,
    title: 'פילה בקר במחיר מיוחד',
    description: 'נתח הפילה העדין והרך ביותר בבקר, איכות פרימיום במבצע מיוחד לרגל חידוש האיטליז',
    productId: 3,
    regularPrice: 190,
    salePrice: 160,
    discount: 16,
    validUntil: formatDate(nextFriday),
    imageSrc: 'https://images.pexels.com/photos/8477213/pexels-photo-8477213.jpeg'
  },
  {
    id: 5,
    title: 'צלי בקר מוכן לתנור',
    description: 'צלי בקר מתובל, מוכן לאפייה בתנור. מבצע מיוחד לשבת',
    productId: 18,
    regularPrice: 110,
    salePrice: 90,
    discount: 18,
    validUntil: formatDate(nextFriday),
    imageSrc: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg'
  },
  {
    id: 6,
    title: 'צלעות כבש במבצע',
    description: 'צלעות כבש טריות במחיר מיוחד. מתאימות לגריל או צלייה בתנור',
    productId: 7,
    regularPrice: 150,
    salePrice: 125,
    discount: 17,
    validUntil: formatDate(nextFriday),
    imageSrc: 'https://images.pexels.com/photos/8477101/pexels-photo-8477101.jpeg'
  }
];

export default promotions;