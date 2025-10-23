import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import articles from '../data/articles';
import { ChevronLeft, Calendar, User } from 'lucide-react';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = articles.find((a) => a.id === Number(id));
  
  if (!article) {
    navigate('/kashrut');
    return null;
  }
  
  // Find related articles (same category)
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);
  
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <Seo
        title={`${article.title} - אטליז למהדרין`}
        description={article.shortDescription}
      />
      
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="text-sm mb-8 text-dark/60">
          <Link to="/" className="hover:text-primary">דף הבית</Link>
          <span className="mx-2">/</span>
          <Link to="/kashrut" className="hover:text-primary">כשרות</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{article.title}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              {/* Header Image */}
              <img 
                // src={article.imageSrc} 
                alt={article.title} 
                className="w-full h-64 object-cover"
              />
              
              {/* Article Content */}
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{article.title}</h1>
                
                <div className="flex flex-wrap items-center text-dark/60 mb-6">
                  <div className="flex items-center ml-6">
                    <Calendar size={16} className="ml-1" />
                    <span>{article.date}</span>
                  </div>
                  
                  {article.author && (
                    <div className="flex items-center">
                      <User size={16} className="ml-1" />
                      <span>{article.author}</span>
                    </div>
                  )}
                </div>
                
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between">
              <Link to="/kashrut" className="text-primary flex items-center hover:underline">
                <ChevronLeft size={18} className="ml-1" />
                <span>חזרה למידע על כשרות</span>
              </Link>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4 border-r-4 border-primary pr-3">מאמרים נוספים</h2>
                
                <div className="space-y-6">
                  {relatedArticles.map(relatedArticle => (
                    <div key={relatedArticle.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <Link to={`/articles/${relatedArticle.id}`} className="hover:text-primary">
                        <h3 className="font-bold mb-1">{relatedArticle.title}</h3>
                        <p className="text-dark/70 text-sm mb-2">{relatedArticle.shortDescription}</p>
                        <span className="text-primary text-sm">קרא עוד »</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Resources */}
            <div className="bg-primary/5 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">משאבים בנושא כשרות</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md">
                  <h3 className="font-bold">מדריך לסימני כשרות</h3>
                  <p className="text-sm text-dark/70 mb-2">מדריך מקיף לזיהוי והבנה של סימני הכשרות השונים.</p>
                  <a href="#" className="text-primary text-sm hover:underline">להורדה</a>
                </div>
                
                <div className="bg-white p-4 rounded-md">
                  <h3 className="font-bold">הלכות כשרות</h3>
                  <p className="text-sm text-dark/70 mb-2">סיכום תמציתי של הלכות כשרות הבשר למהדרין.</p>
                  <a href="#" className="text-primary text-sm hover:underline">להורדה</a>
                </div>
                
                <div className="bg-white p-4 rounded-md">
                  <h3 className="font-bold">שאלות ותשובות</h3>
                  <p className="text-sm text-dark/70 mb-2">מענה לשאלות נפוצות בנושאי כשרות הבשר.</p>
                  <a href="#" className="text-primary text-sm hover:underline">לעיון</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;