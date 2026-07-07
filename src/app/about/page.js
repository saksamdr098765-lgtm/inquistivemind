import React from 'react'
import Hero from './components/Hero'

import AboutAcademy from './components/AboutAcademy'

import CourseCategories from '../courses/components/CourseCategroies'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
export const metadata = {
  title: "About Us | Inquisitive Mind Academy",

  description:
    "Learn more about Inquisitive Mind Academy, our mission, experienced French language tutors, teaching methodology, and commitment to helping students achieve fluency in French through interactive online learning.",

  keywords: [
    "About Inquisitive Mind Academy",
    "French Language Institute",
    "French Language Academy",
    "French Tutors",
    "Learn French",
    "Online French Classes",
    "French Coaching",
    "French Language Teachers",
    "French Learning Platform",
    "French Education",
    "French Courses India",
  ],

  alternates: {
    canonical: "/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About Inquisitive Mind Academy",
    description:
      "Discover our mission, expert French tutors, and interactive learning approach designed to help students master the French language with confidence.",

    url: "/about",

    siteName: "Inquisitive Mind Academy",

    type: "website",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "About Inquisitive Mind Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About Inquisitive Mind Academy",

    description:
      "Meet the team behind Inquisitive Mind Academy and discover our mission to make French learning simple, engaging, and effective.",

    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function page() {
  return (
   <>
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://www.inquistivemindacademy.com/about/#webpage",
      url: "https://www.inquistivemindacademy.com/about",
      name: "About Inquisitive Mind Academy",
      description:
        "Learn about Inquisitive Mind Academy, our mission, teaching approach, and expert French language educators.",
      isPartOf: {
        "@id": "https://www.inquistivemindacademy.com/#website",
      },
      about: {
        "@id": "https://www.inquistivemindacademy.com/#organization",
      },
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.inquistivemindacademy.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://www.inquistivemindacademy.com/about",
        },
      ],
    }),
  }}
/>
   <Hero></Hero>
  
   <AboutAcademy></AboutAcademy>
  <CourseCategories></CourseCategories>
  <HowItWorks></HowItWorks>
  <CTA></CTA>

   </>
  )
}
