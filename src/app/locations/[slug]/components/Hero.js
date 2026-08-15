import Link from "next/link";
import Image from "next/image";
import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiStar,
  FiCheckCircle,
  FiNavigation,
} from "react-icons/fi";

export default function Hero({ location }) {
  const offersVisits = location.offersVisits ?? false;

  return (
    <section className="relative overflow-hidden bg-transparent pt-24 pb-14 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left info */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FiMapPin className="text-yellow-500" />
              <span>{offersVisits ? `${location.city} Study Center` : `Online French Hub — ${location.city}`}</span>
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              {location.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {location.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-xs">
                <FiMapPin className="text-yellow-500 font-bold shrink-0" />
                <span>{offersVisits ? (location.physicalAddress || location.address) : location.address}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-xs">
                <FiPhone className="text-yellow-500 font-bold shrink-0" />
                <span>{location.phone}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-xs">
                <FiClock className="text-yellow-500 font-bold shrink-0" />
                <span>{location.hours}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-md hover:shadow-lg"
              >
                Book Free Demo Class
              </Link>
              <a
                href={`tel:${location.phone}`}
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-xs"
              >
                Call Direct
              </a>
              {offersVisits && location.googleMaps?.direction && (
                <a
                  href={location.googleMaps.direction}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-amber-300 bg-amber-50 px-6 py-4 text-sm font-bold text-amber-900 hover:bg-amber-100 transition-all shadow-xs flex items-center gap-2"
                >
                  <FiNavigation className="text-amber-600" />
                  <span>Get Directions</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Cover Image & Facilities Card */}
          <div className="lg:col-span-5 space-y-6">
            {location.coverImage && (
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                <Image
                  src={location.coverImage}
                  alt={location.title}
                  width={800}
                  height={450}
                  priority
                  className="aspect-[16/10] w-full object-cover object-center transition-transform duration-500 hover:scale-102"
                />
              </div>
            )}

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-yellow-50/60 via-white to-sky-50/40 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                {offersVisits ? "Center Facilities" : "Online Hub Features"}
              </h3>
              <ul className="space-y-3">
                {location.features?.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <FiCheckCircle className="text-yellow-500 mt-1 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
                  Certified Hub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
