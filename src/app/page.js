
import Hero from "./Components/Hero";


import WhyChooseUs from "./Components/WhyChooseUs";
import Programs from "./Components/Programs";

import SuccessStories from "./Components/SuccessStory";

import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import FindTutor from "./Components/FindTutor";
import BecomeTutor from "./Components/BecomeTutor";
import DeveloperCredit from "./Components/DeveloperCredit";

export const metadata = {
  metadataBase: new URL("https://www.inquistivemindacademy.com"),
  title: {
    default: "Inquisitive Mind Academy | Learn French Online with Expert Tutors",
    template: "%s | Inquisitive Mind Academy",
  },

  description:
    "Learn French online with Inquisitive Mind Academy. Join beginner to advanced French language courses with expert tutors, interactive live classes, personalized guidance, and internationally recognized learning paths.",

  keywords: [
    "Inquisitive Mind Academy",
    "Learn French Online",
    "French Language Classes",
    "French Language Course",
    "Online French Classes",
    "French for Beginners",
    "French Tutor",
    "French Coaching",
    "French Grammar",
    "French Speaking Course",
    "French Vocabulary",
    "Online Language Learning",
    "French Certification",
    "DELF Preparation",
    "French Institute India",
    "French Classes Online",
    "French Learning Platform",
    "French Academy",
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
      "Inquisitive Mind Academy | Learn French Online",

    description:
      "Master the French language with live online classes, structured learning paths, experienced tutors, and personalized guidance for every learner.",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Inquisitive Mind Academy - Learn French Online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Inquisitive Mind Academy | Learn French Online",

    description:
      "Join live French language classes with expert tutors and start speaking French confidently.",

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
<BecomeTutor></BecomeTutor>
<SuccessStories></SuccessStories>

<CTA></CTA>
<Footer></Footer>
<DeveloperCredit></DeveloperCredit>
</>
  );
}
