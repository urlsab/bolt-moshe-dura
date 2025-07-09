import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';
import RecipeCard from '../components/RecipeCard';
import recipes from '../data/recipes';
import { Search, Filter } from 'lucide-react';

const RecipesPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // Apply search filter
      const matchesSearch = recipe.title.includes(searchTerm) || recipe.shortDescription.includes(searchTerm);
                            
      // Apply category filter
      const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title={`${t('recipes.title')} - ${t('common.siteTitle')}`}
        description={t('recipes.subtitle')}
      />
      
      <div className="container-custom">
        <SectionTitle 
          title={t('recipes.title')}
          subtitle={t('recipes.subtitle')}
          center
        />
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="חיפוש מתכונים..."
                className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">כל הקטגוריות</option>
                <option value="בקר">{t('recipes.categories.beef')}</option>
                <option value="כבש">{t('recipes.categories.lamb')}</option>
                <option value="עוף">{t('recipes.categories.chicken')}</option>
                <option value="חגים">{t('recipes.categories.holidays')}</option>
                <option value="שבת">{t('recipes.categories.shabbat')}</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Recipes Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-dark/60">
            מציג {filteredRecipes.length} מתוך {recipes.length} מתכונים
          </p>
          {(searchTerm || selectedCategory !== 'all') && (
            <div className="flex items-center bg-light px-3 py-1 rounded-md">
              <Filter size={16} className="text-dark/60 ml-2" />
              <span className="text-sm text-dark/60">סינון פעיל</span>
            </div>
          )}
        </div>
        
        {/* Recipes Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-light rounded-lg">
            <h3 className="text-xl font-bold mb-2">לא נמצאו מתכונים</h3>
            <p className="text-dark/60">נסו להשתמש במילות חיפוש אחרות או לשנות את הסינון</p>
          </div>
        )}
        
        {/* Recipe Tips */}
        <div className="mt-16 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">טיפים להכנת בשר מושלמת</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">צלייה נכונה</h3>
              <p className="mb-4">הוציאו את הבשר מהמקרר כשעה לפני הצלייה כדי שיגיע לטמפרטורת החדר. השתמשו במחבת לוהטת או גריל חם והשחימו את הבשר היטב מכל הצדדים. הניחו לבשר לנוח כ-5-10 דקות לפני הפריסה.</p>
              
              <h3 className="font-bold text-lg mb-2">בישול איטי</h3>
              <p>לנתחים קשים יותר, בישול איטי בטמפרטורה נמוכה הוא המפתח. השתמשו בסיר כבד עם מכסה והוסיפו נוזלים כמו ציר, יין או מים. בשלו בחום נמוך למשך מספר שעות עד שהבשר רך ומתפרק בקלות.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">תיבול נכון</h3>
              <p className="mb-4">תבלו את הבשר במלח ופלפל לפני הבישול, וכן בעשבי תיבול טריים כמו רוזמרין, תימין ואורגנו. אל תפחדו להשתמש בשום ובצל להעשרת הטעם.</p>
              
              <h3 className="font-bold text-lg mb-2">בחירת הנתח המתאים</h3>
              <p>התאימו את נתח הבשר לשיטת הבישול. נתחים רכים כמו פילה ואנטריקוט מתאימים לצלייה מהירה, בעוד נתחים קשים יותר כמו צלעות וכתף מתאימים לבישול ארוך.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;