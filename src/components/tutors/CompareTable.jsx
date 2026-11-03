"use client";

import Image from "next/image";
import { CheckCircle2, X, ChevronRight, Sparkles } from "lucide-react";
import { getSubjectTheme } from "@/data/tutors";

export default function CompareTable({
  tutors = [],
  onRemoveTutor,
  onBookDemo,
  onClose,
}) {
  if (tutors.length < 2) {
    return (
      <div className="p-8 text-center space-y-3">
        <p className="text-sm font-semibold text-slate-700">
          Please select at least 2 tutors to compare them side by side.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto custom-scrollbar pb-2">
      <table className="w-full border-collapse text-left min-w-[500px]">
        <thead>
          <tr>
            <th className="p-3 bg-slate-100 border border-slate-200 text-xs font-bold uppercase text-slate-500 w-32">
              Features
            </th>
            {tutors.map((tutor) => {
              const theme = getSubjectTheme(tutor.primarySubject);
              return (
                <th
                  key={tutor.id}
                  className="p-3.5 border border-slate-200 text-center align-top relative min-w-[170px] bg-amber-50/60"
                >
                  {/* Remove Column Button */}
                  {onRemoveTutor && (
                    <button
                      onClick={() => onRemoveTutor(tutor.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-white text-slate-400 hover:text-rose-600 shadow-xs cursor-pointer"
                      title="Remove from comparison"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}

                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative h-14 w-14 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xs">
                      {tutor.photo ? (
                        <Image
                          src={tutor.photo}
                          alt={tutor.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="h-full w-full flex items-center justify-center font-bold text-base text-slate-800">
                          {tutor.name[0]}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                        {tutor.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-amber-800 block">
                        {theme.emoji} {tutor.primarySubject}
                      </span>
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-xs font-medium text-slate-700 divide-y divide-slate-100">
          {/* Hourly Rate */}
          <tr>
            <td className="p-3 bg-slate-50 font-bold text-slate-800 border border-slate-200">
              Hourly Fee
            </td>
            {tutors.map((t) => (
              <td key={t.id} className="p-3 text-center border border-slate-200">
                <span className="text-base font-black text-slate-900">
                  ₹{t.pricePerHour}
                </span>
                <span className="text-[10px] text-slate-500 block">per hour</span>
              </td>
            ))}
          </tr>

          {/* Experience */}
          <tr>
            <td className="p-3 bg-slate-50 font-bold text-slate-800 border border-slate-200">
              Experience
            </td>
            {tutors.map((t) => (
              <td key={t.id} className="p-3 text-center border border-slate-200">
                <span className="font-bold text-slate-800">{t.experienceText || `${t.experienceYears}+ Years`}</span>
              </td>
            ))}
          </tr>

          {/* Mode */}
          <tr>
            <td className="p-3 bg-slate-50 font-bold text-slate-800 border border-slate-200">
              Teaching Mode
            </td>
            {tutors.map((t) => (
              <td key={t.id} className="p-3 text-center border border-slate-200">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-800">
                  {t.mode === "Both" ? "Online & Home" : t.mode}
                </span>
              </td>
            ))}
          </tr>

          {/* Qualification */}
          <tr>
            <td className="p-3 bg-slate-50 font-bold text-slate-800 border border-slate-200">
              Qualification
            </td>
            {tutors.map((t) => (
              <td key={t.id} className="p-3 text-center border border-slate-200 text-[11px]">
                {t.qualification}
              </td>
            ))}
          </tr>

          {/* Action Row */}
          <tr>
            <td className="p-3 bg-slate-50 font-bold text-slate-800 border border-slate-200">
              Free Demo
            </td>
            {tutors.map((t) => (
              <td key={t.id} className="p-3 text-center border border-slate-200">
                <button
                  type="button"
                  onClick={() => onBookDemo(t)}
                  className="w-full py-2 px-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold text-xs shadow-xs transition cursor-pointer"
                >
                  Book Demo
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
