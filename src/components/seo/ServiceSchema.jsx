import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServiceSchema = () => {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AINOR - Subscription-Based Web Development Company",
    "description": "Affordable web development with flat monthly pricing. Websites from ₹9,999/mo, mobile apps from ₹19,999/mo. All-inclusive: hosting, SSL, support. MSME Registered.",
    "url": "https://myainor.com",
    "telephone": "+917579500264",
    "email": "hello@myainor.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Uttar Pradesh"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "₹9,999 - ₹39,999/month",
    "serviceType": [
      "Subscription Web Development",
      "Mobile App Development", 
      "E-Commerce Development",
      "Custom Software Development",
      "SEO Services"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "slogan": "Save 70% on Web Development - First Subscription Model in India",
    "knowsAbout": ["React", "Next.js", "Node.js", "React Native", "Flutter", "MongoDB", "PostgreSQL", "AWS", "Firebase"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AINOR Subscription Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development Subscription",
            "description": "Professional websites with hosting, SSL, maintenance, and 24/7 support included. Starting at ₹9,999/month."
          },
          "price": "9999",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "9999",
            "priceCurrency": "INR",
            "unitText": "month"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development Subscription",
            "description": "iOS and Android apps with React Native or Flutter. App store submission, maintenance, and support included."
          },
          "price": "19999",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "19999",
            "priceCurrency": "INR",
            "unitText": "month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "E-Commerce Development Subscription",
            "description": "Complete e-commerce platform with product catalog, payments, admin panel, and SEO optimization."
          },
          "price": "14999",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "14999",
            "priceCurrency": "INR",
            "unitText": "month"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sttrika Founder"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "AINOR saved us ₹3 lakhs compared to other quotes. Within 6 months, our e-commerce site generated ₹10 lakhs in revenue. 5,000+ users and growing!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "GoForCab CEO"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5", 
          "bestRating": "5"
        },
        "reviewBody": "We interviewed 5 agencies. Everyone quoted ₹20+ lakhs for our ride-hailing app. AINOR built it for ₹40k/month with better quality. 10,000+ rides completed!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "ExamBulletin Team"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5", 
          "bestRating": "5"
        },
        "reviewBody": "The SEO results are incredible. We went from 0 to 100k monthly visitors in 90 days. Now ranking #1 for Sarkari Result keywords!"
      }
    ]
  };

  // FAQ Schema for better rich snippets
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AINOR's subscription web development model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AINOR is India's first subscription-based web development company. Instead of paying ₹3-5 lakhs upfront, you pay a small setup fee + affordable monthly payments starting at ₹9,999/month. Everything is included: development, hosting, SSL, maintenance, updates, and 24/7 support. Cancel anytime with 30 days notice."
        }
      },
      {
        "@type": "Question",
        "name": "How much does web development cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional web development in India costs ₹50,000 to ₹5,00,000 upfront plus ₹15,000-50,000/month for maintenance. With AINOR's subscription model, you get the same quality from just ₹9,999/month all-inclusive. Save 60-70% compared to traditional agencies."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in AINOR's subscription plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All AINOR plans include: custom development, premium hosting, SSL certificate, domain setup, SEO optimization, security monitoring, regular updates, bug fixes, feature additions, and 24/7 support. No hidden costs, no surprise invoices."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel my AINOR subscription anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! There are no long-term contracts. You can cancel anytime with 30 days notice. When you cancel, you receive all source code and can host your website/app yourself or transfer to another developer."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website with AINOR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic websites are delivered in 7-14 days. Professional websites take 14-21 days. E-commerce platforms take 30-45 days. Mobile apps take 60-90 days. We start development immediately after you choose your plan."
        }
      },
      {
        "@type": "Question",
        "name": "Is AINOR a registered company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AINOR is a Government of India recognized MSME (Micro, Small and Medium Enterprise) with Udyam Registration Number UDYAM-UP-36-0033877. We are fully compliant with Indian business regulations."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
