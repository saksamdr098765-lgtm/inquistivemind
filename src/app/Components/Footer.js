"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronRight,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { trackSocialClick, trackPhoneClick } from "@/lib/traking";
import TrackedLink from "./tracking/TrackedLink";
import TrackedButton from "./tracking/TrackedButton";

const links = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Services", path: "/services" },
  { name: "Locations", path: "/locations" },
  { name: "Pricing", path: "/prices" },
  { name: "Blogs", path: "/blogs" },
  { name: "About Us", path: "/about" },
];

const socials = [
  { name: "Instagram", link: "https://www.instagram.com", icon: FaInstagram },
  { name: "Facebook", link: "https://www.facebook.com", icon: FaFacebookF },
  { name: "LinkedIn", link: "https://www.linkedin.com", icon: FaLinkedinIn },
  { name: "YouTube", link: "https://www.youtube.com", icon: FaYoutube },
];

const serviceCategories = [
  {
    id: "tef-delf",
    title: "Exam & Immigration Prep",
    links: [
      // { name: "TEF Canada Prep", path: "/services/french-classes-chandigarh" },
      // { name: "DELF Exam Prep", path: "/services/french-classes-chandigarh" },
      { name: "Spoken French Online", path: "/services/french-classes-chandigarh" },
    ],
  },
  {
    id: "locations",
    title: "Locations & Hubs",
    links: [
      // { name: "French Classes Chandigarh", path: "/services/french-classes-chandigarh" },
      { name: "French Classes Mohali", path: "/locations/french-classes-mohali" },
    ],
  },
  {
    id: "careers",
    title: "Teacher Careers",
    links: [
      { name: "French Tutor Jobs", path: "/services/french-tutor-jobs-chandigarh" },
      { name: "Become a Tutor", path: "/become-a-tutor" },
    ],
  },
];

export default function Footer() {
  const [selectedCategory, setSelectedCategory] = useState(serviceCategories[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const phone = "+91 98765 43210";
  const email = "contact@inquistivemindacademy.com";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeCat = serviceCategories.find((c) => c.id === selectedCategory) || serviceCategories[0];

  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white text-slate-900">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.06),transparent_60%)]" />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <img
          src="/icon1.png"
          alt=""
          className="h-[420px] w-[420px] max-h-[80vw] max-w-[80vw] object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* TOP GRID */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-4">
              <img
                src="/icon1.png"
                className="h-14 w-14 shrink-0 object-contain"
                alt="Inquisitive Mind Academy Logo"
              />

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Inquisitive Mind Academy
                </h3>

                <p className="mt-1 text-[10px] tracking-[0.35em] text-slate-500">
                  LANGUAGE • COMMUNICATION • CONFIDENCE
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-lg leading-relaxed text-slate-600 text-sm">
              Empowering learners through English and French training, real
              conversations, live mentorship, and structured fluency systems
              designed for real-world communication.
            </p>

            {/* SOCIALS (Min 44x44px touch targets) */}
            <div className="mt-6 flex gap-3 text-lg">
              {socials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackSocialClick(item.name)}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:-translate-y-0.5 hover:border-yellow-300 hover:text-yellow-500 hover:shadow-md"
                    aria-label={`Social ${item.name}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-slate-900">Quick Links</h4>

            <div className="mt-5 space-y-1 text-sm text-slate-600">
              {links.map((item) => (
                <TrackedLink
                  key={item.name}
                  href={item.path}
                  label={`Footer Link: ${item.name}`}
                  category="Footer Links"
                  className="flex items-center gap-2.5 rounded-xl px-2 py-2 transition hover:bg-yellow-50 hover:text-yellow-600 min-h-[44px]"
                >
                  <FaChevronRight className="text-[10px] text-yellow-500 shrink-0" />
                  <span>{item.name}</span>
                </TrackedLink>
              ))}
            </div>
          </div>

          {/* SERVICES (DESKTOP: Dropdown) */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-slate-900">Services</h4>
              <TrackedLink
                href="/services"
                label="Footer All Services"
                category="Footer Links"
                className="text-xs text-yellow-600 font-semibold hover:underline"
              >
                All Services →
              </TrackedLink>
            </div>

            {/* Category Dropdown */}
            <div className="relative mt-4" ref={dropdownRef}>
              <TrackedButton
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                label="Footer Service Category Dropdown"
                category="Footer Navigation"
                className="flex w-full min-h-[44px] items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs font-semibold text-slate-800 transition hover:border-yellow-400 hover:bg-white shadow-xs"
              >
                <span>{activeCat.title}</span>
                <FaChevronDown className={`text-[10px] text-slate-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-yellow-500" : ""}`} />
              </TrackedButton>

              {isDropdownOpen && (
                <div className="absolute left-0 right-0 z-30 mt-1.5 rounded-xl border border-slate-100 bg-white p-1.5 shadow-xl shadow-slate-200/60">
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`flex w-full min-h-[44px] items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition ${
                        selectedCategory === cat.id
                          ? "bg-yellow-50 text-yellow-700 font-semibold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span>{cat.title}</span>
                      <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">
                        {cat.links.length}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Service Links for Active Category */}
            <div className="mt-3.5 space-y-1 text-sm text-slate-600">
              {activeCat.links.map((item) => (
                <TrackedLink
                  key={item.name}
                  href={item.path}
                  label={`Footer Service: ${item.name}`}
                  category="Footer Services"
                  className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 transition hover:bg-yellow-50 hover:text-yellow-600 min-h-[44px]"
                >
                  <FaChevronRight className="text-[10px] text-yellow-500 shrink-0" />
                  <span className="line-clamp-1">{item.name}</span>
                </TrackedLink>
              ))}
            </div>
          </div>

          {/* SERVICES (MOBILE: Simple List) */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-slate-900">Services</h4>
              <TrackedLink
                href="/services"
                label="Footer Mobile All Services"
                category="Footer Links"
                className="text-xs text-yellow-600 font-semibold hover:underline"
              >
                All Services →
              </TrackedLink>
            </div>

            <div className="mt-4 space-y-4">
              {serviceCategories.map((cat) => (
                <div key={cat.id}>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    {cat.title}
                  </p>
                  <div className="space-y-1 text-sm text-slate-600">
                    {cat.links.map((item) => (
                      <TrackedLink
                        key={item.name}
                        href={item.path}
                        label={`Footer Mobile Service: ${item.name}`}
                        category="Footer Services"
                        className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 transition hover:bg-yellow-50 hover:text-yellow-600 min-h-[44px]"
                      >
                        <FaChevronRight className="text-[10px] text-yellow-500 shrink-0" />
                        <span>{item.name}</span>
                      </TrackedLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-slate-900">Contact</h4>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <TrackedButton
                onClick={() => trackPhoneClick(phone)}
                label={`Phone: ${phone}`}
                category="Footer Contact"
                className="flex items-center gap-3 text-left w-full rounded-xl p-2 transition hover:bg-yellow-50 hover:text-yellow-700 min-h-[44px]"
              >
                <FaPhone className="text-yellow-500 shrink-0" />
                <span>{phone}</span>
              </TrackedButton>

              <div className="flex items-center gap-3 p-2">
                <FaEnvelope className="text-yellow-500 shrink-0" />
                <span className="break-all">{email}</span>
              </div>

              <div className="flex items-center gap-3 p-2">
                <FaMapMarkerAlt className="text-yellow-500 shrink-0" />
                <span>India • Online & Offline Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-slate-200" />

        {/* CTA */}
        <div className="text-center">
          <div className="text-[10px] tracking-[0.35em] text-slate-400">
            BUILDING CONFIDENT COMMUNICATORS
          </div>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Speak with Confidence.
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-400 to-sky-400 bg-clip-text text-transparent">
              Learn Without Limits.
            </span>
          </h2>

          <TrackedLink
            href="/find-tutor"
            label="Footer Enroll Now CTA"
            category="Footer CTA"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow-500 px-8 py-3.5 font-medium text-white shadow-md shadow-yellow-200 transition hover:bg-yellow-600 hover:-translate-y-0.5 min-h-[44px]"
          >
            Enroll Now
          </TrackedLink>
        </div>
      </div>
    </footer>
  );
}