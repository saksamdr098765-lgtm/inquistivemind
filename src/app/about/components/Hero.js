
import {
  FaUserGraduate,
  FaLanguage,
  FaSchool,
  FaCheckCircle,
} from "react-icons/fa";
import BookingForm from "./BookingForm";

export default function Hero() {


  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">

      {/* Background (same system as onboarding) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Soft brand glows */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#D6451B]/10 blur-[70px]" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-yellow-200/30 blur-[70px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-600 border border-yellow-100">
              <FaCheckCircle />
              Free Demo Classes Available
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Learn
              <span className="text-yellow-500"> English,</span>
              <span className="block text-yellow-400">
                French & School Subjects
              </span>
              With Expert Teachers
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Join live interactive classes for Spoken English, IELTS, French Language,
              and School Tuition from Class 1st to 12th.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-yellow-200 transition-colors">
                <FaLanguage className="text-yellow-500" />
                <span className="font-medium text-slate-700">English & French</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-yellow-200 transition-colors">
                <FaUserGraduate className="text-yellow-500" />
                <span className="font-medium text-slate-700">IELTS Preparation</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-yellow-200 transition-colors">
                <FaSchool className="text-yellow-500" />
                <span className="font-medium text-slate-700">Classes 1st–12th</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-yellow-200 transition">
                <FaCheckCircle className="text-yellow-500" />
                <span className="font-medium text-slate-700">Live Interactive Classes</span>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-10 flex flex-wrap gap-8">

              <div>
                <h3 className="text-3xl font-bold text-yellow-500">500+</h3>
                <p className="text-slate-500">Students</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sky-500">20+</h3>
                <p className="text-slate-500">Teachers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-500">95%</h3>
                <p className="text-slate-500">Success Rate</p>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
         <BookingForm></BookingForm>
          </div>

        </div>
      </div>
    </section>
  );
}