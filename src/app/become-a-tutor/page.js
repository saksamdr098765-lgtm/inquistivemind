import React from 'react'
import BecomeTutor from './components/BecomeTutor'
export const metadata = {
  title: "Become a French Tutor | Join Inquisitive Mind Academy",

  description:
    "Join Inquisitive Mind Academy as a French language tutor. Teach students worldwide through live online classes, enjoy flexible teaching hours, and become part of our growing team of passionate educators.",

  keywords: [
    "Become a French Tutor",
    "French Tutor Jobs",
    "Online French Teacher",
    "French Teaching Jobs",
    "Teach French Online",
    "French Language Tutor",
    "French Instructor",
    "French Educator",
    "French Faculty",
    "French Trainer",
    "French Teacher Recruitment",
    "Join Inquisitive Mind Academy"
  ],

  alternates: {
    canonical: "/become-a-tutor",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Become a French Tutor | Inquisitive Mind Academy",

    description:
      "Apply to become a French language tutor and teach students through live online classes with Inquisitive Mind Academy.",

    url: "/become-a-tutor",

    type: "website",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Become a French Tutor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Become a French Tutor",

    description:
      "Join our team of expert French language tutors.",

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
          name: "Become a Tutor",
          item: "https://www.inquistivemindacademy.com/become-a-tutor"
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
        "https://www.inquistivemindacademy.com/become-a-tutor/#webpage",
      url: "https://www.inquistivemindacademy.com/become-a-tutor",
      name: "Become a French Tutor",
      description:
        "Apply to become a French language tutor at Inquisitive Mind Academy and teach students through live online classes.",
      isPartOf: {
        "@id": "https://www.inquistivemindacademy.com/#website"
      },
      about: {
        "@id": "https://www.inquistivemindacademy.com/#organization"
      }
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: "French Language Tutor",
      description:
        "Inquisitive Mind Academy is hiring passionate French language tutors to teach live online classes.",
      hiringOrganization: {
        "@id": "https://www.inquistivemindacademy.com/#organization"
      },
      employmentType: "Part-time",
      jobLocationType: "TELECOMMUTE",
      applicantLocationRequirements: {
        "@type": "Country",
        name: "India"
      }
    }),
  }}
/>
    <BecomeTutor></BecomeTutor>
    </>
  )
}
