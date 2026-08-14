import SITE_CONFIG from "@/app/siteConfig";

export function getLocationSchema(location) {
  const url = `${SITE_CONFIG.url}/locations/${location.slug}`;

  const schemas = [
    // Educational Organization / School / Center
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "@id": `${url}#educationalcenter`,
      name: `${SITE_CONFIG.name} - ${location.city}`,
      url,
      image: location.coverImage?.startsWith("http")
        ? location.coverImage
        : `${SITE_CONFIG.url}${location.coverImage || SITE_CONFIG.ogImage}`,
      description: location.shortDescription,
      telephone: location.phone || SITE_CONFIG.phone,
      email: SITE_CONFIG.email,

      address: {
        "@type": "PostalAddress",
        streetAddress: location.address || SITE_CONFIG.address.line1,
        addressLocality: location.city,
        addressRegion: location.state || SITE_CONFIG.address.state,
        postalCode: location.postalCode || SITE_CONFIG.address.postalCode,
        addressCountry: "IN",
      },

      openingHours: location.hours || SITE_CONFIG.businessHours,
      areaServed: location.areas || [],
      priceRange: "₹3,000 - ₹25,000",
    },

    // WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: location.title,
      description: location.shortDescription,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },
      about: {
        "@id": `${url}#educationalcenter`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: location.coverImage?.startsWith("http")
          ? location.coverImage
          : `${SITE_CONFIG.url}${location.coverImage || SITE_CONFIG.ogImage}`,
      },
    },

    // Breadcrumb
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_CONFIG.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: `${SITE_CONFIG.url}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: location.city,
          item: url,
        },
      ],
    },

    // Service catalog
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#services`,
      serviceType: "French Language & Educational Coaching",
      provider: {
        "@id": `${url}#educationalcenter`,
      },
      areaServed: {
        "@type": "City",
        name: location.city,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "French Language Courses",
        itemListElement: (location.courses || []).map((courseName) => ({
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Course",
            name: courseName
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase()),
          },
        })),
      },
    },
  ];

  // FAQ Schema
  if (location.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: location.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemas;
}
