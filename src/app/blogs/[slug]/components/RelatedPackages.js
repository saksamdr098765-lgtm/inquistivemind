// import PackageCard from "@/app/components/PackageCard";
// import { packages } from "@/app/data/packages";

export default function RelatedPackages({
  relatedPackages = [],
}) {
  const recommended = packages.filter((pkg) =>
    relatedPackages.includes(pkg.slug)
  );

  if (!recommended.length) return null;

  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      {/* Header */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 sm:px-4 sm:py-1.5 sm:text-sm">
          Recommended Tests
        </span>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Related Health Packages
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
          Based on this article, these diagnostic tests and preventive
          health packages may help you better understand your health.
          Always consult a qualified healthcare professional before
          choosing any laboratory test or health package.
        </p>
      </div>

      {/* Packages */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {recommended.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
          />
        ))}
      </div>
    </section>
  );
}