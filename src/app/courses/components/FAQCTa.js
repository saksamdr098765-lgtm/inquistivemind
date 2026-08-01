"use client";

import { useRouter } from "next/navigation";
import SITE_CONFIG from "@/app/siteConfig";
import { trackWhatsAppClick } from "@/lib/traking";

const { whatsappNumber } = SITE_CONFIG;

export default function FAQCTA() {
  const router = useRouter();

  const handleWhatsApp = () => {
    trackWhatsAppClick("courses");

    window.open(
      `https://wa.me/${whatsappNumber}`,
      "_blank"
    );
  };

  return (
    <div className="mx-auto mt-24 max-w-5xl">
      <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-r from-yellow-50 via-white to-sky-50 p-8 shadow-xl md:p-12">
        <div className="text-center">
          <p className="text-[10px] font-medium tracking-[0.35em] text-slate-400">
            STILL HAVE QUESTIONS?
          </p>

          <h3 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Let's Find The{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
              Perfect Course
            </span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Our education advisors are ready to guide you in choosing the
            right English, IELTS, PTE, French or School program based on
            your goals.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={handleWhatsApp}
              className="rounded-full bg-yellow-500 px-8 py-3 font-semibold text-white shadow-lg shadow-yellow-500/30 transition-all hover:-translate-y-1 hover:bg-yellow-600"
            >
              Talk To An Advisor
            </button>

            <button
              onClick={() => router.push("/about")}
              className="rounded-full border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}