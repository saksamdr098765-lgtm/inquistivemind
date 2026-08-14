import SITE_CONFIG from "@/app/siteConfig";
import { FiEdit3, FiCheckCircle, FiArrowRight } from "react-icons/fi";

export default function LocationHowToApply({ location }) {
  const steps = [
    {
      step: "Step 01",
      title: "Select Course & Batch Timing",
      desc: `Choose from French A1-B2, TEF Canada prep, or Spoken French modules in morning, evening, or weekend slots at our ${location.city} center.`,
    },
    {
      step: "Step 02",
      title: "Book Free Demo & Placement Evaluation",
      desc: `Attend a free trial session at our ${location.city} campus or take a quick diagnostic level test with a senior instructor.`,
    },
    {
      step: "Step 03",
      title: "Complete Registration & Start Classes",
      desc: "Finalize seat reservation, collect your printed workbooks, and begin your live interactive French classes.",
    },
  ];

  return (
    <section id="how-to-apply" className="py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
            <FiEdit3 />
            <span>Admission Process</span>
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How To Apply & Enroll at {location.city} Center
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Follow these 3 easy steps to reserve your seat in the upcoming batch at our {location.city} campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">
                    {s.step}
                  </span>
                  <span className="text-3xl font-black text-slate-200">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <FiCheckCircle className="text-yellow-500" />
                  <span>Simple Registration</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
              `Hi Inquisitive Mind Academy, I want to apply for batch enrollment at ${location.city} center.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold text-slate-950 hover:bg-yellow-400 transition-all shadow-md hover:shadow-lg"
          >
            <span>Apply Now via WhatsApp</span>
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
