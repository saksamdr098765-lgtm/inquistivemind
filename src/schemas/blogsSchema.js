import SITE_CONFIG from "@/app/siteConfig";

export const blogsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_CONFIG.url}/blogs#collection`,
    url: `${SITE_CONFIG.url}/blogs`,
    name: "Educational & French Language Blog | Inquisitive Mind Academy",
    description:
      "Explore expert French language learning guides, DELF exam tips, study abroad insights, and language tips from Inquisitive Mind Academy.",
    isPartOf: {
      "@id": `${SITE_CONFIG.url}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_CONFIG.url}/blogs#breadcrumb`,
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
    ],
  },
];
