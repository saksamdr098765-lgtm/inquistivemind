import Image from "next/image";
import InfoCard from "./InfoCard";
import BlogTable from "./BlogTable";
import BlogReference from "./BlogReference";

export default function BlogContent({ content }) {
  return (
    <article className="prose prose-slate max-w-none">
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
                  className="scroll-mt-24 mt-10 mb-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-12 sm:mb-5 sm:text-3xl lg:mt-16 lg:mb-6 lg:text-4xl"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.level === 3) {
              return (
                <h3
                  key={index}
                  className="mt-8 mb-3 text-xl font-semibold leading-tight text-slate-900 sm:mt-10 sm:text-2xl"
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
                className="mb-5 text-base leading-7 text-slate-700 sm:mb-6 sm:text-lg sm:leading-8"
              >
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul
                key={index}
                className="mb-6 list-disc space-y-2 pl-5 text-base leading-7 text-slate-700 marker:text-sky-600 sm:mb-8 sm:space-y-3 sm:pl-6 sm:text-lg sm:leading-8"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          case "image":
            return (
              <figure key={index} className="my-8 sm:my-10 lg:my-12">
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 sm:rounded-3xl">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={1400}
                    height={800}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {block.caption && (
                  <figcaption className="mt-3 text-center text-xs text-slate-500 sm:text-sm">
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
  return (
   <BlogTable key={index} block={block} index={index}></BlogTable>
  );
case "references":
  return (
<BlogReference block={block} key={index} index={index}></BlogReference>
  );
          default:
            return null;
        }
      })}
    </article>
  );
}