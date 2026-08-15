import React from "react";
import Hero from "./components/Hero";
import PriceOverview from "./components/PriceOverview";
import WhyGetThisTest from "./components/WhyGetThisTest";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import PriceRelatedServices from "./components/PriceRelatedServices";
import PriceRelatedBlogs from "./components/PriceRelatedBlogs";
import SITE_CONFIG from "@/app/siteConfig";
import { notFound } from "next/navigation";
import { prices } from "@/app/data/prices";
import { getPriceSchema } from "@/schemas/priceSchema";

export async function generateStaticParams() {
  return prices.map((price) => ({
    slug: price.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const priceData = prices.find((price) => price.slug === slug);

  if (!priceData) return {};

  const url = `${SITE_CONFIG.url}${
    priceData.seo?.canonical || `/prices/${priceData.slug}`
  }`;

  return {
    title: priceData.seo?.title || priceData.hero?.title,
    description: priceData.seo?.description || priceData.hero?.subtitle,
    keywords: priceData.seo?.keywords || [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: priceData.seo?.title || priceData.hero?.title,
      description: priceData.seo?.description || priceData.hero?.subtitle,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function PriceSlugPage({ params }) {
  const { slug } = await params;
  const priceData = prices.find((price) => price.slug === slug);

  if (!priceData) {
    notFound();
  }

  const testTitle =
    priceData.hero?.title || priceData.seo?.title || "Course Fee Details";
  const priceSchemas = getPriceSchema(priceData);

  return (
    <>
      {priceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="bg-white">
        <Hero hero={priceData.hero} priceCard={priceData.priceCard} />
        <PriceOverview priceCard={priceData.priceCard} testTitle={testTitle} />
        <WhyGetThisTest
          testTitle={testTitle}
          whyGetTest={priceData.whyEnroll}
        />
        <PriceRelatedServices priceSlug={priceData.slug} />
        <PriceRelatedBlogs />
        <FAQ faqs={priceData.faqs} />
        <CTA cta={priceData.cta} testTitle={testTitle} />
      </main>
    </>
  );
}
