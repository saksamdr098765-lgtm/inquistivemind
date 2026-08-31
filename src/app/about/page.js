import React from 'react'
import Hero from './components/Hero'

import AboutAcademy from './components/AboutAcademy'

// import CourseCategories from '../courses/components/CourseCategroies'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import FounderSection from './components/FounderSection'
export const metadata = {
  title: "About Us | Inquisitive Mind Academy",

  description:
    "Learn about Inquisitive Mind Academy — our mission, expert tutors, and teaching methodology across French, English, and academic tuition for students of all levels.",

  keywords: [
    "About Inquisitive Mind Academy",
    "Online Tuition Academy",
    "French Language Institute",
    "English Speaking Institute",
    "Academic Coaching Institute",
    "Expert Tutors India",
    "Online Learning Platform",
    "French Education",
    "Tuition Classes India",
    "Learning Academy India",
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
      "Discover our mission, expert tutors, and teaching approach across French, English, and academic tuition — built to help students learn with confidence.",

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
      "Meet the team behind Inquisitive Mind Academy and our mission to make learning simple, engaging, and effective.",

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
   <FounderSection></FounderSection>
  {/* <CourseCategories></CourseCategories> */}
  <HowItWorks></HowItWorks>
  <CTA></CTA>

   </>
  )
}
