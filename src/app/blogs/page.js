
// import { blogsSchema } from "@/schema/blogsSchema";

import { blogs } from "../data/blogs";
import BlogGrid from "./components/BlogGrid";
import BlogHero from "./components/BlogHero";
import FeaturedBlog from "./components/FeaturedBlog";
// import SITE_CONFIG from "../SITE_CONFIG";

// export const metadata = {
//   title:
//     "Health Blog | Expert Health Tips & Diagnostic Guides | Bhangal Clinical Laboratories",

//   description:
//     "Read expert health articles, preventive healthcare tips, diagnostic test guides, wellness advice, disease awareness, and laboratory insights from Bhangal Clinical Laboratories & ECG Center.",

//   keywords: [
//     "Health Blog",
//     "Health Articles",
//     "Medical Blog",
//     "Diagnostic Test Guide",
//     "Blood Test Information",
//     "Preventive Healthcare",
//     "Wellness Tips",
//     "Disease Prevention",
//     "Health Checkup Guide",
//     "Laboratory Blog",
//     "Medical Advice",
//     "Healthcare Articles",
//     "Pathology Blog",
//     "Health Tips Garhshankar",
//     "Bhangal Clinical Laboratories Blog",
//   ],

//   alternates: {
//     canonical: `${SITE_CONFIG.url}/blogs`,
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title:
//       "Health Blog | Expert Health Tips & Diagnostic Guides",

//     description:
//       "Explore expert-written articles on preventive healthcare, diagnostic tests, nutrition, wellness, and disease awareness from Bhangal Clinical Laboratories.",

//     url: `${SITE_CONFIG.url}/blogs`,

//     siteName: SITE_CONFIG.name,

//     images: [
//       {
//         url: SITE_CONFIG.ogImage,
//         width: 1200,
//         height: 630,
//         alt: "Health Blog - Bhangal Clinical Laboratories",
//       },
//     ],

//     locale: "en_IN",

//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",

//     title:
//       "Health Blog | Expert Health Tips & Diagnostic Guides",

//     description:
//       "Read trusted health articles, wellness tips, and diagnostic test guides from Bhangal Clinical Laboratories.",

//     images: [SITE_CONFIG.ogImage],
//   },
// };
export default function BlogsPage() {
  const featuredBlog = blogs.find((blog) => blog.featured);
  const otherBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <>
     {/* {blogsSchema.map((schema, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
              }}
            />
          ))} */}
      <BlogHero totalBlogs={blogs.length} />

      <FeaturedBlog blog={featuredBlog} />

      <BlogGrid blogs={otherBlogs} />

      {/* <HealthPackagesCTA /> */}
    </>
  );
}