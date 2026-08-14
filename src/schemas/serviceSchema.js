import SITE_CONFIG from "@/app/siteConfig";

export function getServiceSchema(service) {
  const url = `${SITE_CONFIG.url}/services/${service.slug}`;

  const schemas = [
    // WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: service.title,
      description: service.description,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },
      about: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: service.coverImage?.startsWith("http")
          ? service.coverImage
          : `${SITE_CONFIG.url}${service.coverImage || SITE_CONFIG.ogImage}`,
      },
    },

    // Educational Service
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.title,
      description: service.description,
      image: service.coverImage?.startsWith("http")
        ? service.coverImage
        : `${SITE_CONFIG.url}${service.coverImage || SITE_CONFIG.ogImage}`,
      url,
      provider: {
        "@type": "EducationalOrganization",
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
      },
      serviceType: "French Language & Academic Coaching",
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
          name: "Services",
          item: `${SITE_CONFIG.url}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: url,
        },
      ],
    },
  ];

  // FAQ Schema
  if (service.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: service.faq.map((item) => ({
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
