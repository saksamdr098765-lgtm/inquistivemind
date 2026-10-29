import HomeHero from "./Components/home/HomeHero";
import HowItWorksSection from "./Components/home/HowItWorksSection";
import BentoFeaturesSection from "./Components/home/BentoFeaturesSection";
import InteractiveRoadmapBuilder from "./Components/home/InteractiveRoadmapBuilder";
import DualCtaSplitSection from "./Components/home/DualCtaSplitSection";
import TestimonialsSection from "./Components/home/TestimonialsSection";
import FaqSection from "./Components/home/FaqSection";
import FinalCtaBanner from "./Components/home/FinalCtaBanner";
import MobileFloatingCta from "./Components/home/MobileFloatingCta";
import HOME_CONTENT from "./data/homeContent";

export const metadata = {
  metadataBase: new URL("https://www.inquistivemindacademy.com"),
  title: {
    default: "Inquisitive Mind Academy | Tuition, French & Tutor Jobs",
    template: "%s | Inquisitive Mind Academy",
  },

  description:
    "Learn or teach online with Inquisitive Mind Academy — French courses, academic tuition for Class 1-12, and tutor opportunities, all with expert guidance.",

  keywords: [
    "Inquisitive Mind Academy",
    "Online Tuition Classes",
    "Learn French Online",
    "French Language Classes",
    "French Language Course",
    "French for Beginners",
    "French Tutor",
    "DELF Preparation",
    "English Speaking Course",
    "Spoken English Classes",
    "Academic Tuition Online",
    "CBSE ICSE Tuition",
    "Class 1 to 12 Tuition",
    "Online Tutor Jobs",
    "Become a Tutor",
    "Find a Tutor Online",
    "French Academy India",
    "Online Learning Platform",
  ],

  authors: [
    {
      name: "Inquisitive Mind Academy",
    },
  ],

  creator: "Inquisitive Mind Academy",

  publisher: "Inquisitive Mind Academy",

  alternates: {
    canonical: "/",
  },

  category: "Education",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Inquisitive Mind Academy",

    title: "Inquisitive Mind Academy | Tuition, French & Tutor Jobs",

    description:
      "Learn or teach online with Inquisitive Mind Academy — French courses, academic tuition for Class 1-12, and tutor opportunities, all with expert guidance.",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Inquisitive Mind Academy - Tuition, French & Tutor Jobs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Inquisitive Mind Academy | Tuition, French & Tutor Jobs",

    description:
      "Learn or teach online with Inquisitive Mind Academy — French courses, academic tuition for Class 1-12, and tutor opportunities, all with expert guidance.",

    images: ["/web-app-manifest-512x512.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white text-slate-900 selection:bg-yellow-400 selection:text-slate-950 overflow-x-clip">
      {/* 1. Hero Section with Dual-Path Switcher & Interactive Match Widget */}
      <HomeHero />

      {/* 2. "How It Works" Animated Step Journey */}
      <HowItWorksSection />

      {/* 4. Bento-Grid Features Section */}
      <BentoFeaturesSection />

      {/* 5. Interactive 1-on-1 Learning Blueprint & Match Engine */}
      <InteractiveRoadmapBuilder />

      {/* 6. Dual CTA Split Section ("Become a Student" & "Become a Tutor") */}
      <DualCtaSplitSection />

      {/* 7. Auto-Playing & Pausable Testimonials Carousel */}
      <TestimonialsSection />

      {/* 8. Accessible FAQ Accordion */}
      <FaqSection />

      {/* 9. Final Full-Width High-Impact Closing CTA Banner */}
      <FinalCtaBanner />

      {/* 10. Mobile Sticky Floating Bottom CTA */}
      <MobileFloatingCta />

      {/* Structured Data: FAQPage JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOME_CONTENT.faqs.items.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
