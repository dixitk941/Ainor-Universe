import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServiceSchema = () => {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AINOR Digital Solutions",
    "description": "Professional web development, mobile app development, and custom software solutions",
    "url": "https://myainor.com",
    "telephone": "+919528202892",
    "email": "neocodenex@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceType": [
      "Web Development",
      "Mobile App Development", 
      "Custom Software Development",
      "Digital Solutions",
      "UI/UX Design"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AINOR Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom website development using modern technologies like React and Next.js"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Custom Software Development",
            "description": "Tailored software solutions for business automation and efficiency"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "15",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Chetan Aggarwal"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "AINOR delivered an exceptional cab booking platform for GoForCab. Their innovative approach and technical expertise transformed our vision into a user-friendly, scalable solution."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "Kajal Dixit"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5", 
          "bestRating": "5"
        },
        "reviewBody": "Working with AINOR on Sttrika's digital platform was an outstanding experience. Their team's dedication to quality and attention to detail helped us create a sophisticated solution."
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceData)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
