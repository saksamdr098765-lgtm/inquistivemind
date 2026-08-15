import { services } from "@/app/data/services";
import SITE_CONFIG from "@/app/siteConfig";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Educational & Career Services | Inquisitive Mind Academy",
  description:
    "Explore 100% live online French language tutoring, TEF/TCF Canada immigration prep, DELF/DALF coaching, 1-on-1 tuition, and teacher job opportunities.",
  keywords: [
    "French tutor online",
    "French tuition online",
    "French tutor near me",
    "French tuition near me",
    "French tutoring services",
    "DELF coaching",
    "TEF Canada prep",
    "Spoken French classes online",
    "French tutor jobs",
    "Online French teacher jobs",
  ],
  openGraph: {
    title: "Educational & Career Services | Inquisitive Mind Academy",
    description:
      "Explore 100% live online French language tutoring, TEF/TCF Canada immigration prep, DELF/DALF coaching, and teacher job opportunities.",
    url: `${SITE_CONFIG.url}/services`,
    siteName: SITE_CONFIG.name,
    images: [{ url: `${SITE_CONFIG.url}/icon1.png`, width: 1200, height: 630 }],
    type: "website",
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesClient services={services} />;
}
