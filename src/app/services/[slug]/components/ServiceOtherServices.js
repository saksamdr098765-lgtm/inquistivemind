import Link from "next/link";
import { services } from "@/app/data/services";
import { FiBookOpen, FiArrowRight, FiCheckCircle, FiBriefcase } from "react-icons/fi";

export default function ServiceOtherServices({ currentSlug }) {
  const otherServices = services.filter((s) => s.slug !== currentSlug);

  if (!otherServices.length) return null;

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-700">
              <FiBookOpen />
              <span>Full Academy Portfolio</span>
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore Other Courses & Teaching Opportunities
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-bold text-yellow-700 hover:text-yellow-800 shrink-0"
          >
            <span>All Services</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherServices.slice(0, 6).map((item) => {
            const isTeacher = item.category === "teacher";
            const firstFeature =
              item.whatsCovered?.[0]?.title ||
              item.trustBadges?.[0] ||
              "Certified Mentorship";

            return (
              <div
                key={item.slug}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/50 overflow-hidden shadow-xs transition-all duration-300 hover:bg-white hover:border-yellow-300 hover:shadow-lg"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900/5 p-1.5 flex items-center justify-center">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-0.5 text-xs font-bold text-slate-950 shadow-xs">
                        {isTeacher ? <FiBriefcase size={10} /> : <FiBookOpen size={10} />}
                        <span>{item.targetAudience || (isTeacher ? "Teacher Job" : "Course")}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-yellow-600 line-clamp-1">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-slate-700">
                      <FiCheckCircle className="text-yellow-500 shrink-0" />
                      <span className="line-clamp-1">{firstFeature}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${item.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 transition-all group-hover:bg-yellow-500 group-hover:text-slate-950 group-hover:border-yellow-500 shadow-2xs"
                  >
                    <span>{isTeacher ? "View Job Position" : "Explore Course"}</span>
                    <FiArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
