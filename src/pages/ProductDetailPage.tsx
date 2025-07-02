import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import KashrutBadge from '../components/KashrutBadge';
import products from '../data/products';
import recipes from '../data/recipes';
import { Check, ChevronLeft } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const product = products.find((p) => p.id === Number(id));
  
  if (!product) {
    navigate('/products');
    return null;
  }
  
  // Find related recipes for this product
  const relatedRecipes = recipes.filter(recipe => 
    recipe.relatedProducts?.includes(product.id)
  ).slice(0, 2);
  
  // Find similar products in the same category
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const kashrutType = product.kashrutLevel.includes('בד״ץ') ? 'badatz' : 'yoreDea';
  
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title={`${product.name} - ${t('common.siteTitle')}`}
        description={product.shortDescription}
      />
      
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="text-sm mb-8 text-dark/60">
          <Link to="/" className="hover:text-primary">דף הבית</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary">מוצרים</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </div>
        
        {/* Product Info */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="h-full">
              <img 
                src={product.imageSrc} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="p-8">
              <div className="mb-4">
                <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  {t(`products.categories.${product.category}`)}
                </span>
                {product.isPromoted && (
                  <span className="inline-block bg-error/10 text-error text-sm px-3 py-1 rounded-full mr-2">
                    מבצע!
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
              <p className="text-xl mb-6">{product.shortDescription}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-dark/60 text-sm">{t('products.productDetails.price')}</p>
                  <p className="text-2xl font-bold">₪{product.price.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-dark/60 text-sm">{t('products.productDetails.weight')}</p>
                  <p className="text-lg">{product.weight}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-dark/60 text-sm">{t('products.productDetails.kashrutLevel')}</p>
                <div className="flex items-center mt-1">
                  <KashrutBadge type={kashrutType} size="sm" />
                  <span className="mr-2 font-bold">{product.kashrutLevel}</span>
                </div>
              </div>
              
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <p className="font-bold mb-2">{t('products.productDetails.preparation')}</p>
                <p>{product.preparationTips || 'מידע לא זמין'}</p>
              </div>
              
              {product.ingredients && (
                <div className="mb-6">
                  <p className="font-bold mb-2">{t('products.productDetails.ingredients')}</p>
                  <ul className="list-inside space-y-1">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="mt-1 ml-2 text-primary shrink-0" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex flex-wrap gap-3 mt-8">
                <button className="btn-primary flex-1">
                  הזמן עכשיו
                </button>
                <button className="btn-outline flex-1">
                  צור קשר
                </button>
              </div>
            </div>
          </div>
          
          {/* Full Description */}
          <div className="p-8 bg-light">
            <h2 className="text-2xl font-bold mb-4">אודות המוצר</h2>
            <p className="text-lg">{product.fullDescription}</p>
          </div>
        </div>
        
        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">מתכונים מומלצים</h2>
              <Link to="/recipes" className="text-primary flex items-center hover:underline">
                <span>לכל המתכונים</span>
                <ChevronLeft size={18} className="mr-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedRecipes.map(recipe => (
                <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex h-48">
                    <div className="w-1/3">
                      <img 
                        src={recipe.imageSrc} 
                        alt={recipe.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <h3 className="text-lg font-bold mb-2">{recipe.title}</h3>
                      <p className="text-dark/70 text-sm mb-4">{recipe.shortDescription}</p>
                      <Link 
                        to={`/recipes/${recipe.id}`} 
                        className="text-primary flex items-center hover:underline"
                      >
                        <span>{t('common.buttons.readMore')}</span>
                        <ChevronLeft size={16} className="mr-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">מוצרים דומים</h2>
              <Link to="/products" className="text-primary flex items-center hover:underline">
                <span>לכל המוצרים</span>
                <ChevronLeft size={18} className="mr-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {similarProducts.map(item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Simple version of ProductCard for this page to avoid circular dependency
const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div>
        <img 
          src={product.imageSrc} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-primary">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">₪{product.price.toFixed(2)}</span>
          <span className="text-xs bg-secondary/20 px-2 py-1 rounded-full">
            {product.kashrutLevel.includes('בד״ץ') ? 'בד״ץ' : 'יורה דעה'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductDetailPage;