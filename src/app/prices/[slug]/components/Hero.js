import { FiCheckCircle, FiClock, FiShield } from "react-icons/fi";

export default function Hero({ hero, priceCard }) {
  if (!hero || !priceCard) return null;

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-16 lg:py-24">
      <div className="absolute inset-0 opacity-20">
        <img
          src={hero.image}
          alt={hero.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {hero.badge && (
              <span className="inline-block rounded-full bg-yellow-500/20 px-4 py-1.5 text-xs font-bold text-yellow-300 border border-yellow-500/30">
                {hero.badge}
              </span>
            )}

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
              {hero.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#enroll"
                className="rounded-xl bg-yellow-500 px-8 py-4 text-sm font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-lg"
              >
                Enroll at Special Discount
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-700 bg-slate-800/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                Course Pricing Summary
              </span>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-white">
                  ₹{priceCard.offerPrice?.toLocaleString()}
                </span>
                <span className="text-lg font-semibold text-slate-400 line-through">
                  ₹{priceCard.regularPrice?.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-green-400 bg-green-500/20 px-2.5 py-1 rounded-md border border-green-500/30">
                  {priceCard.discount}
                </span>
              </div>

              <p className="mt-2 text-xs text-slate-400 flex items-center gap-1.5">
                <FiClock className="text-yellow-400" />
                <span>Course Duration: {priceCard.duration}</span>
              </p>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Package Inclusions
                </h4>
                <ul className="space-y-2.5">
                  {priceCard.features?.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <FiCheckCircle className="text-yellow-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
