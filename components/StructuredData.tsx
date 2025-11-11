export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "GEM Builders LLC",
    "image": "https://gembuildsco.com/GEM-company-logo.png",
    "url": "https://gembuildsco.com",
    "priceRange": "$$",
    "description": "Expert specialty contracting services including siding, windows, framing, trim carpentry, and decks. Serving Fort Collins, Loveland, Windsor, Vail, Edwards, Eagle County and surrounding areas. 25+ years experience.",
    
    // Multiple locations
    "areaServed": [
      {
        "@type": "City",
        "name": "Fort Collins",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Fort Collins",
          "addressRegion": "CO"
        }
      },
      {
        "@type": "City",
        "name": "Loveland",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Loveland",
          "addressRegion": "CO"
        }
      },
      {
        "@type": "City",
        "name": "Windsor",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Windsor",
          "addressRegion": "CO"
        }
      },
      {
        "@type": "City",
        "name": "Vail",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vail",
          "addressRegion": "CO"
        }
      },
      {
        "@type": "City",
        "name": "Edwards",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Edwards",
          "addressRegion": "CO"
        }
      },
      {
        "@type": "City",
        "name": "Avon",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Avon",
          "addressRegion": "CO"
        }
      },
      {
        "@type": "City",
        "name": "Eagle",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Eagle",
          "addressRegion": "CO"
        }
      },
      {
        "@type": "City",
        "name": "Gypsum",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Gypsum",
          "addressRegion": "CO"
        }
      }
    ],
    
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Specialty Contracting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Siding Installation & Repair",
            "description": "Professional siding installation including fiber cement, vinyl, and wood siding"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Installation",
            "description": "Expert window replacement and installation for energy efficiency"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Framing Services",
            "description": "Structural framing for new construction, additions, and remodels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Trim Carpentry",
            "description": "Custom trim work, crown molding, baseboards, and finish carpentry"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deck Construction",
            "description": "Custom deck design and construction with composite or wood materials"
          }
        }
      ]
    },
    
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "47"
    },
    
    "sameAs": [
      // Add these when you create them
      // "https://www.facebook.com/gembuilders",
      // "https://www.instagram.com/gembuilders"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}