import React, { Suspense } from 'react'
import BecomeTutor from './components/BecomeTutor'

export const metadata = {
  title: "Become a Tutor | Join Inquisitive Mind Academy",

  description:
    "Join Inquisitive Mind Academy as a tutor for French, English, or academic subjects. Teach online, set flexible hours, and grow with our educator team.",

  keywords: [
    "Become a Tutor",
    "Tutor Jobs",
    "Online Teaching Jobs",
    "Teach Online",
    "French Tutor Jobs",
    "English Tutor Jobs",
    "Academic Tutor Jobs",
    "Home Tutor Jobs",
    "Online Tutor Recruitment",
    "Part Time Teaching Jobs",
    "Work From Home Tutor",
    "Join Inquisitive Mind Academy",
  ],

  alternates: {
    canonical: "/become-a-tutor",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Become a Tutor | Inquisitive Mind Academy",

    description:
      "Apply to teach French, English, or academic subjects through live online classes with Inquisitive Mind Academy.",

    url: "/become-a-tutor",

    type: "website",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Become a Tutor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Become a Tutor",

    description:
      "Join our team of expert tutors across French, English, and academic subjects.",

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
                name: "Become a Tutor",
                item: "https://www.inquistivemindacademy.com/become-a-tutor",
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
            "@id": "https://www.inquistivemindacademy.com/become-a-tutor/#webpage",
            url: "https://www.inquistivemindacademy.com/become-a-tutor",
            name: "Become a French & Academic Tutor",
            description:
              "Apply to become a language or academic tutor at Inquisitive Mind Academy and teach students through live online classes.",
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
            "@type": "JobPosting",
            title: "French & Academic Language Tutor",
            description:
              "Inquisitive Mind Academy is hiring passionate language and academic tutors to teach live online classes.",
            hiringOrganization: {
              "@id": "https://www.inquistivemindacademy.com/#organization",
            },
            employmentType: "Part-time",
            jobLocationType: "TELECOMMUTE",
            applicantLocationRequirements: {
              "@type": "Country",
              name: "India",
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
                name: "How do I get matched with students?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once you submit your application and details, our matching algorithm pairs active student learning inquiries directly with your subject expertise and availability.",
                },
              },
              {
                "@type": "Question",
                name: "What subjects can I teach?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We recruit qualified tutors for French language (A1-C2, TEF/DELF prep), English fluency & IELTS coaching, and Class 1 to 12 academic subjects across CBSE and ICSE curricula.",
                },
              },
              {
                "@type": "Question",
                name: "Can I choose my own teaching hours?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! You have complete freedom to select your preferred days, time slots, and maximum number of active student batches.",
                },
              },
              {
                "@type": "Question",
                name: "Are classes online or home tuition?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can choose to teach live online 1-on-1 sessions, home tuition, or both based on your location and preference.",
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
            TUTOR RECRUITMENT &amp; MATCHING
          </div>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Become a Tutor at{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Inquisitive Mind Academy
            </span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-yellow-500" />

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
            Give details &amp; we will match student inquiries directly to your teaching schedule.
          </p>
        </header>

        {/* Client Onboarding Form Component */}
        <Suspense fallback={null}>
          <BecomeTutor />
        </Suspense>

        {/* Process Steps */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="mb-10 text-center lg:mb-14">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-slate-400 uppercase">
              TEACHING PROCESS
            </div>

            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-slate-900">
              How Tutor Matching{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Works
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-500" />

            <p className="mx-auto mt-4 max-w-xl text-xs sm:text-base text-slate-600">
              Give details and we will match students to your subject expertise and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Step 01 */}
            <div className="rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-200/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-yellow-500">01</span>
                <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900">Give Details</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Submit your subject expertise, qualifications, and preferred teaching mode.
                </p>
              </div>
              <div className="mt-6 h-1 w-10 rounded-full bg-yellow-500" />
            </div>

            {/* Step 02 */}
            <div className="rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-200/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-yellow-500">02</span>
                <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900">We Match Students</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our algorithm matches active student inquiries directly to your tutor profile.
                </p>
              </div>
              <div className="mt-6 h-1 w-10 rounded-full bg-yellow-500" />
            </div>

            {/* Step 03 */}
            <div className="rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-200/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-yellow-500">03</span>
                <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900">Set Schedule</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Choose convenient teaching hours and manage your online or home tutoring slots.
                </p>
              </div>
              <div className="mt-6 h-1 w-10 rounded-full bg-yellow-500" />
            </div>

            {/* Step 04 */}
            <div className="rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-200/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-yellow-500">04</span>
                <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900">Start Teaching</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Conduct live 1-on-1 sessions, mentor motivated learners, and earn competitive income.
                </p>
              </div>
              <div className="mt-6 h-1 w-10 rounded-full bg-yellow-500" />
            </div>
          </div>
        </section>

        {/* Benefits / Educator Cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="mb-10 text-center lg:mb-14">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-slate-400 uppercase">
              EDUCATOR BENEFITS
            </div>

            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-slate-900">
              Why Tutors Choose{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Inquisitive Mind Academy
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-500" />

            <p className="mx-auto mt-4 max-w-xl text-xs sm:text-base text-slate-600">
              Enjoy complete teaching flexibility, verified student leads, and reliable payouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Benefit 1 */}
            <div className="rounded-[32px] sm:rounded-[40px] border border-slate-200/80 bg-white/90 p-6 sm:p-8 shadow-xl shadow-slate-200/30 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-800 text-xl font-bold border border-yellow-200">
                  ⏰
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-slate-900">Flexible Teaching Hours</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Teach live online or home tuition classes on your own terms with 100% schedule autonomy and full workload control.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-yellow-700">
                <span>Part-time &bull; Full-time &bull; Hourly</span>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-[32px] sm:rounded-[40px] border border-slate-200/80 bg-white/90 p-6 sm:p-8 shadow-xl shadow-slate-200/30 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-800 text-xl font-bold border border-yellow-200">
                  🎯
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-slate-900">Verified Student Leads</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Get steady, matched student inquiries for French, English, and Class 1 to 12 academic subjects directly to your inbox.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-yellow-700">
                <span>French &bull; English &bull; K-12 Academic</span>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-[32px] sm:rounded-[40px] border border-slate-200/80 bg-white/90 p-6 sm:p-8 shadow-xl shadow-slate-200/30 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-800 text-xl font-bold border border-yellow-200">
                  💼
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-slate-900">Competitive Earnings</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Enjoy transparent pay rates based on your qualification, timely monthly payouts, and ongoing professional development support.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-yellow-700">
                <span>Transparent Rates &bull; Timely Pay</span>
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
              Everything you need to know about joining as a tutor and getting matched with students.
            </p>
          </div>

          <div className="space-y-4">
            {/* Q1 */}
            <details className="group rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-xs backdrop-blur-md transition-all duration-200 [&[open]]:border-yellow-400 [&[open]]:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-lg list-none select-none min-h-[44px]">
                <span className="pr-2">How do I get matched with students?</span>
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
                Once you submit your application and details, our matching algorithm pairs active student learning inquiries directly with your subject expertise and availability.
              </p>
            </details>

            {/* Q2 */}
            <details className="group rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-xs backdrop-blur-md transition-all duration-200 [&[open]]:border-yellow-400 [&[open]]:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-lg list-none select-none min-h-[44px]">
                <span className="pr-2">What subjects can I teach?</span>
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
                We recruit qualified tutors for French language (A1 to C2 levels, TEF/DELF prep), English fluency &amp; IELTS coaching, and Class 1 to 12 academic subjects across CBSE and ICSE curricula.
              </p>
            </details>

            {/* Q3 */}
            <details className="group rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-xs backdrop-blur-md transition-all duration-200 [&[open]]:border-yellow-400 [&[open]]:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-lg list-none select-none min-h-[44px]">
                <span className="pr-2">Can I choose my own teaching hours?</span>
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
                Yes! You have complete freedom to select your preferred days, time slots, and maximum number of active student batches.
              </p>
            </details>

            {/* Q4 */}
            <details className="group rounded-[20px] sm:rounded-[24px] border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-xs backdrop-blur-md transition-all duration-200 [&[open]]:border-yellow-400 [&[open]]:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-lg list-none select-none min-h-[44px]">
                <span className="pr-2">Are classes online or home tuition?</span>
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
                You can choose to teach live online 1-on-1 sessions, home tuition, or both based on your location and preference.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}
