/**
 * Inquisitive Mind Academy - Courses Data Layer
 * 
 * IMPORTANT: All text and figures are structured placeholders marked with `isDummy: true`.
 * This file acts as the single source of truth for all course pages (/courses and /courses/[slug]).
 * It is structured to allow seamless replacement by a headless CMS (Sanity, Strapi) or database API.
 */

export const courses = [
  // 1. FRENCH LANGUAGE PROGRAM
  {
    isDummy: true,
    slug: "french-language-program",
    type: "program",
    title: "French Language Comprehensive Mastery Program",
    shortTitle: "French Mastery Program",
    h1: "Master French Fluency from Beginner (A1) to Native-Level Proficiency (C2)",
    heroSubtitle: "A complete French communication pathway engineered for international study, corporate careers, immigration pathways, and lifelong linguistic mastery.",
    level: "A1 to C2 (Complete Pathway)",
    durationWeeks: 48,
    hoursPerWeek: 6,
    classSize: "Small Group (6–8 Students)",
    mode: "both",
    languageOfInstruction: "English, French & Hindi support",
    seo: {
      titleTemplate: "French Language Course in Chandigarh | Complete A1-C2 | Free Trial",
      description: "Master French from beginner to fluent bilingual with certified mentors in Chandigarh. Live interactive batches, CEFR DELF syllabus, and free trial class.",
      keywords: ["french language course chandigarh", "learn french online", "french classes chandigarh", "complete french program"],
      ogImageText: "Complete French Language Mastery • A1 to C2 Pathway",
    },
    // price: {
    //   from: 4999,
    //   currency: "INR",
    //   plans: [
    //     {
    //       name: "Single Level Tier",
    //       price: "₹14,999",
    //       billingPeriod: "per CEFR level",
    //       features: ["Live interactive classes", "Digital workbook & audio exercises", "Official DELF exam mock test", "Weekly speaking club access", "Certificate of completion"],
    //     },
    //     {
    //       name: "Bilingual Track (A1–B2)",
    //       price: "₹49,999",
    //       billingPeriod: "complete 4-level bundle",
    //       features: ["All A1–B2 live batches", "Dedicated 1-on-1 speaking mentor", "Unlimited DELF & TEF mock tests", "Lifetime grammar reference vault", "Priority visa interview prep"],
    //       popular: true,
    //     },
    //   ],
    // },
    // nextBatch: {
    //   date: "Upcoming Monday",
    //   timings: ["Morning: 07:30 AM – 09:00 AM IST", "Evening: 06:30 PM – 08:00 PM IST", "Weekend Special: 10:00 AM – 01:00 PM IST"],
    // },
    outcomes: [
      "Communicate fluently across casual, formal, academic, and business French environments",
      "Systematically pass CEFR-accredited DELF (A1, A2, B1, B2) and DALF (C1, C2) certifications",
      "Write coherent essays, corporate emails, and synthesis reports in authentic French syntax",
      "Understand native European and Canadian French accents from news broadcasts and podcasts",
      "Unlock 50+ additional Express Entry CRS bonus points for Canadian Permanent Residency",
      "Cultivate natural French cultural etiquette, idiomatic fluency, and conversational charm",
    ],
    whoItsFor: [
      "Aspiring immigrants targeting Canada Express Entry French category-based draws",
      "College students planning higher education in France, Belgium, Switzerland, or Canada",
      "Professionals aiming for high-paying multilingual roles in MNCs and foreign embassies",
      "Enthusiastic beginners starting from zero with zero prior knowledge of foreign languages",
      "Learners who previously studied French in school but need active conversational speaking skills",
    ],
    whoItsNotFor: [
      "Learners looking for quick 1-week tourist phrasebook memorization without grammar foundations",
      "Students seeking recorded video courses with zero live mentor interaction and live speaking drills",
      "Individuals unable to dedicate at least 4–6 hours weekly for classes and self-study",
    ],
    curriculum: [
      {
        week: 1,
        title: "Module 1: Foundations & Phonetics (CEFR A1)",
        lessons: [
          "French phonetic system, silent letters, liaisons, and nasal vowels",
          "Everyday salutations, self-introductions, and formal vs informal address ('tu' vs 'vous')",
          "Numbers (1–100), dates, seasons, telling time, and telephone conventions",
          "Essential auxiliary verbs: être, avoir, and regular 1st group (-er) verb conjugations",
          "Basic sentence construction, indefinite and definite articles, and gender agreement",
        ],
      },
      {
        week: 2,
        title: "Module 2: Daily Survival & Situational Dialogues (CEFR A2)",
        lessons: [
          "Navigating cafes, restaurants, grocery markets, and metro ticket counters",
          "Mastering past tense: Passé Composé with avoir and être plus past participle agreements",
          "Expressing sensations, health issues, scheduling medical appointments in French",
          "Direct and indirect object pronouns (COD & COI) for natural sentence flow",
          "Describing personal background, family history, and past vacations fluently",
        ],
      },
      {
        week: 3,
        title: "Module 3: Independent Fluency & Subjunctive Mood (CEFR B1)",
        lessons: [
          "Narrating past memories using the interplay between Imparfait and Passé Composé",
          "Expressing necessity, doubts, emotions, and desires using the Subjunctive mood",
          "Formulating arguments, participating in social debates, and defending personal viewpoints",
          "Relative pronouns: qui, que, où, dont to construct complex sentence structures",
          "Writing structured formal letters, complaints, and constructive customer feedback",
        ],
      },
      {
        week: 4,
        title: "Module 4: Advanced Synthesis & Professional Communication (CEFR B2)",
        lessons: [
          "Analyzing authentic editorial articles, scientific summaries, and societal debates",
          "Formal essay synthesis, argumentation methodology, and oral presentation defenses",
          "Hypothetical structures with 'si' clauses across past, present, and future conditionals",
          "Passive voice, nominalization techniques, and stylistic variation in corporate texts",
          "Full simulated DELF B2 mock examination with personalized examiner feedback",
        ],
      },
      {
        week: 5,
        title: "Module 5: Autonomous Mastery & Literary Refinement (CEFR C1–C2)",
        lessons: [
          "Subtle registers of speech: colloquial (argot), standard, and high literary French",
          "Complex rhetorical discourse, academic synthesis reports, and philosophical debate",
          "Critiquing contemporary Francophone literature, political podcasts, and cinema",
          "DALF C1 & C2 oral defense simulation under strict official exam conditions",
        ],
      },
    ],
    examAlignment: {
      exam: "CEFR / DELF / DALF & TEF Canada",
      mapping: [
        { level: "A1 Discovery", score: "Prepares for DELF A1 (Beginner)", validity: "Lifetime International Diploma" },
        { level: "A2 Waystage", score: "Prepares for DELF A2 (Elementary)", validity: "Lifetime International Diploma" },
        { level: "B1 Threshold", score: "Prepares for DELF B1 & French Citizenship", validity: "Lifetime International Diploma" },
        { level: "B2 Vantage", score: "Prepares for DELF B2 & NCLC 7+ Canada PR", validity: "Lifetime International Diploma" },
        { level: "C1 Proficiency", score: "Prepares for DALF C1 (University Direct Entry)", validity: "Lifetime International Diploma" },
        { level: "C2 Mastery", score: "Prepares for DALF C2 (Near-Native Bilangualism)", validity: "Lifetime International Diploma" },
      ],
    },
    method: [
      { title: "Communicative Live Immersion", description: "From lesson one, French is the primary medium of instruction so you develop real-time reflexes rather than mental translation." },
      { title: "Small Cohort Peer Labs", description: "Classes are strictly capped at 6–8 learners to guarantee every student speaks for a minimum of 20 minutes each live session." },
      { title: "Continuous Diagnostic Feedback", description: "Weekly audio recording assessments and written essay corrections with line-by-line grammar feedback from certified tutors." },
      { title: "Official Certification Mock Drills", description: "Regular mock tests modeled precisely on France Éducation International and Paris Chamber of Commerce standards." },
    ],
    instructor: {
        image: "/founder.webp",
      name: "Sakshi Goel & Certified Faculty",
      bio: "DELF & DALF certified lead French trainer with extensive experience preparing candidates for France Éducation International diplomas and Canadian immigration benchmarks.",
      credentials: [
        "French Teacher – 10+ Years",
  "Adult & Young Learner Teaching",
  "TEF Exam Preparation", 
  "MA in English Literature",
  ],
    },
    faqs: [
      {
        q: "How long does it realistically take to reach conversational French?",
        a: "A dedicated beginner reaching CEFR A2 (conversational independence for travel and daily life) typically requires 16 to 20 weeks with consistent attendance and 4–6 weekly practice hours.",
      },
      {
        q: "Are the classes conducted online or at a physical coaching center?",
        a: "We offer both live interactive online batches (accessible globally via Zoom with interactive digital boards) and hybrid offline consulting for students in the Chandigarh, Mohali, and Panchkula region.",
      },
      {
        q: "Does this program prepare me for DELF B2 and TEF Canada?",
        a: "Yes. Our curriculum follows the official CEFR framework aligned with DELF/DALF and includes specialized training for TEF/TCF Canada exam formats, targeting NCLC 7 and above.",
      },
      {
        q: "What if I miss a live session due to exams or work?",
        a: "Every live session is accompanied by comprehensive classroom notes, vocabulary worksheets, and recorded audio summaries. You can also book a brief doubt-clearing slot with your mentor.",
      },
      {
        q: "Can I attend a free trial class before enrolling in a full level?",
        a: "Yes! We encourage every prospective learner to reserve a 30-minute free trial class to experience our interactive teaching style, meet our faculty, and receive a level assessment.",
      },
    ],
    testimonials: [], // Kept empty until real student reviews are published; UI will gracefully omit
    related: ["french-a1-beginner-course", "french-b2-advanced-course", "tef-canada-preparation-bundle", "english-speaking-mastery"],
    nextLevel: "french-a1-beginner-course",
    prevLevel: null,
    blogLinks: [
      { title: "French Classes Fees in Chandigarh: Complete Cost Guide", slug: "french-classes-fees-in-chandigarh-cost-guide" },
      { title: "TEF vs TCF Canada: Comprehensive Exam Comparison", slug: "what-is-tef-tcf-exam-comparison-scores-fees" },
    ],
    sections: [
      "hero",
      "quick-facts",
      "outcomes",
      "who-its-for",
      "curriculum",
      "exam-alignment",
      "pathway-overview",
      "teaching-method",
      "schedule-pricing",
      "instructor",
      "sample-lesson",
      "level-path",
      "comparison",
      "testimonials",
      "faq",
      "related-courses",
      "final-cta",
    ],
    cta: {
      primary: { text: "Book Free Trial Class", href: "/book-free-trial" },
      whatsappMessage: "Hello! I want to book a free trial class for the French Language Mastery Program at Inquisitive Mind Academy.",
    },
  },

  // 2. ENGLISH SPEAKING MASTERY
  {
    isDummy: true,
    slug: "english-speaking-mastery",
    type: "program",
    title: "English Speaking & Professional Communication Mastery",
    shortTitle: "Spoken English Mastery",
    h1: "Speak Fluent, Articulate English with Natural Confidence in Any Setting",
    heroSubtitle: "Overcome hesitation, eliminate grammatical second-guessing, refine clear neutral pronunciation, and master executive public speaking.",
    level: "Foundational to Executive Fluency",
    durationWeeks: 12,
    hoursPerWeek: 5,
    classSize: "Interactive Group (6–10 Students)",
    mode: "both",
    languageOfInstruction: "English with bilingual conceptual clarification",
    seo: {
      titleTemplate: "English Speaking Course in Chandigarh | Confident Spoken Fluency | Free Trial",
      description: "Transform your English fluency, accent clarity, and professional communication skills in Chandigarh with live speaking practice and a free trial class.",
      keywords: ["english speaking course chandigarh", "spoken english classes", "public speaking training", "communication skills chandigarh"],
      ogImageText: "English Speaking & Professional Fluency Mastery",
    },
    // price: {
    //   from: 3999,
    //   currency: "INR",
    //   plans: [
    //     {
    //       name: "Conversational Fluency Track",
    //       price: "₹7,999",
    //       billingPeriod: "2-month intensive",
    //       features: ["Daily live speaking activities", "Grammar-in-action workshops", "Accent & pronunciation drills", "Roleplay debate sessions", "Certificate of completion"],
    //     },
    //     {
    //       name: "Executive Leadership Track",
    //       price: "₹14,999",
    //       billingPeriod: "3-month masterclass",
    //       features: ["All conversational modules", "Corporate presentation & boardroom speaking", "Job interview & GD simulation", "1-on-1 speech coaching review", "Email etiquette & business writing"],
    //       popular: true,
    //     },
    //   ],
    // },
    // nextBatch: {
    //   date: "New Batches Every Monday",
    //   timings: ["Morning: 08:00 AM – 09:15 AM IST", "Afternoon: 03:00 PM – 04:15 PM IST", "Evening: 07:00 PM – 08:15 PM IST"],
    // },
    outcomes: [
      "Speak continuously on unfamiliar subjects without stammering, pausing, or translating in your head",
      "Correct chronic grammatical slips in tenses, prepositions, articles, and sentence connectors",
      "Deliver persuasive corporate presentations, pitches, and impromptu roundtable elevator talks",
      "Participate actively and lead group discussions, panel interviews, and professional debates",
      "Cultivate an articulate, neutral pronunciation cadence with clear vowel and consonant clarity",
      "Compose crisp, professional business emails, project briefs, and executive memos",
    ],
    whoItsFor: [
      "College students preparing for competitive placement rounds, group discussions, and HR interviews",
      "Working professionals who feel passed over for promotions due to spoken communication barriers",
      "School students needing structured grammar foundations and public debate confidence",
      "Business owners and startup founders pitching to clients, investors, and international partners",
      "Anyone who understands written English well but stumbles when speaking out loud",
    ],
    whoItsNotFor: [
      "Learners wanting written-only academic literature analysis without vocal participation",
      "Students looking for passive lecture recordings where no active speaking turns are taken",
    ],
    curriculum: [
      {
        week: 1,
        title: "Module 1: Hesitation Breakdown & Spoken Grammar",
        lessons: [
          "Eliminating mental translation: thinking directly in English phrasing",
          "Tenses in action: mastering past narratives, present updates, and future commitments",
          "Common Indianisms and grammatical pitfalls: syntax corrections for natural speech",
          "Connecting ideas smoothly with conversational transition words and discourse markers",
        ],
      },
      {
        week: 2,
        title: "Module 2: Pronunciation, Intonation & Articulation",
        lessons: [
          "Phonetic clarity: distinguishing difficult vowel contrasts (ship vs sheep, pen vs pan)",
          "Word stress, sentence rhythm, and vocal modulation for engaging expression",
          "Overcoming tongue-ties with targeted speech therapy and vocal resonance exercises",
          "Pacing control: avoiding rushing and using strategic pausing for rhetorical impact",
        ],
      },
      {
        week: 3,
        title: "Module 3: Everyday Situations & Spontaneous Speech",
        lessons: [
          "Storytelling frameworks: the STAR technique for personal and professional anecdotes",
          "Handling phone calls, customer service complaints, and unexpected small talk",
          "Expressing disagreement diplomatically and negotiating solutions constructively",
          "Impromptu speaking: 1-minute Jam (Just-A-Minute) rounds on spontaneous topics",
        ],
      },
      {
        week: 4,
        title: "Module 4: Corporate Communication & Executive Presence",
        lessons: [
          "Presenting data and slide decks persuasively without reading off slides",
          "Leading virtual meetings on Zoom/Teams: etiquette, interjections, and closing summaries",
          "Professional email writing: concise phrasing, tone calibration, and action calls",
          "Mock job interviews: answering 'Tell me about yourself' and behavioural competency questions",
        ],
      },
    ],
    examAlignment: {
      exam: "IELTS / PTE & CEFR English Framework",
      mapping: [
        { level: "Conversational Fluency", score: "Prepares for CEFR B2 Spoken English", validity: "Global Academic & Corporate Standard" },
        { level: "Corporate Presence", score: "Prepares for IELTS Spoken Band 7.5+", validity: "Immigration & University Admissions" },
      ],
    },
    method: [
      { title: "80% Active Speaking Ratio", description: "Every student speaks during 80% of class time via pair breakouts, live debates, and impromptu speeches." },
      { title: "Real-time Phonetic Correction", description: "Gentle, non-judgmental pronunciation and grammar tweaks delivered immediately during discussions." },
      { title: "Recorded Speech Analysis", description: "Periodic audio/video recording reviews allowing students to track tangible progress in clarity and body language." },
      { title: "Simulated Real-World Scenarios", description: "Roleplay drills covering high-stakes scenarios: salary negotiations, team stand-ups, and panel Q&A." },
    ],
    instructor: {
        image: "/founder.webp",
      name: "Sakshi Goel & Certified Faculty",
      bio: "DELF & DALF certified lead French trainer with extensive experience preparing candidates for France Éducation International diplomas and Canadian immigration benchmarks.",
      credentials: [
        "French Teacher – 10+ Years",
  "Adult & Young Learner Teaching",
  "TEF Exam Preparation", 
  "MA in English Literature",
  ],
    },
    faqs: [
      {
        q: "I can understand English well, but I freeze when speaking. Can this course help?",
        a: "Yes! That is the single most common challenge we solve. Our small-cohort environment and structured sentence-building drills build muscle memory, completely eliminating stage fright and mental translation.",
      },
      {
        q: "How many students are in each spoken English batch?",
        a: "We cap our speaking cohorts at 6 to 10 students so that every learner receives personalized speaking time, continuous mentor correction, and individual speech analysis.",
      },
      {
        q: "Will this course help me prepare for IELTS or PTE speaking tests?",
        a: "Absolutely. While this course focuses on genuine real-world fluency, our curriculum covers lexical resource, fluency and coherence, and pronunciation aligned directly with IELTS Band 7.5+ descriptors.",
      },
      {
        q: "What is the typical duration to see measurable improvement in my speaking?",
        a: "Most students report noticeable reduction in hesitation within the first 3 weeks, and complete conversational confidence by week 8 of consistent participation.",
      },
      {
        q: "Can I attend a trial class to see if the level matches my current ability?",
        a: "Yes. You can book a free level test and trial class where our instructor evaluates your fluency and recommends the ideal cohort.",
      },
    ],
    testimonials: [],
    related: ["french-language-program", "academic-excellence-program", "french-a1-beginner-course"],
    nextLevel: null,
    prevLevel: null,
    blogLinks: [
      { title: "French Classes Fees in Chandigarh: Cost Guide", slug: "french-classes-fees-in-chandigarh-cost-guide" },
      { title: "TEF vs TCF Canada: Comprehensive Exam Comparison", slug: "what-is-tef-tcf-exam-comparison-scores-fees" },
    ],
    sections: [
      "hero",
      "quick-facts",
      "outcomes",
      "who-its-for",
      "curriculum",
      "exam-alignment",
      "corporate-speech-lab",
      "teaching-method",
      "schedule-pricing",
      "instructor",
      "sample-lesson",
      "comparison",
      "testimonials",
      "faq",
      "related-courses",
      "final-cta",
    ],
    cta: {
      primary: { text: "Book Free Trial Class", href: "/book-free-trial" },
      whatsappMessage: "Hello! I would like to book a free trial class for English Speaking Mastery at Inquisitive Mind Academy.",
    },
  },

  // 3. ACADEMIC EXCELLENCE PROGRAM (School Classes 1-12)
  {
    isDummy: true,
    slug: "academic-excellence-program",
    type: "school",
    title: "Academic Excellence School Tuition Program (Classes 1–12)",
    shortTitle: "Class 1–12 School Tuition",
    h1: "Build Deep Conceptual Foundations and Score Top Grades in CBSE & ICSE",
    heroSubtitle: "Personalized subject mentorship for school students covering Mathematics, Science, English, and French with dedicated doubt-clearing sessions.",
    level: "Class 1 to 12 (CBSE / ICSE / State Boards)",
    durationWeeks: 36,
    hoursPerWeek: 6,
    classSize: "Micro Batch (4–6 Students)",
    mode: "both",
    languageOfInstruction: "English & Hindi bilingual explanations",
    seo: {
      titleTemplate: "Tuition Classes in Chandigarh | CBSE & ICSE Class 1-12 | Free Demo",
      description: "Comprehensive school tuition in Chandigarh for CBSE, ICSE, and State Boards from Class 1 to 12. Concept mastery, regular mock tests, and free demo.",
      keywords: ["tuition classes chandigarh", "cbse coaching chandigarh", "icse tuition chandigarh", "class 10 tuition chandigarh", "class 12 tuition"],
      ogImageText: "Academic Excellence Program • Class 1 to 12 Tuition",
    },
    // price: {
    //   from: 2499,
    //   currency: "INR",
    //   plans: [
    //     {
    //       name: "Single Subject Master",
    //       price: "₹2,499",
    //       billingPeriod: "per month",
    //       features: ["3 live sessions per week", "Comprehensive printed/PDF notes", "Weekly topic tests & ranking", "Parent-teacher monthly update", "Instant homework doubt help"],
    //     },
    //     {
    //       name: "All-Round Board Prep (3+ Subjects)",
    //       price: "₹5,999",
    //       billingPeriod: "per month",
    //       features: ["Maths, Science, English & French", "Daily live classes & practice sessions", "NCERT & Exemplar masterclass", "Past 10 years board paper solving", "1-on-1 exam strategy mentoring"],
    //       popular: true,
    //     },
    //   ],
    // },
    // nextBatch: {
    //   date: "Batches Ongoing Every Month",
    //   timings: ["Classes 1–5: 03:30 PM – 04:45 PM IST", "Classes 6–8: 04:45 PM – 06:00 PM IST", "Classes 9–12: 06:00 PM – 07:30 PM IST"],
    // },
    outcomes: [
      "Master difficult mathematical and scientific concepts through intuitive real-world demonstrations",
      "Eliminate exam anxiety with weekly timed test series mirroring official CBSE/ICSE patterns",
      "Learn structured answer-writing techniques to secure full marks in 3-mark and 5-mark subjective questions",
      "Develop independent critical thinking and self-study habits that carry through higher education",
      "Achieve measurable grade improvements across quarterly school tests, mid-terms, and annual board exams",
      "Receive dedicated doubt clearance without feeling rushed or judged in large commercial classrooms",
    ],
    whoItsFor: [
      "School students in Classes 1 through 12 needing personalized conceptual clarity in core subjects",
      "Class 9 and 10 students preparing for crucial secondary school board examinations",
      "Class 11 and 12 students aiming for high percentages in board assessments alongside entrance preparation",
      "Students looking for specialized coaching in school-level French as a 2nd or 3rd language",
      "Parents seeking transparent academic tracking with regular progress reviews and test analysis",
    ],
    whoItsNotFor: [
      "Students seeking rote memorization tricks without interest in understanding underlying principles",
      "Learners unable to submit weekly homework worksheets and mock test assignments",
    ],
    curriculum: [
      {
        week: 1,
        title: "Phase 1: Diagnostic Assessment & Foundation Building",
        lessons: [
          "Individual academic diagnostic to identify previous year conceptual knowledge gaps",
          "Core arithmetic, algebraic foundations, and reading comprehension benchmarking",
          "Personalized study calendar aligned with the student's specific school syllabus",
        ],
      },
      {
        week: 2,
        title: "Phase 2: Comprehensive Chapter-by-Chapter Mastery",
        lessons: [
          "Deep dive into NCERT and ICSE prescribed textbooks with line-by-line concept breakdown",
          "Solving standard numerical problems, theorems, and chemical equation balancing",
          "English and French grammar, literature textual analysis, and creative composition skills",
        ],
      },
      {
        week: 3,
        title: "Phase 3: Answer Presentation & Exemplar Solving",
        lessons: [
          "High-scoring answer framing: bullet points, diagrams, equations, and highlighting keywords",
          "Solving NCERT Exemplar and advanced reference texts (RD Sharma, Lakhmir Singh, Selina)",
          "Time management coaching: how to budget minutes during 3-hour theoretical exams",
        ],
      },
      {
        week: 4,
        title: "Phase 4: Board Simulation & Full Revision Cycles",
        lessons: [
          "Full-syllabus mock tests conducted under strict timed exam hall conditions",
          "In-depth error analysis review: identifying calculation errors, misread questions, and skipped steps",
          "Parent-teacher review meeting to discuss final revision milestones and exam preparedness",
        ],
      },
    ],
    examAlignment: {
      exam: "CBSE & ICSE Board Guidelines",
      mapping: [
        { level: "Classes 1–8", score: "Foundation & Conceptual Grasp", validity: "School Curriculum Alignment" },
        { level: "Class 10 Board", score: "Prepares for 95%+ Board Target", validity: "CBSE / ICSE Board Exams" },
        { level: "Class 12 Board", score: "Prepares for Senior Secondary Boards", validity: "CBSE / ICSE Board Exams" },
      ],
    },
    method: [
      { title: "Micro-Batches (4–6 Learners)", description: "Tiny class sizes ensure our tutors notice immediately whenever a student hesitates or struggles with a formula." },
      { title: "Socratic Inquiry Approach", description: "Tutors guide students to discover answers through probing questions rather than spoon-feeding ready solutions." },
      { title: "Weekly Graded Assessments", description: "Objective and subjective tests every Saturday to verify topic mastery before moving to subsequent chapters." },
      { title: "Transparent Parent Dashboard", description: "Regular updates on attendance, test scores, homework completion, and mentor notes delivered directly to parents." },
    ],
    instructor: {
      name: "Senior Academic Faculty",
      bio: "Postgraduate subject mentors with over a decade of classroom teaching and board exam evaluation experience across Chandigarh, Mohali, and Panchkula schools.",
      credentials: ["M.Sc / M.A. Subject Specialists", "Former School Educators with 10+ Years Experience", "Consistent Track Record of 90%+ Board Scorers"],
    },
    faqs: [
      {
        q: "Which boards do your tuition classes cater to?",
        a: "We provide tailored syllabus coaching for CBSE, ICSE, and Punjab/Haryana State Boards, utilizing board-specific textbooks and evaluation standards.",
      },
      {
        q: "Do you offer tuition for single subjects like French or Mathematics?",
        a: "Yes. Students can enroll for single subjects (e.g. school French or Class 10 Mathematics) or choose our multi-subject bundle for comprehensive coverage.",
      },
      {
        q: "How do you help students who have fallen behind their school peers?",
        a: "We begin with a diagnostic test to pinpoint root conceptual gaps from earlier grades, then create a targeted catch-up roadmap with extra doubt sessions.",
      },
      {
        q: "Are classes held on weekends or weekdays?",
        a: "We offer both regular weekday batches (Monday through Friday) and intensive weekend revision batches tailored to school schedules.",
      },
      {
        q: "Can my child attend a free trial class before we commit?",
        a: "Yes! We welcome students to attend a free 1-hour trial class in their chosen subject to experience our teaching approach firsthand.",
      },
    ],
    testimonials: [],
    related: ["french-language-program", "english-speaking-mastery", "french-a1-beginner-course"],
    nextLevel: null,
    prevLevel: null,
    blogLinks: [
      { title: "French Classes Fees in Chandigarh: Complete Cost Guide", slug: "french-classes-fees-in-chandigarh-cost-guide" },
      { title: "TEF vs TCF Canada: Comprehensive Exam Comparison", slug: "what-is-tef-tcf-exam-comparison-scores-fees" },
    ],
    sections: [
      "hero",
      "quick-facts",
      "outcomes",
      "who-its-for",
      "curriculum",
      "exam-alignment",
      "academic-board-split",
      "teaching-method",
      "schedule-pricing",
      "instructor",
      "sample-lesson",
      "comparison",
      "testimonials",
      "faq",
      "related-courses",
      "final-cta",
    ],
    cta: {
      primary: { text: "Book Free Demo Class", href: "/book-free-trial" },
      whatsappMessage: "Hello! I would like to book a free demo tuition class for the Academic Excellence Program at Inquisitive Mind Academy.",
    },
  },

  // 4. FRENCH A1 BEGINNER COURSE
  {
    isDummy: true,
    slug: "french-a1-beginner-course",
    type: "level",
    title: "French A1 Beginner Foundation Course (DELF A1)",
    shortTitle: "French A1 Beginner",
    h1: "Start Speaking French Confidently with DELF A1 Beginner Training",
    heroSubtitle: "Discover French phonetics, basic conversational grammar, daily greetings, and essential cultural expressions from the ground up.",
    level: "CEFR A1 (Discovery / Découverte)",
    durationWeeks: 8,
    hoursPerWeek: 5,
    classSize: "Small Group (6–8 Students)",
    mode: "both",
    languageOfInstruction: "English, French & Hindi support",
    seo: {
      titleTemplate: "French A1 Course in Chandigarh | DELF A1 Exam Prep | Free Trial Class",
      description: "Start speaking French from day one. Certified DELF A1 coaching in Chandigarh covering phonetics, daily greetings, basic grammar, and free trial class.",
      keywords: ["french a1 course chandigarh", "delf a1 exam coaching", "learn french for beginners", "french a1 classes mohali"],
      ogImageText: "French A1 Beginner Foundation • DELF A1 Certification",
    },
    // price: {
    //   from: 4999,
    //   currency: "INR",
    //   plans: [
    //     {
    //       name: "A1 Foundation Regular",
    //       price: "₹12,499",
    //       billingPeriod: "complete 8-week course",
    //       features: ["40 live interactive hours", "Digital coursebook & phonetic audio", "Weekly speaking club sessions", "1 official DELF A1 mock test", "Certificate of completion"],
    //     },
    //     {
    //       name: "A1 Fast-Track Intensive",
    //       price: "₹16,999",
    //       billingPeriod: "intensive 4-week sprint",
    //       features: ["Daily live immersion classes", "1-on-1 weekly pronunciation clinic", "3 full DELF A1 mock examinations", "Unlimited recorded session access", "Guaranteed batch timing preference"],
    //       popular: true,
    //     },
    //   ],
    // },
    // nextBatch: {
    //   date: "Starting Next Monday",
    //   timings: ["Morning: 07:30 AM – 08:45 AM IST", "Evening: 06:00 PM – 07:15 PM IST", "Weekend: 10:00 AM – 12:30 PM IST"],
    // },
    outcomes: [
      "Introduce yourself, state your profession, nationality, age, and where you live in natural French",
      "Pronounce French words accurately using official phonetic rules, silent letter rules, and liaisons",
      "Order food at a French restaurant, ask for prices, purchase groceries, and ask for directions",
      "Formulate questions using 'est-ce que', inversion, and intonation, and answer in positive or negative",
      "Describe your home, family members, friends, and daily personal routines with correct agreements",
      "Prepares thoroughly for all 4 sections of the official DELF A1 exam (Listening, Reading, Writing, Speaking)",
    ],
    whoItsFor: [
      "Complete beginners who have never spoken or studied a single word of French before",
      "Immigration aspirants beginning their journey toward French language CRS bonus points",
      "Students planning undergraduate or master's degrees in France, Switzerland, or Canada",
      "Working professionals wanting an impressive foreign language on their resume",
      "School students taking French who need strong grammatical foundations",
    ],
    whoItsNotFor: [
      "Learners who already speak conversational French and know present and past tense conjugations (take our B1 or B2 course)",
      "Students looking only for grammar worksheets without active spoken dialogue practice",
    ],
    curriculum: [
      {
        week: 1,
        title: "Week 1: Phonetics, Greetings & The Alphabet",
        lessons: [
          "The French alphabet, accents (aigu, grave, circonflexe, tréma, cédille), and silent consonants",
          "Nasal vowels (an/en, on, in) and the rules of liaison between words",
          "Formal and informal salutations: Bonjour, Bonsoir, Salut, Comment allez-vous vs Comment ça va",
          "Introducing yourself: name, nationality, profession, and languages spoken",
        ],
      },
      {
        week: 2,
        title: "Week 2: Numbers, Core Verbs & Definite/Indefinite Articles",
        lessons: [
          "Numbers 0–100, telephone digits, and asking for someone's age",
          "The cornerstone auxiliary verbs: être (to be) and avoir (to have) in present indicative",
          "Gender in French: masculine and feminine nouns, and singular/plural markers",
          "Definite articles (le, la, l', les) and Indefinite articles (un, une, des)",
        ],
      },
      {
        week: 3,
        title: "Week 3: Regular -ER Verbs, Negation & Daily Life",
        lessons: [
          "Conjugating 1st group (-er) regular verbs: parler, habiter, aimer, travailler",
          "Expressing likes, dislikes, and preferences (j'aime, j'adore, je déteste)",
          "Forming simple negations using 'ne... pas'",
          "Asking questions: intonation, 'est-ce que', and question words (qui, que, où, quand)",
        ],
      },
      {
        week: 4,
        title: "Week 4: Family, Physical Description & Adjectives",
        lessons: [
          "Family members vocabulary: parents, fratrie, grands-parents",
          "Qualifying adjectives: gender and number agreements, and placement rules (BAGS)",
          "Describing physical appearances, personality traits, and clothing",
          "Possessive adjectives: mon/ma/mes, ton/ta/tes, son/sa/ses",
        ],
      },
      {
        week: 5,
        title: "Week 5: City Navigation, Giving Directions & Prepositions",
        lessons: [
          "Places in the city: la gare, la poste, le musée, l'école, la pharmacie",
          "Contracted articles: à + le = au, de + le = du, etc.",
          "Giving and asking for directions: tout droit, à gauche, à droite, traverser la rue",
          "Irregular key verbs: aller (to go), faire (to do/make), venir (to come)",
        ],
      },
      {
        week: 6,
        title: "Week 6: Food, Ordering in Restaurants & Partitive Articles",
        lessons: [
          "French culinary vocabulary: breakfast, lunch, dinner, drinks, and desserts",
          "Partitive articles (du, de la, de l', des) to express quantities of food and drink",
          "Roleplay: ordering meals, asking for the bill, and requesting food adjustments politely",
          "Expressing exact quantities: un kilo de, une bouteille de, un peu de",
        ],
      },
      {
        week: 7,
        title: "Week 7: Daily Routine & Pronominal Verbs",
        lessons: [
          "Pronominal (reflexive) verbs: se lever, se doucher, s'habiller, se coucher",
          "Chronological markers: d'abord, ensuite, puis, enfin, tous les jours",
          "Telling time: official 24-hour clock and conversational French time expressions",
          "Writing a short descriptive postcard or email about your typical weekday routine",
        ],
      },
      {
        week: 8,
        title: "Week 8: Near Future, Immediate Past & DELF A1 Exam Simulation",
        lessons: [
          "Near future (Le Futur Proche: aller + infinitive) to discuss upcoming plans",
          "Recent past (Le Passé Récent: venir de + infinitive) to narrate immediate events",
          "Full simulated DELF A1 examination covering Listening, Reading, Writing, and Oral defense",
          "Individual feedback report and guidance on transitioning to CEFR Level A2",
        ],
      },
    ],
    examAlignment: {
      exam: "DELF A1 (France Éducation International)",
      mapping: [
        { level: "Listening (Compréhension Orale)", score: "Target: 18+/25", validity: "Official CEFR Benchmark" },
        { level: "Reading (Compréhension Écrite)", score: "Target: 20+/25", validity: "Official CEFR Benchmark" },
        { level: "Writing (Production Écrite)", score: "Target: 18+/25", validity: "Official CEFR Benchmark" },
        { level: "Speaking (Production Orale)", score: "Target: 20+/25", validity: "Official CEFR Benchmark" },
      ],
    },
    method: [
      { title: "Phonetics-First Methodology", description: "We drill pronunciation rules right from week one so students never build fossilized accent errors." },
      { title: "Roleplay Situational Immersion", description: "Classes simulate real-life interactions: buying bread at a boulangerie, booking train tickets, checking into hotels." },
      { title: "Micro Speaking Turns", description: "With maximum 8 students per batch, every learner speaks French out loud multiple times during every 75-minute class." },
      { title: "Official DELF Exam Paper Drills", description: "Solve real past papers with examiner grading rubrics so you walk into the exam hall completely relaxed." },
    ],
    instructor: {
        image: "/founder.webp",
      name: "Sakshi Goel & Certified Faculty",
      bio: "DELF & DALF certified lead French trainer with extensive experience preparing candidates for France Éducation International diplomas and Canadian immigration benchmarks.",
      credentials: [
        "French Teacher – 10+ Years",
  "Adult & Young Learner Teaching",
  "TEF Exam Preparation", 

  "MA in English Literature",
  ],
    },
    faqs: [
      {
        q: "Do I need any previous background in French to join A1?",
        a: "No! Absolutely zero prior French knowledge is required. We start from the very beginning with the alphabet, pronunciation, and basic greetings.",
      },
      {
        q: "What is the passing score for the DELF A1 examination?",
        a: "To pass DELF A1, you need an overall score of at least 50 out of 100 points, with a minimum of 5 out of 25 points in each of the four individual sections.",
      },
      {
        q: "Is DELF A1 recognized internationally for visas and universities?",
        a: "Yes. The DELF diploma is issued directly by the French Ministry of National Education, carries lifetime validity, and is recognized globally by universities and employers.",
      },
      {
        q: "How many hours of study outside class should I plan for?",
        a: "We recommend approximately 3 to 4 hours per week of self-study, reviewing audio vocabulary, completing short worksheets, and listening to beginner French podcasts.",
      },
      {
        q: "Can I try a class first to see if I enjoy learning French?",
        a: "Yes, you can book a free trial class to meet your instructor, learn your first French phrases, and see our interactive classroom in action.",
      },
    ],
    testimonials: [],
    related: ["french-a2-elementary-course", "french-language-program", "tef-canada-preparation-bundle"],
    nextLevel: "french-a2-elementary-course",
    prevLevel: null,
    blogLinks: [
      { title: "French Classes Fees in Chandigarh: Complete Cost Guide", slug: "french-classes-fees-in-chandigarh-cost-guide" },
      { title: "TEF vs TCF Canada: Comprehensive Exam Comparison", slug: "what-is-tef-tcf-exam-comparison-scores-fees" },
    ],
    sections: [
      "hero",
      "quick-facts",
      "outcomes",
      "who-its-for",
      "curriculum",
      "pronunciation-preview",
      "exam-alignment",
      "teaching-method",
      "schedule-pricing",
      "instructor",
      "sample-lesson",
      "level-path",
      "comparison",
      "testimonials",
      "faq",
      "related-courses",
      "free-level-test",
      "final-cta",
    ],
    cta: {
      primary: { text: "Book Free A1 Trial Class", href: "/book-free-trial" },
      whatsappMessage: "Hello! I want to book a free trial class for the French A1 Beginner Course at Inquisitive Mind Academy.",
    },
  },

  // 5. FRENCH A2 ELEMENTARY COURSE
  {
    isDummy: true,
    slug: "french-a2-elementary-course",
    type: "level",
    title: "French A2 Elementary Conversational Course (DELF A2)",
    shortTitle: "French A2 Elementary",
    h1: "Build Independent Conversational Fluency with DELF A2 French",
    heroSubtitle: "Master past events narration (Passé Composé vs Imparfait), give recommendations, manage travel bookings, and pass the DELF A2 exam.",
    level: "CEFR A2 (Survival / Intermédiaire Usuel)",
    durationWeeks: 10,
    hoursPerWeek: 5,
    classSize: "Small Group (6–8 Students)",
    mode: "both",
    languageOfInstruction: "English & French immersive blend",
    seo: {
      titleTemplate: "French A2 Course in Chandigarh | DELF A2 Prep | Free Trial Class",
      description: "Transition from basic survival French to confident everyday dialogues. Master past and future tenses in Chandigarh with certified DELF mentors.",
      keywords: ["french a2 course chandigarh", "delf a2 coaching", "french a2 exam preparation", "french speaking classes a2"],
      ogImageText: "French A2 Elementary Conversational • DELF A2",
    },
    // price: {
    //   from: 5499,
    //   currency: "INR",
    //   plans: [
    //     {
    //       name: "A2 Standard Cohort",
    //       price: "₹13,999",
    //       billingPeriod: "complete 10-week course",
    //       features: ["50 live training hours", "Past tenses workbook (Passé Composé & Imparfait)", "Weekly conversational debates", "2 official DELF A2 mock tests", "Certificate of completion"],
    //     },
    //     {
    //       name: "A2 Fast-Track Cohort",
    //       price: "₹18,499",
    //       billingPeriod: "5-week intensive track",
    //       features: ["Daily live classes", "1-on-1 speaking mentor check-ins", "4 full DELF A2 mock tests with feedback", "Access to recorded sessions library", "Priority exam registration support"],
    //       popular: true,
    //     },
    //   ],
    // },
    // nextBatch: {
    //   date: "Upcoming Monday",
    //   timings: ["Morning: 08:00 AM – 09:15 AM IST", "Evening: 06:30 PM – 07:45 PM IST", "Weekend: 11:00 AM – 01:30 PM IST"],
    // },
    outcomes: [
      "Narrate past events, vacations, and biographical milestones smoothly using Passé Composé and Imparfait",
      "Express future projects, plans, and conditional hypotheses using Futur Simple and Conditionnel Présent",
      "Handle social invitations: accepting, declining politely, proposing alternative times, and giving reasons",
      "Write coherent informal letters, emails to colleagues, and travel reviews expressing personal opinions",
      "Understand the main points of clear standard French announcements in airports, train stations, and radio",
      "Achieve high scores across all four components of the France Éducation International DELF A2 exam",
    ],
    whoItsFor: [
      "Learners who have completed CEFR A1 and want to transition to genuine conversational independence",
      "Candidates preparing to sit for the official DELF A2 diploma for work, study, or immigration requirements",
      "Individuals who learned basic French years ago and need to consolidate grammar before attempting B1",
      "Professionals interacting with French-speaking colleagues on basic logistical matters",
    ],
    whoItsNotFor: [
      "Complete beginners with no prior French knowledge (please start with our French A1 Beginner Course)",
      "Advanced speakers who already debate complex sociopolitical topics (see our B2 course)",
    ],
    curriculum: [
      {
        week: 1,
        title: "Week 1: A1 Consolidation & Advanced Reflexive Verbs",
        lessons: [
          "Diagnostic review of A1 present tense, agreements, and common irregular verbs",
          "Complex daily routines and reflexive reciprocal actions (se téléphoner, se rencontrer)",
          "Expressing frequency: souvent, rarement, tous les deux jours, ne... jamais",
        ],
      },
      {
        week: 2,
        title: "Week 2: The Passé Composé Masterclass",
        lessons: [
          "Auxiliary choice: verbs taking avoir vs verbs of movement and reflexives taking être (DR MRS VANDERTRAMP)",
          "Past participle formation for irregular verbs: vu, fait, pris, mis, bu, voulu, pu, su",
          "Agreement rules of past participles with être and preceding direct objects (COD)",
          "Narrating an unforgettable trip or incident entirely in the past",
        ],
      },
      {
        week: 3,
        title: "Week 3: L'Imparfait & Past Habitual Narratives",
        lessons: [
          "Forming the Imparfait: stem from 'nous' form of present indicative + endings (-ais, -ais, -ait, -ions, -iez, -aient)",
          "The irregular stem of être (ét-)",
          "Describing past habits, childhood memories, weather, and psychological states in the past",
          "Contrasting Passé Composé (action completed) vs Imparfait (ongoing background context)",
        ],
      },
      {
        week: 4,
        title: "Week 4: Travel, Hospitality & Problem Resolution",
        lessons: [
          "Booking accommodations, checking in, and making complaints at hotels or vacation rentals",
          "Airport and train station vocabulary: delays, cancellations, luggage claims",
          "Relative pronouns qui vs que to describe people, objects, and travel experiences",
        ],
      },
      {
        week: 5,
        title: "Week 5: Object Pronouns (COD, COI) & 'Y' / 'EN'",
        lessons: [
          "Direct object pronouns: me, te, le, la, nous, vous, les",
          "Indirect object pronouns: me, te, lui, nous, vous, leur",
          "Adverbial pronouns 'Y' (places) and 'EN' (quantities and 'de' phrases)",
          "Word order of single and double pronouns in affirmative, negative, and imperative sentences",
        ],
      },
      {
        week: 6,
        title: "Week 6: Comparisons, Giving Advice & The Imperative",
        lessons: [
          "Comparative structures: plus... que, moins... que, aussi... que with adjectives, nouns, and adverbs",
          "Superlative structures: le plus..., le moins...",
          "The Imperative mood for giving commands, recipes, safety rules, and directions",
          "Giving polite advice using 'tu devrais / vous devriez'",
        ],
      },
      {
        week: 7,
        title: "Week 7: The Future Tenses (Futur Proche vs Futur Simple)",
        lessons: [
          "Futur Simple formation: regular infinitive stems + -ai, -as, -a, -ons, -ez, -ont",
          "Irregular future stems: ser-, aur-, fer-, ir-, saur-, pourr-, voudr-",
          "Contrasting Futur Proche (immediate intention) vs Futur Simple (long-term projection/prediction)",
          "Writing a career forecast and describing future holiday projects",
        ],
      },
      {
        week: 8,
        title: "Week 8: Work, Health & DELF A2 Exam Simulation",
        lessons: [
          "Workplace vocabulary, professional duties, and talking about your career background",
          "Health conditions, symptoms, body parts, and visiting a doctor or pharmacy in France",
          "Complete DELF A2 mock examination across all four competencies under timed conditions",
          "Detailed rubric feedback and personal assessment for transition to CEFR B1",
        ],
      },
    ],
    examAlignment: {
      exam: "DELF A2 (France Éducation International)",
      mapping: [
        { level: "Listening (Compréhension Orale)", score: "Target: 18+/25", validity: "Official CEFR Benchmark" },
        { level: "Reading (Compréhension Écrite)", score: "Target: 20+/25", validity: "Official CEFR Benchmark" },
        { level: "Writing (Production Écrite)", score: "Target: 18+/25", validity: "Official CEFR Benchmark" },
        { level: "Speaking (Production Orale)", score: "Target: 20+/25", validity: "Official CEFR Benchmark" },
      ],
    },
    method: [
      { title: "Past Tense Contrast Drilling", description: "Targeted situational exercises to eradicate confusion between Passé Composé and Imparfait once and for all." },
      { title: "Functional Language Simulation", description: "Practicing everyday survival transactions: negotiating hotel refunds, explaining medical symptoms, giving directions." },
      { title: "Interactive Speaking Circles", description: "Pair work and roundtable discussions ensuring high conversational speaking time in every session." },
      { title: "Examiner-Scored Mock Tests", description: "Strict evaluation based on France Éducation International DELF A2 grids with actionable feedback." },
    ],
    instructor: {
        image: "/founder.webp",
      name: "Sakshi Goel & Certified Faculty",
      bio: "DELF & DALF certified lead French trainer with extensive experience preparing candidates for France Éducation International diplomas and Canadian immigration benchmarks.",
      credentials: [
        "French Teacher – 10+ Years",
  "Adult & Young Learner Teaching",
  "TEF Exam Preparation", 
  "MA in English Literature",
  ],
    },
    faqs: [
      {
        q: "How do I know if I am ready for A2 or should take A1 first?",
        a: "If you can comfortably introduce yourself, tell time, count, conjugate regular present tense verbs, and understand basic greetings, you are ready for A2. We also provide a free diagnostic level test.",
      },
      {
        q: "What is the key difference between A1 and A2 French?",
        a: "A1 is about simple survival phrases in the present tense. A2 introduces full past and future tenses, pronouns, and the ability to narrate personal stories and participate in genuine dialogue.",
      },
      {
        q: "Is DELF A2 sufficient for French nationality or citizenship?",
        a: "Currently, French naturalization requires CEFR Level B1 (both oral and written). However, DELF A2 is a critical prerequisite stepping stone to reach B1 comfortably.",
      },
      {
        q: "How long does it take to prepare for the DELF A2 exam?",
        a: "For students completing A1, our 10-week course provides all required grammar, vocabulary, listening practice, and mock exams to pass DELF A2 with high marks.",
      },
      {
        q: "Can I attend a free trial class before committing to the batch?",
        a: "Yes! Book a free 30-minute trial class to evaluate the batch level, teaching methodology, and interaction style.",
      },
    ],
    testimonials: [],
    related: ["french-a1-beginner-course", "french-b1-intermediate-course", "french-language-program"],
    nextLevel: "french-b1-intermediate-course",
    prevLevel: "french-a1-beginner-course",
    blogLinks: [
      { title: "French Classes Fees in Chandigarh: Cost Guide", slug: "french-classes-fees-in-chandigarh-cost-guide" },
      { title: "TEF vs TCF Canada: Comprehensive Exam Comparison", slug: "what-is-tef-tcf-exam-comparison-scores-fees" },
    ],
    sections: [
      "hero",
      "quick-facts",
      "outcomes",
      "who-its-for",
      "curriculum",
      "past-tenses-mastery",
      "exam-alignment",
      "teaching-method",
      "schedule-pricing",
      "instructor",
      "sample-lesson",
      "level-path",
      "comparison",
      "testimonials",
      "faq",
      "related-courses",
      "free-level-test",
      "final-cta",
    ],
    cta: {
      primary: { text: "Book Free A2 Trial Class", href: "/book-free-trial" },
      whatsappMessage: "Hello! I am interested in joining the French A2 Elementary Course. I would like to book a free trial class at Inquisitive Mind Academy.",
    },
  },

  // 6. FRENCH B1 INTERMEDIATE COURSE
  {
    isDummy: true,
    slug: "french-b1-intermediate-course",
    type: "level",
    title: "French B1 Intermediate Fluency Course (DELF B1)",
    shortTitle: "French B1 Intermediate",
    h1: "Achieve True Linguistic Independence and Debate Confidently at B1 Level",
    heroSubtitle: "Express nuanced viewpoints, master the subjunctive mood, write structured argumentative texts, and prepare for DELF B1 certification.",
    level: "CEFR B1 (Threshold / Indépendant Seuil)",
    durationWeeks: 12,
    hoursPerWeek: 6,
    classSize: "Small Group (5–7 Students)",
    mode: "both",
    languageOfInstruction: "French primary with English clarification when needed",
    seo: {
      titleTemplate: "French B1 Course in Chandigarh | Independent Fluency | Free Trial",
      description: "Attain independent French communication, express opinions, handle debates, and conquer the DELF B1 exam with live classes in Chandigarh.",
      keywords: ["french b1 course chandigarh", "delf b1 classes", "learn intermediate french", "french b1 citizenship prep"],
      ogImageText: "French B1 Intermediate Fluency • DELF B1 Certification",
    },
    // price: {
    //   from: 5999,
    //   currency: "INR",
    //   plans: [
    //     {
    //       name: "B1 Standard Cohort",
    //       price: "₹16,499",
    //       billingPeriod: "complete 12-week course",
    //       features: ["72 live interactive hours", "Subjunctive & Argumentation workbook", "Weekly debate & monologue labs", "2 official DELF B1 mock exams", "Certificate of completion"],
    //     },
    //     {
    //       name: "B1 Immersion Sprint",
    //       price: "₹21,999",
    //       billingPeriod: "6-week intensive sprint",
    //       features: ["Daily live immersion sessions", "1-on-1 essay grading & correction", "4 full DELF B1 mock examinations", "Exclusive TEF/TCF listening training", "Priority access to speaking masterclasses"],
    //       popular: true,
    //     },
    //   ],
    // },
    nextBatch: {
      date: "Starting Next Week",
      timings: ["Morning: 07:15 AM – 08:45 AM IST", "Evening: 07:00 PM – 08:30 PM IST", "Weekend: 10:00 AM – 01:00 PM IST"],
    },
    outcomes: [
      "Express subjective feelings, doubts, obligations, and desires effortlessly using the Subjunctive mood",
      "Defend a personal viewpoint, critique societal trends, and participate in lively debates without hesitation",
      "Draft structured argumentative essays, formal administrative emails, and personal editorial articles",
      "Understand the key points of authentic radio programs, television interviews, and podcast episodes",
      "Fulfill the official language prerequisite for French citizenship and European vocational training",
      "Build the solid linguistic bridge required to enter high-level B2 professional preparation and TEF Canada",
    ],
    whoItsFor: [
      "Learners who have completed A2 level and want to break out of basic conversation into genuine fluency",
      "Candidates applying for French naturalization or French citizenship requiring certified B1 proficiency",
      "Students planning university programs in France where B1 is the minimum admission threshold",
      "Professionals aiming for bilingual career opportunities or Canadian immigration Express Entry points",
    ],
    whoItsNotFor: [
      "Beginners who cannot yet speak in past (Passé Composé/Imparfait) or future tenses comfortably",
      "Learners looking only for passive vocabulary reading without active verbal debate participation",
    ],
    curriculum: [
      {
        week: 1,
        title: "Week 1: Transitioning to Independence & Narrative Mastery",
        lessons: [
          "Consolidation of past tenses: complex narration weaving Passé Composé, Imparfait, and Plus-que-parfait",
          "Expressing duration and time markers: depuis, pendant, il y a, en, dans, dès",
          "Describing personal transformations, milestones, and life turning points",
        ],
      },
      {
        week: 2,
        title: "Week 2: Le Subjonctif Présent: Necessity, Emotions & Desires",
        lessons: [
          "Subjunctive mood formation: stems from 3rd person plural 'ils' + -e, -es, -e, -ions, -iez, -ent",
          "Irregular subjunctive stems: faire (fass-), être (soi-), avoir (ai-), aller (aill-), pouvoir (puiss-)",
          "Triggers: expressions of necessity (il faut que), emotion (je suis heureux que), wish (je souhaite que)",
          "Contrasting Indicative (objective certainty) vs Subjunctive (subjective uncertainty)",
        ],
      },
      {
        week: 3,
        title: "Week 3: Expressing Opinions, Nuance & Argumentation",
        lessons: [
          "Opinion verbs with indicative vs subjunctive in negative/interrogative (je pense que vs je ne pense pas que)",
          "Structuring an argument: introducing ideas, giving evidence, countering objections, and concluding",
          "Discourse connectors: d'une part... d'autre part, en revanche, par conséquent, néanmoins",
        ],
      },
      {
        week: 4,
        title: "Week 4: The Conditional Mood & Hypothetical Realities",
        lessons: [
          "Conditionnel Présent: formation and uses for politeness, unverified information, and wishes",
          "Hypothesis structures with 'si': Si + Présent -> Futur Simple / Si + Imparfait -> Conditionnel Présent",
          "Roleplay: proposing innovative solutions to environmental and civic issues",
        ],
      },
      {
        week: 5,
        title: "Week 5: Advanced Pronouns & Syntactic Fluidity",
        lessons: [
          "Relative pronouns qui, que, où, dont and compound relative pronouns (lequel, auquel, duquel)",
          "Demonstrative and possessive pronouns: celui-ci, celle-là, le mien, le vôtre",
          "Avoiding repetition through sophisticated pronominal substitution in long texts",
        ],
      },
      {
        week: 6,
        title: "Week 6: Formal Writing: Essays, Letters & The DELF B1 Production Écrite",
        lessons: [
          "Official DELF B1 writing format: formal letter of complaint, essay on societal trends, or forum post",
          "Etiquette formulas: introductory and concluding salutations in French administrative correspondence",
          "Grading criteria breakdown: respect of word count (160–180 words), cohesion, grammar range, and lexicon",
        ],
      },
      {
        week: 7,
        title: "Week 7: Oral Expression: The 3-Part DELF B1 Speaking Exam",
        lessons: [
          "Part 1: Guided conversation (Entretien dirigé) - presenting yourself with poise and answering personal questions",
          "Part 2: Interactive roleplay (Exercice en interaction) - resolving an everyday conflict or negotiation",
          "Part 3: Expressing an opinion on a trigger document (Expression d'un point de vue) - monologue and debate",
        ],
      },
      {
        week: 8,
        title: "Week 8: Full Mock Examinations & Evaluation",
        lessons: [
          "Complete timed DELF B1 simulated exam covering all four skills under official exam hall conditions",
          "Individualized diagnostic score report identifying exact areas for refinement prior to official test date",
          "Personalized roadmap for progressing to CEFR Level B2 and TEF/TCF Canada prep",
        ],
      },
    ],
    examAlignment: {
      exam: "DELF B1 (France Éducation International)",
      mapping: [
        { level: "Listening (Compréhension Orale)", score: "Target: 18+/25", validity: "Official CEFR Benchmark" },
        { level: "Reading (Compréhension Écrite)", score: "Target: 20+/25", validity: "Official CEFR Benchmark" },
        { level: "Writing (Production Écrite)", score: "Target: 19+/25", validity: "Official CEFR Benchmark" },
        { level: "Speaking (Production Orale)", score: "Target: 20+/25", validity: "Official CEFR Benchmark" },
      ],
    },
    method: [
      { title: "Argumentative Debate Frameworks", description: "Structured weekly debates on real-world Francophone social topics to develop spontaneous reasoning." },
      { title: "Subjunctive Instinct Drills", description: "Targeted audio-oral drills that make the Subjunctive mood feel natural rather than grammatically stressful." },
      { title: "Individual Essay Annotations", description: "Line-by-line written feedback highlighting vocabulary variety, sentence complexity, and syntax rhythm." },
      { title: "Official DELF B1 Examiner Rubrics", description: "Every mock speaking test is evaluated precisely against France Éducation International standards." },
    ],
   instructor: {
        image: "/founder.webp",
      name: "Sakshi Goel & Certified Faculty",
      bio: "DELF & DALF certified lead French trainer with extensive experience preparing candidates for France Éducation International diplomas and Canadian immigration benchmarks.",
      credentials: [
        "French Teacher – 10+ Years",
  "Adult & Young Learner Teaching",
  "TEF Exam Preparation", 
  
  "MA in English Literature",
  ],
    },
    faqs: [
      {
        q: "Is DELF B1 valid for French citizenship and naturalization?",
        a: "Yes. DELF B1 is the official baseline diploma accepted by the French government for naturalization and citizenship applications.",
      },
      {
        q: "How difficult is the transition from A2 to B1?",
        a: "B1 represents the jump from 'survival' French to 'independent' French. While it requires mastering the Subjunctive and complex sentence connectors, our structured 12-week curriculum makes the progression intuitive.",
      },
      {
        q: "What is the format of the DELF B1 examination?",
        a: "The exam consists of four parts: Listening (25 mins), Reading (35 mins), Writing (45 mins, 160–180 words), and Speaking (15 mins including a monologue and defense).",
      },
      {
        q: "Will this course help me prepare for TEF Canada?",
        a: "Yes. Reaching solid B1 proficiency is the essential foundation for TEF/TCF Canada. Once you complete B1, you can tackle B2 and our specialized TEF Canada strategies.",
      },
      {
        q: "Can I attend a free trial class to check if B1 is the right level for me?",
        a: "Yes, book a free level test and trial class so our instructor can evaluate your current speaking and grammar level.",
      },
    ],
    testimonials: [],
    related: ["french-a2-elementary-course", "french-b2-advanced-course", "tef-canada-preparation-bundle"],
    nextLevel: "french-b2-advanced-course",
    prevLevel: "french-a2-elementary-course",
    blogLinks: [
      { title: "French Classes Fees in Chandigarh: Cost Guide", slug: "french-classes-fees-in-chandigarh-cost-guide" },
      { title: "TEF vs TCF Canada: Comprehensive Exam Comparison", slug: "what-is-tef-tcf-exam-comparison-scores-fees" },
    ],
    sections: [
      "hero",
      "quick-facts",
      "outcomes",
      "who-its-for",
      "curriculum",
      "argumentation-debates",
      "exam-alignment",
      "teaching-method",
      "schedule-pricing",
      "instructor",
      "sample-lesson",
      "level-path",
      "comparison",
      "testimonials",
      "faq",
      "related-courses",
      "free-level-test",
      "final-cta",
    ],
    cta: {
      primary: { text: "Book Free B1 Trial Class", href: "/book-free-trial" },
      whatsappMessage: "Hello! I want to book a free trial class for the French B1 Intermediate Fluency Course at Inquisitive Mind Academy.",
    },
  },

  // 7. FRENCH B2 ADVANCED COURSE
  {
    isDummy: true,
    slug: "french-b2-advanced-course",
    type: "level",
    title: "French B2 Advanced Professional Course (DELF B2 / CLB 7+)",
    shortTitle: "French B2 Advanced",
    h1: "Command High-Level French for Canada Immigration (CLB 7+) & DELF B2",
    heroSubtitle: "Synthesize abstract documents, defend complex positions spontaneously, and target maximum French CRS bonus points for Express Entry.",
    level: "CEFR B2 (Vantage / Avancé Indépendant)",
    durationWeeks: 14,
    hoursPerWeek: 6,
    classSize: "Small Group (5–7 Students)",
    mode: "both",
    languageOfInstruction: "French immersion with selective English analysis",
    seo: {
      titleTemplate: "French B2 Course in Chandigarh | CLB 7 Canada PR & DELF B2 | Free Trial",
      description: "Master complex arguments, academic synthesis, and qualify for 50+ Canada Express Entry CRS points (CLB 7+) with expert coaching in Chandigarh.",
      keywords: ["french b2 course chandigarh", "delf b2 coaching", "clb 7 french express entry", "tef canada b2 prep chandigarh"],
      ogImageText: "French B2 Advanced • DELF B2 & CLB 7+ Canada PR",
    },
    // price: {
    //   from: 6999,
    //   currency: "INR",
    //   plans: [
    //     {
    //       name: "B2 Advanced Regular",
    //       price: "₹19,999",
    //       billingPeriod: "complete 14-week course",
    //       features: ["84 live intensive hours", "CLB 7+ synthesis writing guide", "Weekly debate & argumentation lab", "3 official DELF B2 mock exams", "Certificate of completion"],
    //     },
    //     {
    //       name: "B2 Express Entry Fast-Track",
    //       price: "₹26,999",
    //       billingPeriod: "7-week high-intensity sprint",
    //       features: ["Daily live immersion masterclasses", "Unlimited 1-on-1 essay grading", "6 full DELF B2 / TEF mock tests", "Specialized Section A & B speaking labs", "Dedicated PR point strategy consultation"],
    //       popular: true,
    //     },
    //   ],
    // },
    // nextBatch: {
    //   date: "Starting Upcoming Monday",
    //   timings: ["Morning: 07:00 AM – 08:30 AM IST", "Evening: 07:30 PM – 09:00 PM IST", "Weekend: 10:00 AM – 01:30 PM IST"],
    // },
    outcomes: [
      "Attain official Canadian Language Benchmark (CLB / NCLC) Level 7+ across all 4 abilities to claim up to 62 CRS bonus points",
      "Produce sophisticated argumentative essays synthesizing conflicting perspectives into a coherent thesis",
      "Defend complex philosophical, economic, and sociopolitical arguments orally without pauses or code-switching",
      "Comprehend rapid native French broadcasts (France Info, Radio-Canada) and extract subtle inferences",
      "Qualify for direct entry into French universities and master's programs without attending foundation language years",
      "Pass the official DELF B2 examination with scores exceeding the competitive 75+ percentile threshold",
    ],
    whoItsFor: [
      "Immigration candidates targeting the Express Entry French language category-based draws for Canada PR",
      "Learners holding B1 certification ready to reach professional-grade working fluency",
      "Students preparing for admissions into elite French grandes écoles or Canadian universities",
      "Working professionals targeting bilingual corporate postings in Canada, Europe, or multinational NGOs",
    ],
    whoItsNotFor: [
      "Learners who have not yet reached solid B1 level in grammar and listening comprehension",
      "Students looking for superficial conversational phrases without in-depth writing and debate training",
    ],
    curriculum: [
      {
        week: 1,
        title: "Week 1: B2 Linguistic Benchmarking & Complex Syntactic Structures",
        lessons: [
          "Diagnostic assessment of B1 structures: eliminating persistent fossilized agreement mistakes",
          "Complex hypothetical structures: Si + Plus-que-parfait -> Conditionnel Passé (regrets and counterfactuals)",
          "Nominalization techniques to transform verbal clauses into concise, authoritative prose",
        ],
      },
      {
        week: 2,
        title: "Week 2: The Subjunctive in Nuanced Discourse",
        lessons: [
          "Advanced subjunctive triggers: concession (bien que, quoique), condition (à condition que), time (avant que + ne)",
          "The Subjunctive Past (Subjonctif Passé) for expressing completed doubt or evaluation",
          "Distinguishing nuanced connectors: malgré, bien que, en dépit de, quand bien même",
        ],
      },
      {
        week: 3,
        title: "Week 3: Essay Synthesis & The DELF B2 Argumentative Letter",
        lessons: [
          "Mastering the formal argumentative letter (Lettre de réclamation / proposition au maire ou directeur)",
          "The classic French rhetoric framework: Introduction (Hook, Problematic, Plan), Development, and Conclusion",
          "Adopting a courteous yet firm persuasive tone using sophisticated modal auxiliaries",
        ],
      },
      {
        week: 4,
        title: "Week 4: Advanced Listening Comprehension (Authentic Media)",
        lessons: [
          "Decoding rapid-fire podcasts, documentary excerpts, and sociological interviews",
          "Techniques for the long audio recording in DELF B2 (two listenings with detailed question grid)",
          "Identifying speaker stances, implicit sarcasm, rhetorical questions, and ideological bias",
        ],
      },
      {
        week: 5,
        title: "Week 5: Reading Comprehension: Informative & Argumentative Texts",
        lessons: [
          "Reading speeds hacks for editorial columns (Le Monde, Le Figaro, L'Express)",
          "Textual synthesis: extracting central arguments and supporting data under tight time pressure",
          "Multiple choice and justified true/false question strategies for DELF B2",
        ],
      },
      {
        week: 6,
        title: "Week 6: Oral Presentation & Defense (The DELF B2 Monologue)",
        lessons: [
          "Analyzing the trigger article in 30 minutes: extracting the theme, creating a problem statement and two-part plan",
          "Delivering a structured 10-minute monologue introducing the societal debate with compelling transitions",
          "The Examiner Defense: responding spontaneously to counter-arguments and intellectual pushback",
        ],
      },
      {
        week: 7,
        title: "Week 7: Canada Express Entry CLB 7 Focus & Timed Mocks",
        lessons: [
          "TEF Canada and TCF Canada exam alignment: speed-reading and rapid audio recognition",
          "Full simulated DELF B2 / TEF mock examination under official exam conditions",
          "Detailed individual score breakdown with examiner feedback on how to maximize points",
        ],
      },
    ],
    examAlignment: {
      exam: "DELF B2 & TEF/TCF Canada (NCLC 7+)",
      mapping: [
        { level: "Listening (Compréhension Orale)", score: "Prepares for DELF B2 & NCLC 7+", validity: "CRS 50+ Bonus Points" },
        { level: "Reading (Compréhension Écrite)", score: "Prepares for DELF B2 & NCLC 7+", validity: "CRS 50+ Bonus Points" },
        { level: "Writing (Production Écrite)", score: "Prepares for DELF B2 & NCLC 7+", validity: "CRS 50+ Bonus Points" },
        { level: "Speaking (Production Orale)", score: "Prepares for DELF B2 & NCLC 7+", validity: "CRS 50+ Bonus Points" },
      ],
    },
    method: [
      { title: "Rhetorical Essay Synthesis", description: "Learn the exact formal methodology required by French examiners to construct nuanced, balanced arguments." },
      { title: "Examiner Cross-Examination Labs", description: "Rigorous 1-on-1 oral simulations where tutors challenge your opinions to build rapid linguistic reflexes." },
      { title: "Authentic Editorial Analysis", description: "Daily assignments based on authentic Francophone journalism, public policy briefs, and podcasts." },
      { title: "NCLC 7 Express Entry Tracking", description: "Continuous scoring calibration against Canadian Express Entry NCLC benchmark rubrics." },
    ],
   instructor: {
        image: "/founder.webp",
      name: "Sakshi Goel & Certified Faculty",
      bio: "DELF & DALF certified lead French trainer with extensive experience preparing candidates for France Éducation International diplomas and Canadian immigration benchmarks.",
      credentials: [
        "French Teacher – 10+ Years",
  "Adult & Young Learner Teaching",
  "TEF Exam Preparation", 
  
  "MA in English Literature",
  ],
    },
    faqs: [
      {
        q: "What is CLB 7 and why is it so important for Canada immigration?",
        a: "CLB 7 (NCLC 7 in French) is the golden threshold under Canada Express Entry. Reaching B2 across all four sections unlocks up to 50 additional CRS points for French skills, plus 12 points for bilingualism, radically boosting PR selection chances.",
      },
      {
        q: "How does the DELF B2 exam differ from DELF B1?",
        a: "DELF B2 demands argumentative synthesis, formal rhetorical structure, understanding authentic fast-paced news media, and defending your point of view against an examiner's critical counter-arguments.",
      },
      {
        q: "How many hours of study are required to pass DELF B2?",
        a: "Typically, reaching solid B2 from B1 requires approximately 150 to 200 cumulative guided and self-study hours. Our 14-week program provides the complete structured framework.",
      },
      {
        q: "Does this course cover both DELF B2 and TEF Canada?",
        a: "Yes. While based on the rigorous CEFR B2 framework, we include specific module sessions mapping your skills directly to the TEF/TCF Canada exam formats and scoring tables.",
      },
      {
        q: "Can I attend a free trial class before enrolling?",
        a: "Yes! Book a free 30-minute level test and trial session to evaluate your current intermediate French and discuss your target timeline.",
      },
    ],
    testimonials: [],
    related: ["french-b1-intermediate-course", "french-c1-proficiency-course", "tef-canada-preparation-bundle"],
    nextLevel: "french-c1-proficiency-course",
    prevLevel: "french-b1-intermediate-course",
    blogLinks: [
      { title: "French Classes Fees in Chandigarh: Cost Guide", slug: "french-classes-fees-in-chandigarh-cost-guide" },
      { title: "TEF vs TCF Canada: Comprehensive Exam Comparison", slug: "what-is-tef-tcf-exam-comparison-scores-fees" },
    ],
    sections: [
      "hero",
      "quick-facts",
      "outcomes",
      "who-its-for",
      "curriculum",
      "clb7-express-entry-mapping",
      "exam-alignment",
      "teaching-method",
      "schedule-pricing",
      "instructor",
      "sample-lesson",
      "level-path",
      "comparison",
      "testimonials",
      "faq",
      "related-courses",
      "free-level-test",
      "final-cta",
    ],
    cta: {
      primary: { text: "Book Free B2 Trial Class", href: "/book-free-trial" },
      whatsappMessage: "Hello! I want to book a free trial class for the French B2 Advanced Course at Inquisitive Mind Academy.",
    },
  },

  // 8. FRENCH C1 PROFICIENCY COURSE
  {
    isDummy: true,
    slug: "french-c1-proficiency-course",
    type: "level",
    title: "French C1 Superior Operational Proficiency Course (DALF C1)",
    shortTitle: "French C1 Proficiency",
    h1: "Master Fluent Academic & Executive Communication with DALF C1 French",
    heroSubtitle: "Produce clear, well-structured, detailed discourse on complex subjects and understand demanding, longer texts with implicit meaning.",
    level: "CEFR C1 (Effective Operational Proficiency / Autonome)",
    durationWeeks: 16,
    hoursPerWeek: 6,
    classSize: "Micro Seminar (4–6 Students)",
    mode: "both",
    languageOfInstruction: "100% French immersion",
    seo: {
      titleTemplate: "French C1 Course in Chandigarh | DALF C1 Coaching | Free Consultation",
      description: "Attain autonomous French proficiency for French university admissions, corporate leadership, and diplomatic careers with DALF C1 training.",
      keywords: ["french c1 course chandigarh", "dalf c1 coaching", "advanced french classes", "fluent french proficiency"],
      ogImageText: "French C1 Operational Proficiency • DALF C1 Certification",
    },
    // price: {
    //   from: 7999,
    //   currency: "INR",
    //   plans: [
    //     {
    //       name: "C1 Academic Seminar",
    //       price: "₹24,999",
    //       billingPeriod: "complete 16-week program",
    //       features: ["96 live seminar hours", "Synthese de documents master methodology", "Weekly rhetorical debate salon", "3 official DALF C1 mock examinations", "Certificate of completion"],
    //     },
    //   ],
    // },
    // nextBatch: {
    //   date: "Cohorts Start Monthly",
    //   timings: ["Morning: 07:00 AM – 08:30 AM IST", "Weekend: 10:00 AM – 01:30 PM IST"],
    // },
    outcomes: [
      "Synthesize multiple complex documentary texts into a concise, neutral, non-plagiarized academic brief ('Synthèse de documents')",
      "Speak fluently and spontaneously without searching for words or idiomatic expressions on sophisticated topics",
      "Understand long, demanding literary texts, philosophical critiques, legal briefs, and technical treatises",
      "Deliver a 15-minute academic presentation followed by a rigorous 15-minute defense before a simulated DALF jury",
      "Qualify for direct admission to elite European doctoral programs and multinational diplomatic postings",
      "Pass the prestigious DALF C1 diploma granted by the French Ministry of National Education",
    ],
    whoItsFor: [
      "B2-certified linguists aiming for total linguistic autonomy and career advancement",
      "University professors, translators, and researchers working in Francophone academia",
      "Diplomats, international civil servants, and corporate directors operating in Francophone regions",
    ],
    whoItsNotFor: [
      "Learners who have not yet obtained DELF B2 or equivalent verified intermediate fluency",
      "Students looking for basic grammar rules or tourist communication practice",
    ],
    curriculum: [
      {
        week: 1,
        title: "Phase 1: Methodology of the 'Synthèse de Documents'",
        lessons: [
          "Analyzing multiple source documents: extracting thematic axes, commonalities, and opposing views",
          "The strict neutral synthesis protocol: eliminating personal opinions and external knowledge",
          "Rephrasing, nominalization, and avoiding direct quote penalties under official DALF rubrics",
        ],
      },
      {
        week: 2,
        title: "Phase 2: The Argumentative Essay ('Essai Argumenté')",
        lessons: [
          "Crafting compelling problematics on contemporary societal and technological dilemmas",
          "Dialectical vs analytical plan structures: Thesis, Antithesis, Synthesis vs Causes, Consequences, Solutions",
          "Stylistic elegance: rhetorical balance, sophisticated cadence, and rich lexical register",
        ],
      },
      {
        week: 3,
        title: "Phase 3: High-Register Listening & Oral Defense",
        lessons: [
          "Decoding rapid, unscripted debates, scientific radio lectures, and parliamentary exchanges",
          "Preparing an oral exposé in 60 minutes: building a bulletproof rhetorical argument",
          "The DALF C1 oral defense: responding with authority, grace, and linguistic precision under jury scrutiny",
        ],
      },
      {
        week: 4,
        title: "Phase 4: Full DALF C1 Simulations",
        lessons: [
          "Simulated examination under exact official time limits (Humanities/Social Sciences or Science option)",
          "Line-by-line examiner feedback on synthesis neutrality and oral poise",
        ],
      },
    ],
    examAlignment: {
      exam: "DALF C1 (France Éducation International)",
      mapping: [
        { level: "Compréhension & Production Écrites", score: "Target: 38+/50", validity: "Lifetime Diplôme Approfondi" },
        { level: "Compréhension & Production Orales", score: "Target: 40+/50", validity: "Lifetime Diplôme Approfondi" },
      ],
    },
    method: [
      { title: "Rigorous Synthesis Protocol", description: "Master the exact methodology for summarizing multiple dense texts without plagiarism or bias." },
      { title: "High-Level Rhetorical Salons", description: "Weekly intellectual salons discussing ethics, artificial intelligence, geopolitics, and literature." },
      { title: "Simulated DALF C1 Jury Panels", description: "Experience strict viva voce defenses with accredited DALF evaluators." },
    ],
    instructor: {
        image: "/founder.webp",
      name: "Sakshi Goel & Certified Faculty",
      bio: "DELF & DALF certified lead French trainer with extensive experience preparing candidates for France Éducation International diplomas and Canadian immigration benchmarks.",
      credentials: [
        "French Teacher – 10+ Years",
  "Adult & Young Learner Teaching",
  "TEF Exam Preparation", 
  
  "MA in English Literature",
  ],
    },
    faqs: [
      {
        q: "What is the difference between DELF B2 and DALF C1?",
        a: "While B2 confirms independent communication, DALF C1 certifies autonomous mastery. At C1, you must perform academic syntheses of multiple texts and defend sophisticated positions without any language support.",
      },
      {
        q: "Is DALF C1 required for university admission in France?",
        a: "While B2 is often the minimum, prestigious French universities, Sciences Po, and competitive master's programs strongly prefer or require DALF C1.",
      },
      {
        q: "What are the two disciplinary fields available in DALF C1?",
        a: "Candidates choose between 'Humanities and Social Sciences' (Lettres et sciences humaines) or 'Science and Technology' (Sciences) for their examination texts.",
      },
      {
        q: "Can I take a diagnostic evaluation before enrolling?",
        a: "Yes. We require a brief written synthesis and oral interview to confirm B2 mastery before admission to our C1 cohort.",
      },
      {
        q: "How often are DALF C1 exams conducted in India?",
        a: "Official sessions are typically organized quarterly across Alliance Française testing centers throughout India.",
      },
    ],
    testimonials: [],
    related: ["french-b2-advanced-course", "french-c2-mastery-course", "tef-canada-preparation-bundle"],
    nextLevel: "french-c2-mastery-course",
    prevLevel: "french-b2-advanced-course",
    blogLinks: [
      { title: "French Classes Fees in Chandigarh: Cost Guide", slug: "french-classes-fees-in-chandigarh-cost-guide" },
      { title: "TEF vs TCF Canada: Comprehensive Exam Comparison", slug: "what-is-tef-tcf-exam-comparison-scores-fees" },
    ],
    sections: [
      "hero",
      "quick-facts",
      "outcomes",
      "who-its-for",
      "curriculum",
      "academic-synthesis-lab",
      "exam-alignment",
      "teaching-method",
      "schedule-pricing",
      "instructor",
      "sample-lesson",
      "level-path",
      "comparison",
      "testimonials",
      "faq",
      "related-courses",
      "free-level-test",
      "final-cta",
    ],
    cta: {
      primary: { text: "Book Free C1 Consultation", href: "/book-free-trial" },
      whatsappMessage: "Hello! I am inquiring about the French C1 Proficiency Course. I would like to schedule an evaluation at Inquisitive Mind Academy.",
    },
  },

  // 9. FRENCH C2 MASTERY COURSE
  {
    isDummy: true,
    slug: "french-c2-mastery-course",
    type: "level",
    title: "French C2 Near-Native Linguistic Mastery Course (DALF C2)",
    shortTitle: "French C2 Mastery",
    h1: "Reach the Pinnacle of French Language Mastery (DALF C2 Bilingualism)",
    heroSubtitle: "Convey fine shades of meaning with total precision, critique classical and contemporary literature, and debate with near-native authority.",
    level: "CEFR C2 (Mastery / Maîtrise Supérieure)",
    durationWeeks: 16,
    hoursPerWeek: 6,
    classSize: "Executive Mentorship (1-on-1 or Micro 2–4)",
    mode: "both",
    languageOfInstruction: "100% French immersion",
    seo: {
      titleTemplate: "French C2 Course in Chandigarh | DALF C2 Near-Native | Free Evaluation",
      description: "Reach the pinnacle of French language mastery. Nuanced stylistics, literature synthesis, and effortless spontaneous expression in Chandigarh.",
      keywords: ["french c2 course chandigarh", "delf c2 coaching", "bilingual french mastery", "highest french certification"],
      ogImageText: "French C2 Near-Native Mastery • DALF C2 Certification",
    },
    // price: {
    //   from: 9999,
    //   currency: "INR",
    //   plans: [
    //     {
    //       name: "C2 Masterclass Mentorship",
    //       price: "₹34,999",
    //       billingPeriod: "complete 16-week program",
    //       features: ["Intensive 1-on-1 and micro-seminar format", "Advanced literary & rhetorical analysis", "Full DALF C2 dossier synthesis coaching", "Lifetime international diploma preparation"],
    //     },
    //   ],
    // },
    // nextBatch: {
    //   date: "By Application & Consultation",
    //   timings: ["Flexible executive schedule tailored to candidates"],
    // },
    outcomes: [
      "Understand effortlessly virtually everything heard or read, reconstructing arguments and accounts from different sources",
      "Express yourself spontaneously, very fluently and precisely, differentiating finer shades of meaning in complex scenarios",
      "Compose compelling, publication-ready literary reviews, policy papers, and rhetorical speeches",
      "Master high-register Francophone cultural idioms, historical references, and philosophical vocabulary",
      "Achieve the highest official French language diploma in existence: DALF C2",
    ],
    whoItsFor: [
      "Translators, interpreters, and literary scholars targeting the absolute highest tier of credentialing",
      "Corporate executives, diplomats, and international delegates leading cross-border operations",
      "Lifelong Francophiles dedicated to achieving near-native bilingualism",
    ],
    whoItsNotFor: [
      "Anyone who has not yet mastered CEFR C1 or B2 level",
    ],
    curriculum: [
      {
        week: 1,
        title: "Module 1: High Rhetoric, Stylistic Subtlety & Literary Register",
        lessons: [
          "Registers of speech: archaic, classical literary, contemporary academic, and familiar argot nuances",
          "Advanced rhetorical figures: chiasmus, litotes, synecdoche, metonymy, and anaphora in modern argumentation",
          "Syntactic elasticity: inversion, parenthetical clauses, and rhythmic cadence in high-level prose",
          "Critical dissection of contemporary Francophone philosophical essays, editorial critiques, and legal judgments",
        ],
      },
      {
        week: 2,
        title: "Module 2: The DALF C2 Dossier Synthesis (Production Écrite)",
        lessons: [
          "Synthesizing an extensive 2,000-word multidisciplinary documentary dossier under strict 3.5-hour timing",
          "Developing an original academic problematic and constructing a comprehensive thesis with counter-perspectives",
          "Mastering seamless transition formulas and elevated lexical precision without lexical repetition",
          "Editorial proofreading: eliminating orthographic anomalies and polishing stylistic elegance",
        ],
      },
      {
        week: 3,
        title: "Module 3: The 30-Minute Oral Exposé and Jury Defense (Production Orale)",
        lessons: [
          "Processing 15 minutes of uninterrupted authentic audio recordings from academic radio symposiums",
          "Synthesizing spoken arguments during 1 hour of preparation with structured visual mind-mapping",
          "Delivering an authoritative 30-minute oral monologue followed by a rigorous debate with the jury",
          "Managing spontaneous interruptions and defending complex ideological stances with rhetorical poise",
        ],
      },
      {
        week: 4,
        title: "Module 4: Full Examination Simulation & Doctoral Level Review",
        lessons: [
          "Complete timed simulation of both DALF C2 components (Humanities or Science option)",
          "Line-by-line stylistic critique and personalized defense coaching with former university lecturers",
        ],
      },
    ],
    examAlignment: {
      exam: "DALF C2 (France Éducation International)",
      mapping: [
        { level: "Written Comprehension & Production", score: "Prepares for DALF C2 Dossier", validity: "Highest Lifetime Global Diploma" },
        { level: "Oral Comprehension & Production", score: "Prepares for DALF C2 Jury Defense", validity: "Highest Lifetime Global Diploma" },
      ],
    },
    method: [
      { title: "Bespoke Linguistic Mentorship", description: "Individualized analysis of cadence, rhetoric, and nuanced vocabulary by senior Francophone scholars." },
      { title: "Critical Literary Seminars", description: "Dissecting classical and contemporary French literature, political theory, and philosophical texts." },
    ],
    instructor: {
        image: "/founder.webp",
      name: "Sakshi Goel & Certified Faculty",
      bio: "DELF & DALF certified lead French trainer with extensive experience preparing candidates for France Éducation International diplomas and Canadian immigration benchmarks.",
      credentials: [
        "French Teacher – 10+ Years",
  "Adult & Young Learner Teaching",
  "TEF Exam Preparation", 
  "MA in English Literature",
  ],
    },
    faqs: [
      {
        q: "What does CEFR Level C2 represent in practice?",
        a: "C2 represents native or near-native bilingual proficiency. You understand everything heard or read effortlessly and can summarize information into coherent presentations with fine shades of nuance.",
      },
      {
        q: "What is the examination structure of DALF C2?",
        a: "Unlike lower levels, DALF C2 combines skills into two 50-point components: 1) Written Comprehension & Production (3.5 hours synthesis based on a dossier) and 2) Oral Comprehension & Production (exposé and defense based on audio recordings).",
      },
      {
        q: "Does DALF C2 ever expire?",
        a: "No. The DALF C2 diploma carries permanent, lifetime validity worldwide.",
      },
      {
        q: "How do I apply for the C2 course?",
        a: "Admission is by evaluation only. We review your previous C1 diploma or conduct a comprehensive assessment before confirmation.",
      },
      {
        q: "Can I arrange customized batch timings?",
        a: "Yes, our C2 cohorts are organized in flexible micro-seminars to accommodate professional executive calendars.",
      },
    ],
    testimonials: [],
    related: ["french-c1-proficiency-course", "french-b2-advanced-course", "tef-canada-preparation-bundle"],
    nextLevel: null,
    prevLevel: "french-c1-proficiency-course",
    blogLinks: [
      { title: "French Classes Fees in Chandigarh: Cost Guide", slug: "french-classes-fees-in-chandigarh-cost-guide" },
      { title: "TEF vs TCF Canada: Comprehensive Exam Comparison", slug: "what-is-tef-tcf-exam-comparison-scores-fees" },
    ],
    sections: [
      "hero",
      "quick-facts",
      "outcomes",
      "who-its-for",
      "curriculum",
      "literary-stylistics-seminar",
      "exam-alignment",
      "teaching-method",
      "schedule-pricing",
      "instructor",
      "sample-lesson",
      "level-path",
      "comparison",
      "testimonials",
      "faq",
      "related-courses",
      "free-level-test",
      "final-cta",
    ],
    cta: {
      primary: { text: "Book Free C2 Evaluation", href: "/book-free-trial" },
      whatsappMessage: "Hello! I am seeking evaluation for the French C2 Mastery Course at Inquisitive Mind Academy.",
    },
  },

  // 10. TEF CANADA PREPARATION BUNDLE (Exam Prep)
  {
    isDummy: true,
    slug: "tef-canada-preparation-bundle",
    type: "exam",
    title: "TEF Canada & TCF Exam Preparation Intensive Bundle",
    shortTitle: "TEF Canada Exam Prep",
    h1: "Unlock Up to 62 Additional Express Entry CRS Points with TEF Canada Prep",
    heroSubtitle: "Targeted computer-based exam coaching focusing on speed reading techniques, audio comprehension tricks, and high-scoring speaking formulas.",
    level: "Targeting NCLC 7 / CLB 7+ across all 4 abilities",
    durationWeeks: 10,
    hoursPerWeek: 6,
    classSize: "Small Cohort (5–8 Students)",
    mode: "both",
    languageOfInstruction: "English and French bilingual strategy",
    seo: {
      titleTemplate: "TEF Canada Coaching in Chandigarh | Target CLB 7+ CRS Points | Free Mock",
      description: "Target CLB 7 / NCLC 7 in all 4 sections for Canada Express Entry. Timed mock tests, Section A/B speaking strategies, and free assessment.",
      keywords: ["tef canada coaching chandigarh", "tef exam preparation", "clb 7 french canada pr", "tcf canada classes"],
      ogImageText: "TEF Canada Exam Preparation • Target NCLC 7+ for Express Entry",
    },
    // price: {
    //   from: 6499,
    //   currency: "INR",
    //   plans: [
    //     {
    //       name: "TEF Strategy Crash Course",
    //       price: "₹18,999",
    //       billingPeriod: "6-week intensive sprint",
    //       features: ["Exam-specific question algorithms", "Section A & B speaking templates", "Reading & listening speed hacks", "4 full computer-simulated mock tests", "Score prediction analysis"],
    //     },
    //     {
    //       name: "TEF NCLC 7 Guaranteed Masterclass",
    //       price: "₹28,999",
    //       billingPeriod: "10-week comprehensive bundle",
    //       features: ["Full B1/B2 grammar revision", "Daily live oral debate simulations", "Unlimited essay marking with examiner remarks", "10 full computer-based mock tests", "Free retake prep policy if target missed"],
    //       popular: true,
    //     },
    //   ],
    // },
    // nextBatch: {
    //   date: "New Sprints Start Every Fortnight",
    //   timings: ["Morning: 07:00 AM – 08:30 AM IST", "Evening: 07:30 PM – 09:00 PM IST", "Weekend Bootcamp: 09:30 AM – 01:00 PM IST"],
    // },
    outcomes: [
      "Hit the required NCLC 7 threshold (Listening 249+, Reading 207+, Writing 310+, Speaking 310+) on the Paris Chamber of Commerce score scale",
      "Master the Section A informal advertisement call (asking 10 relevant questions in 5 minutes) with ready templates",
      "Conquer the Section B formal persuasion task (convincing a reluctant friend to adopt a new service or habit in 10 minutes)",
      "Eliminate time pressure during the 60-question computer-based reading test through speed-scanning techniques",
      "Avoid negative marking traps and identify distractor audio options in rapid Canadian & Parisian recordings",
      "Secure up to 62 additional Comprehensive Ranking System (CRS) bonus points under Canadian Express Entry",
    ],
    whoItsFor: [
      "Express Entry candidates seeking an immediate 50–62 point CRS boost via the French Language category",
      "Quebec immigration applicants needing verified B2 oral credentials under the Arrima system",
      "Learners with basic or intermediate French who need test-specific speed techniques and scoring shortcuts",
      "Candidates who previously missed CLB 7 by just a few points in one specific skill section",
    ],
    whoItsNotFor: [
      "Complete beginners with zero French knowledge (please start with our French A1 Course before exam prep)",
    ],
    curriculum: [
      {
        week: 1,
        title: "Week 1: TEF Canada Architecture & Scoring Algorithms",
        lessons: [
          "Understanding the scoring breakdown: Raw points vs NCLC equivalencies vs scaled scores",
          "Computer-based testing quirks: keyboard shortcuts, audio playback rules, countdown timers",
          "Diagnostic benchmark mock test to assess current baseline NCLC band in all 4 modules",
        ],
      },
      {
        week: 2,
        title: "Week 2: Reading Speed Techniques (Compréhension Écrite)",
        lessons: [
          "Section A: Classified ads, brochures, and administrative instructions - rapid keyword targeting",
          "Section B: Editorial articles and cultural commentaries - inferring author intent under 60-second limits",
          "Section C: Identifying logic sequence gaps and sentence insertion traps",
          "Section D: Paraphrase selection and vocabulary substitution puzzles",
        ],
      },
      {
        week: 3,
        title: "Week 3: Listening Reflexes & Accent Adaptation (Compréhension Orale)",
        lessons: [
          "Handling varying voice registers, background airport/street noise, and rapid Quebecois pronunciation",
          "Section A: Short voice messages and answer machine prompts - note-taking techniques",
          "Section B: Public announcements and radio vox-pop surveys - distinguishing multiple speakers",
          "Section C & D: Long interviews, specialized reports, and opinion polls - avoiding acoustic distractors",
        ],
      },
      {
        week: 4,
        title: "Week 4: Speaking Section A Mastery: The Information Inquiry",
        lessons: [
          "The 5-minute formal call: greeting, purpose of call, asking 10 structured open and closed questions",
          "Ready-to-use grammatical question frameworks: inversion, 'est-ce que', conditional politeness",
          "Simulated live calls with mentor acting as real estate agent, course director, or tour operator",
        ],
      },
      {
        week: 5,
        title: "Week 5: Speaking Section B Mastery: The Persuasive Dialogue",
        lessons: [
          "The 10-minute friend persuasion task: presenting the document, overcoming objections, negotiating concessions",
          "The 3-phase persuasion formula: 1) Catchy presentation, 2) Tailored personal benefits, 3) Reassurance on hesitations",
          "Dealing with tough examiner pushbacks: 'I don't have time', 'It's too expensive', 'I'm not interested'",
        ],
      },
      {
        week: 6,
        title: "Week 6: Writing Section A & B: News Article & Persuasive Essay",
        lessons: [
          "Section A: Continuing a news brief (Faits divers) - past tenses, chronology, dramatic punchline in 80 words",
          "Section B: Expressing personal viewpoints on a social topic in 200 words - clear introduction, two arguments, conclusion",
          "Eliminating spelling mistakes with automated keyboard corrections and accent shortcut training",
        ],
      },
      {
        week: 7,
        title: "Week 7: Computer-Based Full Mock Simulations",
        lessons: [
          "Full 3-hour computer simulation replicating the exact Paris Chamber of Commerce interface",
          "Comprehensive evaluation report with projected NCLC scores and personalized final week adjustments",
        ],
      },
    ],
    examAlignment: {
      exam: "TEF Canada & TCF Canada (IRCC Approved)",
      mapping: [
        { level: "Listening (Compréhension Orale)", score: "Target: NCLC 7+ (249-279)", validity: "IRCC Canada Express Entry" },
        { level: "Reading (Compréhension Écrite)", score: "Target: NCLC 7+ (207-232)", validity: "IRCC Canada Express Entry" },
        { level: "Writing (Production Écrite)", score: "Target: NCLC 7+ (310-348)", validity: "IRCC Canada Express Entry" },
        { level: "Speaking (Production Orale)", score: "Target: NCLC 7+ (310-348)", validity: "IRCC Canada Express Entry" },
      ],
    },
    method: [
      { title: "Computer Test Simulator", description: "Practice on an interface mimicking the official e-TEF platform with timed questions and audio streams." },
      { title: "Plug-and-Play Speaking Templates", description: "Proven rhetorical outlines for Section A and Section B speaking tasks that keep your answers structured." },
      { title: "Daily Audio-Sprint Drills", description: "Train your ears on fast Quebecois and metropolitan French recordings to overcome acoustic distortion." },
      { title: "Detailed IRCC Band Prediction", description: "Know your exact NCLC band before booking your ₹28,000 official exam fee." },
    ],
    instructor: {
        image: "/founder.webp",
      name: "Sakshi Goel & Certified Faculty",
      bio: "DELF & DALF certified lead French trainer with extensive experience preparing candidates for France Éducation International diplomas and Canadian immigration benchmarks.",
      credentials: [
        "French Teacher – 10+ Years",
  "Adult & Young Learner Teaching",
  "TEF Exam Preparation", 
  "MA in English Literature",
  ],
    },
    faqs: [
      {
        q: "What is the minimum score needed in TEF Canada for Express Entry points?",
        a: "To claim the maximum 50+ bonus CRS points, you need at least NCLC 7 in all four sections: Reading (207+), Listening (249+), Writing (310+), and Speaking (310+).",
      },
      {
        q: "How is TEF Canada different from DELF B2?",
        a: "DELF B2 is a traditional academic paper-and-pen diploma that never expires. TEF Canada is a fast-paced, computer-based exam designed specifically for Canadian immigration and valid for 2 years.",
      },
      {
        q: "How many mock tests are included in the bundle?",
        a: "Our intensive bundle includes up to 10 full-length simulated mock tests covering all four abilities with instant score analysis and detailed teacher remarks.",
      },
      {
        q: "Can I take this course if my French is currently at A2 or B1?",
        a: "If you are at B1, our 10-week comprehensive bundle is ideal. If you are currently at A2, we recommend taking our French B1 course first or opting for our integrated pathway.",
      },
      {
        q: "Can I attend a free demo session to see the exam strategies?",
        a: "Yes! Book a free trial strategy session where our coach will walk you through real TEF questions and assess your baseline level.",
      },
    ],
    testimonials: [],
    related: ["french-b2-advanced-course", "french-b1-intermediate-course", "french-language-program"],
    nextLevel: null,
    prevLevel: "french-b2-advanced-course",
    blogLinks: [
      { title: "TEF vs TCF Canada: Comprehensive Exam Comparison", slug: "what-is-tef-tcf-exam-comparison-scores-fees" },
      { title: "French Classes Fees in Chandigarh: Cost Guide", slug: "french-classes-fees-in-chandigarh-cost-guide" },
    ],
    sections: [
      "hero",
      "quick-facts",
      "outcomes",
      "who-its-for",
      "curriculum",
      "tef-exam-simulator",
      "exam-alignment",
      "teaching-method",
      "schedule-pricing",
      "instructor",
      "sample-lesson",
      "comparison",
      "testimonials",
      "faq",
      "related-courses",
      "free-level-test",
      "final-cta",
    ],
    cta: {
      primary: { text: "Book Free TEF Strategy Session", href: "/book-free-trial" },
      whatsappMessage: "Hello! I am preparing for TEF Canada and would like to book a free strategy session at Inquisitive Mind Academy.",
    },
  },
];

// Helper functions for easy consumption across components and server routes
export function getAllCourses() {
  return courses;
}

export function getCourse(slug) {
  if (!slug) return null;
  const direct = courses.find((c) => c.slug === slug);
  if (direct) return direct;

  // Aliases for legacy slugs
  if (slug === "delf-b2-exam-prep-masterclass") {
    return courses.find((c) => c.slug === "french-b2-advanced-course") || null;
  }
  if (slug === "spoken-french-masterclass") {
    return courses.find((c) => c.slug === "french-language-program") || null;
  }
  return null;
}

export function getCoursesByType(type) {
  if (!type || type === "all") return courses;
  return courses.filter((c) => c.type === type);
}

export function getRelatedCourses(currentSlug) {
  const current = getCourse(currentSlug);
  if (!current) return courses.slice(0, 3);
  if (current.related && current.related.length > 0) {
    return current.related.map((rSlug) => getCourse(rSlug)).filter(Boolean);
  }
  return courses.filter((c) => c.slug !== currentSlug).slice(0, 3);
}

// Re-export as coursesData for backwards compatibility across existing routes
export const coursesData = courses;
export default courses;
