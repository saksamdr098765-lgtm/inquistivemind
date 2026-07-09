
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,

  sitemapSize: 7000,

  changefreq: "weekly",

  priority: 0.7,

  autoLastmod: true,

  exclude: [
    "/admin-panel/*",
    "/dashboard/*",
    "/mutations/*",
    "/Skeletons/*",
    "/student-profile/*",
    "/api/*",
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/verify-email",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
    ],
  },
};