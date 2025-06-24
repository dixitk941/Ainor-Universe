import { useEffect } from 'react';

const SEOHead = ({ 
  title = "AINOR - Digital Solutions & Web Development Company",
  description = "AINOR delivers innovative digital solutions, web development, mobile apps, and custom software. Transform your business with cutting-edge technology and expert development services.",
  keywords = "AINOR, web development, digital solutions, mobile apps, custom software, React development, website design, digital transformation, technology company, software development",
  canonicalUrl = "https://myainor.com/",
  ogImage = "https://myainor.com/logo512.png",
  structuredData = null
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
    
    // Update Open Graph tags
    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    
    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:url', canonicalUrl);
    updateOGTag('og:image', ogImage);
    
    // Update Twitter tags
    const updateTwitterTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', ogImage);
    
    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      // Cleanup function to remove the script when component unmounts
      return () => {
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return null; // This component doesn't render anything
};

export default SEOHead;
