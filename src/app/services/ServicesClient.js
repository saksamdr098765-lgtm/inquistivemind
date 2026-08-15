"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBookOpen,
  FiArrowRight,
  FiCheckCircle,
  FiBriefcase,
  FiUserCheck,
  FiAward,
  FiGrid,
  FiSearch,
  FiX,
  FiStar,
  FiClock,
  FiShield,
  FiTarget,
  FiUsers,
  FiChevronDown,
  FiZap,
} from "react-icons/fi";

export default function ServicesClient({ services = [] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  // Filter services by category and search query
  const filteredServices = services.filter((service) => {
    const matchesCategory =
      activeCategory === "all" || service.category === activeCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      service.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.subtitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.targetAudience?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const studentCount = services.filter((s) => s.category === "student").length;
  const teacherCount = services.filter((s) => s.category === "teacher").length;

  // Select a flagship featured service for the spotlight banner
  const featuredService =
    services.find((s) => s.slug?.includes("tef") || s.slug?.includes("delf")) ||
    services[0];

  const faqs = [
    {
      question: "How do your live online French classes work?",
      answer:
        "All our classes are 100% live and interactive, led by certified French language mentors. You get real-time speaking practice, screen sharing, digital whiteboard notes, and recorded session access for revision.",
    },
    {
      question: "Can I take a 1-on-1 private French tuition instead of group batches?",
      answer:
        "Yes! We offer flexible 1-on-1 private tutoring tailored to your schedule, current French level, and specific goals—whether it's TEF Canada preparation, DELF exam revision, or conversational fluency.",
    },
    {
      question: "What is the pass rate for TEF Canada & DELF preparation courses?",
      answer:
        "Our students boast a 98% first-attempt success rate for TEF Canada NCLC 7+ and DELF A1-B2 exams thanks to our rigorous mock tests, oral task drills, and exam-focused curriculum.",
    },
    {
      question: "How can French teachers apply for tutoring jobs with Inquisitive Mind Academy?",
      answer:
        "Qualified French teachers and native speakers can apply directly through our 'Become a Tutor' portal. We offer competitive remuneration, flexible teaching hours, and full administrative support.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden py-20">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION & PLATFORM HEADLINE */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/90 px-4 py-1.5 text-xs font-bold text-amber-900 shadow-xs backdrop-blur"
            >
              <FiZap className="text-amber-600 fill-amber-400" />
              <span>World-Class Educational & Career Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]"
            >
              Master French Languages & Expand Your Career
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            >
              Explore certified exam preparation for TEF Canada & DELF, 1-on-1 online tuition, and rewarding career opportunities for French educators.
            </motion.p>

            {/* Quick Metrics Bar */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto rounded-2xl border border-slate-200/80 bg-white/80 p-3.5 shadow-sm backdrop-blur"
            >
              <div className="text-center p-1 border-r border-slate-100 last:border-0">
                <p className="text-lg sm:text-xl font-extrabold text-slate-900">98%</p>
                <p className="text-[11px] font-semibold text-slate-500">Exam Pass Rate</p>
              </div>
              <div className="text-center p-1 border-r border-slate-100 last:border-0">
                <p className="text-lg sm:text-xl font-extrabold text-slate-900">100%</p>
                <p className="text-[11px] font-semibold text-slate-500">Live Interactive</p>
              </div>
              <div className="text-center p-1 border-r border-slate-100 last:border-0">
                <p className="text-lg sm:text-xl font-extrabold text-slate-900">4.9 ★</p>
                <p className="text-[11px] font-semibold text-slate-500">Student Rating</p>
              </div>
              <div className="text-center p-1">
                <p className="text-lg sm:text-xl font-extrabold text-slate-900">1-on-1</p>
                <p className="text-[11px] font-semibold text-slate-500">Mentorship</p>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* 2. FEATURED PROGRAM SPOTLIGHT BANNER */}
        {/* ========================================================================= */}
        {featuredService && (
          <section className="mb-12">
            <div className="relative overflow-hidden rounded-3xl border border-amber-200/90 bg-gradient-to-br from-amber-500/10 via-white to-sky-500/10 p-6 sm:p-8 lg:p-10 shadow-lg">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-slate-950 shadow-xs">
                      <FiStar className="fill-slate-950" />
                      <span>Featured Program</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-white/90 px-3 py-1 text-xs font-bold text-amber-900">
                      {featuredService.quickInfo?.duration || "Immigration & Exam Target"}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {featuredService.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-800">
                    {featuredService.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {featuredService.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(featuredService.briefOverview?.highlights?.slice(0, 4) || [
                      "Score NCLC 7+ for Canadian PR",
                      "Live 1-on-1 Oral Simulations",
                      "Computer-based Mock Tests",
                      "Dedicated DELF Certified Trainers",
                    ]).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <FiCheckCircle className="text-amber-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${featuredService.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span>Explore Featured Program</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>

                {/* Featured Image with Object Contain */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-amber-200/80 bg-white p-3 shadow-md flex items-center justify-center">
                    <img
                      src={featuredService.coverImage}
                      alt={featuredService.title}
                      className="w-full h-auto max-h-64 sm:max-h-72 object-contain rounded-xl transition-transform duration-500 hover:scale-103"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE CONTROL BAR (SEARCH & FILTER TABS) */}
        {/* ========================================================================= */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm">
            {/* Search Input */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g., TEF Canada, DELF, Teacher Jobs, Online Tutors)..."
                className="w-full rounded-xl bg-slate-100/80 py-2.5 pl-10 pr-9 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <FiX size={16} />
                </button>
              )}
            </div>

            {/* Segmented Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveCategory("all")}
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                  activeCategory === "all"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                <FiGrid className={activeCategory === "all" ? "text-amber-400" : "text-slate-400"} />
                <span>All Services</span>
                <span
                  className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                    activeCategory === "all"
                      ? "bg-amber-400 text-slate-950"
                      : "bg-white text-slate-600"
                  }`}
                >
                  {services.length}
                </span>
              </button>

              <button
                onClick={() => setActiveCategory("student")}
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                  activeCategory === "student"
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                <FiBookOpen />
                <span>Student Courses</span>
                <span
                  className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                    activeCategory === "student"
                      ? "bg-slate-950 text-amber-400"
                      : "bg-white text-amber-900"
                  }`}
                >
                  {studentCount}
                </span>
              </button>

              <button
                onClick={() => setActiveCategory("teacher")}
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                  activeCategory === "teacher"
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                <FiBriefcase />
                <span>Teacher Jobs</span>
                <span
                  className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                    activeCategory === "teacher"
                      ? "bg-slate-950 text-amber-400"
                      : "bg-white text-amber-900"
                  }`}
                >
                  {teacherCount}
                </span>
              </button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
            <span>
              Showing <strong className="text-slate-900 font-bold">{filteredServices.length}</strong> of {services.length} services
              {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
            </span>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="text-amber-700 hover:underline font-bold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. REDESIGNED SERVICES GRID */}
        {/* ========================================================================= */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const isTeacher = service.category === "teacher";
              const firstFeature =
                service.whatsCovered?.[0]?.title ||
                service.trustBadges?.[0] ||
                "Certified Mentorship";
              const rating = service.quickInfo?.rating || "4.9/5";
              const duration = service.quickInfo?.duration || "Flexible Batches";
              const mode = service.quickInfo?.mode || "Live Online";

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Image Box with Object Contain */}
                    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-amber-500/5 via-slate-900/5 to-sky-500/5 p-3 flex items-center justify-center border-b border-slate-100">
                      <img
                        src={service.coverImage}
                        alt={service.title}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badges Overlay */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[85%]">
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-bold text-slate-950 shadow-xs">
                          {isTeacher ? <FiBriefcase size={10} /> : <FiBookOpen size={10} />}
                          <span>{service.targetAudience || (isTeacher ? "Teacher Job" : "Course")}</span>
                        </span>
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute bottom-2.5 right-3 rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 backdrop-blur flex items-center gap-1">
                        <FiStar size={10} className="fill-amber-400 text-amber-400" />
                        <span>{rating}</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5">
                      {/* Meta Tags */}
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium mb-2">
                        <span className="inline-flex items-center gap-1 text-slate-600">
                          <FiClock size={11} className="text-amber-600" />
                          <span>{duration}</span>
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 text-slate-600">
                          <FiUsers size={11} className="text-amber-600" />
                          <span>{mode}</span>
                        </span>
                      </div>

                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                        {service.title}
                      </h3>

                      {service.subtitle && (
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-amber-800 line-clamp-1">
                          {service.subtitle}
                        </p>
                      )}

                      <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      {/* Key Feature Highlight */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-800 font-semibold">
                        <FiCheckCircle className="text-amber-500 shrink-0" size={14} />
                        <span className="line-clamp-1">{firstFeature}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 transition-all duration-200 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-slate-950 group-hover:shadow-sm"
                    >
                      <span>{isTeacher ? "View Job Details" : "View Program Details"}</span>
                      <FiArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center my-8">
            <FiSearch className="mx-auto text-slate-300" size={40} />
            <h3 className="mt-4 text-base font-bold text-slate-900">No Services Found</h3>
            <p className="mt-1 text-xs text-slate-500">
              No service matching &ldquo;{searchQuery}&rdquo; was found. Try adjusting your search term.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
            >
              <span>View All Services</span>
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. PLATFORM TRUST & DIFFERENTIATORS GRID */}
        {/* ========================================================================= */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-900">
              <FiShield className="text-amber-600" />
              <span>Academy Excellence Guarantee</span>
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Our Educational Services Lead the Industry
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Structured learning pathways designed for maximum language retention and career advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold mb-3">
                <FiAward size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Certified Bilingual Mentors</h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Learn from native-level French trainers with proven records in TEF Canada & DELF exam preparation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold mb-3">
                <FiUsers size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Small Interactive Batches</h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Max 6 students per batch to ensure personalized feedback, speaking drills, and live interaction.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold mb-3">
                <FiTarget size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Exam-Engine Mock Drills</h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Practice with real computer-based exam engines that mirror official TEF and DELF testing centers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-bold mb-3">
                <FiBriefcase size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Teacher Job Placement</h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Dedicated recruitment pathways and administrative support for online & offline French tutors.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. INTERACTIVE FAQ ACCORDION SECTION */}
        {/* ========================================================================= */}
        <section className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Got questions about our services, live classes, or teaching opportunities? Find answers below.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm font-bold text-slate-900 hover:text-amber-800 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <FiChevronDown
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-amber-600" : ""
                      }`}
                      size={18}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. HIGH-CONVERTING DUAL CTA FOOTER BANNER */}
        {/* ========================================================================= */}
        <section className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 p-8 sm:p-12 text-white shadow-2xl">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
                  <FiUserCheck />
                  <span>Start Learning or Teaching Today</span>
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Ready to Achieve Your Language & Career Goals?
                </h2>
                <p className="mt-2 text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  Whether you need TEF Canada PR score improvement, DELF exam coaching, or want to join our elite team of French language tutors—we are here to guide you.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-amber-400 shadow-lg hover:-translate-y-0.5"
                >
                  <FiBookOpen size={16} />
                  <span>Browse All Courses</span>
                </Link>

                <Link
                  href="/become-a-tutor"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20 backdrop-blur"
                >
                  <FiBriefcase size={16} />
                  <span>Apply as French Tutor</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
