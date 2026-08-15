import Link from "next/link";
import SITE_CONFIG from "@/app/siteConfig";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function CTA({ location }) {
  const whatsappMsg = `Hi Inquisitive Mind Academy, I would like to book a free demo class at ${location.city}.`;
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="booking" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-r from-yellow-50 via-white to-sky-50 p-6 sm:p-10 text-center shadow-sm">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-yellow-700 uppercase">
            Start Your Fluency Journey
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-5xl">
            Book a Free Demo Class at {location.city}
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-relaxed">
            Experience our interactive teaching methods firsthand. Meet your trainer, evaluate your level, and choose your preferred batch schedule.
          </p>

          {/* Dual Action Conversion Cluster */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Primary Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-amber-500 px-8 py-4 text-base font-extrabold text-slate-950 hover:bg-amber-400 transition-all shadow-md hover:shadow-lg scale-105"
            >
              <FaWhatsapp className="text-xl text-slate-950 shrink-0" />
              <span>Message on WhatsApp</span>
            </a>

            {/* Secondary Button */}
            <Link
              href="/find-tutor"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
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
