import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  lang = 'tr',
  structuredData = null,
  noIndex = false,
  noFollow = false,
  author = 'Hospitadent',
  publishedTime = null,
  modifiedTime = null,
  section = null,
  tags = []
}) => {
  const defaultTitle = "Hospitadent - Türkiye'nin En Büyük Diş Sağlığı Kuruluşu";
  const defaultDescription = "Hospitadent, 20+ yıllık deneyimle Türkiye'nin en büyük diş sağlığı kuruluşu. 18 şubede implant, ortodonti, diş beyazlatma ve daha fazlası.";
  const defaultKeywords = "diş hekimi, implant, ortodonti, diş beyazlatma, zirkonyum kaplama, porselen diş, diş teli, gülüş tasarımı, hospitadent, diş kliniği, diş hastanesi";
  const defaultImage = "https://hospitadent.com/og-image.jpg";
  const defaultUrl = "https://hospitadent.com";

  const finalTitle = title ? `${title} | Hospitadent` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const finalUrl = url || defaultUrl;

  // Robots meta tag
  const robotsContent = noIndex && noFollow ? 'noindex, nofollow' : 
                       noIndex ? 'noindex, follow' : 
                       noFollow ? 'index, nofollow' : 'index, follow';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="language" content={lang} />
      <meta name="robots" content={robotsContent} />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="Hospitadent" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={finalTitle} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalImage} />
      <meta property="twitter:image:alt" content={finalTitle} />
      <meta property="twitter:site" content="@hospitadent" />
      <meta property="twitter:creator" content="@hospitadent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Alternate Language Versions */}
      <link rel="alternate" hreflang="tr" href="https://hospitadent.com/" />
      <link rel="alternate" hreflang="en" href="https://hospitadent.com/en" />
      <link rel="alternate" hreflang="fr" href="https://hospitadent.com/fr" />
      <link rel="alternate" hreflang="de" href="https://hospitadent.com/de" />
      <link rel="alternate" hreflang="ru" href="https://hospitadent.com/ru" />
      <link rel="alternate" hreflang="es" href="https://hospitadent.com/es" />
      <link rel="alternate" hreflang="ar" href="https://hospitadent.com/sa" />
      <link rel="alternate" hreflang="x-default" href="https://hospitadent.com/" />
      
      {/* Local Business Schema */}
      {!structuredData && (
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Hospitadent",
          "description": finalDescription,
          "url": finalUrl,
          "logo": "https://hospitadent.com/logo.png",
          "image": finalImage,
          "telephone": "+90-444-99-22",
          "email": "info@hospitadent.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "TR",
            "addressLocality": "Istanbul",
            "addressRegion": "Istanbul"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.0082,
            "longitude": 28.9784
          },
          "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-17:00",
          "priceRange": "₺₺₺",
          "paymentAccepted": "Cash, Credit Card, Insurance",
          "currenciesAccepted": "TRY, USD, EUR",
          "medicalSpecialty": "Dentistry",
          "availableService": [
            {
              "@type": "MedicalProcedure",
              "name": "Dental Implant",
              "description": "İmplant tedavisi"
            },
            {
              "@type": "MedicalProcedure", 
              "name": "Orthodontics",
              "description": "Ortodonti tedavisi"
            },
            {
              "@type": "MedicalProcedure",
              "name": "Teeth Whitening", 
              "description": "Diş beyazlatma"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/hospitadent",
            "https://www.instagram.com/hospitadent",
            "https://www.linkedin.com/company/hospitadent"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "15000",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
        </script>
      )}
      
      {/* Custom Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://hospitadent.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": title || "Hospitadent",
            "item": finalUrl
          }
        ]
      })}
      </script>
    </Helmet>
  );
};

export default SEOHead; 