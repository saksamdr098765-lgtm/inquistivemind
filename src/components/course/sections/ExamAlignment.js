import { FaAward } from "react-icons/fa";

export default function ExamAlignment({ course }) {
  if (!course?.examAlignment?.mapping || course.examAlignment.mapping.length === 0) return null;

  return (
    <section className="relative bg-gradient-to-b from-white via-amber-50/20 to-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.35em] text-yellow-600 uppercase">
            CERTIFICATION & BENCHMARKS
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Official Exam & Framework Alignment
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Our pedagogical framework prepares learners for internationally accredited diplomas and immigration benchmarks.
          </p>
          <p className="mt-1 text-xs text-slate-500 italic">
            * Note: Inquisitive Mind Academy prepares candidates thoroughly through official past papers and mock rubrics; we do not guarantee exam passes or issue government diplomas.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="mt-8 sm:mt-10">
          <div className="sm:hidden mb-2 flex items-center gap-1.5 text-xs text-slate-500">
            <span>⇄ Swipe horizontally to view full framework mapping</span>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-yellow-200/90 bg-white shadow-sm">
            <table className="w-full text-left text-sm text-slate-700 min-w-[560px]">
              <thead className="bg-amber-50/70 text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-yellow-200">
                <tr>
                  <th scope="col" className="px-5 py-3.5">Skill Component / Level</th>
                  <th scope="col" className="px-5 py-3.5">Target Benchmark (Prepares For)</th>
                  <th scope="col" className="px-5 py-3.5">Credential Recognition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {course.examAlignment.mapping.map((row, idx) => (
                  <tr key={idx} className="transition hover:bg-yellow-50/50">
                    <td className="px-5 py-4 font-bold text-slate-900">
                      {row.level}
                    </td>
                    <td className="px-5 py-4 text-slate-800">
                      <span className="inline-flex items-center gap-1.5 text-yellow-800 font-semibold bg-yellow-100/70 px-2.5 py-1 rounded-lg border border-yellow-300">
                        {row.score}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs sm:text-sm text-slate-600 font-medium">
                      {row.validity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
