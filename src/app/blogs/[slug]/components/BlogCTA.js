import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCheck,
} from "react-icons/fa";

export default function BlogCTA({
  title = "Start Your Language Learning Journey Today",
  description = "Master Spoken English, French, IELTS, and school subjects with experienced teachers through interactive online and offline classes.",
  serviceName = "Book Free Demo",
  serviceLink = "/courses",
  bookingLink = "/book-demo",
  whatsappLink = "/contact",
  features = [
    "Free Demo Classes",
    "Expert Teachers",
    "Online & Offline Batches",
    "Personalized Learning",
  ],
}) {
  return (
    <section className="relative my-12 overflow-hidden rounded-[2rem] border border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-amber-50 shadow-xl shadow-yellow-100/40">
      {/* Soft Glow */}
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-yellow-300/20 blur-[90px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#D6451B]/10 blur-[90px]" />

      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              ✨ Free Demo Classes Available
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
              {title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-yellow-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-yellow-300 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-white">
                    <FaCheck className="text-xs" />
                  </div>

                  <span className="font-medium text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex w-full flex-col gap-4 lg:w-72">
            <Link
              href={bookingLink}
              className="flex items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D6451B]"
            >
              <FaCalendarCheck />
              {serviceName}
            </Link>

            <Link
              href={serviceLink}
              className="group flex items-center justify-center gap-2 rounded-2xl border border-yellow-200 bg-white px-6 py-4 font-semibold text-yellow-700 transition-all duration-300 hover:bg-yellow-50"
            >
              Explore Courses

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href={whatsappLink}
              className="text-center text-sm font-medium text-slate-500 transition-colors hover:text-yellow-700"
            >
              Need help? Talk to our counsellor →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}