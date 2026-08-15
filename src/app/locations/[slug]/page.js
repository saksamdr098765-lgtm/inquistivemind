import { getLocation, locations } from "@/app/data/locations";
import { notFound } from "next/navigation";
import Hero from "./components/Hero";
import LocationBriefOverview from "./components/LocationBriefOverview";
import AreasWeServe from "./components/AreasWeServe";
import LocationCentralHub from "./components/LocationCentralHub";
import LocationWhyChooseUs from "./components/LocationWhyChooseUs";
import LocationHowToApply from "./components/LocationHowToApply";
import LocationOtherServices from "./components/LocationOtherServices";
import LocationOtherAreas from "./components/LocationOtherAreas";
import LocationCourses from "./components/LocationCourses";
import LocationBlogs from "./components/LocationBlogs";
import LocationTeacherCallout from "./components/LocationTeacherCallout";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import { getLocationSchema } from "@/schemas/locationSchema";
import SITE_CONFIG from "@/app/siteConfig";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found | Inquisitive Mind Academy",
      robots: { index: false, follow: false },
    };
  }

  const url = `${SITE_CONFIG.url}/locations/${location.slug}`;
  const image = location.coverImage?.startsWith("http")
    ? location.coverImage
    : `${SITE_CONFIG.url}${location.coverImage || SITE_CONFIG.ogImage}`;

  return {
    title: location.seo?.title || location.title,
    description: location.seo?.description || location.shortDescription,
    keywords: location.seo?.keywords || [],
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: location.seo?.title || location.title,
      description: location.seo?.description || location.shortDescription,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: location.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: location.seo?.title || location.title,
      description: location.seo?.description || location.shortDescription,
      images: [image],
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }

  const schemas = getLocationSchema(location);

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
      <main className="bg-white relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="relative">
          {/* 1. Hero Header */}
          <Hero location={location} />

          {/* 2. Location Brief Overview */}
          <LocationBriefOverview location={location} />

          {/* 3. Specific Local Sectors & Areas We Serve */}
          <AreasWeServe location={location} />

          {/* 4. Central Hub (Connecting to Service, Price, and Blog page) */}
          <LocationCentralHub location={location} />

          {/* 4. Why Choose Us in Chandigarh/Location */}
          <LocationWhyChooseUs location={location} />

          {/* 5. How To Apply & Enroll */}
          <LocationHowToApply location={location} />

          {/* 6. Other Services Offered */}
          <LocationOtherServices />

          {/* 7. Other Locations & Study Centers We Serve */}
          <LocationOtherAreas currentSlug={location.slug} />

          {/* 8. French Courses Offered */}
          <LocationCourses location={location} />

          {/* 9. Blogs Knowledge Hub */}
          <LocationBlogs location={location} />

          {/* 10. Are You a Teacher / Faculty Callout */}
          <LocationTeacherCallout location={location} />

          {/* 11. Location FAQs */}
          <FAQ location={location} />

          {/* 12. Final CTA */}
          <CTA location={location} />
        </div>
      </main>
    </>
  );
}
