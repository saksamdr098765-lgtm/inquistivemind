import Link from "next/link";
import SITE_CONFIG from "@/app/siteConfig";
import { FiMonitor, FiVideo, FiMapPin, FiClock, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ServiceOnlineClasses({ service }) {
  const isTeacher = service?.category === "teacher";

  if (isTeacher) {
    return (
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-yellow-50/50 via-white to-amber-50/30 p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 border border-amber-200">
                <FiMonitor className="text-amber-600" />
                <span>100% Remote Work Options</span>
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Online French Teacher & Remote Educator Opportunities
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Teach online from anywhere worldwide with flexible morning, evening, or weekend slots. We provide full digital lesson plans, audio exercises, and automated scheduling so you can focus on live online teaching.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <FiVideo className="text-amber-500 text-2xl mb-3" />
                <h3 className="text-base font-bold text-slate-900">Virtual Classrooms Provided</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Teach via Zoom / Google Meet with integrated whiteboards and session recording features.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <FiClock className="text-amber-500 text-2xl mb-3" />
                <h3 className="text-base font-bold text-slate-900">Flexible Online Hours</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Choose hours that fit around your personal commitments or existing job schedule.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <FiCheckCircle className="text-amber-500 text-2xl mb-3" />
                <h3 className="text-base font-bold text-slate-900">Pre-screened Global Students</h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Get assigned motivated students across India, Canada, UAE, and Europe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const whatsappMsg = `Hi ${SITE_CONFIG.name}! I am looking for a French tutor online / French tuition for ${service?.title || "coaching"}.`;
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="rounded-3xl border border-amber-200/90 bg-gradient-to-br from-yellow-50/60 via-white to-amber-50/40 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-900 border border-amber-300">
              <FiMonitor className="text-amber-600" />
              <span>100% Live Virtual Learning & Local Mentorship</span>
            </span>

            {/* Dedicated H2 Targeting High-Intent Keywords */}
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              French Tutor Online & Live French Tuition Near Me for {service.title}
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Looking for a certified <strong>French tutor online</strong> or searching for trusted <strong>French tuition online</strong>? We offer 100% live, interactive online classes for all our student courses — from TEF and TCF Canada immigration prep to DELF exam coaching and spoken French. If you prefer in-person coaching, we also connect you with a qualified <strong>French tutor near me / French tuition near me</strong> for home tuition across Chandigarh, Mohali, and Panchkula.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 text-slate-950 font-bold mb-4">
                <FiVideo className="text-xl" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Live Online French Tuition
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Connect with an expert <strong>French tutor online</strong> for live 1-on-1 or small group batches with real-time speaking evaluation and digital whiteboards.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 text-slate-950 font-bold mb-4">
                <FiMapPin className="text-xl" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                French Tutor Near Me (Home Visits)
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Prefer face-to-face learning? Hire a verified home tutor for local <strong>French tuition near me</strong> across Chandigarh, Mohali, and Panchkula.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 text-slate-950 font-bold mb-4">
                <FiClock className="text-xl" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Online Batches for All Courses
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Every course is available via flexible <strong>French tuition online</strong> with morning, evening, and weekend slots plus recorded class access.
              </p>
            </div>
          </div>

          {/* Dual Action Conversion Cluster */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-amber-200/60">
            {/* Primary Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-amber-400 transition-all shadow-md"
            >
              <FaWhatsapp className="text-lg text-slate-950 shrink-0" />
              <span>Message on WhatsApp</span>
            </a>

            {/* Secondary Button */}
            <Link
              href="/find-tutor"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
            >
              <span>Find a Tutor</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
