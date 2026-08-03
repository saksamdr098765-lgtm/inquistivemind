import FAQAccordion from "./FaqAccordian";

export default function FAQSection({ faq = [] }) {
  if (!faq.length) return null;

  return (
    <section className="relative mt-16 overflow-hidden rounded-[2rem] bg-white px-6 py-14 sm:mt-20 lg:px-10 lg:py-20">
      {/* Background (matches Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-yellow-100 bg-yellow-50 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Got Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Find answers to the most common questions about our English,
            French, IELTS, and academic courses. If you still need help,
            our team is always happy to assist you.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-4xl">
          <FAQAccordion faq={faq} />
        </div>
      </div>
    </section>
  );
}