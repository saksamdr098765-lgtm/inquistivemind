import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function FinalCTA({ course }) {
  if (!course) return null;

  const encodedWhatsapp = encodeURIComponent(
    course.cta?.whatsappMessage || `Hello! I would like to book a free trial for ${course.title} at Inquisitive Mind Academy.`
  );
  const whatsappUrl = `https://wa.me/919855293752?text=${encodedWhatsapp}`;

  return (
    <section id="final-cta" className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-yellow-50/80 text-slate-900 py-20 sm:py-24 border-t border-yellow-200/80">
      {/* Background glow and subtle dots */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.22),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 px-4 py-1 text-xs font-bold uppercase tracking-wider text-yellow-900 shadow-xs">
          BEGIN YOUR LEARNING JOURNEY
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
          Start with a <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">Free Live Trial Class</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Experience our interactive speaking practice, meet your certified instructor, and assess your current proficiency level with zero financial commitment.
        </p>

        {/* Benefits checklist */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-700">
          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-yellow-500 shrink-0" /> Live Interactive Speaking
          </span>
          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-yellow-500 shrink-0" /> Free Diagnostic Level Evaluation
          </span>
          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-yellow-500 shrink-0" /> No Card or Advance Payment Needed
          </span>
        </div>

        {/* Dual Actions in Yellow & White Theme */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book-free-trial"
            className="inline-flex min-h-[50px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-yellow-200 transition hover:bg-yellow-500 hover:shadow-yellow-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{course.cta?.primary?.text || "Book Free Trial Class"}</span>
            <FaArrowRight className="text-xs" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[50px] w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-emerald-500 bg-emerald-600 hover:bg-emerald-700 px-7 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 shadow-md"
          >
            <FaWhatsapp className="text-xl" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Prefer to talk right now? Call us directly at{" "}
          <a href="tel:+919855293752" className="text-yellow-700 font-bold hover:underline">
            +91 98552 93752
          </a>
        </p>
      </div>
    </section>
  );
}
