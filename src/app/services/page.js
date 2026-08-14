import Link from "next/link";
import { services } from "@/app/data/services";
import SITE_CONFIG from "@/app/siteConfig";
import { FiBookOpen, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export const metadata = {
  title: "Educational & French Coaching Services | Inquisitive Mind Academy",
  description:
    "Explore our educational services including 1-on-1 private French tutoring, DELF/DALF exam preparation, TEF Canada immigration coaching, and spoken French workshops.",
  keywords: [
    "French tutoring services",
    "DELF coaching",
    "TEF Canada prep",
    "Spoken French classes",
    "Private language tutor",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-amber-200/40 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-gradient-to-r from-amber-100 to-yellow-100 px-4 py-1.5 text-xs font-bold text-amber-900 shadow-xs">
            <FiBookOpen className="text-amber-600" />
            <span>Our Teaching & Mentoring Services</span>
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Tailored Coaching Programs Built For Results
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            From 1-on-1 private tutoring to intensive exam prep bootcamps, choose the learning format that best fits your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group flex flex-col justify-between rounded-3xl border border-amber-200/80 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:border-yellow-400"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.coverImage}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-amber-500 px-3.5 py-1 text-xs font-bold text-slate-950 shadow-md">
                  ★ Premier Service
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-gradient-to-b from-amber-50/20 via-white to-white">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-amber-700">
                    {service.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-amber-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900/70">
                      Key Program Features
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {(service.whatsCovered || service.includes || service.trustBadges || [])
                        .slice(0, 3)
                        .map((item, idx) => {
                          const text = typeof item === "string" ? item : item.title || item.desc;
                          return (
                            <li
                              key={idx}
                              className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                            >
                              <FiCheckCircle className="text-amber-500 shrink-0 font-bold" />
                              <span>{text}</span>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-amber-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-amber-400 shadow-md hover:shadow-lg"
                  >
                    <span>View Service Details</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
