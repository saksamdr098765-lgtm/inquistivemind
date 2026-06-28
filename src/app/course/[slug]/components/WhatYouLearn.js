"use client";

export default function WhatYouWillLearn({ learnings }) {
  return (
    <section className="relative overflow-hidden bg-white py-20">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

       <span className="inline-flex rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700">
  What You'll Learn
</span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Skills You'll Master
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical lessons designed to improve communication,
            confidence, fluency and real-world language skills.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {learnings?.map((item) => (

            <div
              key={item.title}
className="
group rounded-3xl
border border-slate-200
bg-white
p-7
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:border-yellow-300
hover:shadow-xl
"            >

             <div className="
flex h-14 w-14
items-center justify-center
rounded-2xl
bg-yellow-100
text-yellow-600
group-hover:bg-yellow-500
group-hover:text-white
transition-all
duration-300
">
  {item.icon}
</div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        {/* Bottom Highlights */}

   <div className="
mt-16
rounded-3xl
border border-yellow-200
bg-yellow-50
p-8
">

          <div className="grid gap-8 text-center md:grid-cols-3">

            <div>

              <h3 className="text-3xl font-bold text-yellow-600">
                3 Months
              </h3>

              <p className="mt-2 text-slate-600">
                Structured learning roadmap
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-sky-600">
                Live Classes
              </h3>

              <p className="mt-2 text-slate-600">
                Interactive sessions with expert trainers
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-yellow-600">
                Certificate
              </h3>

              <p className="mt-2 text-slate-600">
                Recognized course completion certificate
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}