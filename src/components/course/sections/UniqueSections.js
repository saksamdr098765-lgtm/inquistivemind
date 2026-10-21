import {
  FaVolumeUp,
  FaCanadianMapleLeaf,
} from "react-icons/fa";

// 1. A1 Beginner: Pronunciation & Phonetics Preview
export function PronunciationPreview() {
  const phoneticDrills = [
    { rule: "Silent Final Consonants", example: "Paris, vous, chat", desc: "Most final consonants (s, t, d, p, x, z) are silent in French, creating smooth word endings." },
    { rule: "Nasal Vowel Contrast", example: "un (in), on, an/en", desc: "Air passes through the nose and mouth simultaneously to produce distinct French melody." },
    { rule: "The French 'R' (uvular)", example: "merci, rouge, bonjour", desc: "Produced in the back of the throat near the soft palate, gentle and non-rolled." },
    { rule: "La Liaison (Word Linking)", example: "les amis -> /lezami/", desc: "A normally silent final consonant sounds when the next word starts with a vowel." },
  ];

  return (
    <section className="relative bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 text-slate-900 py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-2">
            A1 EXCLUSIVE MODULE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            French Phonetics & Pronunciation Architecture
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Pronounce French with confidence from day one. In our A1 course, we break down French phonetic mechanics so you never form fossilized accent errors.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phoneticDrills.map((drill, idx) => (
            <div key={idx} className="rounded-3xl border border-yellow-200/90 bg-white p-5 shadow-xs hover:border-yellow-400 hover:shadow-md transition">
              <div className="flex items-center gap-2 text-yellow-700 mb-3 font-bold text-sm">
                <FaVolumeUp />
                <span>Rule #{idx + 1}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{drill.rule}</h3>
              <div className="mt-2 text-xs font-mono bg-amber-50 px-2.5 py-1 rounded-lg text-yellow-900 border border-yellow-200">
                e.g. {drill.example}
              </div>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">{drill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. A2 Elementary: Past Tenses Mastery (Passé Composé vs Imparfait)
export function PastTensesMastery() {
  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-2">
            A2 BREAKTHROUGH WORKSHOP
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Passé Composé vs Imparfait: The Mastery Blueprint
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            The biggest hurdle in elementary French is knowing which past tense to use. We teach a visual context framework that makes storytelling in French completely natural.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-yellow-300 bg-amber-50/50 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              Passé Composé (The Action)
            </h3>
            <p className="mt-2 text-xs text-slate-600">
              Used for completed, punctual actions that move the storyline forward.
            </p>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2"><span>•</span> <strong>Sudden events:</strong> "Soudain, le téléphone a sonné."</li>
              <li className="flex items-start gap-2"><span>•</span> <strong>Specific duration:</strong> "J'ai habité à Paris pendant trois ans."</li>
              <li className="flex items-start gap-2"><span>•</span> <strong>Series of actions:</strong> "Je me suis levé, j'ai mangé et je suis parti."</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-sky-300 bg-sky-50/50 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-sky-500" />
              L'Imparfait (The Context & Scenery)
            </h3>
            <p className="mt-2 text-xs text-slate-600">
              Used for ongoing descriptions, emotional states, habitual repetitions, and weather.
            </p>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2"><span>•</span> <strong>Background weather:</strong> "Il pleuvait et il faisait froid."</li>
              <li className="flex items-start gap-2"><span>•</span> <strong>Habitual memory:</strong> "Quand j'étais petit, je lisais tous les soirs."</li>
              <li className="flex items-start gap-2"><span>•</span> <strong>Mental state:</strong> "Je ne savais pas quoi faire."</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. B1 Intermediate: Argumentation & Subjunctive Mood Lab
export function ArgumentationDebates() {
  return (
    <section className="relative bg-gradient-to-b from-white via-amber-50/30 to-white text-slate-900 py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-2">
            B1 ADVANCED RHETORIC
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            The Subjunctive & Argumentative Debate Lab
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            DELF B1 requires you to express subjective judgment, uncertainty, and debate social topics without freezing.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-yellow-200/90 bg-white p-6 shadow-xs">
            <h3 className="font-bold text-yellow-700 text-sm">Subjunctive Trigger Matrix</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Master the exact verbal triggers for necessity (il faut que), emotion (avoir peur que), and doubt (douter que) to speak instinctively.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-white p-6 shadow-xs">
            <h3 className="font-bold text-yellow-700 text-sm">Debate Counter-Attacking</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Learn formal concessive formulas: "Certes..., mais néanmoins...", allowing you to acknowledge opposing viewpoints gracefully while maintaining your stance.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-white p-6 shadow-xs">
            <h3 className="font-bold text-yellow-700 text-sm">Timed Monologue Framing</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Structure the 3-minute oral monologue of DELF B1 into clear problematic, advantages, disadvantages, and personal conviction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. B2 Advanced: Canada Express Entry CLB 7+ Mapping
export function CLB7Mapping() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50/40 via-white to-emerald-50/30 text-slate-900 py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">
            <FaCanadianMapleLeaf className="text-red-500" />
            CANADA IMMIGRATION SPECIALIZATION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            CLB 7+ Express Entry Bonus Points Blueprint
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Reaching NCLC Level 7 in French under Canada Express Entry unlocks up to 50 additional French language CRS points plus 12 bilingualism bonus points, making it the highest ROI immigration skill.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-xs">
            <p className="text-xs text-emerald-800 font-bold uppercase">Reading</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">NCLC 7</p>
            <p className="text-xs text-slate-500 mt-1">TEF: 207–232 pts</p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-xs">
            <p className="text-xs text-emerald-800 font-bold uppercase">Listening</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">NCLC 7</p>
            <p className="text-xs text-slate-500 mt-1">TEF: 249–279 pts</p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-xs">
            <p className="text-xs text-emerald-800 font-bold uppercase">Writing</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">NCLC 7</p>
            <p className="text-xs text-slate-500 mt-1">TEF: 310–348 pts</p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-xs">
            <p className="text-xs text-emerald-800 font-bold uppercase">Speaking</p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">NCLC 7</p>
            <p className="text-xs text-slate-500 mt-1">TEF: 310–348 pts</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. C1 Proficiency: Academic Synthesis Lab
export function AcademicSynthesisLab() {
  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-2">
            DALF C1 RESEARCH LAB
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            La Synthèse de Documents: Academic Rigor
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            DALF C1 requires mastering the French collegiate synthesis: merging multiple conflicting academic texts into a neutral, rigorously structured summary without plagiarism or personal bias.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-6 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm">1. Documentary Confrontation</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Extract overlapping axes and thematic tensions across multiple authentic journalistic and scientific documents.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-6 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm">2. Strict Neutrality</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Synthesize strictly what the authors state without adding your own opinions or outside historical examples.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-6 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm">3. Paraphrase & Cadence</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Nominalize clauses and reformulate author assertions using elevated academic vocabulary and varied syntactic rhythms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 6. C2 Mastery: Literary Stylistics Seminar
export function LiteraryStylisticsSeminar() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 text-slate-900 py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-2">
            DALF C2 MASTER SEMINAR
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            High Literary Stylistics & Near-Native Precision
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            For scholars, diplomats, and senior translators aiming for effortless linguistic command across all Francophone sociolinguistic registers.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-yellow-200/90 bg-white p-6 sm:p-7 shadow-xs">
            <h3 className="font-bold text-yellow-800 text-base">Register Control & Polysemy</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Navigate seamlessly between formal academic discourse, administrative prose, rapid conversational argot, and classical literary structures with subtle precision.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-white p-6 sm:p-7 shadow-xs">
            <h3 className="font-bold text-yellow-800 text-base">Jury Defense Monologue</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Process complex, unscripted audio streams and present an authoritative 30-minute academic exposé, responding to jury debate with intellectual authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. TEF Canada: Exam Simulator & Strategy Blueprint
export function TEFExamSimulator() {
  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-2">
            COMPUTER TEST STRATEGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Computer-Based TEF & TCF Speed Simulation
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Scoring NCLC 7 is not just about French grammar; it requires conquering the countdown timer, avoiding audio traps, and executing structured speaking formulas.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-5 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm">Section A Phone Drill</h3>
            <p className="mt-2 text-xs text-slate-600">10 structured questions in 5 minutes using conditional politeness templates.</p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-5 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm">Section B Persuasion</h3>
            <p className="mt-2 text-xs text-slate-600">3-phase persuasion structure overcoming examiner pushbacks in 10 minutes.</p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-5 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm">Audio Distortion Training</h3>
            <p className="mt-2 text-xs text-slate-600">Handling rapid Canadian and metropolitan accents with ambient background noise.</p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-5 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm">Reading Speed Hacks</h3>
            <p className="mt-2 text-xs text-slate-600">Skim and scan 60 questions in 60 minutes targeting keyword anchors accurately.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 8. French Program: Pathway Overview
export function PathwayOverview() {
  return (
    <section className="relative bg-gradient-to-b from-white via-amber-50/30 to-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-2">
            END-TO-END IMMERSION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            From Zero to Bilingual: The Multi-Tier Journey
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Our comprehensive program takes you through progressive milestones, with personalized check-ins at every CEFR transition point.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-yellow-200/90 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">Phase 1: Basic Survival (A1–A2)</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Acquire everyday vocabulary, master present and past tenses, and navigate daily social interactions comfortably.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">Phase 2: Independent Fluency (B1–B2)</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Debate abstract issues, master the Subjunctive mood, defend points of view, and achieve Canada PR benchmarks.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">Phase 3: Autonomous Command (C1–C2)</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Synthesize complex documents, operate in executive Francophone workplaces, and reach near-native bilingualism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 9. English Program: Corporate Speech Lab
export function CorporateSpeechLab() {
  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-2">
            EXECUTIVE COMMUNICATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Corporate Presentation & Interview Lab
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Practice high-stakes workplace communication in a safe, constructive coaching environment.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-6 shadow-xs">
            <h3 className="font-bold text-slate-900">The STAR Interview Technique</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Frame your answers to competency questions with Situation, Task, Action, and Result to stand out in competitive job rounds.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-6 shadow-xs">
            <h3 className="font-bold text-slate-900">Executive Slide Deck Delivery</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Deliver engaging corporate presentations without reading slides, using vocal modulation and confident posture.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-6 shadow-xs">
            <h3 className="font-bold text-slate-900">Impromptu Roundtable Speaking</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Handle unexpected questions and boardroom debates calmly using structured 3-part impromptu speaking templates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 10. Academic Program: Board-wise Subject Split
export function AcademicBoardSplit() {
  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-yellow-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-900 uppercase tracking-wider mb-2">
            BOARD-ALIGNED CURRICULUM
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Curriculum Tailored to CBSE & ICSE Board Guidelines
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We provide targeted, board-specific study tracks covering prescribed textbooks, board question patterns, and marking schemes.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-6 shadow-xs">
            <h3 className="font-bold text-slate-900">CBSE Curriculum Track</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Complete NCERT and Exemplar question coverage with specialized emphasis on competency-based questions and assertion-reason formats.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-6 shadow-xs">
            <h3 className="font-bold text-slate-900">ICSE & ISC Track</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Rigorous textual analysis for Selina, Frank, and Morning Star publications, with step-by-step subjective answer formulation.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-200/90 bg-amber-50/30 p-6 shadow-xs">
            <h3 className="font-bold text-slate-900">School French Language Coaching</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Specialized assistance for CBSE and ICSE school French syllabi (Apprenons le français, Entre Jeunes) ensuring top marks in grammar and translation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
