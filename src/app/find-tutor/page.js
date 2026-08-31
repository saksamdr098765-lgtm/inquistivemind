import React from 'react'
import StudentOnboarding from './components/StudentOnboarding'
export const metadata = {
  title: "Find a Tutor Online | Inquisitive Mind Academy",

  description:
    "Find qualified tutors at Inquisitive Mind Academy for French, English, and academic subjects. Live online classes, personalized guidance, flexible schedules.",

  keywords: [
    "Find a Tutor",
    "Online Tutor",
    "French Tutor",
    "English Speaking Tutor",
    "Academic Tutor",
    "Home Tutor Online",
    "Private Tutor India",
    "One to One Classes",
    "CBSE ICSE Tutor",
    "French Language Tutor",
    "Online Tutor Jobs",
    "Find French Tutor Online",
  ],

  alternates: {
    canonical: "/find-tutor",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Find a Tutor Online | Inquisitive Mind Academy",

    description:
      "Connect with qualified tutors for French, English, and academic subjects — personalized online learning made simple.",

    url: "/find-tutor",

    type: "website",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Find a Tutor Online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Find a Tutor Online",

    description:
      "Personalized tutoring across French, English, and academic subjects.",

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
          item: "https://www.inquistivemindacademy.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Find a Tutor",
          item: "https://www.inquistivemindacademy.com/find-tutor"
        }
      ]
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id":
        "https://www.inquistivemindacademy.com/find-tutor/#webpage",
      url: "https://www.inquistivemindacademy.com/find-tutor",
      name: "Find a French Tutor",
      description:
        "Connect with experienced French tutors for personalized online French learning.",
      isPartOf: {
        "@id": "https://www.inquistivemindacademy.com/#website"
      },
      about: {
        "@id": "https://www.inquistivemindacademy.com/#organization"
      }
    }),
  }}
/>
    <StudentOnboarding></StudentOnboarding>
    
    </>
  )
}
