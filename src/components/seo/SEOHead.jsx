import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "AINOR - MSME Registered Digital Solutions & Web Development Company",
  description = "AINOR is India's first subscription-based web development company. MSME registered (UDYAM-UP-36-0033877), we offer affordable monthly plans for websites, mobile apps, and custom software. No long-term contracts. Cancel anytime.",
  keywords = "AINOR, MSME registered, Udyam certified, Government of India recognized, web development, digital solutions, mobile apps, custom software, React development, website design, digital transformation, technology company, software development, India, subscription web development, monthly website plans, first in India subscription services, affordable web development, no upfront cost website, cancel anytime web service",
  canonicalUrl = "https://myainor.com/",
  ogImage = "https://myainor.com/hero-image.jpg",
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
