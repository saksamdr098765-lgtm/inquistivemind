import React from 'react'
import Hero from './components/Hero'
import CourseCategories from './components/CourseCategroies'

import LearningExperience from './components/LearningExperience'
import FAQs from './components/Faqs'

export const metadata = {
  title: "French Language Courses | Inquisitive Mind Academy",

  description:
    "Explore French language courses at Inquisitive Mind Academy. Learn French from beginner to advanced levels with live online classes, expert tutors, structured lessons, and personalized guidance.",

  keywords: [
    "French Language Courses",
    "Learn French Online",
    "French Classes",
    "French Course",
    "Online French Classes",
    "French for Beginners",
    "A1 French Course",
    "A2 French Course",
    "B1 French Course",
    "B2 French Course",
    "French Speaking Course",
    "French Grammar",
    "French Institute",
    "French Academy",
    "DELF Preparation"
  ],

  alternates: {
    canonical: "/courses",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "French Language Courses | Inquisitive Mind Academy",

    description:
      "Browse our French language courses designed for beginners and advanced learners with expert instructors and live interactive classes.",

    url: "/courses",

    type: "website",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "French Language Courses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "French Language Courses",

    description:
      "Start learning French with structured online courses from Inquisitive Mind Academy.",

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
          name: "Courses",
          item: "https://www.inquistivemindacademy.com/courses",
        },
      ],
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://www.inquistivemindacademy.com/courses/#webpage",
      url: "https://www.inquistivemindacademy.com/courses",
      name: "French Language Courses",
      description:
        "Browse beginner to advanced French language courses offered by Inquisitive Mind Academy.",
      isPartOf: {
        "@id": "https://www.inquistivemindacademy.com/#website",
      },
      about: {
        "@id": "https://www.inquistivemindacademy.com/#organization",
      },
    }),
  }}
/>
<Hero></Hero>
<CourseCategories></CourseCategories>

<LearningExperience></LearningExperience>

<FAQs></FAQs>

  </>
  )
}
