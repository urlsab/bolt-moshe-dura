import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="relative">
        <img 
          src={product.imageSrc} 
          alt={product.name} 
          className="product-image"
        />
        {product.isPromoted && (
          <div className="absolute top-2 right-2 bg-error text-white px-2 py-1 text-xs rounded-full">
            מבצע!
          </div>
        )}
      </div>
      <div className="p-4 flex-grow">
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-lg text-primary">{product.name}</h3>
          <span className="kashrut-badge">{product.kashrutLevel}</span>
        </div>
        <p className="text-dark/70 text-sm mt-2">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">₪{product.price.toFixed(2)}</span>
          <span className="text-xs text-dark/60">{product.weight}</span>
        </div>
      </div>
      <div className="p-4 pt-0">
        <button className="w-full btn-outline text-sm">
          {t('common.buttons.readMore')}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;