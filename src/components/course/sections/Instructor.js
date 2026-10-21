
import Image from "next/image";
import { FaAward } from "react-icons/fa";

export default function Instructor({ course }) {
  if (!course?.instructor) return null;

  const { name, bio, credentials, image } = course.instructor;

  return (
    <section className="relative border-b border-yellow-100/60 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-600">
            E-E-A-T • EXPERT FACULTY
          </p>

          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Meet Your Course Mentor
          </h2>

          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
        </div>

        <div className="max-w-4xl rounded-3xl border border-yellow-200/90 bg-white p-6 shadow-lg shadow-yellow-100/40 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
            {/* Instructor Image or Initial Avatar */}
            <div className="flex flex-col items-center text-center md:col-span-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-3xl bg-gradient-to-tr from-yellow-400 via-amber-300 to-yellow-500 p-1 shadow-lg shadow-yellow-200 sm:h-36 sm:w-36">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[20px] border border-yellow-200 bg-yellow-50 text-4xl font-extrabold text-yellow-900">
                  {image ? (
                    <Image
                      src={image}
                      alt={`${name} - Course Instructor`}
                      fill
                      sizes="(max-width: 640px) 128px, 144px"
                      className="object-cover"
                    />
                  ) : (
                    name?.charAt(0)?.toUpperCase() || "I"
                  )}
                </div>
              </div>

              <p className="mt-3 rounded-full border border-yellow-300 bg-yellow-100 px-3 py-0.5 text-xs font-bold text-yellow-900">
                Certified Faculty
              </p>
            </div>

            {/* Bio and Credentials */}
            <div className="md:col-span-8">
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                {name}
              </h3>

              {bio && (
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {bio}
                </p>
              )}

              {credentials?.length > 0 && (
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Qualifications & Experience
                  </p>

                  <ul className="space-y-2">
                    {credentials.map((cred, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-slate-700 sm:text-sm"
                      >
                        <FaAward className="shrink-0 text-sm text-yellow-500" />
                        <span className="font-medium">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
