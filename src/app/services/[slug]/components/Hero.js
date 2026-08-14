import Link from "next/link";
import { FiStar, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function Hero({ service }) {
  const trustBadges = service.trustBadges || [
    "100% Certified Tutors",
    "Proven Results",
    "Live Interactive Classes",
  ];

  return (
    <section className="relative overflow-hidden bg-transparent pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left info */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FiStar className="text-yellow-500" />
              <span>Academy Educational Service</span>
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-3 text-lg font-semibold text-yellow-600">
              {service.subtitle}
            </p>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              {service.description}
            </p>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {trustBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-xs"
                >
                  <FiCheckCircle className="text-yellow-500 font-bold shrink-0" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-md hover:shadow-lg"
              >
                Request Free Consultation
              </a>
              <Link
                href="/courses"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all inline-flex items-center gap-2 shadow-xs"
              >
                <span>Browse Courses</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Right Cover Image */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-yellow-500/5">
              <img
                src={service.coverImage}
                alt={service.title}
                className="h-full w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
