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
import { trackFilterSelect, trackSearchQuery, trackCourseClick } from "@/lib/traking";
import TrackedLink from "../Components/tracking/TrackedLink";
import TrackedButton from "../Components/tracking/TrackedButton";

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

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length > 2) {
      trackSearchQuery(value, "Services Page Search");
    }
  };

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
              Master French with Experts.{" "}
              <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 bg-clip-text text-transparent block sm:inline">
                Build a Global Career.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-sm sm:text-lg text-slate-600 leading-relaxed"
            >
              From TEF Canada & DELF exam preparation to private 1-on-1 tutoring and French teacher job placement, discover structured learning solutions tailored for students and educators.
            </motion.p>

            {/* Quick Metrics Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-slate-700"
            >
              <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-xs border border-slate-200/80">
                <FiCheckCircle className="text-emerald-500" />
                <span>98% Exam Pass Rate</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-xs border border-slate-200/80">
                <FiUserCheck className="text-sky-500" />
                <span>100% Live Interactive</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-xs border border-slate-200/80">
                <FiStar className="text-amber-500 fill-amber-400" />
                <span>4.9/5 Student Rating</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED SPOTLIGHT BANNER */}
      {/* ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        {featuredService && (
          <div className="relative overflow-hidden rounded-3xl border border-amber-300/80 bg-gradient-to-r from-amber-500/10 via-yellow-400/10 to-sky-500/10 p-6 sm:p-10 shadow-lg">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-800">
                  <span className="rounded-full bg-amber-500 px-3 py-1 text-slate-950">
                    Flagship Program
                  </span>
                  <span>{featuredService.subtitle || "TEF & DELF Focus"}</span>
                </div>

                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {featuredService.title}
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {featuredService.description}
                </p>

                {/* Feature Checklist */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(featuredService.trustBadges || [
                    "Certified Bilingual Trainers",
                    "Targeted Oral & Listening Drills",
                    "Exam Engine Mock Tests",
                    "Small Interactive Batches",
                  ]).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <FiCheckCircle className="text-amber-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <TrackedLink
                    href={`/services/${featuredService.slug}`}
                    label={`Explore Featured Program: ${featuredService.title}`}
                    category="Services Featured Spotlight"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>Explore Featured Program</span>
                    <FiArrowRight />
                  </TrackedLink>
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
        )}
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE CONTROL BAR (SEARCH & FILTER TABS) */}
      {/* ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm">
            {/* Search Input */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search services (e.g., TEF Canada, DELF, Teacher Jobs, Online Tutors)..."
                className="w-full rounded-xl bg-slate-100/80 py-2.5 pl-10 pr-9 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              />
              {searchQuery && (
                <TrackedButton
                  onClick={() => setSearchQuery("")}
                  label="Clear Services Search"
                  category="Services Search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <FiX size={16} />
                </TrackedButton>
              )}
            </div>

            {/* Segmented Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <TrackedButton
                onClick={() => {
                  trackFilterSelect("Services Category Tab", "all");
                  setActiveCategory("all");
                }}
                label="Filter All Services"
                category="Services Filter"
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 min-h-[44px] ${
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
              </TrackedButton>

              <TrackedButton
                onClick={() => {
                  trackFilterSelect("Services Category Tab", "student");
                  setActiveCategory("student");
                }}
                label="Filter Student Courses"
                category="Services Filter"
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 min-h-[44px] ${
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
              </TrackedButton>

              <TrackedButton
                onClick={() => {
                  trackFilterSelect("Services Category Tab", "teacher");
                  setActiveCategory("teacher");
                }}
                label="Filter Teacher Jobs"
                category="Services Filter"
                className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 min-h-[44px] ${
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
              </TrackedButton>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
            <span>
              Showing <strong className="text-slate-900 font-bold">{filteredServices.length}</strong> of {services.length} services
              {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
            </span>
            {searchQuery && (
              <TrackedButton
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                label="Reset Services Filters"
                category="Services Filter"
                className="text-amber-700 hover:underline font-bold"
              >
                Reset Filters
              </TrackedButton>
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
                    <TrackedLink
                      href={`/services/${service.slug}`}
                      onClick={() => trackCourseClick(service.title, "Services Grid")}
                      label={`Service Card: ${service.title}`}
                      category="Services Grid"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 transition-all duration-200 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-slate-950 group-hover:shadow-sm min-h-[44px]"
                    >
                      <span>{isTeacher ? "View Job Details" : "View Program Details"}</span>
                      <FiArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </TrackedLink>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center my-8">
            <FiSearch size={40} className="mx-auto text-amber-500 mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No Services Found</h3>
            <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
              We couldn&apos;t find any service matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or choosing another category.
            </p>
            <TrackedButton
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              label="Reset Services Search Button"
              category="Services Search"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition-all min-h-[44px]"
            >
              Reset Filters
            </TrackedButton>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. PLATFORM TRUST DIFFERENTIATORS */}
        {/* ========================================================================= */}
        <section className="mt-20 pt-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Why Learn with Inquisitive Mind Academy?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              We combine accredited native mentors, small interactive batches, and exam-focused drills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FiAward,
                title: "Certified DELF Trainers",
                desc: "Expert French mentors with native fluency and exam board certification.",
              },
              {
                icon: FiUsers,
                title: "Small Batches & 1-on-1",
                desc: "Personalized attention ensuring every student gets maximum speaking time.",
              },
              {
                icon: FiTarget,
                title: "Exam-Engine Mock Drills",
                desc: "Real TEF & DELF exam simulations with detailed oral and writing feedback.",
              },
              {
                icon: FiBriefcase,
                title: "Teacher Career Placement",
                desc: "Dedicated hiring portal connecting certified French tutors with top institutes.",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. INTERACTIVE QUICK FAQ ACCORDION */}
        {/* ========================================================================= */}
        <section className="mt-20 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Everything you need to know about our French courses, tutors, and career options.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <FiChevronDown
                      className={`text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-amber-500" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. DUAL-ACTION CONVERSION BANNER */}
        {/* ========================================================================= */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-slate-900 p-8 sm:p-12 text-white text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Accelerate Your French Journey?
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              Join thousands of successful learners preparing for TEF Canada, DELF exams, or apply as a certified tutor today.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <TrackedLink
                href="/courses"
                label="Services Footer Browse Courses CTA"
                category="Services CTA"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-xs sm:text-sm font-extrabold text-slate-950 shadow-md transition-all hover:bg-amber-400 hover:-translate-y-0.5"
              >
                <span>Browse All Courses</span>
                <FiArrowRight />
              </TrackedLink>

              <TrackedLink
                href="/become-a-tutor"
                label="Services Footer Apply Tutor CTA"
                category="Services CTA"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-slate-800 hover:border-slate-600"
              >
                <FiBriefcase className="text-amber-400" />
                <span>Apply as French Tutor</span>
              </TrackedLink>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
