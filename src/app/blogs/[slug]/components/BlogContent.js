import Image from "next/image";
import { FiTag, FiUser, FiAward, FiCheck } from "react-icons/fi";
import InfoCard from "./InfoCard";
import BlogTable from "./BlogTable";
import BlogReference from "./BlogReference";
import BlogInterlinking from "./BlogInterlinking";

export default function BlogContent({ content, tags, author, reviewedBy }) {
  if (!content || !Array.isArray(content)) return null;

  return (
    <article className="prose prose-slate max-w-none text-slate-800">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={index}
                  id={block.text
                    .toLowerCase()
                    .replace(/[^\w\s]/g, "")
                    .replace(/\s+/g, "-")}
                  className="scroll-mt-28 mt-8 mb-3 text-xl font-extrabold leading-tight tracking-tight text-slate-900 sm:mt-12 sm:mb-5 sm:text-2xl md:text-3xl lg:mt-14 lg:text-4xl border-b border-amber-100 pb-2.5 sm:pb-3"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.level === 3) {
              return (
                <h3
                  key={index}
                  className="mt-6 mb-2.5 text-lg font-bold leading-tight text-slate-900 sm:mt-10 sm:text-xl md:text-2xl text-amber-950"
                >
                  {block.text}
                </h3>
              );
            }

            return null;

          case "paragraph":
            return (
              <p
                key={index}
                className="mb-4 text-sm leading-relaxed text-slate-700 sm:mb-6 sm:text-base md:text-lg sm:leading-8"
              >
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul
                key={index}
                className="mb-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 marker:text-amber-500 sm:mb-8 sm:pl-6 sm:text-base md:text-lg sm:leading-8"
              >
                {block.items.map((item, i) => (
                  <li key={i} className="pl-1">{item}</li>
                ))}
              </ul>
            );

          case "image":
            return (
              <figure key={index} className="my-6 sm:my-10 lg:my-12">
                <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-amber-200/60 sm:rounded-3xl">
                  <Image
                    src={block.src}
                    alt={block.alt || "Article Image"}
                    width={1400}
                    height={800}
                    className="h-auto w-full max-h-[600px] object-contain sm:object-cover sm:object-center transition-transform duration-500 hover:scale-103"
                  />
                </div>

                {block.caption && (
                  <figcaption className="mt-2.5 text-center text-xs font-medium text-slate-500 sm:text-sm">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "tip":
            return (
              <InfoCard
                key={index}
                type="tip"
                title={block.title}
                text={block.text}
              />
            );

          case "warning":
            return (
              <InfoCard
                key={index}
                type="warning"
                title={block.title}
                text={block.text}
              />
            );

          case "success":
            return (
              <InfoCard
                key={index}
                type="success"
                title={block.title}
                text={block.text}
              />
            );

          case "table":
            return <BlogTable key={index} block={block} index={index} />;

          case "references":
            return <BlogReference block={block} key={index} index={index} />;

          case "interlinking":
            return <BlogInterlinking block={block} key={index} />;

          default:
            return null;
        }
      })}

      {/* Article Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-8 pt-5 border-t border-amber-100/90 not-prose flex flex-wrap items-center gap-2 sm:mt-10 sm:pt-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mr-1">
            <FiTag className="text-amber-500 shrink-0" />
            <span>Tags:</span>
          </span>
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-amber-200/80 bg-amber-50/80 px-3 py-0.5 text-xs font-semibold text-amber-900 transition-colors hover:bg-amber-100 sm:px-3.5 sm:py-1"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Author Bio Card */}
      {author?.bio && (
        <div className="mt-8 not-prose overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 p-4 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
            {author.image ? (
              <Image
                src={author.image}
                alt={author.name || "Author"}
                width={64}
                height={64}
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover object-top ring-2 ring-amber-400/80 shadow-md shrink-0"
              />
            ) : (
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800 ring-2 ring-amber-300 shrink-0">
                <FiUser className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
            )}

            <div className="space-y-1.5 sm:space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    About {author.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700">
                    {author.role || "Certified Language Faculty"}
                  </p>
                </div>

                {author.credentials && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-900 border border-amber-200 sm:px-3 sm:py-1">
                    <FiAward className="text-amber-600 shrink-0" />
                    <span>{author.credentials}</span>
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                {author.bio}
              </p>

              {reviewedBy?.name && (
                <p className="mt-2.5 pt-2.5 border-t border-amber-200/50 text-[11px] sm:text-xs font-medium text-slate-500 flex items-center gap-1.5 sm:mt-3 sm:pt-3">
                  <FiCheck className="text-amber-600 font-bold shrink-0" />
                  <span>
                    Fact-checked & reviewed by <strong className="text-slate-900">{reviewedBy.name}</strong> ({reviewedBy.role})
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}