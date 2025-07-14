import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import products from '../data/products';
import recipes from '../data/recipes';
import { Clock, Users, ChevronLeft } from 'lucide-react';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const recipe = recipes.find((p) => p.id === Number(id));
  
  if (!recipe) {
    navigate('/recipes');
    return null;
  }
  
  // Find related products for this recipe
  const relatedProducts = recipe.relatedProducts 
    ? products.filter(product => recipe.relatedProducts?.includes(product.id))
    : [];
  
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title={`${recipe.title} - ${t('common.siteTitle')}`}
        description={recipe.shortDescription}
      />
      
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="text-sm mb-8 text-dark/60">
          <Link to="/" className="hover:text-primary">דף הבית</Link>
          <span className="mx-2">/</span>
          <Link to="/recipes" className="hover:text-primary">מתכונים</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{recipe.title}</span>
        </div>
        
        {/* Recipe Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-64 md:h-96">
            <img 
              src={recipe.imageSrc} 
              alt={recipe.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="inline-block bg-primary px-3 py-1 rounded-full text-sm mb-3">
                {recipe.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{recipe.title}</h1>
              <p className="text-white/80 text-lg">{recipe.shortDescription}</p>
            </div>
          </div>
        </div>
        
        
        
        {/* Recipe Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Recipe Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              {/* Recipe Info */}
              <div className="flex flex-wrap gap-4 mb-6 p-4 bg-light rounded-lg">
                <div className="flex items-center">
                  <Clock size={20} className="text-primary ml-2" />
                  <div>
                    <p className="text-sm text-dark/60">{t('recipes.recipeDetails.prepTime')}</p>
                    <p className="font-semibold">{recipe.prepTime} דקות</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="text-primary ml-2" />
                  <div>
                    <p className="text-sm text-dark/60">{t('recipes.recipeDetails.cookTime')}</p>
                    <p className="font-semibold">{recipe.cookTime} דקות</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="text-primary ml-2" />
                  <div>
                    <p className="text-sm text-dark/60">{t('recipes.recipeDetails.servings')}</p>
                    <p className="font-semibold">{recipe.servings} מנות</p>
                  </div>
                </div>
              </div>
              
              {/* Recipe Description */}
              <div className="mb-8">
                <p className="text-lg">{recipe.fullDescription}</p>
              </div>
              
              {/* Ingredients */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-r-4 border-primary pr-3">
                  {t('recipes.recipeDetails.ingredients')}
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center p-2 hover:bg-light rounded-md">
                      <div className="h-2 w-2 rounded-full bg-primary ml-3"></div>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Instructions */}
              <div>
                <h2 className="text-2xl font-bold mb-4 border-r-4 border-primary pr-3">
                  {t('recipes.recipeDetails.instructions')}
                </h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center ml-3 shrink-0 mt-1">
                        {index + 1}
                      </span>
                      <p>{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Optional Recipe Video */}
            {recipe.videoSrc && (
              <div className="mb-8 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4 text-primary">סרטון הדרכה</h2>
                <div className="flex justify-center w-full">
                  <div className="rounded-xl shadow-lg bg-[#222] overflow-hidden" style={{ maxWidth: 'fit-content' }}>
                    <video
                      src={recipe.videoSrc}
                      controls
                      className="rounded-xl"
                      style={{ 
                        maxHeight: '60vh',
                        maxWidth: '100%',
                        width: 'auto',
                        height: 'auto'
                      }}
                      preload="metadata"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Optional Big Image (like a map or diagram) */}
            {recipe.bigImg && (
              <div className="mb-8 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4 text-primary">תמונה להמחשה</h2>
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-[#222] rounded-xl shadow-lg flex items-center justify-center aspect-[auto] relative overflow-hidden">
                  <img
                    src={recipe.bigImg}
                    alt={recipe.title + ' big image'}
                    className="w-full h-full max-h-96 rounded-xl object-contain"
                    style={{ aspectRatio: 'auto', background: '#222' }}
                  />
                </div>
              </div>
            )}
            
            {/* Kashrut Notes */}
            {recipe.kashrutNotes && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-3 text-primary">
                  {t('recipes.recipeDetails.kashrutNotes')}
                </h2>
                <p>{recipe.kashrutNotes}</p>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">מוצרים למתכון</h2>
                <div className="space-y-4">
                  {relatedProducts.map(product => (
                    <Link 
                      key={product.id} 
                      to={`/products/${product.id}`}
                      className="flex items-center bg-light p-3 rounded-md hover:bg-light/70 transition-colors"
                    >
                      <img 
                        src={product.imageSrc} 
                        alt={product.name} 
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="mr-3">
                        <h3 className="font-bold">{product.name}</h3>
                        <p className="text-sm text-dark/60">{product.price.toFixed(2)} ₪</p>
                      </div>
                      <ChevronLeft size={20} className="mr-auto text-primary" />
                    </Link>
                  ))}
                </div>
                <Link to="/products" className="mt-4 inline-block text-primary hover:underline">
                  לכל המוצרים
                </Link>
              </div>
            )}
            
            {/* Tips and Notes */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">טיפים</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 ml-2"></div>
                  <p>יש להקפיד על מליחת הבשר כהלכה</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 ml-2"></div>
                  <p>שימוש בבשר טרי ונקי משפר משמעותית את הטעם</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 ml-2"></div>
                  <p>ניתן לשנות את התבלינים לפי הטעם האישי</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 ml-2"></div>
                  <p>מומלץ להשתמש בכלים כשרים ונפרדים לבשר</p>
                </li>
              </ul>
            </div>
            
            {/* Similar Recipes */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">מתכונים דומים</h2>
              <div className="space-y-4">
                {recipes
                  .filter(r => r.category === recipe.category && r.id !== recipe.id)
                  .slice(0, 3)
                  .map(similarRecipe => (
                    <Link 
                      key={similarRecipe.id} 
                      to={`/recipes/${similarRecipe.id}`}
                      className="block hover:bg-light p-3 rounded-md transition-colors"
                    >
                      <h3 className="font-bold">{similarRecipe.title}</h3>
                      <p className="text-sm text-dark/60">{similarRecipe.shortDescription}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;