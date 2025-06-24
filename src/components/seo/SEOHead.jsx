import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "AINOR - Digital Solutions & Web Development Company",
  description = "AINOR delivers innovative digital solutions, web development, mobile apps, and custom software. Transform your business with cutting-edge technology and expert development services.",
  keywords = "AINOR, web development, digital solutions, mobile apps, custom software, React development, website design, digital transformation, technology company, software development",
  canonicalUrl = "https://myainor.com/",
  ogImage = "https://myainor.com/logo512.png",
  structuredData = null,
  noindex = false
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AINOR" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ainor" />
      <meta name="twitter:creator" content="@ainor" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="language" content="English" />
      <meta name="author" content="AINOR" />
      <meta name="publisher" content="AINOR" />
      <meta name="copyright" content="AINOR" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
