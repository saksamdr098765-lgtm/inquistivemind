import { FaBookOpen } from "react-icons/fa";
import AddForm from "./AddForm";

export default async function AddClassLinkPage({ searchParams }) {
  const params = await searchParams;
  const batchId = params?.batchId;

  return (
    <div className="py-28">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Hero */}
        <div className="rounded-[30px] bg-gradient-to-r from-amber-500 to-yellow-500 p-8 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/20 p-4">
              <FaBookOpen className="text-3xl" />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                Post New Class Link
              </h1>

              <p className="mt-2 text-orange-100">
                Add a new Class Link for your course-Batch.
              </p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">
          <AddForm batchId={batchId} />
        </div>
      </div>
    </div>
  );
}