export default function robots() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.inquistivemindacademy.com").replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/login",
          "/signup",
          "/forget-password",
          "/teacher-profile",
          "/teacher-profile/*",
          "/admin-panel",
          "/admin-panel/*",
          "/student-profile",
          "/student-profile/*",
          "/api/*",
          "/mutations/*",
          "/Skeletons/*",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
