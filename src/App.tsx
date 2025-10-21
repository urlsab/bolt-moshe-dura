// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import KashrutPage from './pages/KashrutPage';
import RecipesPage from './pages/RecipesPage';
import PromotionsPage from './pages/PromotionsPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import Rabbis from './pages/Rabbis';
import NotFoundPage from './pages/NotFoundPage';
import TestimonialsPage from './pages/TestimonialsPage';
import VideosPage from './pages/VideosPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { ScrollToTop } from '../ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rabbis" element={<Rabbis />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/kashrut" element={<KashrutPage />} />
        <Route path="/articles/:id" element={<ArticleDetailPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;