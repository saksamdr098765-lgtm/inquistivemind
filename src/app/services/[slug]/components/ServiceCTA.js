import Link from "next/link";
import SITE_CONFIG from "@/app/siteConfig";
import { FiBriefcase, FiBookOpen, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ServiceCTA({ service }) {
  const isTeacher = service?.category === "teacher";
  const finalCta = service?.finalCta;

  const title =
    finalCta?.title ||
    (isTeacher
      ? "Apply as a French Tutor Today"
      : "Speak With a Senior Language Academic Advisor");

  const description =
    finalCta?.description ||
    (isTeacher
      ? "Share your details and teaching preferences — home, online, or both — and join our growing educator network."
      : "Get customized guidance on course selection, timetable customization, DELF exam strategies, and Canadian Express Entry points.");

  const defaultWhatsapp = isTeacher
    ? `Hi ${SITE_CONFIG.name}! I want to apply as a French tutor for ${service?.title || "teaching opportunities"}. Please share the application process.`
    : `Hi ${SITE_CONFIG.name}! I want to book a free consultation for ${service?.title || "coaching"}.`;

  const whatsappMsg = finalCta?.whatsappMsg || defaultWhatsapp;
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="consultation" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-r from-yellow-50 via-white to-amber-50/50 p-6 sm:p-10 text-center shadow-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-amber-800 uppercase">
            {isTeacher ? <FiBriefcase /> : <FiBookOpen />}
            <span>{isTeacher ? "Educator Recruitment Portal" : "Personalized Education Advisory"}</span>
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-5xl">
            {title}
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-relaxed">
            {description}
          </p>

          {/* Conversion Dual Actions with Visual Hierarchy */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Primary Button: Message on WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-amber-500 px-8 py-4 text-base font-extrabold text-slate-950 hover:bg-amber-400 transition-all shadow-md hover:shadow-lg scale-105"
            >
              <FaWhatsapp className="text-xl text-slate-950 shrink-0" />
              <span>Message on WhatsApp</span>
            </a>

            {/* Secondary Button: Find a Tutor / Apply Form */}
            <Link
              href={isTeacher ? "/become-a-tutor" : "/find-tutor"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
            >
              <span>{isTeacher ? "Fill Tutor Application Form" : "Find a Tutor"}</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
