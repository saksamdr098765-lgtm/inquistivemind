// src/app/tutors/page.jsx
// Server Component for Tutor Discovery with SEO Metadata & Backend Data Hydration

import TutorDiscoveryClient from "@/components/tutors/TutorDiscoveryClient";
import { TUTORS_DATA, normalizeTutor } from "@/data/tutors";

export const metadata = {
  title: "Find Your Expert Tutor | Inquisitive Mind Academy",
  description:
    "Connect with verified 1-on-1 educators for French, German, Mathematics, Science & English. Online and home tutoring in Chandigarh, Mohali, Panchkula & pan-India.",
  keywords: [
    "Find a tutor online",
    "French tutor Chandigarh",
    "German language teacher",
    "CBSE math tutor",
    "Home tutoring Mohali",
    "Inquisitive Mind Academy tutors",
  ],
  openGraph: {
    title: "Find Your Expert Tutor | Inquisitive Mind Academy",
    description:
      "Explore certified educators, compare hourly fees, and schedule your free 1-on-1 trial session.",
    type: "website",
    url: "https://www.inquistivemindacademy.com/tutors",
  },
};

async function getInitialTutors() {
  const apiUrl = process.env.NEXT_PUBLIC_API || "http://localhost:5000/api";
  try {
    const res = await fetch(`${apiUrl}/tutors?limit=24&sort=newest`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data?.tutors) && data.tutors.length > 0) {
        return data.tutors.map(normalizeTutor);
      }
    }
  } catch (err) {
    console.error("Failed to fetch initial tutors from backend:", err.message);
  }
  return TUTORS_DATA;
}

export default async function TutorsPage() {
  const initialTutors = await getInitialTutors();

  return (
    <div className="font-sans min-h-screen">
      <TutorDiscoveryClient initialTutors={initialTutors} />
    </div>
  );
}
