import Link from "next/link";
import SITE_CONFIG from "@/app/siteConfig";
import { FiArrowRight, FiCheck, FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function BlogCTA({
  cta,
  title: propTitle,
  description: propDescription,
}) {
  const defaultWhatsappMsg = encodeURIComponent(
    "Hi Inquisitive Mind Academy! I read your article and would like to book a Free Demo Class."
  );

  const title = cta?.title || propTitle || "Master French with Certified Tutors";
  const description =
    cta?.description ||
    propDescription ||
    "Join interactive live classes, DELF & TEF exam prep, and small batch sizes (max 10 students).";

  const bookingLink =
    cta?.bookingLink ||
    cta?.whatsappLink ||
    `https://wa.me/${SITE_CONFIG.whatsapp}?text=${defaultWhatsappMsg}`;

  // Check if explicit serviceLink or href is provided
  const targetHref = cta?.serviceLink || cta?.href;

  const features = cta?.features || [
    "Online Live & Offline",
    "DELF & TEF Canada Prep",
  ];

  const secondaryText = cta?.serviceName
    ? cta.serviceName.toLowerCase().startsWith("explore")
      ? cta.serviceName
      : `Explore ${cta.serviceName}`
    : "Find a Tutor";

  return (
    <section className="relative my-8 overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-r from-amber-50/80 via-white to-yellow-50/50 p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-7">
      {/* Background Decorative Glow */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-200/30 blur-2xl pointer-events-none" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Info */}
        <div className="max-w-xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100/90 px-3 py-1 text-xs font-bold text-amber-900">
              <FiCalendar className="text-amber-600" />
              <span>Free Consultation & Demo</span>
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {description}
          </p>

          {features && features.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-700 pt-1">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1.5 font-semibold text-amber-950"
                >
                  <FiCheck className="font-bold text-amber-600 shrink-0" />
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Dual Conversion Actions */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
          {/* Primary Button */}
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md transition-all hover:bg-amber-400 text-center"
          >
            <FaWhatsapp size={18} className="text-slate-950 shrink-0" />
            <span>Message on WhatsApp</span>
          </a>

       
            <Link
              href="/find-tutor"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-amber-300 bg-white px-6 py-3 text-sm font-bold text-amber-950 transition-all hover:bg-amber-50 text-center shadow-2xs"
            >
              <span>Find a Tutor</span>
              <FiArrowRight size={14} className="text-amber-800 shrink-0" />
            </Link>
      
        </div>
      </div>
    </section>
  );
}