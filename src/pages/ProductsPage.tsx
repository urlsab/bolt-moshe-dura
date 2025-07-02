import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import {  Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  // const [selectedKashrut, setSelectedKashrut] = useState('all');
  
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Apply search filter
      const matchesSearch = product.name.includes(searchTerm) ;
      
      // Apply category filter
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Apply kashrut filter
      const matchesKashrut = true; // Assuming all products are kosher for now
                             
      return matchesSearch && matchesCategory && matchesKashrut;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title={`${t('products.title')} - ${t('common.siteTitle')}`}
        description={t('products.subtitle')}
      />
      
      <div className="container-custom">
        <SectionTitle 
          title={t('products.title')}
          subtitle={t('products.subtitle')}
          center
        />
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              {/* <div className="flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div> */}
              <label className="block font-medium text-dark mb-2">
                {t('products.filters.byTerm')}
              </label>
              <input
                type="text"
                placeholder="הקלידו כאן"
                className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div>
              <label className="block font-medium text-dark mb-2">
                {t('products.filters.byCategory')}
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">{t('products.filters.all')}</option>
                <option value="beef">{t('products.categories.beef')}</option>
                <option value="lamb">{t('products.categories.lamb')}</option>
                <option value="chicken">{t('products.categories.chicken')}</option>
                <option value="turkey">{t('products.categories.turkey')}</option>
                <option value="fish">{t('products.categories.fish')}</option>
                <option value="calf">{t('products.categories.calf')}</option>
              </select>
            </div>
            
            {/* Kashrut Filter */}
            <div>
              {/* <label className="block font-medium text-dark mb-2">
                {t('products.filters.byKashrut')}
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedKashrut}
                onChange={(e) => setSelectedKashrut(e.target.value)}
              >
                <option value="all">{t('products.filters.all')}</option>
                <option value="badatz">{t('products.kashrut.badatz')}</option>
                <option value="yoreDea">{t('products.kashrut.yoreDea')}</option>
              </select> */}
            </div>
          </div>
        </div>
        
        {/* Products Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-dark/60">
            מציג {filteredProducts.length} מתוך {products.length} מוצרים
          </p>
          <div className="flex items-center bg-light px-3 py-1 rounded-md">
            <Filter size={16} className="text-dark/60 ml-2" />
            <span className="text-sm text-dark/60">סינון פעיל</span>
          </div>
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-light rounded-lg">
            <h3 className="text-xl font-bold mb-2">לא נמצאו מוצרים</h3>
            <p className="text-dark/60">נסו להשתמש במילות חיפוש אחרות או לשנות את הסינון</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;