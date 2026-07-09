import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Toaster } from "sonner";
import AuthProvider from "./Components/AuthProvider";
import { Inter, Poppins } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";


export const metadata = {
  title:
    "Inquisitive Mind Academy | Learn French Online | French Language Learning Platform",

  description:
    "Explore Inquisitive Mind Academy, a modern French language learning platform designed to help students master French through interactive lessons, structured courses, progress tracking, assignments, quizzes, and a seamless online learning experience.",

  keywords: [
    "Inquisitive Mind Academy",
    "Learn French Online",
    "French Language Learning",
    "French Courses",
    "French Classes",
    "Online French Course",
    "French Learning Platform",
    "French for Beginners",
    "French Grammar",
    "French Vocabulary",
    "French Speaking Course",
    "French Certification",
    "Online Language Learning",
    "Language Learning Platform",
    "Education Platform",
    "Student Dashboard",
    "Learning Management System",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Full Stack Web Application",
  ],

  authors: [
    {
      name: "Sakshi Goel",
      url: "https://www.inquistivemindacademy.com",
    },
  ],

  creator: "Sakshi Goel",
  publisher: "Sakshi Goel",

  metadataBase: new URL("https://www.inquistivemindacademy.com"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Inquisitive Mind Academy | Modern French Learning Platform",

    description:
      "A modern French language learning platform featuring structured courses, interactive lessons, quizzes, assignments, progress tracking, and dedicated student and admin dashboards.",

    url:
      "https://www.inquistivemindacademy.com/",

    siteName: "Inquisitive Mind Academy",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Inquisitive Mind Academy French Learning Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Inquisitive Mind Academy | French Learning Platform",

    description:
      "A premium French language learning platform built with Next.js, Node.js, Express.js, and MongoDB.",

    images: [
      "/web-app-manifest-512x512.png",
    ],
  },

  category: "Education",

  applicationName: "Inquisitive Mind Academy",

  referrer: "origin-when-cross-origin",
    verification: {
    google: "008KSwOu-47s9K24WqUE2ruV6Io9y4UFdssfHyf3M-0",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      
       

<ReactQueryProvider>
<AuthProvider>
  <Navbar></Navbar>
        {children}
       
        </AuthProvider>
        </ReactQueryProvider>
        <Toaster
  position="bottom-right"
  richColors
  closeButton
  expand
  duration={3000}
  toastOptions={{
    className:
      "!rounded-2xl !border !border-orange-100 !bg-white !text-slate-800 !shadow-2xl",
    style: {
      fontSize: "14px",
      fontWeight: 500,
      padding: "16px",
    },
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "@id": "https://www.inquistivemindacademy.com/#organization",
          name: "Inquisitive Mind Academy",
          url: "https://www.inquistivemindacademy.com",
          logo: "https://www.inquistivemindacademy.com/web-app-manifest-512x512.png",
          description:
            "Inquisitive Mind Academy is an online French language learning platform offering structured French courses for beginners and advanced learners.",
          // sameAs: [
          //   "https://www.instagram.com/YOUR_HANDLE",
          //   "https://www.facebook.com/YOUR_PAGE",
          //   "https://www.linkedin.com/company/YOUR_COMPANY"
          // ]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.inquistivemindacademy.com/#website",
          url: "https://www.inquistivemindacademy.com",
          name: "Inquisitive Mind Academy",
          publisher: {
            "@id": "https://www.inquistivemindacademy.com/#organization"
          },
          inLanguage: "en",
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
      "@type": "WebSite",
      "@id": "https://www.inquistivemindacademy.com/#website",
      url: "https://www.inquistivemindacademy.com",
      name: "Inquisitive Mind Academy",
      alternateName: "IMA",
      description:
        "Learn French online with expert tutors through live interactive classes, structured courses, and personalized guidance at Inquisitive Mind Academy.",
      inLanguage: "en-IN",
      publisher: {
        "@id": "https://www.inquistivemindacademy.com/#organization"
      }
    }),
  }}
/>
        </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID}  />
    </html>
  );
}
