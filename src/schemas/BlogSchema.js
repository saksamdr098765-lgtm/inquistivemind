import SITE_CONFIG from "@/app/siteConfig";

export function getBlogSchema(blog) {
  const schemas = [
    // Blog Article
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}#article`,

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}`,
      },

      headline: blog.title,
      description: blog.excerpt,

      image: [
        blog.coverImage?.startsWith("http")
          ? blog.coverImage
          : `${SITE_CONFIG.url}${blog.coverImage || SITE_CONFIG.ogImage}`,
      ],

      datePublished: blog.publishedAt,
      dateModified: blog.updatedAt || blog.publishedAt,
      inLanguage: "en-IN",

      author: {
        "@type": "Organization",
        name: blog.author?.name || SITE_CONFIG.name,
      },

      publisher: {
        "@type": "EducationalOrganization",
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
        },
      },

      keywords: blog.tags ? blog.tags.join(", ") : "",
      articleSection: blog.category || "Education",

      articleBody: Array.isArray(blog.content)
        ? blog.content
            .filter((block) => block.type === "paragraph")
            .map((block) => block.text)
            .join("\n\n")
        : typeof blog.content === "string"
        ? blog.content
        : "",

      url: `${SITE_CONFIG.url}/blogs/${blog.slug}`,
    },

    // WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}#webpage`,
      url: `${SITE_CONFIG.url}/blogs/${blog.slug}`,
      name: blog.title,
      description: blog.excerpt,
      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },
      about: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: blog.coverImage?.startsWith("http")
          ? blog.coverImage
          : `${SITE_CONFIG.url}${blog.coverImage || SITE_CONFIG.ogImage}`,
      },
      inLanguage: "en-IN",
    },

    // Breadcrumb
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}#breadcrumb`,
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
          name: "Blogs",
          item: `${SITE_CONFIG.url}/blogs`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: blog.title,
          item: `${SITE_CONFIG.url}/blogs/${blog.slug}`,
        },
      ],
    },
  ];

  // FAQ Schema
  if (blog.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}#faq`,
      mainEntity: blog.faq.map((item) => ({
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
