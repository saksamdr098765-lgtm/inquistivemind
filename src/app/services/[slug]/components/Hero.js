import Link from "next/link";
import SITE_CONFIG from "@/app/siteConfig";
import { FaWhatsapp } from "react-icons/fa";
import { FiStar, FiArrowRight, FiCheckCircle, FiBriefcase } from "react-icons/fi";

export default function Hero({ service }) {
  const isTeacher = service.category === "teacher";
  const trustBadges = service.trustBadges || [
    "100% Certified Tutors",
    "Proven Results",
    "Live Interactive Classes",
  ];

  const whatsappMsg = isTeacher
    ? `Hi Inquisitive Mind Academy, I would like to apply as a tutor for ${service.title}.`
    : `Hi Inquisitive Mind Academy, I am interested in ${service.title}. I would like to request a free consultation.`;
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="relative overflow-hidden bg-transparent pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left info */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              {isTeacher ? (
                <FiBriefcase className="text-amber-600" />
              ) : (
                <FiStar className="text-yellow-500" />
              )}
              <span>{isTeacher ? "Career & Teaching Opportunity" : "Academy Educational Service"}</span>
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
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-md hover:shadow-lg"
              >
                <FaWhatsapp className="text-lg shrink-0 text-slate-950" />
                <span>{isTeacher ? "Apply as a Tutor Now" : "Request Free Consultation"}</span>
              </a>
              <Link
                href={isTeacher ? "/services" : "/courses"}
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all inline-flex items-center gap-2 shadow-xs"
              >
                <span>{isTeacher ? "View All Opportunities" : "Browse Courses"}</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Right Cover Image */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-900/5 p-2 sm:p-3 shadow-xl shadow-yellow-500/5 flex items-center justify-center">
              <img
                src={service.coverImage}
                alt={service.title}
                className="w-full h-auto max-h-[440px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
