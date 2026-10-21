import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

export default function LevelMatcher() {
  const guideItems = [
    {
      level: "Zero Prior Knowledge",
      title: "French A1 (Beginner)",
      symptom: "You have never studied French or only know words like 'Bonjour' and 'Merci'.",
      recommendation: "French A1 Beginner Foundation Course",
      slug: "french-a1-beginner-course",
      outcome: "Master phonetics, alphabet, basic greetings, present tense, and daily survival.",
    },
    {
      level: "Basic Sentence Building",
      title: "French A2 (Elementary)",
      symptom: "You can introduce yourself and order food, but freeze when talking about past events or future plans.",
      recommendation: "French A2 Elementary Conversational Course",
      slug: "french-a2-elementary-course",
      outcome: "Master Passé Composé vs Imparfait, object pronouns, and independent daily dialogues.",
    },
    {
      level: "Conversational Independence",
      title: "French B1 (Intermediate)",
      symptom: "You speak conversational French but struggle to debate, express opinions, or use the Subjunctive mood.",
      recommendation: "French B1 Intermediate Fluency Course",
      slug: "french-b1-intermediate-course",
      outcome: "Express subjective viewpoints, defend arguments, write formal letters, and qualify for French citizenship.",
    },
    {
      level: "Canada Express Entry & Professional",
      title: "French B2 (Advanced)",
      symptom: "You need CLB 7+ (NCLC 7) to claim 50+ Express Entry CRS bonus points or enter university in France.",
      recommendation: "French B2 Advanced Professional / TEF Canada",
      slug: "french-b2-advanced-course",
      outcome: "Synthesize abstract documents, defend complex positions, and pass DELF B2 / TEF Canada.",
    },
    {
      level: "Hesitant in English Speaking",
      title: "English Speaking Mastery",
      symptom: "You understand written English well, but hesitate, translate in your head, or struggle in job interviews.",
      recommendation: "English Speaking Mastery Course",
      slug: "english-speaking-mastery",
      outcome: "Eliminate hesitation, neutralize pronunciation slips, and deliver persuasive corporate presentations.",
    },
    {
      level: "School Boards (Class 1–12)",
      title: "Academic Excellence Program",
      symptom: "School student seeking 90%+ scores in CBSE or ICSE board exams in Maths, Science, English, or French.",
      recommendation: "Academic Excellence School Tuition",
      slug: "academic-excellence-program",
      outcome: "Deep conceptual clarity, weekly chapter mock tests, and structured subjective answer writing.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-amber-50/70 via-white to-yellow-50/60 text-slate-900 py-16 sm:py-20 lg:py-24 rounded-3xl border border-yellow-200/90 shadow-lg overflow-hidden mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.18),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-yellow-100 px-3.5 py-1 text-xs font-bold text-yellow-900 border border-yellow-300/80 uppercase tracking-wider mb-2">
            SELF-ASSESSMENT GUIDE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            Which Level Am I? Find Your Ideal Starting Point
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Starting at the correct level saves months of frustration. Match your current experience with our diagnostic recommendations below.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-yellow-200/80 bg-white p-6 flex flex-col justify-between hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-100/60 transition"
            >
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-yellow-700">
                  {item.level}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs text-slate-700 leading-relaxed bg-amber-50/60 p-3 rounded-xl border border-yellow-200/60 italic">
                  "{item.symptom}"
                </p>
                <div className="mt-4 text-xs text-slate-600 space-y-1.5">
                  <p className="font-bold text-yellow-800">Target Outcome:</p>
                  <p>{item.outcome}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-yellow-100">
                <Link
                  href={`/courses/${item.slug}`}
                  className="inline-flex min-h-[44px] items-center gap-2 text-xs sm:text-sm font-bold text-yellow-700 hover:text-yellow-800 transition"
                >
                  <span>Explore {item.title}</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Level Test Direct Action */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-yellow-400/25 via-amber-300/20 to-yellow-400/15 border border-yellow-400/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-slate-950">
              Still uncertain between two neighbouring levels?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-700">
              Schedule a 15-minute diagnostic call with our lead trainer to test your speaking and grammar with zero obligation.
            </p>
          </div>
          <Link
            href="/book-free-trial?type=level-test"
            className="shrink-0 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-yellow-400 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-950 hover:bg-yellow-300 shadow-md shadow-yellow-200 transition"
          >
            <span>Book Level Assessment</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
