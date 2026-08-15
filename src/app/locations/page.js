import Link from "next/link";
import { locations } from "@/app/data/locations";
import SITE_CONFIG from "@/app/siteConfig";
import { FiMapPin, FiPhone, FiClock, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export const metadata = {
  title: "Academy Study Centers & Learning Locations | Inquisitive Mind Academy",
  description:
    "Find an Inquisitive Mind Academy learning center near you in Chandigarh, Mohali, Ludhiana, or join our global interactive online classrooms.",
  keywords: [
    "French learning centers",
    "French institute Chandigarh",
    "French classes Mohali",
    "French institute Ludhiana",
    "Online French classes",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/locations`,
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Core Background Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            <FiMapPin className="text-yellow-500" />
            <span>Our Campuses & Virtual Hubs</span>
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Find Your Nearest Learning Center
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
            Choose from our modern smart classrooms across Punjab or join live interactive online batches from anywhere in the world.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc) => {
            const offersVisits = loc.offersVisits ?? false;

            return (
              <div
                key={loc.slug}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-yellow-300"
              >
                {/* Image & Badge */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={loc.coverImage}
                    alt={loc.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-yellow-500 px-3.5 py-1 text-xs font-bold text-slate-950 shadow-md">
                    {offersVisits ? `★ ${loc.city} Center` : `★ ${loc.city} Online Hub`}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-gradient-to-b from-yellow-50/20 via-white to-white">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {loc.title}
                    </h2>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {loc.shortDescription}
                    </p>

                    <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="flex items-start gap-2.5">
                        <FiMapPin className="text-yellow-500 mt-0.5 shrink-0 font-bold" />
                        <span>{offersVisits ? (loc.physicalAddress || loc.address) : loc.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <FiPhone className="text-yellow-500 shrink-0 font-bold" />
                        <span>{loc.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <FiClock className="text-yellow-500 shrink-0 font-bold" />
                        <span>{loc.hours}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {offersVisits ? "Center Highlights" : "Hub Highlights"}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {loc.features.slice(0, 3).map((feat, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 rounded-full bg-yellow-50 border border-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-800"
                          >
                            <FiCheckCircle className="text-yellow-600" />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-yellow-400 shadow-md hover:shadow-lg"
                    >
                      <span>{offersVisits ? "Explore Center Details" : "Explore Online Hub Details"}</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
