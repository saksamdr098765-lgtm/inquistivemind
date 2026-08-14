import SITE_CONFIG from "@/app/siteConfig";

export default function CTA({ location }) {
  return (
    <section id="booking" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-yellow-50 via-white to-sky-50 p-6 sm:p-10 text-center shadow-sm">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-yellow-700 uppercase">
            Start Your Fluency Journey
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-5xl">
            Book a Free Demo Class at {location.city}
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Experience our interactive teaching methods firsthand. Meet your trainer, evaluate your level, and choose your preferred batch schedule.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Inquisitive%20Mind%20Academy,%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20at%20${encodeURIComponent(
                location.city
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-md"
            >
              Book Free Demo via WhatsApp
            </a>
            <a
              href={`tel:${location.phone || SITE_CONFIG.phone}`}
              className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
            >
              Call {location.phone || SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
