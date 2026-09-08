import Link from "next/link";
import Image from "next/image";
import { locations } from "@/app/data/locations";
import { blogs } from "@/app/data/blogs";
import { services } from "@/app/data/services";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";

export default function ServicePricingAndAreas({ service }) {
  // 1. Extract related blogs from data
  const relatedBlogSlugs = service?.relatedBlogs || [];
  let matchedBlogs = blogs.filter((b) => relatedBlogSlugs.includes(b.slug));
  if (!matchedBlogs.length) {
    matchedBlogs = blogs.slice(0, 1);
  }

  // 2. Extract related services from data
  const relatedServicesSlugs = service?.relatedServices || [];
  let matchedServices = services.filter((s) => s.slug !== service?.slug && relatedServicesSlugs.includes(s.slug));
  if (!matchedServices.length) {
    matchedServices = services.filter((s) => s.slug !== service?.slug).slice(0, 1);
  }

  // 3. Extract related location from data
  const matchedLocations = locations.slice(0, 1);

  // Combine into a single array of 2-3 items for 1 single row
  const rowItems = [
    ...matchedBlogs.map((b) => ({ ...b, itemType: "blog" })),
    ...matchedServices.map((s) => ({ ...s, itemType: "service" })),
    ...matchedLocations.map((l) => ({ ...l, itemType: "location" })),
  ].slice(0, 3);

  if (!rowItems.length) return null;

  return (
    <section className="py-12 bg-slate-50/60 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-yellow-800">
            <FiBookOpen className="text-yellow-700" />
            <span>Related Resources</span>
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Related Blog Guides, Services & Study Locations
          </h2>
        </div>

        {/* Single Unified Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {rowItems.map((item, idx) => {
            const isBlog = item.itemType === "blog";
            const isService = item.itemType === "service";
            const isLocation = item.itemType === "location";

            const href = isBlog
              ? `/blogs/${item.slug}`
              : isService
              ? `/services/${item.slug}`
              : `/locations/${item.slug}`;

            const badgeText = isBlog
              ? item.category
              : isService
              ? item.targetAudience || (item.category === "teacher" ? "Teacher Job" : "Course")
              : item.offersVisits
              ? `★ ${item.city} Center`
              : `★ ${item.city} Online`;

            const descriptionText = isBlog
              ? item.excerpt
              : isService
              ? item.description || item.subtitle
              : item.shortDescription || item.description;

            const actionText = isBlog
              ? "Read Guide"
              : isService
              ? "Explore Service"
              : "Explore Center";

            return (
              <Link
                key={idx}
                href={href}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all duration-300 hover:border-yellow-400 hover:shadow-md"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden bg-slate-900/5 p-1.5 flex items-center justify-center">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 left-2.5 rounded-full bg-yellow-500 px-2.5 py-0.5 text-[10px] font-bold text-slate-950 shadow-xs">
                      {badgeText}
                    </span>
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-yellow-700 transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {descriptionText}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-0">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-yellow-700 group-hover:text-yellow-800">
                    <span>{actionText}</span>
                    <FiArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
