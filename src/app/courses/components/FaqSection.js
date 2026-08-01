import { FaHeadset } from "react-icons/fa";
import FAQAccordion from "./FAQAccodian";
import FAQCTA from "./FAQCTa";

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div className="lg:sticky lg:top-24 h-fit">
            <p className="text-[10px] font-medium tracking-[0.35em] text-slate-400">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Everything You
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Need To Know
              </span>
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Find answers about English Speaking, IELTS, PTE, French Language
              and academic coaching programs.
            </p>

            {/* Support Card */}
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-100 to-yellow-100 text-2xl text-yellow-500">
                <FaHeadset />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Need Help Choosing?
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Speak with our advisors and we'll help you choose the perfect
                course for your goals.
              </p>
            </div>
          </div>

          {/* Interactive FAQ */}
          <FAQAccordion />
        </div>
        <FAQCTA></FAQCTA>
      </div>
    </section>
  );
}