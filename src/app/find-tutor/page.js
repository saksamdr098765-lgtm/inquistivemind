import React, { Suspense } from 'react'
import StudentOnboarding from './components/StudentOnboarding'

export const metadata = {
  title: "Find a Tutor Online | Inquisitive Mind Academy",

  description:
    "Get matched with verified tutors at Inquisitive Mind Academy for French, English, and academic subjects. Live 1-on-1 online classes, personalized guidance, and flexible schedules.",

  keywords: [
    "Find a Tutor",
    "Online Tutor",
    "French Tutor",
    "English Speaking Tutor",
    "Academic Tutor",
    "Home Tutor Online",
    "Private Tutor India",
    "One to One Classes",
    "CBSE ICSE Tutor",
    "French Language Tutor",
    "Online Tutor Jobs",
    "Find French Tutor Online",
  ],

  alternates: {
    canonical: "/find-tutor",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Find a Tutor Online | Inquisitive Mind Academy",

    description:
      "Connect with qualified tutors for French, English, and academic subjects — personalized online learning made simple.",

    url: "/find-tutor",

    type: "website",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Find a Tutor Online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Find a Tutor Online",

    description:
      "Personalized tutoring across French, English, and academic subjects.",

    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function page() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-900 min-h-screen">
      {/* Unified Full-Page Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.15),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.inquistivemindacademy.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Find a Tutor",
                item: "https://www.inquistivemindacademy.com/find-tutor",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.inquistivemindacademy.com/find-tutor/#webpage",
            url: "https://www.inquistivemindacademy.com/find-tutor",
            name: "Find a French & Academic Tutor Online",
            description:
              "Connect with experienced French, English, and academic tutors for personalized online learning.",
            isPartOf: {
              "@id": "https://www.inquistivemindacademy.com/#website",
            },
            about: {
              "@id": "https://www.inquistivemindacademy.com/#organization",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does tutoring cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tuition rates vary depending on the subject, level, and lesson frequency. We offer transparent, affordable pricing with flexible monthly plans and pay-as-you-go options to fit your budget.",
                },
              },
              {
                "@type": "Question",
                name: "Can I choose my own tutor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! After sharing your learning goals, you can browse matched tutor profiles, review their credentials, teaching experience, and ratings before selecting the best instructor for your needs.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer a free trial class?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We provide a 100% free demo evaluation session so you can experience our interactive live online classroom, meet your instructor, and discuss your learning objectives before enrolling.",
                },
              },
              {
                "@type": "Question",
                name: "What subjects and levels do you cover?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We cover French language (A1 to C2 levels, TEF Canada & DELF exam prep), English fluency and IELTS coaching, as well as Class 1 to 12 academic subjects for CBSE and ICSE curricula.",
                },
              },
            ],
          }),
        }}
      />

      {/* Page Content Container */}
      <div className="relative">
        {/* Top Hero Banner */}
        <header className="pt-24 sm:pt-28 lg:pt-32 pb-4 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-slate-400 uppercase">
            STUDENT TUTOR MATCHING
          </div>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Find Your Ideal{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Online Tutor
            </span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-yellow-500" />

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
            Give your details &amp; we will match verified French, English &amp; academic tutors to you.
          </p>
        </header>

        {/* Client Onboarding Multi-Step Form Component */}
        <Suspense fallback={null}>
          <StudentOnboarding />
        </Suspense>

        {/* Process Steps */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="mb-10 text-center lg:mb-14">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-slate-400 uppercase">
              SIMPLE PROCESS
            </div>

            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-slate-900">
              Start Learning in{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                4 Simple Steps
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-500" />

            <p className="mx-auto mt-4 max-w-xl text-xs sm:text-base text-slate-600">
              Give details and we will match qualified tutors to your learning goals and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Step 01 */}
            <div className="rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-200/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-yellow-500">01</span>
                <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900">Give Details</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Share your target subject, proficiency level, and preferred class schedule.
                </p>
              </div>
              <div className="mt-6 h-1 w-10 rounded-full bg-yellow-500" />
            </div>

            {/* Step 02 */}
            <div className="rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-200/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-yellow-500">02</span>
                <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900">We Match Tutors</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our platform matches top certified tutors to your exact requirements.
                </p>
              </div>
              <div className="mt-6 h-1 w-10 rounded-full bg-yellow-500" />
            </div>

            {/* Step 03 */}
            <div className="rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-200/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-yellow-500">03</span>
                <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900">Browse Profiles</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Review tutor qualifications, ratings, and personalized lesson plans.
                </p>
              </div>
              <div className="mt-6 h-1 w-10 rounded-full bg-yellow-500" />
            </div>

            {/* Step 04 */}
            <div className="rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-200/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-yellow-500">04</span>
                <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900">Book Free Trial</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Attend your live 1-on-1 demo session with zero commitment required.
                </p>
              </div>
              <div className="mt-6 h-1 w-10 rounded-full bg-yellow-500" />
            </div>
          </div>
        </section>

        {/* Programs / Overview Cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="mb-10 text-center lg:mb-14">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-slate-400 uppercase">
              OUR PROGRAMS
            </div>

            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-slate-900">
              Personalized Tutoring Across{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Key Disciplines
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-500" />

            <p className="mx-auto mt-4 max-w-xl text-xs sm:text-base text-slate-600">
              Expert instruction designed to boost confidence, fluency, and academic performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: French */}
            <div className="rounded-[32px] sm:rounded-[40px] border border-slate-200/80 bg-white/90 p-6 sm:p-8 shadow-xl shadow-slate-200/30 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-800 text-xl font-bold border border-yellow-200">
                  🇫🇷
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-slate-900">French Language &amp; Exam Prep</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structured DELF, DALF, and TEF Canada preparation, spoken French fluency, and school curriculum support taught by certified language experts.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-yellow-700">
                <span>Levels A1 – C2 &bull; TEF / DELF</span>
              </div>
            </div>

            {/* Card 2: English */}
            <div className="rounded-[32px] sm:rounded-[40px] border border-slate-200/80 bg-white/90 p-6 sm:p-8 shadow-xl shadow-slate-200/30 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-800 text-xl font-bold border border-yellow-200">
                  🇬🇧
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-slate-900">English Fluency &amp; IELTS</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Master conversational English, professional communication, and specialized IELTS exam techniques with personalized 1-on-1 mentorship.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-yellow-700">
                <span>Spoken English &bull; IELTS Prep</span>
              </div>
            </div>

            {/* Card 3: Academic */}
            <div className="rounded-[32px] sm:rounded-[40px] border border-slate-200/80 bg-white/90 p-6 sm:p-8 shadow-xl shadow-slate-200/30 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-800 text-xl font-bold border border-yellow-200">
                  📚
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-slate-900">Academic Subjects (Class 1–12)</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Comprehensive online tuition for Mathematics, Science, and core subjects tailored to CBSE and ICSE curricula with dedicated exam practice.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-yellow-700">
                <span>CBSE &amp; ICSE &bull; Grades 1 to 12</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 pb-20 lg:pb-28">
          <div className="mb-10 text-center lg:mb-14">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-slate-400 uppercase">
              GOT QUESTIONS?
            </div>

            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-slate-900">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-500" />

            <p className="mx-auto mt-4 max-w-xl text-xs sm:text-base text-slate-600">
              Everything you need to know about finding and matching with our expert tutors.
            </p>
          </div>

          <div className="space-y-4">
            {/* Q1 */}
            <details className="group rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-xs backdrop-blur-md transition-all duration-200 [&[open]]:border-yellow-400 [&[open]]:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-lg list-none select-none min-h-[44px]">
                <span className="pr-2">How much does tutoring cost?</span>
                <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-50 text-yellow-800 transition-transform duration-200 group-open:rotate-180 group-open:bg-yellow-400 group-open:text-slate-950">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
                Tuition rates vary depending on the subject, level, and lesson frequency. We offer transparent, affordable pricing with flexible monthly plans and pay-as-you-go options to fit your budget.
              </p>
            </details>

            {/* Q2 */}
            <details className="group rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-xs backdrop-blur-md transition-all duration-200 [&[open]]:border-yellow-400 [&[open]]:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-lg list-none select-none min-h-[44px]">
                <span className="pr-2">Can I choose my own tutor?</span>
                <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-50 text-yellow-800 transition-transform duration-200 group-open:rotate-180 group-open:bg-yellow-400 group-open:text-slate-950">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
                Yes! After sharing your learning goals, you can browse matched tutor profiles, review their credentials, teaching experience, and ratings before selecting the best instructor for your needs.
              </p>
            </details>

            {/* Q3 */}
            <details className="group rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-xs backdrop-blur-md transition-all duration-200 [&[open]]:border-yellow-400 [&[open]]:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-lg list-none select-none min-h-[44px]">
                <span className="pr-2">Do you offer a free trial class?</span>
                <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-50 text-yellow-800 transition-transform duration-200 group-open:rotate-180 group-open:bg-yellow-400 group-open:text-slate-950">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
                Absolutely. We provide a 100% free demo evaluation session so you can experience our interactive live online classroom, meet your instructor, and discuss your learning objectives before enrolling.
              </p>
            </details>

            {/* Q4 */}
            <details className="group rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-xs backdrop-blur-md transition-all duration-200 [&[open]]:border-yellow-400 [&[open]]:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-lg list-none select-none min-h-[44px]">
                <span className="pr-2">What subjects and levels do you cover?</span>
                <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-50 text-yellow-800 transition-transform duration-200 group-open:rotate-180 group-open:bg-yellow-400 group-open:text-slate-950">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
                We cover French language (A1 to C2 levels, TEF Canada &amp; DELF exam prep), English fluency and IELTS coaching, as well as Class 1 to 12 academic subjects for CBSE and ICSE curricula.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}
