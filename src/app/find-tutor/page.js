import React from 'react'
import StudentOnboarding from './components/StudentOnboarding'
export const metadata = {
  title: "Find a French Tutor | Inquisitive Mind Academy",

  description:
    "Find experienced French language tutors at Inquisitive Mind Academy. Get personalized one-on-one guidance, live online classes, flexible schedules, and expert support to achieve your French learning goals.",

  keywords: [
    "French Tutor",
    "Find French Tutor",
    "Online French Tutor",
    "French Teacher",
    "French Language Tutor",
    "French Speaking Tutor",
    "French Coaching",
    "French Tutor India",
    "Private French Classes",
    "One to One French Classes",
    "French Learning",
    "Learn French Online"
  ],

  alternates: {
    canonical: "/find-tutor",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Find a French Tutor | Inquisitive Mind Academy",

    description:
      "Connect with experienced French tutors for personalized online learning and one-on-one guidance.",

    url: "/find-tutor",

    type: "website",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Find a French Tutor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Find a French Tutor",

    description:
      "Personalized French tutoring with experienced instructors.",

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
