import { notFound } from "next/navigation";
import SITE_CONFIG from "@/app/siteConfig";
import { services } from "@/app/data/services";
import { blogs } from "@/app/data/blogs";
import { getServiceSchema } from "@/schemas/serviceSchema";

import ServiceHero from "./components/Hero";
import ServiceBriefOverview from "./components/ServiceBriefOverview";
import ServiceQuickInfo from "./components/ServiceQuickInfo";
import ServiceHowItWorks from "./components/ServiceHowItWorks";
import ServiceWhatsCovered from "./components/ServiceWhatsCovered";
import ServiceWhyChooseUs from "./components/ServiceWhyChooseUs";
import ServiceCoursesWeOffer from "./components/ServiceCoursesWeOffer";
import ServicePricingAndAreas from "./components/ServicePricingAndAreas";
import ServiceTutorCallout from "./components/ServiceTutorCallout";
import ServiceFAQ from "./components/ServiceFAQ";
import ServiceOtherServices from "./components/ServiceOtherServices";
import ServiceRelatedBlogs from "./components/ServiceRelatedBlogs";
import ServiceReferences from "./components/ServiceReferences";
import ServiceCTA from "./components/ServiceCTA";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Inquisitive Mind Academy",
      robots: { index: false, follow: false },
    };
  }

  const url = `${SITE_CONFIG.url}/services/${service.slug}`;
  const image = service.coverImage?.startsWith("http")
    ? service.coverImage
    : `${SITE_CONFIG.url}${service.coverImage || SITE_CONFIG.ogImage}`;

  return {
    title: service.seo?.title || service.title,
    description: service.seo?.description || service.description,
    keywords: service.seo?.keywords || [],
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: service.seo?.title || service.title,
      description: service.seo?.description || service.description,
      url,
      siteName: SITE_CONFIG.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo?.title || service.title,
      description: service.seo?.description || service.description,
      images: [image],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const schemas = getServiceSchema(service);

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
          {/* 1. H1 + Intro + Trust badges */}
          <ServiceHero service={service} />

          {/* 2. Service Overview in Brief (Section after Hero) */}
          <ServiceBriefOverview service={service} />

          {/* 3. Quick Info snapshot */}
          <ServiceQuickInfo service={service} />

          {/* 4. How It Works */}
          <ServiceHowItWorks service={service} />

          {/* 5. What's Covered */}
          <ServiceWhatsCovered service={service} />

          {/* 6. Why Choose Us */}
          <ServiceWhyChooseUs service={service} />

          {/* 7. Courses We Offer */}
          <ServiceCoursesWeOffer service={service} />

          {/* 8. Pricing, Fee Plans & Study Centers */}
          <ServicePricingAndAreas service={service} />

          {/* 9. Become a Tutor callout */}
          <ServiceTutorCallout service={service} />

          {/* 10. FAQ */}
          <ServiceFAQ service={service} />

          {/* 11. Other Services We Offer */}
          <ServiceOtherServices currentSlug={service.slug} />

          {/* 12. Related Blog Posts */}
          <ServiceRelatedBlogs service={service} blogs={blogs} />

          {/* 13. References */}
          <ServiceReferences service={service} />

          {/* 14. Final CTA */}
          <ServiceCTA service={service} />
        </div>
      </main>
    </>
  );
}
