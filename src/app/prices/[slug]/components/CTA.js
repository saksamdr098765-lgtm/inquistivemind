import SITE_CONFIG from "@/app/siteConfig";

export default function CTA({ cta, testTitle }) {
  const title = cta?.title || `Ready to Enroll in ${testTitle}?`;
  const subtitle =
    cta?.subtitle ||
    "Reserve your seat in the upcoming batch with our discounted fee offer.";
  const buttonText = cta?.buttonText || "Enroll Now";

  return (
    <section id="enroll" className="py-16 bg-gradient-to-br from-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block rounded-full bg-yellow-500/20 px-4 py-1.5 text-xs font-bold text-yellow-400 border border-yellow-500/30">
          Limited Seats Remaining
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
          {title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%20Inquisitive%20Mind%20Academy,%20I%20want%20to%20enroll%20in%20${encodeURIComponent(
              testTitle
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-yellow-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-xl"
          >
            {buttonText} via WhatsApp
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 text-base font-semibold text-white hover:bg-slate-700 transition-all"
          >
            Call Counseling Desk
          </a>
        </div>
      </div>
    </section>
  );
}
