"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  "English Speaking",
  "French Language",
  "School Classes",
  "IELTS Preparation",
];

export default function CTA() {
  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-6xl px-5">

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-amber-50 via-white to-sky-50 p-6 shadow-sm sm:p-10">

          <div className="flex flex-col items-center text-center">

            <span className="rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-amber-600">
              ADMISSIONS OPEN
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-5xl">
              Ready to Start Learning?
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Join live English, French, IELTS and School Classes with
              experienced teachers.
            </p>

            {/* Features */}

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  <FaCheckCircle className="text-amber-500" />
                  {item}
                </div>
              ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                Book Free Demo
                <FaArrowRight />
              </Link>

              <Link
                href="/courses"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore Courses
              </Link>

            </div>

         

          </div>

        </div>

      </div>

    </section>
  );
}