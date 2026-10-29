"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
  FaShieldAlt,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { trackSocialClick, trackPhoneClick } from "@/lib/traking";
import TrackedLink from "./tracking/TrackedLink";
import TrackedButton from "./tracking/TrackedButton";
import SITE_CONFIG from "../siteConfig";

const LEARNING_TRACKS = [
  { name: "French DELF A1–B2", path: "/courses/french-language-program" },
  { name: "TEF Canada Coaching", path: "/services/tef-canada-coaching-chandigarh" },
  { name: "Spoken English Mastery", path: "/courses/english-speaking-mastery" },
  { name: "CBSE & ICSE Tuition", path: "/courses/academic-excellence-program" },
  { name: "Book Free Trial Class", path: "/book-free-trial" },
];

const EXPLORE_HUBS = [
  { name: "How Matching Works", path: "/#how-it-works" },
  { name: "Platform Pillars", path: "/#features" },
  { name: "Learning Blueprint", path: "/#learning-blueprint" },
  { name: "French Classes Mohali", path: "/locations/french-classes-mohali" },
  { name: "French Classes Zirakpur", path: "/locations/french-classes-zirakpur" },
  { name: "French Classes Panchkula", path: "/locations/french-classes-panchkula" },
  { name: "Educational Blogs", path: "/blogs" },
];

const TEACHER_CAREERS = [
  { name: "Become a Tutor", path: "/become-a-tutor" },
  { name: "French Tutor Jobs", path: "/services/french-tutor-jobs-chandigarh" },
  { name: "Teacher Portal", path: "/teacher-profile/dashboard" },
  { name: "About the Academy", path: "/about" },
];

export default function Footer() {
  const pathname = usePathname();

  const phone = SITE_CONFIG.phone;
  const email = SITE_CONFIG.email;

  // Hide footer completely on auth / internal app routes
  if (
    pathname?.startsWith("/admin-panel") ||
    pathname?.startsWith("/student-profile") ||
    pathname?.startsWith("/teacher-profile") ||
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/signup") ||
    pathname?.startsWith("/forget-password")
  ) {
    return null;
  }

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-white text-slate-900 pt-16 sm:pt-20 pb-8">
      {/* Background Architectural Patterns */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(250,204,21,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* ========================================================= */}
        {/* TOP: MOBILE-FIRST ENROLL NOW CALLOUT                      */}
        {/* ========================================================= */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-yellow-300 bg-gradient-to-br from-yellow-50/90 via-white to-amber-50/60 p-6 sm:p-10 lg:p-12 text-center shadow-xl shadow-yellow-500/10 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100/90 border border-yellow-300 px-3.5 py-1 text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-yellow-950 uppercase shadow-2xs">
            <BsStars className="text-yellow-600" />
            <span>BUILDING CONFIDENT COMMUNICATORS</span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Speak with Confidence.{" "}
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent sm:inline">
              Learn Without Limits.
            </span>
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed">
            Experience our 1-on-1 personalized mentorship firsthand with a 100% complimentary trial class. No card or upfront commitments required.
          </p>

          {/* Action Buttons: Full Width on Mobile, Thumb-Friendly */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto sm:max-w-none">
            <TrackedLink
              href="/find-tutor"
              label="Footer Enroll Now CTA"
              category="Footer CTA"
              className="w-full sm:w-auto inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3.5 text-sm sm:text-base font-extrabold text-slate-950 shadow-md shadow-yellow-400/30 transition hover:bg-yellow-500 active:scale-95 cursor-pointer"
            >
              <span>Enroll Now — Free Trial</span>
              <FaArrowRight className="text-xs" />
            </TrackedLink>

            <a
              href="https://wa.me/919855293752?text=Hello!%20I%20would%20like%20to%20enroll%20for%20a%20free%20trial%20class%20at%20Inquisitive%20Mind%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border-2 border-emerald-500 bg-emerald-50 px-6 py-3.5 text-xs sm:text-sm font-bold text-emerald-800 transition hover:bg-emerald-100 active:scale-95"
            >
              <FaWhatsapp className="text-emerald-600 text-base" />
              <span>WhatsApp +91 98552 93752</span>
            </a>
          </div>

          {/* Micro Trust Pills */}
          <div className="mt-6 pt-5 border-t border-yellow-200/70 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>⚡ 24h Tutor Match</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <FaShieldAlt className="text-yellow-600 text-xs" />
              <span>🎁 100% Free Trial</span>
            </span>
            <span className="text-slate-300">•</span>
            <span>🔄 Free Rematch Guarantee</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN MODERN FOOTER GRID                                   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-16 border-b border-slate-200">
          {/* BRAND COLUMN (4 COLS) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/icon1.png"
                  className="h-11 w-11 shrink-0 object-contain rounded-xl border border-yellow-200 shadow-2xs"
                  alt="Inquisitive Mind Academy Logo"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight leading-tight">
                    Inquisitive Mind Academy
                  </h3>
                  <p className="text-[10px] tracking-[0.25em] text-yellow-800 font-extrabold uppercase mt-0.5">
                    1-on-1 Mentorship & Tutoring
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
                Empowering students and professionals through live interactive language coaching, official exam prep (DELF, TEF, IELTS), and academic excellence.
              </p>

              {/* Direct WhatsApp Response Pill */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs text-emerald-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold">Fast Support: Replies within 15 mins</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick("Instagram")}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:bg-yellow-400 hover:text-slate-950 hover:border-yellow-400 hover:scale-105 shadow-2xs"
                aria-label="Instagram"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick("WhatsApp")}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:scale-105 shadow-2xs"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>

          {/* COLUMN 1: LEARNING TRACKS (3 COLS) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <FaGraduationCap className="text-yellow-600" />
              <span>Learning Tracks</span>
            </h4>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              {LEARNING_TRACKS.map((track) => (
                <li key={track.name}>
                  <TrackedLink
                    href={track.path}
                    label={`Footer Track: ${track.name}`}
                    category="Footer Navigation"
                    className="block py-1 hover:text-yellow-700 hover:translate-x-1 transition-all"
                  >
                    {track.name}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: HUBS & EXPLORE (2 COLS) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Explore & Hubs
            </h4>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              {EXPLORE_HUBS.map((hub) => (
                <li key={hub.name}>
                  <TrackedLink
                    href={hub.path}
                    label={`Footer Hub: ${hub.name}`}
                    category="Footer Navigation"
                    className="block py-1 hover:text-yellow-700 hover:translate-x-1 transition-all"
                  >
                    {hub.name}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT & CAREERS (3 COLS) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <FaChalkboardTeacher className="text-yellow-600" />
              <span>Contact & Careers</span>
            </h4>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-600">
              {/* Phone */}
              <TrackedButton
                onClick={() => trackPhoneClick(phone)}
                label={`Phone: ${phone}`}
                category="Footer Contact"
                className="flex items-start gap-2.5 text-left w-full rounded-xl p-2 bg-slate-50 border border-slate-200/70 hover:bg-yellow-50 hover:border-yellow-300 transition-all cursor-pointer"
              >
                <FaPhoneAlt className="text-yellow-600 mt-0.5 shrink-0 text-xs" />
                <div>
                  <span className="font-bold text-slate-900 block">{phone}</span>
                  <span className="text-[10px] text-slate-400 font-medium">Mon–Sat, 9:00 AM – 8:00 PM</span>
                </div>
              </TrackedButton>

              {/* Email */}
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/70">
                <FaEnvelope className="text-yellow-600 shrink-0 text-xs" />
                <span className="text-slate-800 font-medium truncate">{email}</span>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600">
                <FaMapMarkerAlt className="text-yellow-600 mt-0.5 shrink-0 text-xs" />
                <span className="leading-snug">
                  India • Live Online Classes & Doorstep Tutoring across Tricity
                </span>
              </div>

              {/* Careers Link */}
              <div className="pt-2">
                <TrackedLink
                  href="/become-a-tutor"
                  label="Footer Careers"
                  category="Footer Careers"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-800 hover:text-yellow-950 hover:underline"
                >
                  <span>Apply to Teach as Verified Faculty</span>
                  <FaArrowRight className="text-[10px]" />
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM METADATA BAR                                       */}
        {/* ========================================================= */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Inquisitive Mind Academy. All rights reserved.
          </p>

          <div className="flex items-center gap-5 font-medium">
            <TrackedLink
              href="/privacy-policy"
              label="Footer Privacy Policy"
              category="Footer Legal"
              className="hover:text-yellow-600 transition"
            >
              Privacy Policy
            </TrackedLink>
            <span>•</span>
            <TrackedLink
              href="/terms-of-service"
              label="Footer Terms"
              category="Footer Legal"
              className="hover:text-yellow-600 transition"
            >
              Terms of Service
            </TrackedLink>
            <span>•</span>
            <TrackedLink
              href="/sitemap.xml"
              label="Footer Sitemap"
              category="Footer Legal"
              className="hover:text-yellow-600 transition"
            >
              Sitemap
            </TrackedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
