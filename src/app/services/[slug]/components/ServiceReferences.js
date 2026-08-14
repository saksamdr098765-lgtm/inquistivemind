import { FiExternalLink, FiBookmark } from "react-icons/fi";

export default function ServiceReferences({ service }) {
  const refs = service.references || [];
  if (!refs.length) return null;

  return (
    <section className="py-12 bg-slate-50/50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex items-center gap-2 mb-6">
          <FiBookmark className="text-yellow-600 text-lg" />
          <h3 className="text-lg font-bold text-slate-900">
            Official References & Exam Guidelines
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {refs.map((r, idx) => (
            <a
              key={idx}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-yellow-300 hover:shadow-sm"
            >
              <div>
                <p className="text-sm font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                  {r.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Publisher: {r.publisher}
                </p>
              </div>
              <FiExternalLink className="text-slate-400 group-hover:text-yellow-600 transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
