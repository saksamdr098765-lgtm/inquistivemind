
import Hero from "./Components/Hero";


import WhyChooseUs from "./Components/WhyChooseUs";
import Programs from "./Components/Programs";

import SuccessStories from "./Components/SuccessStory";

import CTA from "./Components/CTA";
import FindTutor from "./Components/FindTutor";
import DeveloperCredit from "./Components/DeveloperCredit";
import StudentRequirements from "./Components/StudentRequirment";

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

    title:
      "Inquisitive Mind Academy | Tuition, French & Tutor Jobs",

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

    title:
      "Inquisitive Mind Academy | Tuition, French & Tutor Jobs",

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
<>
<Hero></Hero>
<Programs></Programs>
<FindTutor></FindTutor>
<WhyChooseUs></WhyChooseUs>
{/* <BecomeTutor></BecomeTutor> */}
<StudentRequirements></StudentRequirements>
<SuccessStories></SuccessStories>

<CTA></CTA>

</>
  );
}
