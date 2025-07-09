import React from 'react';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  // const { t } = useTranslation();
  
  return (
    <Link to={`/recipes/${recipe.id}`} className="card hover:scale-[1.02] transition-transform">
      <div className="relative">
        <img 
          src={recipe.imageSrc} 
          alt={recipe.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary/80 text-white px-2 py-1 text-xs rounded-full">
          {recipe.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-primary">{recipe.title}</h3>
        <p className="text-dark/70 text-sm mt-2">{recipe.shortDescription}</p>
        <div className="mt-4 flex items-center text-sm text-dark/60">
          <Clock size={16} className="ml-1" />
          <span>{recipe.prepTime} + {recipe.cookTime} דקות</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;