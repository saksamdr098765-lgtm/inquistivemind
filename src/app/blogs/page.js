import { blogsSchema } from "@/schemas/blogsSchema";
import { blogs } from "../data/blogs";
import BlogGrid from "./components/BlogGrid";
import BlogHero from "./components/BlogHero";
import FeaturedBlog from "./components/FeaturedBlog";
import SITE_CONFIG from "../siteConfig";

export const metadata = {
  title: "French & Educational Learning Blog | Inquisitive Mind Academy",
  description:
    "Explore expert French language learning guides, DELF & TEF exam preparation tips, vocabulary hacks, and study abroad insights from Inquisitive Mind Academy.",
  keywords: [
    "French learning blog",
    "Learn French online",
    "DELF B2 tips",
    "TEF Canada prep",
    "Inquisitive Mind Academy blog",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/blogs`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "French & Educational Learning Blog | Inquisitive Mind Academy",
    description:
      "Explore expert French language learning guides, DELF & TEF exam preparation tips, vocabulary hacks, and study abroad insights.",
    url: `${SITE_CONFIG.url}/blogs`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Inquisitive Mind Academy Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "French & Educational Learning Blog | Inquisitive Mind Academy",
    description:
      "Explore expert French language learning guides, DELF & TEF exam preparation tips, vocabulary hacks, and study abroad insights.",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function BlogsPage() {
  const featuredBlog = blogs.find((blog) => blog.featured) || blogs[0];
  const otherBlogs = blogs.filter((blog) => blog.id !== featuredBlog?.id);

  return (
    <main>
      {blogsSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <BlogHero totalBlogs={blogs.length} />
      <FeaturedBlog blog={featuredBlog} />
      <BlogGrid blogs={otherBlogs} />
    </main>
  );
}