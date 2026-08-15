"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaBookOpen,
  FaInfoCircle,
  FaPhoneAlt,
  FaSearch,
  FaWhatsapp,
  FaBlog,
  FaChalkboardTeacher,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import SITE_CONFIG from "../siteConfig";
import { trackSocialClick } from "@/lib/traking";

const links = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Courses", path: "/courses", icon: FaBookOpen },
  { name: "Find Tutor", path: "/find-tutor", icon: FaSearch },
  { name: "Become a Tutor", path: "/become-a-tutor", icon: FaChalkboardTeacher },
  { name: "Blogs", path: "/blogs", icon: FaBlog },
  { name: "About", path: "/about", icon: FaInfoCircle },
];

const serviceCategories = [
  {
    id: "student",
    title: "Student Courses",
    links: [
      // { name: "TEF Canada Prep", path: "/services/tef-canada-immigration-prep" },
      // { name: "TCF Canada Prep", path: "/services/tcf-canada-immigration-prep" },
      { name: "French Classes", path: "/services/french-classes-chandigarh" },
      // { name: "DELF & DALF Prep", path: "/services/delf-dalf-exam-prep" },
      // { name: "Private Tutoring", path: "/services/private-french-tutoring" },
    ],
  },
  {
    id: "teacher",
    title: "Teacher Opportunities",
    links: [
      { name: "French Tutor Jobs", path: "/services/french-tutor-jobs-chandigarh" },
      // { name: "Online Teacher Jobs", path: "/services/online-french-teacher-jobs" },
      // { name: "TEF/TCF Trainer Jobs", path: "/services/tef-tcf-exam-trainer-jobs" },
    ],
  },
];

const { phone, email, socialLinks, whatsappNumber } = SITE_CONFIG;
const socials = [
  { name: "instagram", icon: FaInstagram, link: socialLinks.instagram },
  { name: "whatsapp", icon: FaWhatsapp, link: `https://wa.me/${whatsappNumber}` },
];

export default function Footer() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("student");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* TOP GRID */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-4">
              <img
                src="/icon1.png"
                className="h-14 w-14 shrink-0 object-contain"
                alt=""
              />

              <div>
                <h3 className="text-xl font-bold">
                  Inquisitive Mind Academy
                </h3>

                <p className="mt-1 text-[10px] tracking-[0.35em] text-slate-500">
                  LANGUAGE • COMMUNICATION • CONFIDENCE
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-lg leading-relaxed text-slate-600">
              Empowering learners through English and French training, real
              conversations, live mentorship, and structured fluency systems
              designed for real-world communication.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex gap-4 text-lg">

              {socials.map(
                (item, i) => {
                  const Icon = item.icon;
                  return <button
                    key={i}
                    onClick={() => { trackSocialClick(item.name) }}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:-translate-y-0.5 hover:border-yellow-300 hover:text-yellow-500 hover:shadow-md"
                  >
                    <a href={item.link} target="_blank"> <Icon /></a>
                  </button>
                })
              }

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-slate-900">Quick Links</h4>

            <div className="mt-5 space-y-1.5 text-sm text-slate-600">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="flex items-center gap-3 rounded-xl px-3 py-1.5 transition hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    <Icon className="text-yellow-500 shrink-0" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* SERVICES (DESKTOP: Dropdown) */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-slate-900">Services</h4>
              <Link href="/services" className="text-xs text-yellow-600 font-semibold hover:underline">
                All Services →
              </Link>
            </div>

            {/* Category Dropdown */}
            <div className="relative mt-4" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs font-semibold text-slate-800 transition hover:border-yellow-400 hover:bg-white shadow-xs"
              >
                <span>{activeCat.title}</span>
                <FaChevronDown className={`text-[10px] text-slate-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-yellow-500" : ""}`} />
              </button>

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
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition ${
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
            <div className="mt-3.5 space-y-1.5 text-sm text-slate-600">
              {activeCat.links.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 transition hover:bg-yellow-50 hover:text-yellow-600"
                >
                  <FaChevronRight className="text-[10px] text-yellow-500 shrink-0" />
                  <span className="line-clamp-1">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES (MOBILE: Simple List) */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-slate-900">Services</h4>
              <Link href="/services" className="text-xs text-yellow-600 font-semibold hover:underline">
                All Services →
              </Link>
            </div>

            <div className="mt-4 space-y-4">
              {serviceCategories.map((cat) => (
                <div key={cat.id}>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    {cat.title}
                  </p>
                  <div className="space-y-1 text-sm text-slate-600">
                    {cat.links.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="flex items-center gap-2.5 rounded-xl px-2.5 py-1 transition hover:bg-yellow-50 hover:text-yellow-600"
                      >
                        <FaChevronRight className="text-[10px] text-yellow-500 shrink-0" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-slate-900">Contact</h4>

            <div className="mt-5 space-y-4 text-sm text-slate-600">

              <div className="flex gap-3">
                <FaPhone className="mt-1 text-yellow-500 shrink-0" />
                <span>{phone}</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-yellow-500 shrink-0" />
                <span>{email}</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-yellow-500 shrink-0" />
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

          <button
            onClick={() => router.push("/find-tutor")}
            className="mt-8 rounded-full bg-yellow-500 px-8 py-3 font-medium text-white shadow-md shadow-yellow-200 transition hover:bg-yellow-600 hover:-translate-y-0.5"
          >
            Enroll Now
          </button>

        </div>

      

      </div>
 



    </footer>
  );
}