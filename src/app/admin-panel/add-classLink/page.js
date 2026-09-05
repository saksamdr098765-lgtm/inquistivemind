import { FaVideo } from "react-icons/fa";
import AddForm from "./AddForm";

export default async function AddClassLinkPage({ searchParams }) {
  const params = await searchParams;
  const batchId = params?.batchId;

  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
      {/* Executive Mobile-Friendly Hero Banner */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-500 p-6 sm:p-8 text-white shadow-xl">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative flex items-center gap-4 sm:gap-6">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/20 border border-white/30 text-white text-xl sm:text-2xl shrink-0">
            <FaVideo />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-white/20 border border-white/30 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              Live Classroom
            </span>
            <h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Post New Class Link
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-orange-100 font-medium">
              Schedule live sessions and share meeting URLs for your batch.
            </p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="rounded-[32px] border border-slate-200/90 bg-white p-5 sm:p-8 shadow-xs">
        <AddForm batchId={batchId} />
      </div>
    </div>
  );
}