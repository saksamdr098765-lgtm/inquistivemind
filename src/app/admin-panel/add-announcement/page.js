import { FaBullhorn } from "react-icons/fa";
import AddAnnouncementForm from "./AddForm";

export default function AddAnnouncementPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
      {/* Executive Mobile-Friendly Hero Banner */}
      <div className="relative overflow-hidden rounded-[32px] bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xl sm:text-2xl shrink-0">
            <FaBullhorn />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-yellow-400/15 border border-yellow-400/30 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-yellow-300 backdrop-blur-md">
              Broadcast System
            </span>
            <h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Create New{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Announcement
              </span>
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
              Publish announcements for students, courses, or system-wide alerts.
            </p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="rounded-[32px] border border-slate-200/90 bg-white p-5 sm:p-8 shadow-xs">
        <AddAnnouncementForm />
      </div>
    </div>
  );
}
