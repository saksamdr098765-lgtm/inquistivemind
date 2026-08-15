import { FaBookOpen } from "react-icons/fa";
import AddNoteForm from "./AddNoteForm";

export default function AddNotesPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Hero */}
        <div className="rounded-[30px] bg-gradient-to-r from-amber-500 to-yellow-500 p-8 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/20 p-4">
              <FaBookOpen className="text-3xl" />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                Publish New Notes
              </h1>

              <p className="mt-2 text-orange-100">
                Add a new Notes for Students
              </p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">
          <AddNoteForm />
        </div>
      </div>
    </div>
  );
}