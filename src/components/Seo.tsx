import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const Seo: React.FC<SeoProps> = ({ 
  title = 'איטליז למהדרין - משה דורה',
  description = 'בשר כשר למהדרין בהשגחת הבד״ץ. מגוון רחב של מוצרי בשר כשרים למהדרין מן המהדרין.',
  keywords = 'איטליז כשר, בשר כשר למהדרין, בד״ץ',
  ogImage = '/og-image.jpg'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <html lang="he" dir="rtl" />
    </Helmet>
  );
};

export default Seo;