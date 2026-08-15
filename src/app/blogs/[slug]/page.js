import { blogs } from "@/app/data/blogs";
import { notFound } from "next/navigation";
import ReadingProgress from "./components/ReadingProgress";
import Breadcrumb from "./components/Breadcrumb";
import BlogHero from "./components/BlogHero";
import BlogContent from "./components/BlogContent";
import BlogSidebar from "./components/BlogSideBar";
import PreviousNext from "./components/PreviousNext";
import RelatedPosts from "./components/RelatedPosts";
import FAQSection from "./components/FAQSection";
import ShareButtons from "./components/ShareButton";
import TableOfContents from "./components/TableOfContent";
import RelatedCourses from "./components/RelatedCourses";
import { getBlogSchema } from "@/schemas/BlogSchema";
import SITE_CONFIG from "@/app/siteConfig";
import BlogCTA from "./components/BlogCTA";
import BlogQuickInfo from "./components/BlogQuickInfo";
import BlogReviews from "./components/BlogReviews";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Inquisitive Mind Academy",
      robots: { index: false, follow: false },
    };
  }

  const url = `${SITE_CONFIG.url}/blogs/${blog.slug}`;
  const cover = blog.coverImage?.startsWith("http")
    ? blog.coverImage
    : `${SITE_CONFIG.url}${blog.coverImage || SITE_CONFIG.ogImage}`;

  return {
    title: blog.seo?.title || blog.title,
    description: blog.seo?.description || blog.excerpt,
    keywords: blog.seo?.keywords || blog.tags || [],
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: blog.seo?.title || blog.title,
      description: blog.seo?.description || blog.excerpt,
      url,
      siteName: SITE_CONFIG.name,
      type: "article",
      locale: "en_IN",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt || blog.publishedAt,
      authors: [blog.author?.name || SITE_CONFIG.name],
      images: [{ url: cover, width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo?.title || blog.title,
      description: blog.seo?.description || blog.excerpt,
      images: [cover],
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const schemas = getBlogSchema(blog);
  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <ReadingProgress />

      <main className="bg-white pt-14 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

        <section className="border-b border-gray-100 relative">
          <div className="mx-auto max-w-7xl px-3.5 sm:px-6 py-6 sm:py-10">
            <Breadcrumb blog={blog} />
            <BlogHero blog={blog} />
            <BlogQuickInfo blog={blog} />
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-3.5 sm:px-6 py-6 sm:py-14 relative">
          <div className="grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)_320px]">
            {/* Desktop TOC */}
            <aside className="hidden xl:block">
              <div className="sticky top-28">
                <TableOfContents content={blog.content} />
              </div>
            </aside>

            <article className="min-w-0">
              {/* Mobile Table of Contents */}
              <div className="mb-6 xl:hidden">
                <TableOfContents content={blog.content} />
              </div>

              <BlogContent
                content={blog.content}
                tags={blog.tags}
                author={blog.author}
                reviewedBy={blog.reviewedBy}
              />
              <FAQSection faq={blog.faq} />
              <BlogReviews blog={blog} />
              <BlogCTA cta={blog.cta} />
              <RelatedCourses relatedCourses={blog.relatedCourses} />
              <ShareButtons blog={blog} />
              <PreviousNext currentBlog={blog} blogs={blogs} />

              {/* Mobile Sidebar Content */}
              <div className="mt-10 lg:hidden">
                <BlogSidebar currentBlog={blog} blogs={blogs} />
              </div>
            </article>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block">
              <BlogSidebar currentBlog={blog} blogs={blogs} />
            </aside>
          </div>
        </section>

      { relatedBlogs.length && <section className="border-t border-gray-100 bg-slate-50 relative">
          <div className="mx-auto max-w-7xl px-3.5 sm:px-6 py-8 sm:py-12">
            <RelatedPosts blogs={relatedBlogs} />
          </div>
        </section>}
      </main>
    </>
  );
}