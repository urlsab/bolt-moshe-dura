import { Product } from '../types/product';
// import amnonimor from '../Assets/amnonimor.jpg';
// import amnonleloor from '../Assets/amnonleloor.jpg';
// import nilusparus from '../Assets/nilusparus.jpg';
// import filesalmon from '../Assets/filesalmon.jpg';
// import salamonmanot from '../Assets/salamonmanot.jpg';
// import salamonleloor from '../Assets/salamonmanotleloor.jpg';
// import marlozalelomaim from '../Assets/marlozelelomaim.jpg';
// import stakesalamon from '../Assets/stakesalamon.jpg';
// import filesol from '../Assets/filesol.jpg';
// import tunalevana from '../Assets/tunalevana.jpg';
// import tunahuma from '../Assets/tunahuma.jpg';
// import filabarbunia from '../Assets/filebarbunia.jpg';
// import fileamnonbetsipui from '../Assets/filaamnonbetsipui.jpg';
// import filebabylokus from '../Assets/filebabylokus.webp';
// import fishandchips from '../Assets/fish-and-chips.jpg';
// import ktsitsotdaglebishul from '../Assets/ktsitsotdagimlebishul.jpg';
// import maklonedagsegev from '../Assets/maklonedagsegev.jpg';
// import lebrak from '../Assets/lebrak.png';
// import filehalibut from '../Assets/filehalibut.jpg';
// import ktsitotdagmetuganot from '../Assets/ktsitotdagmetuganot.jpg';
// import merlozahike from '../Assets/merlozahike.jpg';
// import bakla from '../Assets/bakla.jpg';
// import tunaaduma from '../Assets/tunaaduma.jpg';
// import fileamnonmetugan from '../Assets/fileamnonmetugan.jpg';
// import revakeves from '../Assets/revakeves.jpeg';
// import tslaottale from '../Assets/tslaotale.jpg';
// import lambneck from '../Assets/lambneck.jpg';
// import kateftalekafu from '../Assets/kateftalekafu.jpg';
// import shumankeves from '../Assets/shumankeves.jpeg';
// import asadotale from '../Assets/asadotale.jpg';
// import shipudekeves from '../Assets/shipudekeves.jpg';
// import kateftaletari from '../Assets/kateftaletari.jpg';
// import roshtalemeforak from '../Assets/roshtalemeforak.webp';
// import zroatale from '../Assets/zroatale.jpg';
// import halfroshkeves from '../Assets/halfroshkeves.jpg';
// import alia from '../Assets/alia.webp';
// import keveslebishul from '../Assets/keveslebishul.webp';
// import shkedeegel from '../Assets/shkedeegel.jpg';
// import reotegel from '../Assets/reotegel.jpg';
// import kavedegel from '../Assets/kavedegel.jpg';
// import zanavegel from '../Assets/zanavegel.jpg';
// import meaimegel from '../Assets/meaimegel.jpg';
// import moahegel from '../Assets/moahegel.jpg';
// import levegel from '../Assets/levegel.jpg';
// import gelballs from '../Assets/gelballs.jpg';
// import lashonegel from '../Assets/lashonegel.jpg';
// import basarroshtari from '../Assets/basarroshtari.jpg';
// import tslikatef from '../Assets/tslikatef.jpg';
// import katefmerkazi from '../Assets/katefmerkazi.jpg';
// import filemedume from '../Assets/filemedume.jpg';
// import shrirhazroaa from '../Assets/shrirhazroaa.jpg';
// import bakartahuntari from '../Assets/bakartahuntari.jpg';
// import tsavarbaker from '../Assets/tsavarbaker.jpg';
// import tslaotbakar from '../Assets/tslaotbakar.jpg';
// import asado from '../Assets/asado.webp';
// import antrikotimetsem from '../Assets/antrikotimetsem.jpg';
// import angos from '../Assets/angos.jpg';
// import antrikot from '../Assets/antrikot.jpg';
// import antrikotegla from '../Assets/antrikotegla.jpg';
// import sintapikenia from '../Assets/sintapikenia.webp';
// import stakeprimium from '../Assets/stakeprimium.jpg';
// import rotfilsh from '../Assets/rotfilsh.jpg';
// import filebakar from '../Assets/filebakar.jpg';
// import osoboko from '../Assets/osoboko.webp';
// import bakartahunomkeves from '../Assets/bakartahunomkeves.jpg';
// import tslaottsavarimetsem from '../Assets/tslaottsavarimetsem.jpg';
// import asadoblietsem from '../Assets/asadoblietsem.jpg';
// import atsamotmoah from '../Assets/atsamotmoah.jpg';
// import osobokoegel from '../Assets/osobokoegel.jpg';
// import ontriv from '../Assets/ontriv.jpg'
// import pargitaroch from '../Assets/pargitaroch.webp';
// import rotflyshmeshupad from '../Assets/rotflyshmeshupad.jpg';
// import hodushalem from '../Assets/hodushalem.jpg';
// import hodumeforak from '../Assets/hodumeforak.jpg';
// import shuarma from '../Assets/shuarma.jpg';
// import shuarmanekeva from '../Assets/shuarmanekeva.jpg';
// import shokhodumeforak from '../Assets/shokhodumeforak.jpg';
// import hazehodushalem from '../Assets/hazehodushalem.jpg';
// import shokiyimhodu from '../Assets/shokiyimhodu.jpg';
// import kanfehodu from '../Assets/kanfehodu.jpg';
// import shnitselhodu from '../Assets/shnitselhodu.jpg';
// import garonhodu from '../Assets/garonhodu.jpg';
// import natehihodu from '../Assets/natehihodu.jpg';
// import ashahehodu from '../Assets/ashahehodu.jpg';
// import hoduadomtachon from '../Assets/hoduadomtachon.png';
// import hodutachon from '../Assets/hodutachon.jpg';
// import shishlikhodu from '../Assets/shishlikhodu.jpg';
// import ofshalem from '../Assets/ofshalem.jpg';
// import ofmeforak from '../Assets/ofmeforak.jpg';
// import shnitsel from '../Assets/shnitsel.jpg';
// import kraaayim from '../Assets/kraaayim.jpg';
// import shokaim from '../Assets/shokaim.jpg';
// import yerechaim from '../Assets/yerechaim.jpg';
// import kenafaim from '../Assets/kenafaim.jpg';
// import pargiot from '../Assets/pargiot.jpg';
// import hazeof from '../Assets/hazeof.jpg';
// import kaved from '../Assets/kaved.jpg';
// import levavot from '../Assets/levavot.jpg';
// import techol from '../Assets/techol.jpg';
// import kurkevan from '../Assets/kurkevan.jpg';
// import garonof from '../Assets/garonof.jpg';
// import pargitoretsem from '../Assets/pargitoretsem.webp';
// import oftachun from '../Assets/oftachun.jpg';
// import pargitmeshupad from '../Assets/pargitmeshupad.jpg';
// import fileaof from '../Assets/fileaof.jpeg';
// import ofyonim from '../Assets/ofyonim.jpg';
// import levavotmeshupad from '../Assets/levavotmeshupad.jpeg';
// import shnitzelprimium from '../Assets/shnitzelprimium.jpg';
// import kenafayimhatsui from '../Assets/kenafayimhatsui.jpg';
// import tachuntarimachapud from '../Assets/tachuntarimachapud.jpg';
// import ofleloetsem from '../Assets/ofleloetsem.jpg';
// import meoraviyerushalmi from '../Assets/meoraviyerushalmi.webp';
// import nakniksOff from '../Assets/nakniksOff.webp';
// import offsNaknik from '../Assets/offsNaknik.jpg';
// import hodunaknik from '../Assets/hodunaknik.webp';
// import mergez from '../Assets/mergez.jpg';
// import mergezBeiti from '../Assets/mergezBeiti.jpeg';
// import beitmergezkilo from '../Assets/beitmergezkilo.webp';
// import tsorisos from '../Assets/tsorisos.jpg';
// import hamburger from '../Assets/hamburger.webp';
// import hamburgernewyork from '../Assets/hamburgernewyork.jpg';
// import hamburgerbeiti from '../Assets/hamburgerbeiti.jpg';
// import hamburgerxl from '../Assets/hamburgerxl.webp';
// import kababbb from '../Assets/kababbb.jpg';
// import kababbbtale from '../Assets/kababbbtale.jpg';
// import kababbbromani from '../Assets/kababbbromani.jpeg';
// import ktsitsotbeitiot from '../Assets/ktsitsotbeitiot.jpg';
// import kababkeves from '../Assets/kababkeves.jpeg';
// import kababhabait from '../Assets/kababhabait.jpeg';
// import steakpargit from '../Assets/steakpargit.jpg';
// import shipudepargit from '../Assets/shipudepargit.jpg';
// import shipudekaved from '../Assets/shipudekaved.jpg';
// import shipudelavavot from '../Assets/shipudelavavot.png';
// import knafaimmetubal from '../Assets/knafaimmetubal.jpeg';
// import fileminyon from '../Assets/fileminyon.jpg';
// import tomahok from '../Assets/tomahok.jpg';
// import antrikotleloetsem from '../Assets/antrikotleloetsem.jpg';
// import seakangos from '../Assets/seakangos.jpg';
// import shipudeantrikot from '../Assets/shipudeantrikot.jpg';
// import tslaotkevesss from '../Assets/tslaotkevesss.jpg';
// import shipudeshishlikimlia from '../Assets/shipudeshishlikimlia.jpg';
// import shumanliah from '../Assets/shumanliah.jpg';
// import shipudeshkedimm from '../Assets/shipudeshkedimm.jpg';
// import sukariotfilee from '../Assets/sukariotfilee.jpg';
// import sukariotararis from '../Assets/sukariotararis.webp';

const products: Product[] = [
  {
    id: 1,
    name: 'אמנון עם עור',
    category: 'fish',
    // shortDescription: 'דניס טרי, דג ים בעל בשר לבן ועדין',
    // fullDescription: 'דניס טרי, דג ים בעל בשר לבן ועדין. מתאים לצלייה, בישול או טיגון. טעים במיוחד עם תבלינים ים תיכוניים.',
    price: 44,
    weight: '1 ק"ג',
    kashrutLevel: 'כשר למהדרין',
    // imageSrc: `${amnonimor}`,
    isPromoted: false
  },
  {
    id: 2,
    name: 'אמנון ללא עור',
    category: 'fish',
    // shortDescription: 'לברק טרי, דג ים בעל בשר לבן וטעים',
    // fullDescription: 'לברק טרי, דג ים בעל בשר לבן וטעים. מתאים לצלייה, בישול או טיגון. עשיר בחלבון ודל בשומן.',
    price: 48,
    weight: '1 ק"ג',
    kashrutLevel: 'כשר למהדרין',
    // imageSrc: `${amnonleloor}`,
    isPromoted: false
  },
  {
    id: 3,
    name: 'נילוס פרוס',
    category: 'fish',
    // shortDescription: 'בורי טרי, דג ים בעל בשר לבן ועדין',
    // fullDescription: 'בורי טרי, דג ים בעל בשר לבן ועדין. מתאים לצלייה, בישול או טיגון. טעים במיוחד עם תבלינים ים תיכוניים.',
    price: 75,
    weight: '1 ק"ג',
    kashrutLevel: 'כשר למהדרין',
    // imageSrc: `${nilusparus}`,
    isPromoted: false
  },
  {
    id: 4,
    name: 'פילה סלמון',
    category: 'fish',
    // shortDescription: 'מושט טרי, דג ים בעל בשר לבן וטעים',
    // fullDescription: 'מושט טרי, דג ים בעל בשר לבן וטעים. מתאים לצלייה, בישול או טיגון. עשיר בחלבון ודל בשומן.',
    price: 78,
    weight: '1 ק"ג',
    kashrutLevel: 'כשר למהדרין',
    // imageSrc: `${filesalmon}`,
    isPromoted: false
  },
  {
    id: 5,
    name: 'סלמון מנות',
    category: 'fish',
    // shortDescription: 'סטייק סלמון טרי',
    // fullDescription: 'סטייק סלמון טרי, עשיר באומגה 3, מתאים לצלייה או אפייה.',
    price: 95,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${salamonmanot}`,
    isPromoted: false
  },
  {
    id: 6,
    name: 'סלמון מנות ללא עור',
    category: 'fish',
    // shortDescription: 'פילה סול טרי',
    // fullDescription: 'פילה סול טרי, מתאים לטיגון או בישול.',
    price: 120,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${salamonleloor}`,
    isPromoted: false
  },
  {
    id: 7,
    name: 'מרלוזה ללא מים',
    category: 'fish',
    // shortDescription: 'טונה לבנה טרייה',
    // fullDescription: 'טונה לבנה טרייה, מתאימה לצלייה או בישול.',
    price: 45,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${marlozalelomaim}`,
    isPromoted: false
  },
  {
    id: 8,
    name: 'סטייק סלומון',
    category: 'fish',
    // shortDescription: 'טונה חומה טרייה',
    // fullDescription: 'טונה חומה טרייה, מתאימה לצלייה או בישול.',
    price: 65,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${stakesalamon}`,
    isPromoted: false
  },
  {
    id: 9,
    name: 'פילה סול',
    category: 'fish',
    // shortDescription: 'פילה אמנון בגריל',
    // fullDescription: 'פילה אמנון בגריל, מתאים לצלייה או טיגון.',
    price: 45,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${filesol}`,
    isPromoted: false
  },
  {
    id: 10,
    name: 'טונה לבנה',
    category: 'fish',
    // shortDescription: 'פילה אמנון בציפוי',
    // fullDescription: 'פילה אמנון בציפוי, מתאים לטיגון.',
    price: 65,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${tunalevana}`,
    isPromoted: false
  },
  {
    id: 11,
    name: 'טונה חומה',
    category: 'fish',
    // shortDescription: 'פילה ברמונדי לוקוס',
    // fullDescription: 'פילה ברמונדי לוקוס, מתאים לצלייה או טיגון.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${tunahuma}`,
    isPromoted: false
  },
  {
    id: 12,
    name: 'פילה ברבוניה',
    category: 'fish',
    // shortDescription: 'פילה אנד ציפס',
    // fullDescription: 'פילה אנד ציפס, מתאים לטיגון.',
    price: 32,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${filabarbunia}`,
    isPromoted: false
  },
  {
    id: 13,
    name: 'פילה אמנון בציפוי',
    category: 'fish',
    // shortDescription: 'קציצות דג לבישול',
    // fullDescription: 'קציצות דג לבישול, מתאימות לבישול במגוון רטבים.',
    price: 23,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${fileamnonbetsipui}`,
    isPromoted: false
  },
  {
    id: 14,
    name: 'פילה בייבי לוקוס',
    category: 'fish',
    // shortDescription: 'מקלוני דג שגב',
    // fullDescription: 'מקלוני דג שגב, מתאימים לטיגון.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${filebabylokus}`,
    isPromoted: false
  },
  {
    id: 15,
    name: "פיש אנד צ'יפס",
    category: 'fish',
    // shortDescription: 'דג לברק טרי',
    // fullDescription: 'דג לברק טרי, מתאים לצלייה או אפייה.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${fishandchips}`,
    isPromoted: false
  },
  {
    id: 16,
    name: 'קציצות דג לבישול',
    category: 'fish',
    // shortDescription: 'פילה הליבוט טרי',
    // fullDescription: 'פילה הליבוט טרי, מתאים לצלייה או טיגון.',
    price: 32,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${ktsitsotdaglebishul}`,
    isPromoted: false
  },
  {
    id: 17,
    name: 'מקלוני דג שגב',
    category: 'fish',
    // shortDescription: 'קציצות דג מטוגנות',
    // fullDescription: 'קציצות דג מטוגנות, מוכנות לאכילה.',
    price: 28,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${maklonedagsegev}`,
    isPromoted: false
  },
  {
    id: 18,
    name: 'לברק',
    category: 'fish',
    // shortDescription: 'מרלוזה הייק קפוא',
    // fullDescription: 'מרלוזה הייק קפוא, מתאימה לטיגון או בישול.',
    price: 58,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${lebrak}`,
    isPromoted: false
  },
  {
    id: 19,
    name: 'פילה הליבוט',
    category: 'fish',
    // shortDescription: 'דג בקלה טרי',
    // fullDescription: 'דג בקלה טרי, מתאים לטיגון או בישול.',
    price: 89,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${filehalibut}`,
    isPromoted: false
  },
  {
    id: 20,
    name: 'קציצות דג מטוגנות',
    category: 'fish',
    // shortDescription: 'טונה אדומה טרייה',
    // fullDescription: 'טונה אדומה טרייה, מתאימה לסושי, צלייה או בישול.',
    price: 35,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${ktsitotdagmetuganot}`,
    isPromoted: false
  },
  {
    id: 21,
    name: 'מרלוזה הייק 100% דג',
    category: 'fish',
    // shortDescription: 'פילה אמנון קפוא',
    // fullDescription: 'פילה אמנון קפוא, מתאים לטיגון או בישול.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${merlozahike}`,
    isPromoted: false
  },
  {
    id: 22,
    name: 'בקלה',
    category: 'fish',
    // shortDescription: 'רבע כבש טרי',
    // fullDescription: 'רבע כבש טרי, מתאים לצלייה או בישול.',
    price: 28,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${bakla}`,
    isPromoted: false
  },
  {
    id: 23,
    name: 'טונה אדומה',
    category: 'fish',
    // shortDescription: 'צלעות טלה מובחרות',
    // fullDescription: 'צלעות טלה מובחרות, מתאימות לגריל או צלייה.',
    price: 75,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${tunaaduma}`,
    isPromoted: false
  },
  {
    id: 24,
    name: ' פילה אמנון מטוגן',
    category: 'fish',
    // shortDescription: 'צוואר טלה טרי',
    // fullDescription: 'צוואר טלה טרי, מתאים לבישול ארוך.',
    price: 30,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${fileamnonmetugan}`,
    isPromoted: false
  },
  {
    id: 25,
    name: 'רבע כבש',
    category: 'lamb',
    // shortDescription: 'כתף טלה קפוא',
    // fullDescription: 'כתף טלה קפוא, מתאים לצלייה או בישול.',
    price: 145,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${revakeves}`,
    isPromoted: false
  },
  {
    id: 26,
    name: 'צלעות טלה',
    category: 'lamb',
    // shortDescription: 'שומן כבש טרי',
    // fullDescription: 'שומן כבש טרי, מתאים לתיבול ובישול.',
    price: 260,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${tslaottale}`,
    isPromoted: false
  },
  {
    id: 27,
    name: 'צוואר טלה',
    category: 'lamb',
    // shortDescription: 'אסאדו טלה טרי',
    // fullDescription: 'אסאדו טלה טרי, מתאים לבישול ארוך.',
    price: 110,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${lambneck}`,
    isPromoted: false
  },
  {
    id: 28,
    name: 'כתף טלה קפוא',
    category: 'lamb',
    // shortDescription: 'שיפודי כבש מוכנים לצלייה',
    // fullDescription: 'שיפודי כבש מוכנים לצלייה, עשויים מבשר כבש מובחר.',
    price: 140,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${kateftalekafu}`,
    isPromoted: false
  },
  {
    id: 29,
    name: 'שומן כבש',
    category: 'lamb',
    // shortDescription: 'כתף טלה טרי',
    // fullDescription: 'כתף טלה טרי, מתאים לצלייה או בישול.',
    price: 230,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shumankeves}`,
    isPromoted: false
  },
  {
    id: 30,
    name: 'אסאדו טלה',
    category: 'lamb',
    // shortDescription: 'ראש טלה מפורק',
    // fullDescription: 'ראש טלה מפורק, מתאים לבישול.',
    price: 110,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${asadotale}`,
    isPromoted: false
  },
  {
    id: 31,
    name: 'שיפודי כבש',
    category: 'lamb',
    // shortDescription: 'זרוע טלה טרייה',
    // fullDescription: 'זרוע טלה טרייה, מתאימה לצלייה או בישול.',
    price: 190,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shipudekeves}`,
    isPromoted: false
  },
  {
    id: 32,
    name: 'כתף טלה טרי',
    category: 'lamb',
    // shortDescription: 'חצי ראש כבש',
    // fullDescription: 'חצי ראש כבש, מתאים לבישול.',
    price: 145,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${kateftaletari}`,
    isPromoted: false
  },
  {
    id: 33,
    name: 'ראש טלה מפורק',
    category: 'lamb',
    // shortDescription: 'אליה כבש',
    // fullDescription: 'אליה כבש, שומן כבש מובחר.',
    price: 115,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${roshtalemeforak}`,
    isPromoted: false
  },
  {
    id: 34,
    name: 'זרוע טלה',
    category: 'lamb',
    // shortDescription: 'כבש לבישול',
    // fullDescription: 'כבש לבישול, מתאים למגוון תבשילים.',
    price: 160,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${zroatale}`,
    isPromoted: false
  },
  {
    id: 35,
    name: 'חצי ראש כבש',
    category: 'lamb',
    // shortDescription: 'שוקי עגל טריים',
    // fullDescription: 'שוקי עגל טריים, מתאימים לצלייה או בישול.',
    price: 75,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${halfroshkeves}`,
    isPromoted: false
  },
  {
    id: 36,
    name: 'אלייה',
    category: 'lamb',
    // shortDescription: 'בשר ראש עגל טרי',
    // fullDescription: 'בשר ראש עגל טרי, מתאים לבישול.',
    price: 260,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${alia}`,
    isPromoted: false
  },
  {
    id: 37,
    name: 'כבש לבישול',
    category: 'lamb',
    // shortDescription: 'אשכי עגל טריים',
    // fullDescription: 'אשכי עגל טריים, מתאימים לבישול.',
    price: 90,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${keveslebishul}`,
    isPromoted: false
  },
  {
    id: 38,
    name: 'שקדי עגל',
    category: 'calf',
    // shortDescription: 'לשון עגל טרי',
    // fullDescription: 'לשון עגל טרי, מתאים לבישול.',
    price: 420,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shkedeegel}`,
    isPromoted: false
  },
  {
    id: 39,
    name: 'ריאות עגל',
    category: 'calf',
    // shortDescription: 'ריאות עגל טריות',
    // fullDescription: 'ריאות עגל טריות, מתאימות לבישול.',
    price: 60,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${reotegel}`,
    isPromoted: false
  },
  {
    id: 40,
    name: 'כבד עגל',
    category: 'calf',
    // shortDescription: 'כבד עגל טרי',
    // fullDescription: 'כבד עגל טרי, מתאים לצלייה או בישול.',
    price: 60,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${kavedegel}`,
    isPromoted: false
  },
  {
    id: 41,
    name: 'זנב עגל',
    category: 'calf',
    // shortDescription: 'זנב עגל טרי',
    // fullDescription: 'זנב עגל טרי, מתאים לבישול.',
    price: 125,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${zanavegel}`,
    isPromoted: false
  },
  {
    id: 42,
    name: 'מעיים',
    category: 'calf',
    // shortDescription: 'מעיים עגל טריים',
    // fullDescription: 'מעיים עגל טריים, מתאימים לבישול.',
    price: 95,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${meaimegel}`,
    isPromoted: false
  },
  {
    id: 43,
    name: 'מוח עגל בד״צ',
    category: 'calf',
    // shortDescription: 'מוח עגל בד״צ',
    // fullDescription: 'מוח עגל בד״צ, מתאים לבישול.',
    price: 360.00,
    weight: '1 ק"ג',
    kashrutLevel: 'בד"צ',
    // imageSrc: `${moahegel}`,
    isPromoted: false
  },
  {
    id: 44,
    name: 'לב עגל',
    category: 'calf',
    // shortDescription: 'לב עגל טרי',
    // fullDescription: 'לב עגל טרי, מתאים לבישול.',
    price: 60,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${levegel}`,
    isPromoted: false
  },
  {
    id: 45,
    name: 'אשכי עגל',
    category: 'calf',
    // shortDescription: 'בקר טחון טרי',
    // fullDescription: 'בקר טחון טרי, מתאים לקציצות, המבורגרים ותבשילים.',
    price: 95,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${gelballs}`,
    isPromoted: false
  },
  {
    id: 46,
    name: 'לשון עגל טרי',
    category: 'calf',
    // shortDescription: 'שיירי חזה הודו',
    // fullDescription: 'שיירי חזה הודו, מתאימים לבישול.',
    price: 85,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${lashonegel}`,
    isPromoted: false
  },
  {
    id: 47,
    name: 'בשר ראש טרי',
    category: 'calf',
    // shortDescription: 'פילה מדומה',
    // fullDescription: 'פילה מדומה, מתאים לצלייה או בישול.',
    price: 95,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${basarroshtari}`,
    isPromoted: false
  },
  {
    id: 48,
    name: 'צלי כתף',
    category: 'beef',
    // shortDescription: 'שיירי חזה הודו',
    // fullDescription: 'שיירי חזה הודו, מתאימים לבישול.',
    price: 99,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${tslikatef}`,
    isPromoted: false
  },
  {
    id: 49,
    name: 'כתף מרכזי',
    category: 'beef',
    // shortDescription: 'בקר אנגוס מובחר',
    // fullDescription: 'בקר אנגוס מובחר, מתאים לצלייה או בישול.',
    price: 89,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${katefmerkazi}`,
    isPromoted: false
  },
  {
    id: 50,
    name: 'פילה מדומה',
    category: 'beef',
    // shortDescription: 'אנטריקוט עם עצם',
    // fullDescription: 'אנטריקוט עם עצם, מתאים לצלייה.',
    price: 89,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${filemedume}`,
    isPromoted: false
  },
  {
    id: 51,
    name: 'שריר הזרוע',
    category: 'beef',
    // shortDescription: 'צוואר בקר טרי',
    // fullDescription: 'צוואר בקר טרי, מתאים לבישול ארוך.',
    price: 89,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shrirhazroaa}`,
    isPromoted: false
  },
  {
    id: 52,
    name: 'בקר טחון טרי',
    category: 'beef',
    // shortDescription: 'צלעות בקר טריות',
    // fullDescription: 'צלעות בקר טריות, מתאימות לצלייה.',
    price: 78,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${bakartahuntari}`,
    isPromoted: false
  },
  {
    id: 53,
    name: 'צוואר',
    category: 'beef',
    // shortDescription: 'אסאדו בקר טרי',
    // fullDescription: 'אסאדו בקר טרי, מתאים לבישול ארוך.',
    price: 82,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${tsavarbaker}`,
    isPromoted: false
  },
  {
    id: 54,
    name: 'צלעות',
    category: 'calf',
    // shortDescription: 'אנטריקוט עגל טרי',
    // fullDescription: 'אנטריקוט עגל טרי, מתאים לצלייה.',
    price: 85,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${tslaotbakar}`,
    isPromoted: false
  },
  {
    id: 55,
    name: 'אסאדו',
    category: 'beef',
    // shortDescription: 'סינטה פיקניה',
    // fullDescription: 'סינטה פיקניה, מתאימה לצלייה.',
    price: 85,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${asado}`,
    isPromoted: false
  },
  {
    id: 56,
    name: 'אנטריקוט עם עצם',
    category: 'beef',
    // shortDescription: 'סטייק פרימיום',
    // fullDescription: 'סטייק פרימיום, מתאים לצלייה.',
    price: 180,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${antrikotimetsem}`,
    isPromoted: false
  },
  {
    id: 57,
    name: 'אנגוס',
    category: 'beef',
    // shortDescription: 'רוטפליש בקר',
    // fullDescription: 'רוטפליש בקר, מתאים לבישול.',
    price: 220,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${angos}`,
    isPromoted: false
  },
  {
    id: 58,
    name: 'אנטריקוט',
    category: 'calf',
    // shortDescription: 'פילה עגל טרי',
    // fullDescription: 'פילה עגל טרי, מתאים לצלייה.',
    price: 180,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${antrikot}`,
    isPromoted: false
  },
  {
    id: 59,
    name: 'אנטריקוט עגלה',
    category: 'calf',
    // shortDescription: 'אוסובוקו עגל טרי',
    // fullDescription: 'אוסובוקו עגל טרי, מתאים לבישול ארוך.',
    price: 240,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${antrikotegla}`,
    isPromoted: false
  },
  {
    id: 60,
    name: 'סינטה פיקניה',
    category: 'beef',
    // shortDescription: 'בקר טחון מבצע',
    // fullDescription: 'בקר טחון מבצע, מתאים לקציצות ותבשילים.',
    price: 180,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${sintapikenia}`,
    isPromoted: false
  },
  {
    id: 61,
    name: 'סטייק פרימיום vip',
    category: 'beef',
    // shortDescription: 'בקר טחון עם כבש',
    // fullDescription: 'בקר טחון עם כבש, מתאים לקציצות ותבשילים.',
    price: 300,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${stakeprimium}`,
    isPromoted: false
  },
  {
    id: 62,
    name: 'רוטפלש לא משופד',
    category: 'calf',
    // shortDescription: 'אוסובוקו עגל טרי',
    // fullDescription: 'אוסובוקו עגל טרי, מתאים לבישול ארוך.',
    price: 210,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${rotfilsh}`,
    isPromoted: false
  },
  {
    id: 63,
    name: 'פילה בקר',
    category: 'beef',
    // shortDescription: 'עצמות מוח בקר',
    // fullDescription: 'עצמות מוח בקר, מתאימות למרק.',
    price: 300,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${filebakar}`,
    isPromoted: false
  },
  {
    id: 64,
    name: 'אוסובוקו',
    category: 'beef',
    // shortDescription: 'רוטפליש מושחר',
    // fullDescription: 'רוטפליש מושחר, מתאים לבישול.',
    price: 85,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${osoboko}`,
    isPromoted: false
  },
  // בקר טחון מבצע 65 - לא רשמתי כאן - לשאול את משה אם זה במבצעים וזה בתוקף עדיין
  // Turkey Products (added from images)
  {
    id: 65,
    name: 'בקר טחון עם כבש',
    category: 'beef',
    // shortDescription: 'הודו שלם טרי',
    // fullDescription: 'הודו שלם טרי, מתאים לצלייה או בישול.',
    price: 78,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${bakartahunomkeves}`,
    isPromoted: false
  },
  {
    id: 66,
    name: 'צלעות / צוואר עם עצם',
    category: 'beef',
    // shortDescription: 'הודו מפורק טרי',
    // fullDescription: 'הודו מפורק טרי, מתאים לצלייה או בישול.',
    price: 80,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${tslaottsavarimetsem}`,
    isPromoted: false
  },
  {
    id: 67,
    name: 'אסאדו ללא עצם',
    category: 'beef',
    // shortDescription: 'שווארמה הודו',
    // fullDescription: 'שווארמה הודו, מתובלת ומוכנה לצלייה.',
    price: 95,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${asadoblietsem}`,
    isPromoted: false
  },
  {
    id: 68,
    name: 'עצמות מוח',
    category: 'beef',
    // shortDescription: 'שווארמה הודו נקבה',
    // fullDescription: 'שווארמה הודו נקבה, מתובלת ומוכנה לצלייה.',
    price: 78,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${atsamotmoah}`,
    isPromoted: false
  },
  {
    id: 69,
    name: 'אוסובוקו עגל',
    category: 'beef',
    // shortDescription: 'שוק הודו מפורק',
    // fullDescription: 'שוק הודו מפורק, מתאים לבישול.',
    price: 85,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${osobokoegel}`,
    isPromoted: false
  },
  {
    id: 70,
    name: 'אונטריב',
    category: 'beef',
    // shortDescription: 'חזה הודו שלם',
    // fullDescription: 'חזה הודו שלם, מתאים לצלייה או בישול.',
    price: 88,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${ontriv}`,
    isPromoted: false
  },
  {
    id: 71,
    name: 'פרגית ארוך',
    category: 'chicken',
    // shortDescription: 'שוקיים הודו טריים',
    // fullDescription: 'שוקיים הודו טריים, מתאימים לצלייה או בישול.',
    price: 78,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${pargitaroch}`,
    isPromoted: false
  },
  {
    id: 72,
    name: 'רוטפלש משופד',
    category: 'beef',
    // shortDescription: 'כנף הודו טרי',
    // fullDescription: 'כנף הודו טרי, מתאים לצלייה או בישול.',
    price: 220,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${rotflyshmeshupad}`,
    isPromoted: false
  },
  {
    id: 73,
    name: 'הודו שלם',
    category: 'turkey',
    // shortDescription: 'שניצל הודו טרי',
    // fullDescription: 'שניצל הודו טרי, מתאים לטיגון.',
    price: 35,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${hodushalem}`,
    isPromoted: false
  },
  {
    id: 74,
    name: 'הודו מפורק',
    category: 'turkey',
    // shortDescription: 'גרון הודו טרי',
    // fullDescription: 'גרון הודו טרי, מתאים לבישול.',
    price: 40,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${hodumeforak}`,
    isPromoted: false
  },
  {
    id: 75,
    name: 'שוארמה',
    category: 'turkey',
    // shortDescription: 'נתחי הודו טריים',
    // fullDescription: 'נתחי הודו טריים, מתאימים לצלייה או בישול.',
    price: 82,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shuarma}`,
    isPromoted: false
  },
  {
    id: 76,
    name: 'שוארמה נקבה',
    category: 'turkey',
    // shortDescription: 'אשכי הודו טריים',
    // fullDescription: 'אשכי הודו טריים, מתאימים לבישול.',
    price: 88,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shuarmanekeva}`,
    isPromoted: false
  },
  {
    id: 77,
    name: 'שוק הודו מפורק',
    category: 'turkey',
    // shortDescription: 'הודו אדום טחון',
    // fullDescription: 'הודו אדום טחון, מתאים לקציצות ותבשילים.',
    price: 68.00,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shokhodumeforak}`,
    isPromoted: false
  },
  {
    id: 78,
    name: 'חזה הודו שלם',
    category: 'turkey',
    // shortDescription: 'שישליק הודו',
    // fullDescription: 'שישליק הודו, מתאים לצלייה.',
    price: 52,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${hazehodushalem}`,
    isPromoted: false
  },
  {
    id: 79,
    name: 'שוקיים הודו',
    category: 'turkey',
    // shortDescription: 'עוף שלם טרי',
    // fullDescription: 'עוף שלם טרי, מתאים לצלייה או בישול.',
    price: 52,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shokiyimhodu}`,
    isPromoted: false
  },
  {
    id: 80,
    name: 'כנף הודו',
    category: 'turkey',
    // shortDescription: 'עוף מפורק טרי',
    // fullDescription: 'עוף מפורק טרי, מתאים לצלייה או בישול.',
    price: 28,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${kanfehodu}`,
    isPromoted: false
  },
  {
    id: 81,
    name: 'שניצל הודו',
    category: 'turkey',
    // shortDescription: 'שניצל הודו טרי',
    // fullDescription: 'שניצל הודו טרי, מתאים לטיגון.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shnitselhodu}`,
    isPromoted: false
  },
  {
    id: 82,
    name: 'גרון הודו',
    category: 'turkey',
    // shortDescription: 'גרון הודו טרי',
    // fullDescription: 'גרון הודו טרי, מתאימים לצלייה או בישול.',
    price: 42,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${garonhodu}`,
    isPromoted: false
  },
  {
    id: 83,
    name: 'נתחי הודו',
    category: 'turkey',
    // shortDescription: 'נתחי הודו טריים',
    // fullDescription: 'נתחי הודו טריים, מתאימים לצלייה או בישול.',
    price: 45,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${natehihodu}`,
    isPromoted: false
  },
  {
    id: 84,
    name: 'אשכי הודו',
    category: 'turkey',
    // shortDescription: 'אשכי הודו טריים',
    // fullDescription: 'אשכי הודו טריים, מתאימים לצלייה או בישול.',
    price: 210,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${ashahehodu}`,
    isPromoted: false
  },
  {
    id: 85,
    name: 'הודו אדום טחון',
    category: 'turkey',
    // shortDescription: 'פרגיות עוף טריות',
    // fullDescription: 'פרגיות עוף טריות, מתאימות לצלייה או בישול.',
    price: 68,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${hoduadomtachon}`,
    isPromoted: false
  },
  {
    id: 86,
    name: 'הודו טחון',
    category: 'turkey',
    // shortDescription: 'חזה עוף טרי',
    // fullDescription: 'חזה עוף טרי, מתאים לצלייה או בישול.',
    price: 45,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${hodutachon}`,
    isPromoted: false
  },
  {
    id: 87,
    name: 'שישליק הודו',
    category: 'turkey',
    // shortDescription: 'כבד עוף טרי',
    // fullDescription: 'כבד עוף טרי, מתאים לצלייה או בישול.',
    price: 60,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shishlikhodu}`,
    isPromoted: false
  },
  {
    id: 88,
    name: 'עוף שלם',
    category: 'chicken',
    // shortDescription: 'לבבות עוף טריים',
    // fullDescription: 'לבבות עוף טריים, מתאימים לצלייה או בישול.',
    price: 30,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${ofshalem}`,
    isPromoted: false
  },
  {
    id: 89,
    name: 'עוף מפורק',
    category: 'chicken',
    // shortDescription: 'טחול עוף טרי',
    // fullDescription: 'טחול עוף טרי, מתאים לבישול.',
    price: 38,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${ofmeforak}`,
    isPromoted: false
  },
  {
    id: 90,
    name: 'שניצל',
    category: 'chicken',
    // shortDescription: 'קורקבן עוף טרי',
    // fullDescription: 'קורקבן עוף טרי, מתאים לבישול.',
    price: 59,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shnitsel}`,
    isPromoted: false
  },
  {
    id: 91,
    name: 'כרעיים',
    category: 'chicken',
    // shortDescription: 'גרון עוף טרי',
    // fullDescription: 'גרון עוף טרי, מתאים לבישול.',
    price: 48,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${kraaayim}`,
    isPromoted: false
  },
  {
    id: 92,
    name: 'שוקיים',
    category: 'chicken',
    // shortDescription: 'פרגית/עוף עם עור/עצם',
    // fullDescription: 'פרגית/עוף עם עור/עצם, מתאימים לצלייה או בישול.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shokaim}`,
    isPromoted: false
  },
  {
    id: 93,
    name: 'ירכיים',
    category: 'chicken',
    // shortDescription: 'טחון עוף טרי',
    // fullDescription: 'טחון עוף טרי, מתאים לקציצות ותבשילים.',
    price: 48,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${yerechaim}`,
    isPromoted: false
  },
  {
    id: 94,
    name: 'כנפיים',
    category: 'chicken',
    // shortDescription: 'פרגית משופד',
    // fullDescription: 'פרגית משופד, מתאימה לצלייה.',
    price: 24,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${kenafaim}`,
    isPromoted: false
  },
  {
    id: 95,
    name: 'פרגיות',
    category: 'chicken',
    // shortDescription: 'פילה עוף טרי',
    // fullDescription: 'פילה עוף טרי, מתאים לצלייה או בישול.',
    price: 88,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${pargiot}`,
    isPromoted: false
  },
  {
    id: 96,
    name: 'חזה עוף',
    category: 'chicken',
    // shortDescription: 'חזה עוף טרי',
    // fullDescription: 'חזה עוף טרי, מתאים לצלייה או בישול.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${hazeof}`,
    isPromoted: false
  },
  {
    id: 97,
    name: 'כבד',
    category: 'chicken',
    // shortDescription: 'כנפיים חצי ונקי',
    // fullDescription: 'כנפיים חצי ונקי, מתאימות לצלייה או בישול.',
    price: 48,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${kaved}`,
    isPromoted: false
  },
  {
    id: 98,
    name: 'לבבות',
    category: 'chicken',
    // shortDescription: 'עוף ללא עצם טרי',
    // fullDescription: 'עוף ללא עצם טרי, מתאים לצלייה או בישול.',
    price: 48,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${levavot}`,
    isPromoted: false
  },
  {
    id: 99,
    name: 'טחול',
    category: 'chicken',
    // shortDescription: 'שניצל פרמיום עוף',
    // fullDescription: 'שניצל פרמיום עוף, מתאים לטיגון.',
    price: 95,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${techol}`,
    isPromoted: false
  },
  {
    id: 100,
    name: 'קורקבן',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 28,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${kurkevan}`,
    isPromoted: false
  },
  {
    id: 101,
    name: 'גרון עוף',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 28,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${garonof}`,
    isPromoted: false
  },
  {
    id: 102,
    name: 'פרגית / עור / עצם',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 75,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${pargitoretsem}`,
    isPromoted: false
  },
  {
    id: 103,
    name: 'עוף טחון',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 55,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${oftachun}`,
    isPromoted: false
  },
  {
    id: 104,
    name: 'פרגית משופד',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 115,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${pargitmeshupad}`,
    isPromoted: false
  },
  {
    id: 105,
    name: 'פילה עוף',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 65,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${fileaof}`,
    isPromoted: false
  },
  {
    id: 106,
    name: 'עופיונים',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 58,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${ofyonim}`,
    isPromoted: false
  },
  {
    id: 107,
    name: 'לבבות משופד',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 120,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${levavotmeshupad}`,
    isPromoted: false
  },
  {
    id: 108,
    name: 'שניצל פרימיום',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 68,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${shnitzelprimium}`,
    isPromoted: false
  },
  // {  ב- id:71 כבר קיים 
  //   id: 109,
  //   name: 'פרגית ארוך',
  //   category: 'chicken',
  //   shortDescription: 'עוף טחון מחוזק',
  //   fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
  //   price: 78,
  //   weight: '1 ק"ג',
  //   kashrutLevel:'כשר למהדרין',
    //imageSrc: `${pargitarohh}`,
  //   isPromoted: false
  // },
  {
    id: 110,
    name: 'כנפיים חצוי ונקי',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 28,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${kenafayimhatsui}`,
    isPromoted: false
  },
  {
    id: 111,
    name: 'טחון טרי מחפוד',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 85,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${tachuntarimachapud}`,
    isPromoted: false
  },
  {
    id: 112,
    name: 'עוף ללא עצם',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 65,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${ofleloetsem}`,
    isPromoted: false
  },
  {
    id: 113,
    name: 'מעורב ירושלמי',
    category: 'chicken',
    // shortDescription: 'עוף טחון מחוזק',
    // fullDescription: 'עוף טחון מחוזק, מתאים לקציצות ותבשילים.',
    price: 95,
    weight: '1 ק"ג',
    kashrutLevel:'כשר למהדרין',
    // imageSrc: `${meoraviyerushalmi}`,
    isPromoted: false
  },
{
  id: 124,
  name: 'נקניקיות עוף 400 גרם',
  category: 'grilled',
  shortDescription: 'נקניקיות עוף 400 גרם',
  fullDescription: 'נקניקיות עוף טריות ואיכותיות במשקל 400 גרם.',
  price: 13.00,
  weight: '400 גרם',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${nakniksOff}`,
  isPromoted: false
},
{
  id: 125,
  name: 'נקניקיות עוף 1 ק"ג',
  category: 'grilled',
  shortDescription: 'נקניקיות עוף 1 ק"ג',
  fullDescription: 'נקניקיות עוף טריות ואיכותיות במשקל 1 קילו.',
  price: 38.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${offsNaknik}`,
  isPromoted: false
},
{
  id: 126,
  name: 'נקניקיות הודו 1.5 קילו',
  category: 'grilled',
  shortDescription: 'נקניקיות הודו 1.5 קילו',
  fullDescription: 'נקניקיות הודו טריות ואיכותיות במשקל 1.5 קילו.',
  price: 48.00,
  weight: '1.5 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${hodunaknik}`,
  isPromoted: false
},
{
  id: 127,
  name: 'מרגז',
  category: 'grilled',
  shortDescription: 'מרגז',
  fullDescription: 'מרגז איכותי, מתאים לצלייה ובישול.',
  price: 28.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${mergez}`,
  isPromoted: false
},
{
  id: 128,
  name: 'מרגז ביתי 600 גרם',
  category: 'grilled',
  shortDescription: 'מרגז ביתי 600 גרם',
  fullDescription: 'מרגז ביתי איכותי במשקל 600 גרם.',
  price: 55.00,
  weight: '600 גרם',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${mergezBeiti}`,
  isPromoted: false
},
{
  id: 129,
  name: 'מרגז ביתי 1 ק"ג',
  category: 'grilled',
  shortDescription: 'מרגז ביתי 1 ק"ג',
  fullDescription: 'מרגז ביתי איכותי במשקל 1 קילו.',
  price: 75.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${beitmergezkilo}`,
  isPromoted: false
},
{
  id: 130,
  name: "צ'וריסוס ביתי 1 ק''ג",
  category: 'grilled',
  shortDescription: 'צוריסוס ביתי 1ק"ג',
  fullDescription: 'צוריסוס ביתי איכותי במשקל 1 קילו.',
  price: 75.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${tsorisos}`,
  isPromoted: false
},
{
  id: 131,
  name: 'המבורגר',
  category: 'grilled',
  shortDescription: 'המבורגר',
  fullDescription: 'המבורגר טרי ואיכותי, מתאים לצלייה.',
  price: 24.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${hamburger}`,
  isPromoted: false
},
{
  id: 132,
  name: 'המבורגר ניו יורק',
  category: 'grilled',
  shortDescription: 'המבורגר ניו יורק',
  fullDescription: 'המבורגר ניו יורק איכותי ומיוחד.',
  price: 48.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${hamburgernewyork}`,
  isPromoted: false
},
{
  id: 133,
  name: 'המבורגר ביתי',
  category: 'grilled',
  shortDescription: 'המבורגר ביתי',
  fullDescription: 'המבורגר ביתי איכותי ומיוחד.',
  price: 68.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc:`${hamburgerbeiti}`,
  isPromoted: false
},
{
  id: 134,
  name: 'המבורגר XL',
  category: 'grilled',
  shortDescription: 'המבורגר XL',
  fullDescription: 'המבורגר XL - גדול ואיכותי במיוחד.',
  price: 48.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${hamburgerxl}`,
  isPromoted: false
},
{
  id: 135,
  name: 'קבב',
  category: 'grilled',
  shortDescription: 'קבב',
  fullDescription: 'קבב טרי ואיכותי, מתאים לצלייה.',
  price: 24.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${kababbb}`,
  isPromoted: false
},
{
  id: 136,
  name: 'קבב טלה',
  category: 'grilled',
  shortDescription: 'קבב טלה',
  fullDescription: 'קבב טלה איכותי ורך במיוחד.',
  price: 48.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${kababbbtale}`,
  isPromoted: false
},
{
  id: 137,
  name: 'קבב רומני',
  category: 'grilled',
  shortDescription: 'קבב רומני',
  fullDescription: 'קבב רומני איכותי בסגנון מיוחד.',
  price: 48.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${kababbbromani}`,
  isPromoted: false
},
{
  id: 138,
  name: 'קציצות ביתיות',
  category: 'grilled',
  shortDescription: 'קציצות ביתיות',
  fullDescription: 'קציצות ביתיות איכותיות ורכות.',
  price: 68.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${ktsitsotbeitiot}`,
  isPromoted: false
},
{
  id: 139,
  name: 'קבב כבש',
  category: 'grilled',
  shortDescription: 'קבב כבש',
  fullDescription: 'קבב כבש איכותי ורך במיוחד.',
  price: 68.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${kababkeves}`,
  isPromoted: false
},
{
  id: 140,
  name: 'קבב הבית',
  category: 'grilled',
  shortDescription: 'קבב הבית',
  fullDescription: 'קבב הבית - המיוחד והאיכותי ביותר.',
  price: 89.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${kababhabait}`,
  isPromoted: false
},
{
  id: 141,
  name: 'סטייק פרגית',
  category: 'grilled',
  shortDescription: 'סטייק פרגית',
  fullDescription: 'סטייק פרגית איכותי ורך במיוחד.',
  price: 88.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${steakpargit}`,
  isPromoted: false
},
{
  id: 142,
  name: 'פרגית משופד',
  category: 'grilled',
  shortDescription: 'פרגית משופד',
  fullDescription: 'פרגית משופד מוכן לצלייה, איכות מעולה.',
  price: 105.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${shipudepargit}`,
  isPromoted: false
},
{
  id: 143,
  name: 'שיפודי כבד',
  category: 'grilled',
  shortDescription: 'שיפודי כבד',
  fullDescription: 'שיפודי כבד טריים ואיכותיים.',
  price: 55.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${shipudekaved}`,
  isPromoted: false
},
{
  id: 144,
  name: 'שיפודי לבבות',
  category: 'grilled',
  shortDescription: 'שיפודי לבבות',
  fullDescription: 'שיפודי לבבות טריים ואיכותיים - 10 שח לשיפוד.',
  price: 10.00,
  weight: 'יחידה',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${shipudelavavot}`,
  isPromoted: false
},
{
  id: 145,
  name: 'כנפיים',
  category: 'grilled',
  shortDescription: 'כנפיים',
  fullDescription: 'כנפיים טריות ואיכותיות לצלייה.',
  price: 24.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${kenafaim}`,
  isPromoted: false
},
{
  id: 146,
  name: 'כנפיים חצוי',
  category: 'grilled',
  shortDescription: 'כנפיים חצוי',
  fullDescription: 'כנפיים חצויות טריות ואיכותיות.',
  price: 28.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${kenafayimhatsui}`,
  isPromoted: false
},
{
  id: 147,
  name: 'כנפיים מתובל',
  category: 'grilled',
  shortDescription: 'כנפיים מתובל',
  fullDescription: 'כנפיים מתובלות בתבלינים מיוחדים.',
  price: 35.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${knafaimmetubal}`,
  isPromoted: false
},
{
  id: 149,
  name: 'פיקניה סינטה',
  category: 'grilled',
  shortDescription: 'סינטה',
  fullDescription: 'סינטה איכותית מהמותג הטוב ביותר.',
  price: 180.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${sintapikenia}`,
  isPromoted: false
},
{
  id: 151,
  name: 'פילה מניון',
  category: 'grilled',
  shortDescription: 'פילה מניון',
  fullDescription: 'פילה מניון איכות פרמיום במיוחד.',
  price: 300.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${fileminyon}`,
  isPromoted: false
},
{
  id: 152,
  name: 'אנטריקוט עם עצם',
  category: 'grilled',
  shortDescription: 'אנטריקוט עם עצם',
  fullDescription: 'אנטריקוט עם עצם איכות מעולה.',
  price: 180.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${antrikotimetsem}`,
  isPromoted: false
},
{
  id: 153,
  name: 'טומהוק',
  category: 'grilled',
  shortDescription: 'טומהוק',
  fullDescription: 'טומהוק איכותי במיוחד לחוויה מושלמת.',
  price: 190.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${tomahok}`,
  isPromoted: false
},
{
  id: 154,
  name: 'אנטריקוט ללא עצם',
  category: 'grilled',
  shortDescription: 'אנטריקוט ללא עצם',
  fullDescription: 'אנטריקוט ללא עצם איכות מעולה.',
  price: 200.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${antrikotleloetsem}`,
  isPromoted: false
},
{
  id: 155,
  name: 'סטייק אנגוס',
  category: 'grilled',
  shortDescription: 'סטייק אנגוס',
  fullDescription: 'סטייק אנגוס איכות פרמיום מיוחדת.',
  price: 240.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${seakangos}`,
  isPromoted: false
},
{
  id: 156,
  name: 'סטייק פרימיום',
  category: 'grilled',
  shortDescription: 'סטייק פרמיום',
  fullDescription: 'סטייק פרמיום - האיכות הגבוהה ביותר.',
  price: 280.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${stakeprimium}`,
  isPromoted: false
},
{
  id: 157,
  name: 'שיפודי אנטריקוט',
  category: 'grilled',
  shortDescription: 'שיפודי אנטריקוט',
  fullDescription: 'שיפודי אנטריקוט מוכנים לצלייה.',
  price: 220.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${shipudeantrikot}`,
  isPromoted: false
},
{
  id: 158,
  name: 'שיפודי כבש',
  category: 'grilled',
  shortDescription: 'שיפודי כבש',
  fullDescription: 'שיפודי כבש איכותיים ורכים.',
  price: 190.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${shipudekeves}`,
  isPromoted: false
},
{
  id: 159,
  name: 'צלעות טלה',
  category: 'grilled',
  shortDescription: 'צלעות טלה',
  fullDescription: 'צלעות טלה איכותיות ורכות במיוחד.',
  price: 260.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${tslaottale}`,
  isPromoted: false
},
{
  id: 160,
  name: 'צלעות כבש',
  category: 'grilled',
  shortDescription: 'צלעות כבש',
  fullDescription: 'צלעות כבש איכותיות ורכות.',
  price: 240.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${tslaotkevesss}`,
  isPromoted: false
},
{
  id: 161,
  name: 'אשכי הודו',
  category: 'grilled',
  shortDescription: 'אשכי הודו',
  fullDescription: 'אשכי הודו איכות פרמיום מיוחדת.',
  price: 210.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${ashahehodu}`,
  isPromoted: false
},
{
  id: 162,
  name: 'שיפודי שישליק עם ליה',
  category: 'grilled',
  shortDescription: 'שיפודי שישליק עם ליה',
  fullDescription: 'שיפודי שישליק עם ליה איכותיים.',
  price: 130.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${shipudeshishlikimlia}`,
  isPromoted: false
},
{
  id: 163,
  name: 'שומן כבש',
  category: 'grilled',
  shortDescription: 'שומן כבש',
  fullDescription: 'שומן כבש איכותי לטיבולים ובישול.',
  price: 230.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${shumankeves}`,
  isPromoted: false
},
{
  id: 164,
  name: 'שומן ליה',
  category: 'grilled',
  shortDescription: 'שומן ליה',
  fullDescription: 'שומן ליה איכותי לטיבולים מיוחדים.',
  price: 280.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${shumanliah}`,
  isPromoted: false
},
{
  id: 165,
  name: 'שיפודי שקדים',
  category: 'grilled',
  shortDescription: 'שיפודי שקדים',
  fullDescription: 'שיפודי שקדים מיוחדים ואיכותיים ביותר.',
  price: 420.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${shipudeshkedimm}`,
  isPromoted: false
},
{
  id: 166,
  name: 'כבד עגל',
  category: 'grilled',
  shortDescription: 'כבד עגל',
  fullDescription: 'כבד עגל טרי ואיכותי.',
  price: 60.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${kavedegel}`,
  isPromoted: false
},
{
  id: 167,
  name: 'סוכריות פילה',
  category: 'grilled',
  shortDescription: 'סוכריות פילה',
  fullDescription: 'סוכריות פילה איכות פרמיום במיוחד.',
  price: 280.00,
  weight: '1 ק"ג',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${sukariotfilee}`,
  isPromoted: false
},
{
  id: 168,
  name: 'סוכריות עראיס',
  category: 'grilled',
  shortDescription: 'סוכריות אראיס',
  fullDescription: 'סוכריות אראיס מיוחדות - 25 שח לשיפוד.',
  price: 25.00,
  weight: 'יחידה',
  kashrutLevel: 'כשר למהדרין',
  // imageSrc: `${sukariotararis}`,
  isPromoted: false
}
];

export default products;