import { FaChevronDown } from "react-icons/fa";

export const hubFaqs = [
  {
    q: "How do I choose between French A1, A2, B1, or exam prep?",
    a: "If you have zero prior experience, begin with French A1. If you can conjugate basic present verbs and greet people, choose A2. If your goal is Canadian immigration CRS points, target B2 or our TEF Canada bundle. You can also book a free 15-minute level test with our trainer to get an exact recommendation.",
  },
  {
    q: "Are the classes conducted online or at a physical center in Chandigarh?",
    a: "We offer both! We conduct live interactive online batches via Zoom with high-definition digital whiteboards for students worldwide, as well as offline mentorship and hybrid counseling in the Chandigarh, Mohali, and Panchkula region.",
  },
  {
    q: "What is the class size for group batches?",
    a: "We strictly limit group sizes to 6–8 learners for foreign languages and 4–6 learners for academic tuition. This guarantees every student receives dedicated speaking time and individualized mentor feedback in every single session.",
  },
  {
    q: "What happens during the Free Trial Class?",
    a: "During the 30-minute free trial class, you participate in live speaking activities, experience our teaching style, meet your prospective instructor, and receive a personalized evaluation of your current fluency level.",
  },
];

export default function HubFAQ() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 border-t border-yellow-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            HAVE QUESTIONS?
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            Frequently Asked Questions About Our Programs
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
        </div>

        <div className="mt-10 sm:mt-12 space-y-4 max-w-4xl">
          {hubFaqs.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group rounded-2xl border border-yellow-200/80 bg-white transition-all duration-200 open:border-yellow-400 open:shadow-md open:shadow-yellow-100/50"
            >
              <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between p-4 sm:p-5 font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-2xl select-none">
                <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                  {faq.q}
                </span>
                <FaChevronDown className="text-xs transition-transform duration-300 group-open:rotate-180 text-yellow-600 shrink-0" />
              </summary>

              <div className="border-t border-yellow-100 px-5 pb-5 pt-3 sm:px-6 bg-amber-50/20 rounded-b-2xl">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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
