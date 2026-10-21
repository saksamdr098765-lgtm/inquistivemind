import { FaChevronDown } from "react-icons/fa";

export default function FAQ({ course }) {
  if (!course?.faqs || course.faqs.length === 0) return null;

  return (
    <section id="faqs" className="relative bg-gradient-to-b from-white via-amber-50/20 to-white py-16 sm:py-20 lg:py-24 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Common Questions About {course.shortTitle || course.title}
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Have questions about timings, batch size, or course outcomes? Find verified answers below.
          </p>
        </div>

        {/* Server-rendered FAQ Accordions */}
        <div className="mt-10 sm:mt-12 space-y-4 max-w-4xl">
          {course.faqs.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 open:border-yellow-400 open:shadow-md open:shadow-yellow-100/50"
            >
              <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between p-4 sm:p-5 font-bold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-2xl select-none">
                <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                  {faq.q}
                </span>
                <FaChevronDown className="text-xs transition-transform duration-300 group-open:rotate-180 text-yellow-600 shrink-0" />
              </summary>

              <div className="border-t border-slate-100 px-5 pb-5 pt-3 sm:px-6 bg-amber-50/20 rounded-b-2xl">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
