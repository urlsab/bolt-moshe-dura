import { Product } from '../types/product';
import amnonimor from '../Assets/amnonimor.jpg';
import amnonleloor from '../Assets/amnonleloor.jpg';
import nilusparus from '../Assets/nilusparus.jpg';
import filesalmon from '../Assets/filesalmon.jpg';
import salamonmanot from '../Assets/salamonmanot.jpg';
import salamonleloor from '../Assets/salamonmanotleloor.jpg';
import marlozalelomaim from '../Assets/marlozelelomaim.jpg';
import stakesalamon from '../Assets/stakesalamon.jpg';
import filesol from '../Assets/filesol.jpg';
import tunalevana from '../Assets/tunalevana.jpg';
import tunahuma from '../Assets/tunahuma.jpg';
import filabarbunia from '../Assets/filebarbunia.jpg';
import fileamnonbetsipui from '../Assets/filaamnonbetsipui.jpg';
import filebabylokus from '../Assets/filebabylokus.webp';
import fishandchips from '../Assets/fish-and-chips.jpg';
import ktsitsotdaglebishul from '../Assets/ktsitsotdagimlebishul.jpg';
import maklonedagsegev from '../Assets/maklonedagsegev.jpg';
import lebrak from '../Assets/lebrak.png';
import filehalibut from '../Assets/filehalibut.jpg';
import ktsitotdagmetuganot from '../Assets/ktsitotdagmetuganot.jpg';
import merlozahike from '../Assets/merlozahike.jpg';
import bakla from '../Assets/bakla.jpg';
import tunaaduma from '../Assets/tunaaduma.jpg';
import fileamnonmetugan from '../Assets/fileamnonmetugan.jpg';
import revakeves from '../Assets/revakeves.jpeg';
import tslaottale from '../Assets/tslaotale.jpg';
import lambneck from '../Assets/lambneck.jpg';
import kateftalekafu from '../Assets/kateftalekafu.jpg';
import shumankeves from '../Assets/shumankeves.jpeg';
import asadotale from '../Assets/asadotale.jpg';
import shipudekeves from '../Assets/shipudekeves.jpg';
import kateftaletari from '../Assets/kateftaletari.jpg';
import roshtalemeforak from '../Assets/roshtalemeforak.webp';
import zroatale from '../Assets/zroatale.jpg';
import halfroshkeves from '../Assets/halfroshkeves.jpg';
import alia from '../Assets/alia.webp';
import keveslebishul from '../Assets/keveslebishul.webp';
import shkedeegel from '../Assets/shkedeegel.jpg';
import reotegel from '../Assets/reotegel.jpg';
import kavedegel from '../Assets/kavedegel.jpg';
import zanavegel from '../Assets/zanavegel.jpg';
import meaimegel from '../Assets/meaimegel.jpg';

const products: Product[] = [

  {
    id: 1,
    name: 'אמנון עם עור',
    category: 'fish',
    shortDescription: 'דניס טרי, דג ים בעל בשר לבן ועדין',
    fullDescription: 'דניס טרי, דג ים בעל בשר לבן ועדין. מתאים לצלייה, בישול או טיגון. טעים במיוחד עם תבלינים ים תיכוניים.',
    price: 44,
    weight: '1 ק"ג',
    kashrutLevel: 'כשר למהדרין',
    imageSrc: `${amnonimor}`,
    isPromoted: false
  },
  {
    id: 2,
    name: 'אמנון ללא עור',
    category: 'fish',
    shortDescription: 'לברק טרי, דג ים בעל בשר לבן וטעים',
    fullDescription: 'לברק טרי, דג ים בעל בשר לבן וטעים. מתאים לצלייה, בישול או טיגון. עשיר בחלבון ודל בשומן.',
    price: 48,
    weight: '1 ק"ג',
    kashrutLevel: 'כשר למהדרין',
    imageSrc: `${amnonleloor}`,
    isPromoted: false
  },
  {
    id: 3,
    name: 'נילוס פרוס',
    category: 'fish',
    shortDescription: 'בורי טרי, דג ים בעל בשר לבן ועדין',
    fullDescription: 'בורי טרי, דג ים בעל בשר לבן ועדין. מתאים לצלייה, בישול או טיגון. טעים במיוחד עם תבלינים ים תיכוניים.',
    price: 75,
    weight: '1 ק"ג',
    kashrutLevel: 'כשר למהדרין',
    imageSrc: `${nilusparus}`,
    isPromoted: false
  },
  {
    id: 4,
    name: 'פילה סלמון',
    category: 'fish',
    shortDescription: 'מושט טרי, דג ים בעל בשר לבן וטעים',
    fullDescription: 'מושט טרי, דג ים בעל בשר לבן וטעים. מתאים לצלייה, בישול או טיגון. עשיר בחלבון ודל בשומן.',
    price: 78,
    weight: '1 ק"ג',
    kashrutLevel: 'כשר למהדרין',
    imageSrc: `${filesalmon}`,
    isPromoted: false
  },
  {
    id: 5,
    name: 'סלמון מנות',
    category: 'fish',
    shortDescription: 'סטייק סלמון טרי',
    fullDescription: 'סטייק סלמון טרי, עשיר באומגה 3, מתאים לצלייה או אפייה.',
    price: 95,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${salamonmanot}`,
    isPromoted: false
  },
  {
    id: 6,
    name: 'סלמון מנות ללא עור',
    category: 'fish',
    shortDescription: 'פילה סול טרי',
    fullDescription: 'פילה סול טרי, מתאים לטיגון או בישול.',
    price: 120,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${salamonleloor}`,
    isPromoted: false
  },
  {
    id: 7,
    name: 'מרלוזה ללא מים',
    category: 'fish',
    shortDescription: 'טונה לבנה טרייה',
    fullDescription: 'טונה לבנה טרייה, מתאימה לצלייה או בישול.',
    price: 45,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${marlozalelomaim}`,
    isPromoted: false
  },
  {
    id: 8,
    name: 'סטייק סלומון',
    category: 'fish',
    shortDescription: 'טונה חומה טרייה',
    fullDescription: 'טונה חומה טרייה, מתאימה לצלייה או בישול.',
    price: 65,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${stakesalamon}`,
    isPromoted: false
  },
  {
    id: 9,
    name: 'פילה סול',
    category: 'fish',
    shortDescription: 'פילה אמנון בגריל',
    fullDescription: 'פילה אמנון בגריל, מתאים לצלייה או טיגון.',
    price: 45,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${filesol}`,
    isPromoted: false
  },
  {
    id: 10,
    name: 'טונה לבנה',
    category: 'fish',
    shortDescription: 'פילה אמנון בציפוי',
    fullDescription: 'פילה אמנון בציפוי, מתאים לטיגון.',
    price: 65,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${tunalevana}`,
    isPromoted: false
  },
  {
    id: 11,
    name: 'טונה חומה',
    category: 'fish',
    shortDescription: 'פילה ברמונדי לוקוס',
    fullDescription: 'פילה ברמונדי לוקוס, מתאים לצלייה או טיגון.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${tunahuma}`,
    isPromoted: false
  },
  {
    id: 12,
    name: 'פילה ברבוניה',
    category: 'fish',
    shortDescription: 'פילה אנד ציפס',
    fullDescription: 'פילה אנד ציפס, מתאים לטיגון.',
    price: 32,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${filabarbunia}`,
    isPromoted: false
  },
  {
    id: 13,
    name: 'פילה אמנון בציפוי',
    category: 'fish',
    shortDescription: 'קציצות דג לבישול',
    fullDescription: 'קציצות דג לבישול, מתאימות לבישול במגוון רטבים.',
    price: 23,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${fileamnonbetsipui}`,
    isPromoted: false
  },
  {
    id: 14,
    name: 'פילה בייבי לוקוס',
    category: 'fish',
    shortDescription: 'מקלוני דג שגב',
    fullDescription: 'מקלוני דג שגב, מתאימים לטיגון.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${filebabylokus}`,
    isPromoted: false
  },
  {
    id: 15,
    name: "פיש אנד צ'יפס",
    category: 'fish',
    shortDescription: 'דג לברק טרי',
    fullDescription: 'דג לברק טרי, מתאים לצלייה או אפייה.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${fishandchips}`,
    isPromoted: false
  },
  {
    id: 16,
    name: 'קציצות דג לבישול',
    category: 'fish',
    shortDescription: 'פילה הליבוט טרי',
    fullDescription: 'פילה הליבוט טרי, מתאים לצלייה או טיגון.',
    price: 32,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${ktsitsotdaglebishul}`,
    isPromoted: false
  },
  {
    id: 17,
    name: 'מקלוני דג שגב',
    category: 'fish',
    shortDescription: 'קציצות דג מטוגנות',
    fullDescription: 'קציצות דג מטוגנות, מוכנות לאכילה.',
    price: 28,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${maklonedagsegev}`,
    isPromoted: false
  },
  {
    id: 18,
    name: 'לברק',
    category: 'fish',
    shortDescription: 'מרלוזה הייק קפוא',
    fullDescription: 'מרלוזה הייק קפוא, מתאימה לטיגון או בישול.',
    price: 58,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${lebrak}`,
    isPromoted: false
  },
  {
    id: 19,
    name: 'פילה הליבוט',
    category: 'fish',
    shortDescription: 'דג בקלה טרי',
    fullDescription: 'דג בקלה טרי, מתאים לטיגון או בישול.',
    price: 89,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${filehalibut}`,
    isPromoted: false
  },
  {
    id: 20,
    name: 'קציצות דג מטוגנות',
    category: 'fish',
    shortDescription: 'טונה אדומה טרייה',
    fullDescription: 'טונה אדומה טרייה, מתאימה לסושי, צלייה או בישול.',
    price: 35,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${ktsitotdagmetuganot}`,
    isPromoted: false
  },
  {
    id: 21,
    name: 'מרלוזה הייק 100% דג',
    category: 'fish',
    shortDescription: 'פילה אמנון קפוא',
    fullDescription: 'פילה אמנון קפוא, מתאים לטיגון או בישול.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${merlozahike}`,
    isPromoted: false
  },
  {
    id: 22,
    name: 'בקלה',
    category: 'fish',
    shortDescription: 'רבע כבש טרי',
    fullDescription: 'רבע כבש טרי, מתאים לצלייה או בישול.',
    price: 28,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${bakla}`,
    isPromoted: false
  },
  {
    id: 23,
    name: 'טונה אדומה',
    category: 'fish',
    shortDescription: 'צלעות טלה מובחרות',
    fullDescription: 'צלעות טלה מובחרות, מתאימות לגריל או צלייה.',
    price: 75,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${tunaaduma}`,
    isPromoted: false
  },
  {
    id: 24,
    name: ' פילה אמנון מטוגן',
    category: 'fish',
    shortDescription: 'צוואר טלה טרי',
    fullDescription: 'צוואר טלה טרי, מתאים לבישול ארוך.',
    price: 30,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${fileamnonmetugan}`,
    isPromoted: false
  },
  {
    id: 25,
    name: 'רבע כבש',
    category: 'lamb',
    shortDescription: 'כתף טלה קפוא',
    fullDescription: 'כתף טלה קפוא, מתאים לצלייה או בישול.',
    price: 145,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${revakeves}`,
    isPromoted: false
  },
  {
    id: 26,
    name: 'צלעות טלה',
    category: 'lamb',
    shortDescription: 'שומן כבש טרי',
    fullDescription: 'שומן כבש טרי, מתאים לתיבול ובישול.',
    price: 260,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${tslaottale}`,
    isPromoted: false
  },
  {
    id: 27,
    name: 'צוואר טלה',
    category: 'lamb',
    shortDescription: 'אסאדו טלה טרי',
    fullDescription: 'אסאדו טלה טרי, מתאים לבישול ארוך.',
    price: 110,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${lambneck}`,
    isPromoted: false
  },
  {
    id: 28,
    name: 'כתף טלה קפוא',
    category: 'lamb',
    shortDescription: 'שיפודי כבש מוכנים לצלייה',
    fullDescription: 'שיפודי כבש מוכנים לצלייה, עשויים מבשר כבש מובחר.',
    price: 140,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${kateftalekafu}`,
    isPromoted: false
  },
  {
    id: 29,
    name: 'שומן כבש',
    category: 'lamb',
    shortDescription: 'כתף טלה טרי',
    fullDescription: 'כתף טלה טרי, מתאים לצלייה או בישול.',
    price: 210,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${shumankeves}`,
    isPromoted: false
  },
  {
    id: 30,
    name: 'אסאדו טלה',
    category: 'lamb',
    shortDescription: 'ראש טלה מפורק',
    fullDescription: 'ראש טלה מפורק, מתאים לבישול.',
    price: 110,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${asadotale}`,
    isPromoted: false
  },
  {
    id: 31,
    name: 'שיפודי כבש',
    category: 'lamb',
    shortDescription: 'זרוע טלה טרייה',
    fullDescription: 'זרוע טלה טרייה, מתאימה לצלייה או בישול.',
    price: 190,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${shipudekeves}`,
    isPromoted: false
  },
  {
    id: 32,
    name: 'כתף טלה טרי',
    category: 'lamb',
    shortDescription: 'חצי ראש כבש',
    fullDescription: 'חצי ראש כבש, מתאים לבישול.',
    price: 145,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${kateftaletari}`,
    isPromoted: false
  },
  {
    id: 33,
    name: 'ראש טלה מפורק',
    category: 'lamb',
    shortDescription: 'אליה כבש',
    fullDescription: 'אליה כבש, שומן כבש מובחר.',
    price: 115,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${roshtalemeforak}`,
    isPromoted: false
  },
  {
    id: 34,
    name: 'זרוע טלה',
    category: 'lamb',
    shortDescription: 'כבש לבישול',
    fullDescription: 'כבש לבישול, מתאים למגוון תבשילים.',
    price: 160,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${zroatale}`,
    isPromoted: false
  },
  {
    id: 35,
    name: 'חצי ראש כבש',
    category: 'lamb',
    shortDescription: 'שוקי עגל טריים',
    fullDescription: 'שוקי עגל טריים, מתאימים לצלייה או בישול.',
    price: 75,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${halfroshkeves}`,
    isPromoted: false
  },
  {
    id: 36,
    name: 'אלייה',
    category: 'lamb',
    shortDescription: 'בשר ראש עגל טרי',
    fullDescription: 'בשר ראש עגל טרי, מתאים לבישול.',
    price: 260,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${alia}`,
    isPromoted: false
  },
  {
    id: 37,
    name: 'כבש לבישול',
    category: 'lamb',
    shortDescription: 'אשכי עגל טריים',
    fullDescription: 'אשכי עגל טריים, מתאימים לבישול.',
    price: 90,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${keveslebishul}`,
    isPromoted: false
  },
  {
    id: 38,
    name: 'שקדי עגל',
    category: 'calf',
    shortDescription: 'לשון עגל טרי',
    fullDescription: 'לשון עגל טרי, מתאים לבישול.',
    price: 420,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${shkedeegel}`,
    isPromoted: false
  },
  {
    id: 39,
    name: 'ריאות עגל',
    category: 'calf',
    shortDescription: 'ריאות עגל טריות',
    fullDescription: 'ריאות עגל טריות, מתאימות לבישול.',
    price: 60,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${reotegel}`,
    isPromoted: false
  },
  {
    id: 40,
    name: 'כבד עגל',
    category: 'calf',
    shortDescription: 'כבד עגל טרי',
    fullDescription: 'כבד עגל טרי, מתאים לצלייה או בישול.',
    price: 60,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${kavedegel}`,
    isPromoted: false
  },
  {
    id: 41,
    name: 'זנב עגל',
    category: 'calf',
    shortDescription: 'זנב עגל טרי',
    fullDescription: 'זנב עגל טרי, מתאים לבישול.',
    price: 125,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${zanavegel}`,
    isPromoted: false
  },
  {
    id: 42,
    name: 'מעיים',
    category: 'calf',
    shortDescription: 'מעיים עגל טריים',
    fullDescription: 'מעיים עגל טריים, מתאימים לבישול.',
    price: 95,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: `${meaimegel}`,
    isPromoted: false
  },
  {
    id: 43,
    name: 'מוח עגל בד״צ',
    category: 'calf',
    shortDescription: 'מוח עגל בד״צ',
    fullDescription: 'מוח עגל בד״צ, מתאים לבישול.',
    price: 360.00,
    weight: '1 ק"ג',
    kashrutLevel: 'בד"צ',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 44,
    name: 'לב עגל',
    category: 'calf',
    shortDescription: 'לב עגל טרי',
    fullDescription: 'לב עגל טרי, מתאים לבישול.',
    price: 60.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 45,
    name: 'בקר טחון טרי',
    category: 'beef',
    shortDescription: 'בקר טחון טרי',
    fullDescription: 'בקר טחון טרי, מתאים לקציצות, המבורגרים ותבשילים.',
    price: 78.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 46,
    name: 'שיירי חזה הודו',
    category: 'beef',
    shortDescription: 'שיירי חזה הודו',
    fullDescription: 'שיירי חזה הודו, מתאימים לבישול.',
    price: 89.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 47,
    name: 'פילה מדומה',
    category: 'beef',
    shortDescription: 'פילה מדומה',
    fullDescription: 'פילה מדומה, מתאים לצלייה או בישול.',
    price: 89.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 48,
    name: 'שיירי חזה הודו',
    category: 'beef',
    shortDescription: 'שיירי חזה הודו',
    fullDescription: 'שיירי חזה הודו, מתאימים לבישול.',
    price: 89.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 49,
    name: 'אנגוס',
    category: 'beef',
    shortDescription: 'בקר אנגוס מובחר',
    fullDescription: 'בקר אנגוס מובחר, מתאים לצלייה או בישול.',
    price: 220.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 50,
    name: 'אנטריקוט עם עצם',
    category: 'beef',
    shortDescription: 'אנטריקוט עם עצם',
    fullDescription: 'אנטריקוט עם עצם, מתאים לצלייה.',
    price: 180.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 51,
    name: 'צוואר',
    category: 'beef',
    shortDescription: 'צוואר בקר טרי',
    fullDescription: 'צוואר בקר טרי, מתאים לבישול ארוך.',
    price: 82.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 52,
    name: 'צלעות',
    category: 'beef',
    shortDescription: 'צלעות בקר טריות',
    fullDescription: 'צלעות בקר טריות, מתאימות לצלייה.',
    price: 85.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 53,
    name: 'אסאדו',
    category: 'beef',
    shortDescription: 'אסאדו בקר טרי',
    fullDescription: 'אסאדו בקר טרי, מתאים לבישול ארוך.',
    price: 85.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 54,
    name: 'אנטריקוט עגל',
    category: 'calf',
    shortDescription: 'אנטריקוט עגל טרי',
    fullDescription: 'אנטריקוט עגל טרי, מתאים לצלייה.',
    price: 240.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 55,
    name: 'סינטה פיקניה',
    category: 'beef',
    shortDescription: 'סינטה פיקניה',
    fullDescription: 'סינטה פיקניה, מתאימה לצלייה.',
    price: 180.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 56,
    name: 'סטייק פרימיום',
    category: 'beef',
    shortDescription: 'סטייק פרימיום',
    fullDescription: 'סטייק פרימיום, מתאים לצלייה.',
    price: 180.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 57,
    name: 'רוטפליש',
    category: 'beef',
    shortDescription: 'רוטפליש בקר',
    fullDescription: 'רוטפליש בקר, מתאים לבישול.',
    price: 200.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 58,
    name: 'פילה עגל',
    category: 'calf',
    shortDescription: 'פילה עגל טרי',
    fullDescription: 'פילה עגל טרי, מתאים לצלייה.',
    price: 300.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 59,
    name: 'אוסובוקו עגל',
    category: 'calf',
    shortDescription: 'אוסובוקו עגל טרי',
    fullDescription: 'אוסובוקו עגל טרי, מתאים לבישול ארוך.',
    price: 85.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 60,
    name: 'בקר טחון מבצע',
    category: 'beef',
    shortDescription: 'בקר טחון מבצע',
    fullDescription: 'בקר טחון מבצע, מתאים לקציצות ותבשילים.',
    price: 65.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 61,
    name: 'בקר טחון עם כבש',
    category: 'beef',
    shortDescription: 'בקר טחון עם כבש',
    fullDescription: 'בקר טחון עם כבש, מתאים לקציצות ותבשילים.',
    price: 78.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 62,
    name: 'אוסובוקו עגל',
    category: 'calf',
    shortDescription: 'אוסובוקו עגל טרי',
    fullDescription: 'אוסובוקו עגל טרי, מתאים לבישול ארוך.',
    price: 85.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 63,
    name: 'עצמות מוח',
    category: 'beef',
    shortDescription: 'עצמות מוח בקר',
    fullDescription: 'עצמות מוח בקר, מתאימות למרק.',
    price: 78.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 64,
    name: 'רוטפליש מושחר',
    category: 'beef',
    shortDescription: 'רוטפליש מושחר',
    fullDescription: 'רוטפליש מושחר, מתאים לבישול.',
    price: 210.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  // Turkey Products (added from images)
  {
    id: 65,
    name: 'הודו שלם',
    category: 'turkey',
    shortDescription: 'הודו שלם טרי',
    fullDescription: 'הודו שלם טרי, מתאים לצלייה או בישול.',
    price: 35.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg',
    isPromoted: false
  },
  {
    id: 66,
    name: 'הודו מפורק',
    category: 'turkey',
    shortDescription: 'הודו מפורק טרי',
    fullDescription: 'הודו מפורק טרי, מתאים לצלייה או בישול.',
    price: 40.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 67,
    name: 'שווארמה',
    category: 'turkey',
    shortDescription: 'שווארמה הודו',
    fullDescription: 'שווארמה הודו, מתובלת ומוכנה לצלייה.',
    price: 82.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 68,
    name: 'שווארמה נקבה',
    category: 'turkey',
    shortDescription: 'שווארמה הודו נקבה',
    fullDescription: 'שווארמה הודו נקבה, מתובלת ומוכנה לצלייה.',
    price: 88.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 69,
    name: 'שוק הודו מפורק',
    category: 'turkey',
    shortDescription: 'שוק הודו מפורק',
    fullDescription: 'שוק הודו מפורק, מתאים לבישול.',
    price: 68.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 70,
    name: 'חזה הודו שלם',
    category: 'turkey',
    shortDescription: 'חזה הודו שלם',
    fullDescription: 'חזה הודו שלם, מתאים לצלייה או בישול.',
    price: 52.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 71,
    name: 'שוקיים הודו',
    category: 'turkey',
    shortDescription: 'שוקיים הודו טריים',
    fullDescription: 'שוקיים הודו טריים, מתאימים לצלייה או בישול.',
    price: 52.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 72,
    name: 'כנף הודו',
    category: 'turkey',
    shortDescription: 'כנף הודו טרי',
    fullDescription: 'כנף הודו טרי, מתאים לצלייה או בישול.',
    price: 28.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 73,
    name: 'שניצל הודו',
    category: 'turkey',
    shortDescription: 'שניצל הודו טרי',
    fullDescription: 'שניצל הודו טרי, מתאים לטיגון.',
    price: 55.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 74,
    name: 'גרון הודו',
    category: 'turkey',
    shortDescription: 'גרון הודו טרי',
    fullDescription: 'גרון הודו טרי, מתאים לבישול.',
    price: 42.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 75,
    name: 'נתחי הודו',
    category: 'turkey',
    shortDescription: 'נתחי הודו טריים',
    fullDescription: 'נתחי הודו טריים, מתאימים לצלייה או בישול.',
    price: 45.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 76,
    name: 'אשכי הודו',
    category: 'turkey',
    shortDescription: 'אשכי הודו טריים',
    fullDescription: 'אשכי הודו טריים, מתאימים לבישול.',
    price: 200.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 77,
    name: 'הודו אדום טחון',
    category: 'turkey',
    shortDescription: 'הודו אדום טחון',
    fullDescription: 'הודו אדום טחון, מתאים לקציצות ותבשילים.',
    price: 68.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 78,
    name: 'שישליק הודו',
    category: 'turkey',
    shortDescription: 'שישליק הודו',
    fullDescription: 'שישליק הודו, מתאים לצלייה.',
    price: 60.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 79,
    name: 'עוף שלם',
    category: 'chicken',
    shortDescription: 'עוף שלם טרי',
    fullDescription: 'עוף שלם טרי, מתאים לצלייה או בישול.',
    price: 30.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 80,
    name: 'עוף מפורק',
    category: 'chicken',
    shortDescription: 'עוף מפורק טרי',
    fullDescription: 'עוף מפורק טרי, מתאים לצלייה או בישול.',
    price: 38.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 81,
    name: 'שניצל עוף',
    category: 'chicken',
    shortDescription: 'שניצל עוף טרי',
    fullDescription: 'שניצל עוף טרי, מתאים לטיגון.',
    price: 59.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 82,
    name: 'כרעיים',
    category: 'chicken',
    shortDescription: 'כרעיים עוף טריים',
    fullDescription: 'כרעיים עוף טריים, מתאימים לצלייה או בישול.',
    price: 48.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 83,
    name: 'שוקיים',
    category: 'chicken',
    shortDescription: 'שוקיים עוף טריים',
    fullDescription: 'שוקיים עוף טריים, מתאימים לצלייה או בישול.',
    price: 55.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 84,
    name: 'כנפיים',
    category: 'chicken',
    shortDescription: 'כנפיים עוף טריות',
    fullDescription: 'כנפיים עוף טריות, מתאימות לצלייה או בישול.',
    price: 24.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 85,
    name: 'פרגיות',
    category: 'chicken',
    shortDescription: 'פרגיות עוף טריות',
    fullDescription: 'פרגיות עוף טריות, מתאימות לצלייה או בישול.',
    price: 88.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 86,
    name: 'חזה עוף',
    category: 'chicken',
    shortDescription: 'חזה עוף טרי',
    fullDescription: 'חזה עוף טרי, מתאים לצלייה או בישול.',
    price: 55.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 87,
    name: 'כבד',
    category: 'chicken',
    shortDescription: 'כבד עוף טרי',
    fullDescription: 'כבד עוף טרי, מתאים לצלייה או בישול.',
    price: 48.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 88,
    name: 'לבבות',
    category: 'chicken',
    shortDescription: 'לבבות עוף טריים',
    fullDescription: 'לבבות עוף טריים, מתאימים לצלייה או בישול.',
    price: 48.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 89,
    name: 'טחול',
    category: 'chicken',
    shortDescription: 'טחול עוף טרי',
    fullDescription: 'טחול עוף טרי, מתאים לבישול.',
    price: 95.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 90,
    name: 'קורקבן',
    category: 'chicken',
    shortDescription: 'קורקבן עוף טרי',
    fullDescription: 'קורקבן עוף טרי, מתאים לבישול.',
    price: 28.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 91,
    name: 'גרון עוף',
    category: 'chicken',
    shortDescription: 'גרון עוף טרי',
    fullDescription: 'גרון עוף טרי, מתאים לבישול.',
    price: 12.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 92,
    name: 'פרגית/עוף עם עור/עצם',
    category: 'chicken',
    shortDescription: 'פרגית/עוף עם עור/עצם',
    fullDescription: 'פרגית/עוף עם עור/עצם, מתאימים לצלייה או בישול.',
    price: 75.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 93,
    name: 'טחון עוף',
    category: 'chicken',
    shortDescription: 'טחון עוף טרי',
    fullDescription: 'טחון עוף טרי, מתאים לקציצות ותבשילים.',
    price: 55.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 94,
    name: 'פרגית משופד',
    category: 'chicken',
    shortDescription: 'פרגית משופד',
    fullDescription: 'פרגית משופד, מתאימה לצלייה.',
    price: 115.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 95,
    name: 'פילה עוף',
    category: 'chicken',
    shortDescription: 'פילה עוף טרי',
    fullDescription: 'פילה עוף טרי, מתאים לצלייה או בישול.',
    price: 65.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 96,
    name: 'עוף יונים',
    category: 'chicken',
    shortDescription: 'עוף יונים טרי',
    fullDescription: 'עוף יונים טרי, מתאים לצלייה או בישול.',
    price: 58.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 97,
    name: 'כנפיים חצי ונקי',
    category: 'chicken',
    shortDescription: 'כנפיים חצי ונקי',
    fullDescription: 'כנפיים חצי ונקי, מתאימות לצלייה או בישול.',
    price: 28.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 98,
    name: 'עוף ללא עצם',
    category: 'chicken',
    shortDescription: 'עוף ללא עצם טרי',
    fullDescription: 'עוף ללא עצם טרי, מתאים לצלייה או בישול.',
    price: 65.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 99,
    name: 'שניצל פרמיום',
    category: 'chicken',
    shortDescription: 'שניצל פרמיום עוף',
    fullDescription: 'שניצל פרמיום עוף, מתאים לטיגון.',
    price: 68.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  },
  {
    id: 100,
    name: 'עוף טחון מחוזק',
    category: 'chicken',
    shortDescription: 'עוף טחון מחוזק',
    fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 65.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    imageSrc: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg',
    isPromoted: false
  }
];

export default products;