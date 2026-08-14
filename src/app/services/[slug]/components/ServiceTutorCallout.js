import Link from "next/link";
import { FiUserPlus, FiArrowRight } from "react-icons/fi";

export default function ServiceTutorCallout({ service }) {
  const callout = service.tutorCallout;
  if (!callout) return null;

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-100/70 via-amber-50 to-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-slate-950 shadow-sm">
              <FiUserPlus className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {callout.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                {callout.description}
              </p>
            </div>
          </div>

          <Link
            href={callout.link || "/become-a-tutor"}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-yellow-500 hover:text-slate-950 shrink-0 shadow-sm"
          >
            <span>{callout.buttonText || "Apply as a Tutor"}</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
