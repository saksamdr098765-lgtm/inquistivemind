import SITE_CONFIG from "@/app/siteConfig";

export function getPriceSchema(priceData) {
  const slug = priceData.slug;
  const url = `${SITE_CONFIG.url}${priceData.seo?.canonical || `/prices/${slug}`}`;
  const title = priceData.hero?.title || priceData.seo?.title || "Course Fee Details";
  const description = priceData.seo?.description || priceData.hero?.subtitle || "";
  const offerPrice = priceData.priceCard?.offerPrice || 4999;

  const schemas = [
    // WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url: url,
      name: title,
      description: description,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },
      about: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      primaryImageOfPage: priceData.hero?.image
        ? {
            "@type": "ImageObject",
            url: priceData.hero.image.startsWith("http")
              ? priceData.hero.image
              : `${SITE_CONFIG.url}${priceData.hero.image}`,
          }
        : undefined,
    },

    // Course Offer Schema
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": `${url}#course`,
      name: title,
      description: description,
      url: url,
      provider: {
        "@type": "EducationalOrganization",
        name: SITE_CONFIG.name,
        sameAs: SITE_CONFIG.url,
      },
      offers: {
        "@type": "Offer",
        price: offerPrice,
        priceCurrency: "INR",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: url,
        seller: {
          "@type": "EducationalOrganization",
          name: SITE_CONFIG.name,
          telephone: SITE_CONFIG.phone,
        },
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
          name: "Prices & Fees",
          item: `${SITE_CONFIG.url}/prices`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: url,
        },
      ],
    },
  ];

  // FAQ Schema
  const faqsList = priceData.faqs || priceData.faq;
  if (faqsList && faqsList.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqsList.map((item) => ({
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
