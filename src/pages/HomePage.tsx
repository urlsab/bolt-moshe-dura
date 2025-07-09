import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import RecipeCard from '../components/RecipeCard';
import products from '../data/products';
import recipes from '../data/recipes';
import promotions from '../data/promotions';
import { Check, Award, Leaf, ShieldCheck } from 'lucide-react';
import moshe from '../Assets/mosheandharavigal.jpg'

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const featuredProducts = products.filter(product => product.isPromoted).slice(0, 3);
  const featuredRecipes = recipes.slice(0, 3);
  
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title={t('home.featured.title')}
            subtitle={t('home.featured.subtitle')}
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              {t('common.buttons.viewProducts')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title={t('home.about.title')}
              />
              <p className="mb-6 text-lg">{t('home.about.content')}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 ml-3 p-1 rounded-full bg-primary/20">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p>מסורת של למעלה מ-20 שנה של אספקת בשר כשר למהדרין</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 ml-3 p-1 rounded-full bg-primary/20">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p>בשר טרי באיכות גבוהה תחת פיקוח כשרות מחמיר</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 ml-3 p-1 rounded-full bg-primary/20">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p>שירות משלוחים לכל גוש דן !</p>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary">
                {t('common.buttons.contactUs')}
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={moshe} 
                alt="משה דורה באיטליז" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-primary font-bold text-lg">משה דורה, בעלים</h3>
                <p className="text-sm text-dark/70">מימין לשמאל: משה דורה, הרב יגאל כהן</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Kashrut Section */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <SectionTitle 
            title={t('home.kashrut.title')}
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <ShieldCheck size={48} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">השגחה מחמירה</h3>
              <p>כל מוצרינו נמצאים תחת השגחה מחמירה של כשרויות מהדרין בלבד, ללא פשרות.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <Award size={48} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">איכות מעולה</h3>
              <p>אנו בוחרים רק את הבשר האיכותי ביותר, מגידול מקומי ובתנאים מבוקרים.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <Leaf size={48} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">טריות מובטחת</h3>
              <p>הבשר נמכר טרי, נשחט לפי דרישה ומגיע אל האיטליז תוך זמן קצר.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/kashrut" className="btn-outline">
              למידע נוסף על הכשרות
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Recipes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="מתכונים נבחרים"
            subtitle="מתכונים כשרים למהדרין שהלקוחות שלנו אוהבים"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/recipes" className="btn-outline">
              לכל המתכונים
            </Link>
          </div>
        </div>
      </section>
      
      {/* Promotions Banner */}
      <section className="py-16 bg-secondary/10">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('home.promotions.title')}</h2>
            <p className="text-lg mb-8">{t('home.promotions.subtitle')}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {promotions.slice(0, 3).map((promo) => (
                <div key={promo.id} className="bg-light p-4 rounded-md">
                  <h3 className="font-bold text-primary">{promo.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <span className="text-dark/50 line-through text-sm">₪{promo.regularPrice}</span>
                      <span className="text-primary font-bold block text-lg">₪{promo.salePrice}</span>
                    </div>
                    <span className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                      {promo.discount}% הנחה
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/promotions" className="btn-secondary mt-8 inline-block">
              לכל המבצעים
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="מה הלקוחות אומרים"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-light p-6 rounded-lg">
              <div className="mb-4 text-secondary">
                ★★★★★
              </div>
              <p className="italic mb-4">"הבשר שם הוא בשר מהודר ואיכותי! כדאי לכם לעשות את כל הקניות של הבשר שלכם רק אצלו! אני בעצמי קונה רק אצלו! אני סומך על יראת השמים שלו"</p>
              <div className="font-bold">הרב יגאל כהן</div>
            </div>
            
            <div className="bg-light p-6 rounded-lg">
              <div className="mb-4 text-secondary">
                ★★★★★
              </div>
              <p className="italic mb-4">"הזדמנות מצוינת להביע הערכה על השירות האדיב והיעיל. בכל הזמנה אני מקבלת את הכל מסודר ונקי. אסטטי ומזמין. מעולם לא היתה תקלה בהזמנה או אכזבה ממוצר שקניתי. השניצלים פרוסים דק מאוד שאין בשום מקום אחר. העוף נקי ומחולק. תמיד כשיש אורחים הם מתפעלים מהבשר האיכותי ולנו כיף לארח עם האיכות שלכם. תודה!"</p>
              <div className="font-bold">רחל כהן, בני ברק</div>
            </div>
            
            <div className="bg-light p-6 rounded-lg">
              <div className="mb-4 text-secondary">
                ★★★★★
              </div>
              <p className="italic mb-4">"אני ממליצה בחום ואהבה על אטליז משה. בשר כשר חלק. אם איכות טובה וטרייה. תמיד ההזמנה מגיעה מסודרת מחולקת יפה לפי מה שאני מבקשת. השרות ומישלוח מגיע אלי לגיבעתיים בזמן בשקיות ששומרות על הקור. מאוד מרוצה. שבורא עולם יזכה את כולנו ליקנות בשר חלק כשר ואיכותי. אצל אטליז משה. תודה רבה. גם שמשה מזכה אותנו לשיעורי תורה. אשריך משה."</p>
              <div className="font-bold">חלי, גבעתיים</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials" className="btn-outline">
              לכל ההמלצות
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;