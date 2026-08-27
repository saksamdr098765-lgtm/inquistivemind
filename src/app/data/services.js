import SITE_CONFIG from "../siteConfig";

export const services = [
  // ==========================================
  // STUDENT SERVICES (Courses & Exam Prep)
  // ==========================================
  // {
  //   slug: "tef-canada-immigration-prep",
  //   category: "student",
  //   targetAudience: "For Students & Immigrants",
  //   ctaType: "enroll",
  //   title: "TEF Canada French Exam Prep for Immigration",
  //   subtitle: "Target NCLC Level 7+ for Express Entry & Provincial Nominee Programs",
  //   description:
  //     "Boost your Canadian Permanent Residency (PR) CRS score by up to 50 points. Our intensive TEF Canada course focuses strictly on exam techniques, speed drills, and oral task strategies.",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",

  //   trustBadges: [
  //     "French Tutor Online & Live Batches",
  //     "Experienced TEF Trainers",
  //     "Free Mock Test Included",
  //     "French Tuition Near Me & Online",
  //   ],

  //   briefOverview: {
  //     summary:
  //       "TEF Canada is an official French language proficiency test recognized by IRCC for Canadian Permanent Residency (Express Entry & PNP streams). This specialized coaching program provides candidate-focused training to score NCLC 7+ in all 4 modules (Listening, Reading, Writing, Speaking) via live online classes and home tuition.",
  //     highlights: [
  //       "Target score of NCLC 7+ (B2 equivalent) for up to 50 bonus CRS points",
  //       "Comprehensive coverage of CCIP exam format and task templates",
  //       "Computer-based mock exam engine replicating real test center interface",
  //       "Dedicated 1-on-1 oral interview simulations with expert French tutors online",
  //     ],
  //   },

  //   quickInfo: {
  //     duration: "8–12 Weeks",
  //     mode: "Online Live & Home Tuition",
  //     level: "A1 to C2 (NCLC 7+ Goal)",
  //     batchSize: "Max 6 Students",
  //     certification: "TEF Canada Exam-Ready Preparation",
  //     rating: "4.9/5 (Based on Student Feedback)",
  //   },

  //   howItWorks: [
  //     {
  //       step: "01",
  //       title: "Post Your Requirement",
  //       desc: "Share your target exam date, preferred batch timing, and current French level with our team.",
  //     },
  //     {
  //       step: "02",
  //       title: "Tutor Assignment",
  //       desc: "We match you with a specialized TEF trainer for live French tuition online or home tutoring near you.",
  //     },
  //     {
  //       step: "03",
  //       title: "Start Live Classes & Mock Exams",
  //       desc: "Begin interactive live classes, 1-on-1 speaking evaluation, and computer-based mock tests.",
  //     },
  //   ],

  //   whatsCovered: [
  //     {
  //       title: "Compréhension Orale (Listening)",
  //       desc: "Speed listening techniques, audio distraction filters, and fast-paced MCQs.",
  //     },
  //     {
  //       title: "Compréhension Écrite (Reading)",
  //       desc: "Skimming, scanning strategies, and vocabulary building for section A/B/C tasks.",
  //     },
  //     {
  //       title: "Expression Écrite (Writing)",
  //       desc: "Formulas and structure templates for fait divers articles & formal persuasive letters.",
  //     },
  //     {
  //       title: "Expression Orale (Speaking)",
  //       desc: "Real exam simulation drills for Section A (asking info) & Section B (persuading a friend).",
  //     },
  //   ],

  //   whyChooseUs: [
  //     {
  //       title: "Specialized TEF Trainers",
  //       desc: "Trainers experienced in TEF-specific exam format, with focus on Canada PR coaching.",
  //     },
  //     {
  //       title: "French Tutor Online & Near Me",
  //       desc: "Flexible 100% live online interactive batches alongside home tuition across Chandigarh, Mohali, and Panchkula.",
  //     },
  //     {
  //       title: "Real Exam Mock Format",
  //       desc: "Practice using a mock test format that closely mirrors the actual TEF Canada test structure and timing.",
  //     },
  //   ],

  //   pricing: {
  //     planName: "TEF Canada Preparation Package",
  //     fee: "₹18,500",
  //     originalFee: "₹24,000",
  //     duration: "12 Weeks Intensive Program",
  //     includes: [
  //       "12 Weeks Live Interactive Training",
  //       "Simulated Speaking Interviews",
  //       "Timed Mock Exams",
  //       "Digital Study Materials",
  //     ],
  //     discountNote: "Installment options available (2 parts). Contact us for next batch dates.",
  //     pricePageLink: "/prices/tef-canada-prep-bundle-fee",
  //     pricePageTitle: "View TEF Canada Complete Fee & Installment Plan",
  //   },

  //   tutorCallout: {
  //     title: "Are You an Experienced French Tutor?",
  //     description: "Join Inquisitive Mind Academy's tutor network. Teach motivated students preparing for TEF exams.",
  //     buttonText: "Apply as a Tutor",
  //     link: "/french-tutor-jobs-chandigarh",
  //   },

  //   faq: [
  //     {
  //       question: "How many CRS points does TEF Canada add to Express Entry?",
  //       answer:
  //         "Achieving NCLC 7 or higher in all four TEF modules can add up to 50 additional CRS points for Express Entry candidates, even with moderate English scores.",
  //     },
  //     {
  //       question: "Is TEF Canada accepted for Canadian Citizenship and PR?",
  //       answer:
  //         "Yes, TEF Canada is officially recognized by IRCC (Immigration, Refugees and Citizenship Canada) for PR economic streams, Express Entry, PNP programs, and citizenship.",
  //     },
  //     {
  //       question: "Can I get a French tutor online or home tuition near me?",
  //       answer:
  //         "Yes, we offer live interactive online batches globally with certified French tutors online as well as home tuition near you in Chandigarh, Mohali, and Panchkula.",
  //     },
  //     {
  //       question: "What is the TEF exam for?",
  //       answer:
  //         "TEF (Test d'Évaluation de Français) evaluates French language proficiency for immigration, education, and professional purposes, and is widely used for Canada PR applications through Express Entry.",
  //     },
  //   ],

  //   areasWeServe: [
  //     { city: "Chandigarh", center: "Sector 17 Learning Center", href: "/locations/chandigarh-center" },
  //     { city: "Mohali", center: "Phase 8 / Sector 62 Campus", href: "/locations/mohali-branch" },
  //     { city: "Ludhiana", center: "Model Town Coaching Hub", href: "/locations/ludhiana-center" },
  //     { city: "Online Global", center: "Virtual Live Academy (India, Canada, UAE)", href: "/locations/online-global-hub" },
  //   ],

  //   relatedBlogs: [
  //     "what-is-tef-tcf-exam-comparison-scores-fees",
  //     "tef-vs-tcf-canada-which-exam-to-choose",
  //   ],

  //   finalCta: {
  //     title: "Start Your TEF Canada Preparation Today",
  //     description:
  //       "Book a free 1-on-1 consultation with an academic counselor, evaluate your starting level, and get your personalized study roadmap.",
  //     buttonText: "Book Free Consultation",
  //     whatsappMsg: "Hi Inquisitive Mind Academy! I want to book a free consultation for TEF Canada coaching.",
  //   },

  //   seo: {
  //     title: "TEF Canada Prep Course | French Tutor Online | Inquisitive Mind Academy",
  //     description:
  //       "Intensive TEF Canada exam coaching. Target NCLC 7+ for Canadian PR Express Entry bonus points with a French tutor online or French tuition near me.",
  //     keywords: [
  //       "French tutor online",
  //       "French tuition online",
  //       "French tutor near me",
  //       "French tuition near me",
  //       "TEF Canada prep",
  //       "TEF French coaching",
  //       "French for Canadian PR",
  //       "TEF Canada classes Chandigarh",
  //     ],
  //   },
  // },
  // {
  //   slug: "tcf-canada-immigration-prep",
  //   category: "student",
  //   targetAudience: "For Students & Immigrants",
  //   ctaType: "enroll",
  //   title: "TCF Canada French Exam Prep for Immigration",
  //   subtitle: "Target CLB Level 7+ for Express Entry & Provincial Nominee Programs",
  //   description:
  //     "Boost your Canadian Permanent Residency (PR) CRS score with a focused TCF Canada course. Covers all four modules with adaptive-format practice, speaking drills, and full-length mock tests with a French tutor online.",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",

  //   trustBadges: [
  //     "French Tutor Online Available",
  //     "Experienced TCF Trainers",
  //     "Free Mock Test Included",
  //     "French Tuition Near Me",
  //   ],

  //   briefOverview: {
  //     summary:
  //       "TCF Canada (Test de Connaissance du Français pour le Canada) is an officially accredited French proficiency test recognized by IRCC for Canadian Permanent Residency. Our TCF Canada coaching program delivers targeted strategy, adaptive mock drills, and 1-on-1 oral evaluation through French tuition online or near you.",
  //     highlights: [
  //       "Target score of CLB 7+ across all 4 modules (Listening, Reading, Writing, Speaking)",
  //       "Adaptive-format question mastery for high accuracy under exam conditions",
  //       "Writing task evaluation and template structures for Section A & B",
  //       "50+ mock speaking interviews with certified French tutors online",
  //     ],
  //   },

  //   quickInfo: {
  //     duration: "8–12 Weeks",
  //     mode: "Online Live & Home Tuition",
  //     level: "A1 to C2 (CLB 7+ Goal)",
  //     batchSize: "Max 6 Students",
  //     certification: "TCF Canada Exam-Ready Preparation",
  //     rating: "4.9/5 (Based on Student Feedback)",
  //   },

  //   howItWorks: [
  //     {
  //       step: "01",
  //       title: "Post Your Requirement",
  //       desc: "Share your target exam date, preferred batch timing, and current French level with our team.",
  //     },
  //     {
  //       step: "02",
  //       title: "Tutor Assignment",
  //       desc: "We match you with a specialized TCF trainer for live online French tuition or home tutoring near you.",
  //     },
  //     {
  //       step: "03",
  //       title: "Start Live Classes & Mock Exams",
  //       desc: "Begin interactive live classes, 1-on-1 speaking evaluation, and adaptive-format mock tests.",
  //     },
  //   ],

  //   whatsCovered: [
  //     {
  //       title: "Compréhension Orale (Listening)",
  //       desc: "Adaptive-format listening practice with progressively challenging audio clips, matching the real TCF structure.",
  //     },
  //     {
  //       title: "Compréhension Écrite (Reading)",
  //       desc: "Reading strategy for adaptive-difficulty passages, vocabulary building, and time management.",
  //     },
  //     {
  //       title: "Expression Écrite (Writing)",
  //       desc: "Structure templates across all three TCF writing difficulty tiers.",
  //     },
  //     {
  //       title: "Expression Orale (Speaking)",
  //       desc: "Real exam simulation drills covering all three sections of the TCF speaking test.",
  //     },
  //   ],

  //   whyChooseUs: [
  //     {
  //       title: "Specialized TCF Trainers",
  //       desc: "Trainers experienced in TCF's adaptive exam format, with focus on Canada PR coaching.",
  //     },
  //     {
  //       title: "French Tuition Online & Near Me",
  //       desc: "Choose live virtual sessions with a expert French tutor online or in-person home tuition near you.",
  //     },
  //     {
  //       title: "Real Exam Mock Format",
  //       desc: "Practice using a mock test format that closely mirrors the actual TCF Canada adaptive test structure and timing.",
  //     },
  //   ],

  //   pricing: {
  //     planName: "TCF Canada Preparation Package",
  //     fee: "₹18,000",
  //     originalFee: "₹23,500",
  //     duration: "12 Weeks Intensive Program",
  //     includes: [
  //       "12 Weeks Live Interactive Training",
  //       "Simulated Speaking Interviews",
  //       "Timed Adaptive Mock Exams",
  //       "Digital Study Materials",
  //     ],
  //     discountNote: "Installment options available (2 parts). Contact us for next batch dates.",
  //     pricePageLink: "/prices/tcf-canada-prep-bundle-fee",
  //     pricePageTitle: "View TCF Canada Complete Fee & Installment Plan",
  //   },

  //   tutorCallout: {
  //     title: "Are You an Experienced French Tutor?",
  //     description: "Join Inquisitive Mind Academy's tutor network. Teach motivated students preparing for TCF exams.",
  //     buttonText: "Apply as a Tutor",
  //     link: "/french-tutor-jobs-chandigarh",
  //   },

  //   faq: [
  //     {
  //       question: "How many CRS points does TCF Canada add to Express Entry?",
  //       answer:
  //         "Achieving CLB 7 or higher in all four TCF modules can add significant additional CRS points for Express Entry candidates, similar to TEF Canada scoring.",
  //     },
  //     {
  //       question: "Is TCF Canada accepted for Canadian Citizenship and PR?",
  //       answer:
  //         "Yes, TCF Canada is officially recognized by IRCC (Immigration, Refugees and Citizenship Canada) for PR economic streams, Express Entry, PNP programs, and citizenship.",
  //     },
  //     {
  //       question: "Can I prepare for TCF Canada with a French tutor online?",
  //       answer:
  //         "Yes! Our French tuition online program features 1-on-1 live sessions and interactive group classes designed specifically for TCF Canada success.",
  //     },
  //     {
  //       question: "What does TCF stand for?",
  //       answer:
  //         "TCF stands for Test de Connaissance du Français, a French proficiency test administered by France Education International and recognized by IRCC for Canadian immigration.",
  //     },
  //   ],

  //   areasWeServe: [
  //     { city: "Chandigarh", center: "Sector 17 Learning Center", href: "/locations/chandigarh-center" },
  //     { city: "Mohali", center: "Phase 8 / Sector 62 Campus", href: "/locations/mohali-branch" },
  //     { city: "Ludhiana", center: "Model Town Coaching Hub", href: "/locations/ludhiana-center" },
  //     { city: "Online Global", center: "Virtual Live Academy (India, Canada, UAE)", href: "/locations/online-global-hub" },
  //   ],

  //   relatedBlogs: [
  //     "what-is-tef-tcf-exam-comparison-scores-fees",
  //     "tef-vs-tcf-canada-which-exam-to-choose",
  //   ],

  //   finalCta: {
  //     title: "Start Your TCF Canada Preparation Today",
  //     description:
  //       "Book a free 1-on-1 consultation with an academic counselor, evaluate your starting level, and get your personalized study roadmap.",
  //     buttonText: "Book Free Consultation",
  //     whatsappMsg: "Hi Inquisitive Mind Academy! I want to book a free consultation for TCF Canada coaching.",
  //   },

  //   seo: {
  //     title: "TCF Canada Prep Course | French Tutor Online | Inquisitive Mind Academy",
  //     description:
  //       "Focused TCF Canada exam coaching. Target CLB 7+ for Canadian PR Express Entry with a French tutor online or French tuition near me.",
  //     keywords: [
  //       "French tutor online",
  //       "French tuition online",
  //       "French tutor near me",
  //       "French tuition near me",
  //       "TCF Canada prep",
  //       "TCF French coaching",
  //       "French for Canadian PR",
  //     ],
  //   },
  // },
{
    slug: "french-classes-chandigarh",
    category: "student",
    targetAudience: "For Students & Beginners",
    ctaType: "enroll",
    title: "French Classes in Chandigarh & Live French Tuition Online",
    subtitle: "Home & Online French Batches — Beginner to Advanced, Near You",
    description:
      "Learn French with a certified French tutor online or home tuition near you. Small batches, DELF/DALF-trained faculty, and flexible timings — for kids, exam preparation, and working professionals.",
    coverImage:
      "/services/french-classes-chandigarh/cover.webp",

    trustBadges: [
      "French Tutor Online & Home Visits",
      "DELF/DALF-Trained Faculty",
      "Free Trial Class Included",
      "French Tuition Near Me",
    ],

    briefOverview: {
      summary:
        "Learn conversational French, prepare for school board exams, or work toward DELF, TEF, or TCF certification with structured, level-by-level batches taught by our DELF/DALF-trained faculty. Whether you prefer a French tutor near me for home tuition or live French tuition online, we offer the same quality curriculum either way.",
      highlights: [
        "Structured curriculum from beginner (A1) through advanced (C1/C2)",
        "Exam-focused coaching for DELF, TEF Canada, and TCF Canada",
        "Home tuition near you across Chandigarh, Mohali & Panchkula, or live online from anywhere",
        "Free trial class before you commit to a batch",
      ],
    },

    quickInfo: {
      duration: "Flexible — Batches Run Ongoing",
      mode: "Home Tuition & Live French Tuition Online",
      level: "A1 to C2 (All Levels)",
      batchSize: "6–10 Students (or 1-on-1)",
      certification: "DELF / TEF / TCF Exam Prep Available",
    },

    howItWorks: [
      {
        step: "01",
        title: "Share Your Requirement",
        desc: "Tell us your goal — conversational French, school exams, or DELF/TEF/TCF — and whether you prefer home tuition near me or a French tutor online.",
      },
      {
        step: "02",
        title: "Get Matched With a Tutor",
        desc: "We match you with a French faculty member suited to your level, and share available batch timings.",
      },
      {
        step: "03",
        title: "Start With a Free Trial Class",
        desc: "Attend a free trial session — at home or online — before confirming your batch and fee plan.",
      },
    ],

    whatsCovered: [
      {
        title: "Spoken French & Conversation",
        desc: "Daily conversation practice, accent training, and role-plays for practical, spoken fluency.",
      },
      {
        title: "School & Board Exam Support",
        desc: "French coaching aligned with school curriculum for students preparing for class exams.",
      },
      {
        title: "DELF, TEF & TCF Exam Prep",
        desc: "Structured exam-focused batches for study-abroad, immigration, or certification goals.",
      },
      {
        title: "Beginner to Advanced Levels",
        desc: "Batches across A1 through C2, so you can start from scratch or continue from your current level.",
      },
    ],

    whyChooseUs: [
      {
        title: "Founder-Led French Faculty",
        desc: "Classes are taught and reviewed by our own experienced, DELF/DALF-trained French faculty.",
      },
      {
        title: "French Tutor Near Me & Online",
        desc: "Flexible options: book home visits in Chandigarh, Mohali & Panchkula or learn with a certified French tutor online.",
      },
      {
        title: "Small Batches, Real Attention",
        desc: "Batches are capped small so every student gets speaking practice and direct feedback every session.",
      },
    ],

    pricing: {
      planName: "French Classes — Home & Online",
      fee: "Contact for Fee Plan",
      originalFee: "",
      duration: "Monthly / Per-Level Batches",
      includes: [
        "Home Tuition or Live Online Classes",
        "Study Material & Progress Assessments",
        "Free Trial Class",
        "Flexible Batch Timings",
      ],
      discountNote: "Fees vary by mode (home, online, group) and level. See our full fees guide for a detailed breakdown.",
      pricePageLink: "/blogs/french-classes-fees-in-chandigarh-cost-guide",
      pricePageTitle: "View French Classes Fees Guide",
    },

    tutorCallout: {
      title: "Are You an Experienced French Tutor?",
      description: "Join Inquisitive Mind Academy's tutor network. Get matched with students across Chandigarh, Mohali, and online.",
      buttonText: "Apply as a Tutor",
      link: "/french-tutor-jobs-chandigarh",
    },

    faq: [
      {
        question: "Are there French classes near me in Chandigarh?",
        answer:
          "Yes — we offer French classes across Chandigarh, including home tuition and live online batches, so there's a near-me option whether you prefer in-person or remote learning.",
      },
      {
        question: "How can I find a certified French tutor online?",
        answer:
          "Inquisitive Mind Academy offers 100% live interactive French tuition online with certified DELF/DALF faculty for all levels (A1 to C2) and exam prep.",
      },
      {
        question: "Are there French tuition near me options available for home visits?",
        answer:
          "Yes, our home tuition covers Chandigarh, Mohali, and Panchkula. If you prefer learning remotely, live online classes are available worldwide.",
      },
      {
        question: "Where can I learn French in Chandigarh?",
        answer:
          "You can learn French in Chandigarh through our home tuition batches or live online classes, taught by DELF/DALF-trained faculty, with structured levels from A1 through C2.",
      },
      {
        question: "Is French tuition available fully online, not just near me?",
        answer:
          "Yes, our live French tuition online is open to learners anywhere, not just Chandigarh — the same curriculum and faculty apply whether you join in person or online.",
      },
      {
        question: "Is there a free French tutor or trial class available?",
        answer:
          "We offer a free trial class so you can experience our teaching style before enrolling — a live session with an actual faculty member, not a pre-recorded video.",
      },
      {
        question: "Which are the best French classes in Chandigarh?",
        answer:
          "We focus on small batch sizes, DELF/DALF-trained faculty, and a clear level-by-level curriculum (A1 to C2), with both home and online options — so you get personal attention rather than a large, generic classroom.",
      },
      {
        question: "What are the French classes fees in Chandigarh?",
        answer:
          "Fees depend on the mode you choose — online group batches are the most affordable, while 1-on-1 online or home tuition sessions cost more. See our full fees guide for a detailed breakdown by mode and level.",
      },
      {
        question: "Do you offer French classes in Chandigarh Sector 36 or nearby sectors?",
        answer:
          "Yes, our home tuition coverage includes Sector 36 and other Chandigarh sectors. Live online classes are also available if a home tutor isn't available in your exact area.",
      },
      {
        question: "Do you offer French classes in Panchkula?",
        answer:
          "Yes, our home tuition coverage extends to Panchkula alongside Chandigarh and Mohali. Live online classes are also available if you're outside our home-tuition area.",
      },
      {
        question: "How is this different from Alliance Française Chandigarh?",
        answer:
          "Alliance Française is a large institutional language center. We offer smaller batch sizes with more personal attention, plus home tuition — an option Alliance Française doesn't typically provide — alongside live online classes.",
      },
      {
        question: "What is the fastest way to learn spoken French?",
        answer:
          "Consistent, structured practice with a real tutor beats app-only learning — our batches focus on daily conversation drills, accent training, and role-plays from the first level.",
      },
    ],

    // areasWeServe: [
    //   { city: "Chandigarh", center: "Sector 17 Learning Center", href: "/locations/chandigarh-center" },
    //   { city: "Mohali", center: "Phase 8 / Sector 62 Campus", href: "/french-classes-mohali" },
    //   { city: "Panchkula", center: "Home Tuition Coverage", href: "/locations/chandigarh-center" },
    //   { city: "Online Global", center: "Virtual Live Academy", href: "/locations/online-global-hub" },
    // ],
relatedServices:[
  "french-tutor-jobs-chandigarh"
],
    relatedBlogs: [
      "french-classes-fees-in-chandigarh-cost-guide",
  
    ],

    finalCta: {
      title: "Start Learning French Today",
      description:
        "Book a free trial class, evaluate your starting level, and get matched with a French tutor near you — home or online.",
      buttonText: "Book Free Trial Class",
      whatsappMsg: "Hi Inquisitive Mind Academy! I want to book a free trial class for French tuition online/home.",
    },

    seo: {
      title: "French Classes | French Tutor Online & Near Me | Inquisitive Mind Academy",
      description:
        "Learn French with a certified French tutor online or home tuition near me. Small batches, DELF/DALF-trained faculty, free trial class.",
      keywords: [
        "French tutor online",
        "French tuition online",
        "French tutor near me",
        "French tuition near me",
        "French classes Chandigarh",
        "French classes near me",
        "Learn French in Chandigarh",
        "Best French classes in Chandigarh",
        "French classes in Chandigarh with fees",
        "French classes in Chandigarh Sector 36",
        "French classes Panchkula",
        "Alliance Française Chandigarh",
      ],
    },
  },
  {
    slug: "tcf-canada-coaching-chandigarh",
    category: "student",
    targetAudience: "For Canada PR & Immigration Aspirants in Chandigarh",
    ctaType: "enroll",
    title: "TCF Canada Coaching in Chandigarh",
    subtitle: "Structured TCF Canada Preparation for Express Entry, PR & CRS Points — Live Online Classes for Chandigarh Students",
    description:
      "Join TCF Canada coaching for Chandigarh students with Inquisitive Mind Academy. Expert-led live online batches covering Listening, Speaking, Reading & Writing, mock tests, and a personalized study plan to help you hit your target CLB score for Canada PR.",
    coverImage:
      "/services/tcf-canada-coaching-chandigarh/cover.webp",

    trustBadges: [
      "100% Live Online Classes",
      "Free Mock Test Included",
      "Certified French Faculty",
      "Small Batch Sizes (6–10 Students)",
    ],

    briefOverview: {
      summary:
        "Searching for TCF Canada coaching near you in Chandigarh? Inquisitive Mind Academy offers structured, exam-focused TCF Canada preparation through live online batches for students across Chandigarh, Mohali, Panchkula, and Zirakpur — whether you're targeting Express Entry CRS points, a study permit, or Canadian citizenship. Our trainers focus on all four TCF modules with regular mock tests so you walk into the exam center knowing exactly what to expect.",
      highlights: [
        "Dedicated TCF Canada batches — not a generic French class repurposed for exam prep",
        "Live online classes accessible from anywhere in Chandigarh and the wider Tricity area",
        "Regular full-length mock tests with detailed score feedback",
        "Guidance on registration, exam centers, and CLB score targets for your PR goals",
      ],
    },

    quickInfo: {
      duration: "4 Months (Standard Track) / 2 Months (Crash Course)",
      mode: "100% Live Online",
      level: "A1 to C2 — Based on Your Target CLB Score",
      batchSize: "6–10 Students",
      certification: "Exam-Ready Score Guarantee Program",
    },

    howItWorks: [
      {
        step: "01",
        title: "Free Level Assessment",
        desc: "Take a quick diagnostic to identify your current French level and the CLB score you're realistically targeting.",
      },
      {
        step: "02",
        title: "Join Your Batch",
        desc: "Get placed in a live online batch matched to your level and preferred timing.",
      },
      {
        step: "03",
        title: "Structured TCF Preparation",
        desc: "Work through Listening, Reading, Speaking, and Writing modules with weekly progress checks and mock tests.",
      },
      {
        step: "04",
        title: "Exam Booking Support",
        desc: "Get guidance on registering at your nearest TCF Canada test center and choosing the right exam date.",
      },
    ],

    whatsCovered: [
      {
        title: "All Four TCF Canada Modules",
        desc: "Focused practice on Listening Comprehension, Reading Comprehension, Speaking, and Writing — matched to the exam's actual format.",
      },
      {
        title: "Full-Length Mock Tests",
        desc: "Simulated TCF Canada mock tests under timed conditions, with detailed feedback on your CLB-equivalent score.",
      },
      {
        title: "CLB Score Targeting",
        desc: "Preparation mapped directly to your required CLB level — whether that's CLB 7 for a solid CRS boost or CLB 9 for maximum points.",
      },
      {
        title: "Speaking & Writing Feedback",
        desc: "One-on-one correction for the two modules most students struggle to self-assess.",
      },
    ],

    whyChooseUs: [
      {
        title: "Built for Chandigarh Students",
        desc: "Live online batches timed and structured specifically for students across Chandigarh and the Tricity area — no commute needed.",
      },
      {
        title: "Exam-Focused, Not Generic",
        desc: "Our TCF batches are built specifically around the exam format, not a general spoken French course.",
      },
      {
        title: "Experienced French Faculty",
        desc: "Learn from DELF/DALF-trained trainers with a decade of teaching experience across adult and exam-prep learners.",
      },
      {
        title: "Flexible Batch Timings",
        desc: "Weekday, weekend, and evening batches available for working professionals and students alike.",
      },
    ],

    pricing: {
      planName: "TCF Canada Coaching Fee",
      fee: "Contact for Current Batch Fees",
      originalFee: "",
      duration: "Per Course (4 Months) or Crash Course (2 Months)",
      includes: [
        "All 4 Module Training (Listening, Reading, Speaking, Writing)",
        "Full-Length Mock Tests",
        "Personalized Study Plan",
        "Exam Registration Guidance",
      ],
      discountNote: "Fees vary by batch type and duration. Message us for current pricing and available slots.",
      pricePageLink: "/services/tcf-canada-coaching-chandigarh",
      pricePageTitle: "Contact Us for Current Fees & Batch Availability",
    },

    // tutorCallout: {
    //   title: "Preparing for TEF Instead?",
    //   description: "Not sure which French exam is right for you? Check out our TEF Canada coaching or compare both exams first.",
    //   buttonText: "Explore TEF Canada Coaching",
    //   link: "/services/tef-canada-coaching",
    // },

    faq: [
      {
        question: "Where can I take TCF Canada coaching in Chandigarh?",
        answer:
          "Inquisitive Mind Academy offers TCF Canada coaching through live online batches for students across Chandigarh, Mohali, Panchkula, and Zirakpur — you can join from home without needing to travel.",
      },
      {
        question: "Is TCF Canada accepted for PR?",
        answer:
          "Yes, TCF Canada is fully recognized by IRCC and can be used to claim French-language CRS points under Express Entry, alongside TEF Canada.",
      },
      {
        question: "What CLB score do I need for Canada PR?",
        answer:
          "It depends on your CRS goals — many candidates target at least CLB 7 for a meaningful points boost, while CLB 9 unlocks higher point brackets. Your trainer will help set a realistic target based on your current level.",
      },
      {
        question: "How long does it take to prepare for TCF Canada?",
        answer:
          "Most students take our 4-month standard track to build proficiency from scratch, though a 2-month crash course is available for candidates who already have a base level of French.",
      },
      {
        question: "Do you offer TCF Canada exam registration guidance?",
        answer:
          "Yes, we guide students through choosing a nearby test center, understanding the registration process, and picking an exam date that aligns with their PR application timeline.",
      },
      {
        question: "Are online TCF Canada classes effective for exam prep?",
        answer:
          "Yes, our live online batches follow the same structured curriculum, mock tests, and one-on-one trainer feedback you'd expect from an in-person class — students across Chandigarh, Mohali, Panchkula, and Zirakpur join these batches from home.",
      },
      {
        question: "Is TCF or TEF better for Canada PR?",
        answer:
          "Both are equally valid and IRCC-recognized. TCF Canada's adaptive format tends to suit beginners, while TEF Canada's fixed-difficulty format tends to suit stronger candidates. We can help you decide based on a quick assessment.",
      },
    ],

    relatedBlogs: [
      "tcf-canada-exam-guide-registration-fees-score-chart",
      "what-is-tef-tcf-exam-comparison-scores-fees",
      "french-classes-fees-in-chandigarh-cost-guide",
    ],

    finalCta: {
      title: "Start Your TCF Canada Preparation in Chandigarh Today",
      description:
        "Book a free consultation, get your level assessed, and start preparing for your target CLB score with structured, exam-focused batches.",
      buttonText: "Book Free Consultation",
      whatsappMsg: "Hi Inquisitive Mind Academy! I want to know more about TCF Canada coaching in Chandigarh. Please share batch timings and fees.",
    },

    seo: {
      title: "TCF Canada Coaching in Chandigarh | Live Online | Inquisitive Mind Academy",
      description:
        "TCF Canada coaching for Chandigarh students — live online batches covering all 4 modules, mock tests & exam registration guidance. Open to students across Chandigarh, Mohali, Panchkula & Zirakpur.",
      keywords: [
        "TCF Canada coaching Chandigarh",
        "TCF classes in Chandigarh",
        "TCF Canada institute Chandigarh",
        "best TCF coaching in Chandigarh",
        "TCF coaching center Chandigarh",
        "TCF Canada coaching Punjab",
        "TCF Canada coaching Tricity",
        "TCF Canada coaching near PGGC Chandigarh",
      ],
    },
  },
  // {
  //   slug: "delf-dalf-exam-prep",
  //   category: "student",
  //   targetAudience: "For Certification Aspirants",
  //   ctaType: "enroll",
  //   title: "DELF & DALF Exam Preparation Course",
  //   subtitle: "Official French Diploma Training for A1, A2, B1, B2 & DALF C1",
  //   description:
  //     "Comprehensive exam preparation for official French diplomas issued by the French Ministry of Education with a dedicated French tutor online or home tutor near you.",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",

  //   trustBadges: [
  //     "French Tutor Online & Live Batches",
  //     "Official DELF Syllabus",
  //     "Certified Native/DALF C2 Trainers",
  //     "French Tuition Near Me",
  //   ],

  //   briefOverview: {
  //     summary:
  //       "DELF (Diplôme d'Études en Langue Française) and DALF (Diplôme Approfondi de Langue Française) are lifetime official qualifications recognized globally. Our course guarantees thorough preparation for every module via French tuition online and local home tuition.",
  //     highlights: [
  //       "Coverage for DELF Prim, Junior, Tout Public A1 to B2 and DALF C1",
  //       "Strict adherence to CIEP / France Éducation International scoring rubrics",
  //       "In-depth writing correction and 1-on-1 oral exam simulation with a French tutor online",
  //       "Past exam papers database with detailed solution walkthroughs",
  //     ],
  //   },

  //   quickInfo: {
  //     duration: "6–10 Weeks per Level",
  //     mode: "Online Live & Home Tuition",
  //     level: "A1, A2, B1, B2, C1",
  //     batchSize: "Max 8 Students",
  //     certification: "Official DELF / DALF Exam Ready",
  //     rating: "4.9/5 (Based on Student Feedback)",
  //   },

  //   howItWorks: [
  //     {
  //       step: "01",
  //       title: "Level Diagnostic Test",
  //       desc: "Evaluate your current French level through a short placement test to select your target DELF level.",
  //     },
  //     {
  //       step: "02",
  //       title: "Module Mastery & Mock Drills",
  //       desc: "Undergo intensive skill drills for Listening, Reading, Writing, and Speaking under timed conditions with a French tutor online.",
  //     },
  //     {
  //       step: "03",
  //       title: "Final Mock & Exam Registration",
  //       desc: "Complete 3 full mock exams with detailed examiner feedback before sitting for your exam.",
  //     },
  //   ],

  //   whatsCovered: [
  //     {
  //       title: "Compréhension de l'Oral",
  //       desc: "Audio comprehension strategy for various French accents and speech speeds.",
  //     },
  //     {
  //       title: "Compréhension des Écrits",
  //       desc: "Reading analysis of authentic French news, essays, and literary excerpts.",
  //     },
  //     {
  //       title: "Production Écrite",
  //       desc: "Essays, formal letters, synthesis writing, and argument structuring.",
  //     },
  //     {
  //       title: "Production Orale",
  //       desc: "Monologue defense, debate tactics, and interactive role-plays with certified faculty.",
  //     },
  //   ],

  //   whyChooseUs: [
  //     {
  //       title: "Certified DELF Examiners",
  //       desc: "Trainers certified in DELF scoring standards with years of experience coaching students.",
  //     },
  //     {
  //       title: "French Tuition Online & Near Me",
  //       desc: "Live interactive online sessions with top French tutors online or home tuition in your area.",
  //     },
  //     {
  //       title: "Targeted Writing Corrections",
  //       desc: "Detailed redline corrections on writing tasks with line-by-line feedback.",
  //     },
  //   ],

  //   pricing: {
  //     planName: "DELF / DALF Prep Bundle",
  //     fee: "₹14,500",
  //     originalFee: "₹19,000",
  //     duration: "8 Weeks Intensive Program",
  //     includes: [
  //       "Live Interactive Batches",
  //       "3 Full-Length Mock Exams",
  //       "Personalized Writing Evaluations",
  //       "Official Exam Syllabus Guide",
  //     ],
  //     discountNote: "Special discounts available when enrolling for consecutive levels (e.g. B1 + B2).",
  //     pricePageLink: "/prices/delf-dalf-prep-fee",
  //     pricePageTitle: "View DELF & DALF Preparation Fee Plans",
  //   },

  //   tutorCallout: {
  //     title: "Are You a DELF-Certified French Teacher?",
  //     description: "Join our teaching team to lead DELF/DALF batches and conduct mock oral evaluations.",
  //     buttonText: "Apply as a Tutor",
  //     link: "/french-tutor-jobs-chandigarh",
  //   },

  //   faq: [
  //     {
  //       question: "Can I prepare for DELF with a French tutor online?",
  //       answer: "Yes! Our DELF prep program is available 100% online with certified DELF examiners.",
  //     },
  //     {
  //       question: "How long is a DELF certificate valid?",
  //       answer: "Unlike TEF/TCF or IELTS, DELF and DALF diplomas are valid for life and never expire.",
  //     },
  //   ],

  //   areasWeServe: [
  //     { city: "Chandigarh", center: "Sector 17 Learning Center", href: "/locations/chandigarh-center" },
  //     { city: "Mohali", center: "Phase 8 / Sector 62 Campus", href: "/locations/mohali-branch" },
  //     { city: "Online Global", center: "Virtual Live Academy", href: "/locations/online-global-hub" },
  //   ],

  //   relatedBlogs: [
  //     "what-is-tef-tcf-exam-comparison-scores-fees",
  //   ],

  //   finalCta: {
  //     title: "Prepare for Your DELF Certification Today",
  //     description: "Book a level assessment with our certified trainers and build a targeted preparation plan.",
  //     buttonText: "Book Free Assessment",
  //     whatsappMsg: "Hi Inquisitive Mind Academy! I want to prepare for my DELF / DALF exam.",
  //   },

  //   seo: {
  //     title: "DELF & DALF Exam Prep Course | French Tutor Online | Inquisitive Mind Academy",
  //     description: "Prepare for DELF A1–B2 & DALF C1 exams with a certified French tutor online or French tuition near me. Proven success rate.",
  //     keywords: ["French tutor online", "French tuition online", "French tutor near me", "French tuition near me", "DELF exam prep", "DELF B2 coaching"],
  //   },
  // },
  // {
  //   slug: "private-french-tutoring",
  //   category: "student",
  //   targetAudience: "For 1-on-1 Learners",
  //   ctaType: "enroll",
  //   title: "1-on-1 Private French Tutoring (Home & Online)",
  //   subtitle: "Customized Personal Coaching Tailored to Your Schedule & Pace",
  //   description:
  //     "Get exclusive 1-on-1 attention from a dedicated French tutor online or home tutor near me. Ideal for busy professionals, school students, or candidates with tight exam deadlines.",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",

  //   trustBadges: [
  //     "French Tutor Online Available",
  //     "100% Dedicated Tutor",
  //     "French Tuition Near Me",
  //     "Flexible Timings & Home Visits",
  //   ],

  //   briefOverview: {
  //     summary:
  //       "Our private tutoring program offers complete customization. Whether you need an online French tutor for TEF preparation, business French, or a French tutor near me for home tuition, your personal mentor adapts directly to your learning speed.",
  //     highlights: [
  //       "1-on-1 live interactive sessions via Zoom/Google Meet or home visits",
  //       "Flexible scheduling options including morning, evening, and weekend slots",
  //       "Personalized curriculum built around your specific learning goals",
  //       "Continuous performance monitoring with feedback after every session",
  //     ],
  //   },

  //   quickInfo: {
  //     duration: "Custom (Hourly / Monthly Packages)",
  //     mode: "Home Tuition & French Tuition Online",
  //     level: "All Levels (Beginner to Advanced)",
  //     batchSize: "1 Student Only",
  //     certification: "Custom Progress Reports Provided",
  //     rating: "5.0/5 (Based on 1-on-1 Feedback)",
  //   },

  //   howItWorks: [
  //     {
  //       step: "01",
  //       title: "Goal Assessment",
  //       desc: "Tell us your specific objectives, availability, and preferred mode (home visit or online).",
  //     },
  //     {
  //       step: "02",
  //       title: "Trial & Matching",
  //       desc: "Meet your matched personal tutor for a 1-on-1 trial session to establish chemistry and a customized roadmap.",
  //     },
  //     {
  //       step: "03",
  //       title: "Start Customized Mentorship",
  //       desc: "Begin flexible 1-on-1 sessions at times that suit your work or study schedule.",
  //     },
  //   ],

  //   whatsCovered: [
  //     {
  //       title: "Tailored Conversational Mastery",
  //       desc: "Real-world speaking confidence with immediate grammar and accent corrections.",
  //     },
  //     {
  //       title: "Academic & Exam Acceleration",
  //       desc: "Focused coaching on troublesome modules or upcoming school/university board exams.",
  //     },
  //     {
  //       title: "Corporate & Business French",
  //       desc: "Professional communication, email writing, and interview prep for international careers.",
  //     },
  //   ],

  //   whyChooseUs: [
  //     {
  //       title: "Zero Distractions",
  //       desc: "100% of the session focus is on your questions and speaking practice.",
  //     },
  //     {
  //       title: "French Tutor Online & Home Visit Options",
  //       desc: "Enjoy complete convenience with a certified French tutor online or a private tutor near you.",
  //     },
  //   ],

  //   pricing: {
  //     planName: "1-on-1 Private Mentorship",
  //     fee: "₹800 - ₹1,500 / Hour",
  //     originalFee: "",
  //     duration: "Pay-as-you-go or Package Discounts",
  //     includes: [
  //       "1-on-1 Live Sessions",
  //       "Personalized Homework & Grading",
  //       "Recorded Lessons (Online)",
  //       "Direct Tutor Support via WhatsApp",
  //     ],
  //     discountNote: "Package discounts available for 20+ hour commitments.",
  //     pricePageLink: "/prices/private-tutoring-rates",
  //     pricePageTitle: "View Private Tutoring Rates & Packages",
  //   },

  //   tutorCallout: {
  //     title: "Want to Become a 1-on-1 Private Tutor?",
  //     description: "Join our network of premium private tutors. High hourly rates and flexible home/online schedules.",
  //     buttonText: "Apply as Private Tutor",
  //     link: "/french-tutor-jobs-chandigarh",
  //   },

  //   faq: [
  //     {
  //       question: "Can I hire a French tutor online for 1-on-1 sessions?",
  //       answer: "Yes! We match you with certified 1-on-1 online French tutors for private interactive sessions on your schedule.",
  //     },
  //     {
  //       question: "Are home visits available for French tuition near me?",
  //       answer: "We cover all major sectors in Chandigarh, Mohali, and Panchkula for private home tuition.",
  //     },
  //   ],

  //   areasWeServe: [
  //     { city: "Chandigarh", center: "Home Visits & Online", href: "/locations/chandigarh-center" },
  //     { city: "Mohali", center: "Home Visits & Online", href: "/locations/mohali-branch" },
  //     { city: "Global", center: "Online 1-on-1 Worldwide", href: "/locations/online-global-hub" },
  //   ],

  //   relatedBlogs: [
  //     "french-classes-fees-in-chandigarh-cost-guide",
  //   ],

  //   finalCta: {
  //     title: "Book Your 1-on-1 Private French Tutor",
  //     description: "Speak with our academic director to get matched with your ideal private French mentor.",
  //     buttonText: "Request Private Tutor",
  //     whatsappMsg: "Hi Inquisitive Mind Academy! I want to hire a private 1-on-1 French tutor.",
  //   },

  //   seo: {
  //     title: "Private French Tutor Online | French Tuition Near Me",
  //     description: "Personalized 1-on-1 French tutoring. Learn at your own pace with a French tutor online or private home tutor near me.",
  //     keywords: ["French tutor online", "French tuition online", "French tutor near me", "French tuition near me", "private French tutor", "1 on 1 French classes"],
  //   },
  // },

  // ==========================================
  // TEACHER / TUTOR SERVICES (Jobs & Hiring)
  // ==========================================
  {
    slug: "french-tutor-jobs-chandigarh",
    category: "teacher",
    targetAudience: "For French Teachers & Tutors",
    ctaType: "apply",
    title: "French Tutor Jobs in Chandigarh",
    subtitle: "Teach French — Home, Online, or Both. Get Matched With Students.",
    description:
      "Apply as a French tutor with Inquisitive Mind Academy and get matched with students across Chandigarh, Mohali, and online. Flexible hours, home or online teaching, and steady student referrals.",
    coverImage:
      "/services/french-tutor-jobs-chandigarh/cover.webp",

    trustBadges: [
      "Flexible Teaching Hours",
      "Home & Online Assignments",
      "Steady Student Referrals",
      "Freshers & Experienced Welcome",
    ],

    briefOverview: {
      summary:
        "Whether you're an experienced French faculty member or a passionate speaker starting out, Inquisitive Mind Academy connects qualified French tutors with students actively looking for classes in Chandigarh, Mohali, and online. Set your own availability, teach the way you prefer — home visits or live online — and we handle finding you students.",
      highlights: [
        "Teach home tuition, online classes, or both — your choice",
        "Work part-time, full-time, or freelance around your schedule",
        "Get matched with pre-screened students actively searching for a French tutor",
        "Open to freshers, experienced teachers, and DELF/DALF qualified candidates",
      ],
    },

    quickInfo: {
      duration: "Flexible — Part-Time, Full-Time, or Freelance",
      mode: "Home Tuition & Live Online",
      level: "Teach A1 to C2 (Based on Your Expertise)",
      batchSize: "1-on-1 & Small Group Batches",
      certification: "DELF/DALF Certification Preferred",
    },

    howItWorks: [
      {
        step: "01",
        title: "Apply as a Tutor",
        desc: "Share your French proficiency level, teaching experience, and whether you prefer home tuition, online, or both.",
      },
      {
        step: "02",
        title: "Get Verified & Evaluated",
        desc: "We review your profile and conduct a brief conversational evaluation to match you with suitable student levels.",
      },
      {
        step: "03",
        title: "Receive Student Assignments",
        desc: "Once verified, receive student match notifications in your preferred area or online schedule.",
      },
    ],

    whatsCovered: [
      {
        title: "Home Tuition Opportunities",
        desc: "Teach students directly at their homes across Chandigarh, Mohali, and Panchkula.",
      },
      {
        title: "Online Teaching, From Anywhere",
        desc: "Teach live online classes to students across India, Canada, and UAE on flexible schedules.",
      },
      {
        title: "Beginner to Exam-Prep Batches",
        desc: "Teach conversational French, school-level coaching, or specialize in DELF/TEF/TCF exam preparation.",
      },
      {
        title: "Part-Time or Full-Time Freedom",
        desc: "Pick up a few hours a week alongside other work, or build a full-time freelance teaching portfolio.",
      },
    ],

    whyChooseUs: [
      {
        title: "We Bring Students To You",
        desc: "No need to post ads or chase leads. We match you directly with paying students.",
      },
      {
        title: "Teach Your Way",
        desc: "Choose home visits, online sessions, or both — and set the hours that fit your lifestyle.",
      },
      {
        title: "Open to Freshers Too",
        desc: "New to teaching? We welcome freshers alongside experienced faculty, with guidance to get started confidently.",
      },
      {
        title: "Competitive Payouts",
        desc: "Earn lucrative hourly or batch-based payouts paid reliably and transparently.",
      },
    ],

    pricing: {
      planName: "Tutor Earnings Structure",
      fee: "₹400 - ₹1,200 / Hour",
      originalFee: "",
      duration: "Paid Per Session / Per Batch",
      includes: [
        "Home Tuition Session Rates",
        "Online Class Session Rates",
        "Group Batch Teaching Bonuses",
        "Exam-Prep Batch Bonuses (DELF/TEF/TCF)",
      ],
      discountNote: "Earnings depend on mode (home/online), batch size, and your experience level. Discuss details during onboard interview.",
      pricePageLink: "/french-tutor-jobs-chandigarh",
      pricePageTitle: "Apply to Discuss Your Earning Potential",
    },

    tutorCallout: {
      title: "Looking for French Classes Instead?",
      description: "If you're a student looking to learn French — not teach it — check out our student courses.",
      buttonText: "Find Student Courses",
      link: "/services/french-classes-chandigarh",
    },

    faq: [
      {
        question: "How do I become a French teacher with Inquisitive Mind Academy?",
        answer:
          "Apply through our tutor application form, sharing your French proficiency level and teaching experience. We review applications and conduct a short evaluation before matching you with students.",
      },
      {
        question: "Are there French tutor jobs near me in Chandigarh?",
        answer:
          "Yes, we match tutors with students for home tuition across Chandigarh, Mohali, and Panchkula. Online teaching is also available if you prefer remote work.",
      },
      {
        question: "Can I find online French teacher jobs from outside Chandigarh?",
        answer:
          "Yes! Online French teaching roles are open to tutors located anywhere in India or abroad.",
      },
      {
        question: "Are there French tutor jobs for freshers?",
        answer:
          "Yes, strong spoken French and enthusiasm for teaching matter most. We welcome freshers alongside experienced educators.",
      },
    ],

    areasWeServe: [
      { city: "Chandigarh", center: "Sector 17 & All Sectors", href: "/locations/chandigarh-center" },
      { city: "Mohali", center: "Phase 8 / Sector 62", href: "/french-classes-mohali" },
      { city: "Panchkula", center: "All Sectors", href: "/locations/chandigarh-center" },
      { city: "Online Global", center: "Work From Anywhere", href: "/locations/online-global-hub" },
    ],

    relatedBlogs: [
      "french-classes-fees-in-chandigarh-cost-guide",
      // "what-is-tef-tcf-exam-comparison-scores-fees",
    ],

    finalCta: {
      title: "Apply as a French Tutor Today",
      description:
        "Share your details and teaching preferences — home, online, or both — and join our growing educator network.",
      buttonText: "Apply as a Tutor Now",
      whatsappMsg: "Hi Inquisitive Mind Academy! I want to apply as a French tutor. Please share the application process.",
    },

    seo: {
      title: "French Tutor Jobs in Chandigarh | Home & Online | Inquisitive Mind Academy",
      description:
        "French tutor jobs in Chandigarh — home tuition and online teaching opportunities. Open to freshers and experienced faculty. Flexible hours, steady student matches.",
      keywords: [
        "French tutor jobs Chandigarh",
        "French tutor jobs near me",
        "French jobs in Chandigarh",
        "Online French teacher jobs",
        "How to become a French teacher",
      ],
    },
  },
  {
    slug: "online-french-tutor-jobs",
    category: "teacher",
    targetAudience: "For Remote & Online French Teachers",
    ctaType: "apply",
    title: "Online French Tutor Jobs — Work From Anywhere",
    subtitle: "Teach French Online to Students in India & Worldwide. Flexible Hours, Steady Matches.",
    description:
      "Apply as an online French tutor with Inquisitive Mind Academy and get matched with students across India and worldwide. Teach from home on your own schedule — freshers and experienced tutors welcome.",
    coverImage:
      "/services/online-french-tutor-jobs/cover.webp",

    trustBadges: [
      "100% Remote — Work From Anywhere",
      "Flexible Hours",
      "Steady Student Referrals",
      "Freshers & Experienced Welcome",
    ],

    briefOverview: {
      summary:
        "Looking for online French teacher jobs you can do from home? Inquisitive Mind Academy connects qualified French tutors with students across India and worldwide who are actively searching for online classes. Set your own hours, teach from anywhere, and we handle finding you students.",
      highlights: [
        "Teach live online — no commute, no fixed classroom",
        "Work part-time, full-time, or freelance around your schedule",
        "Get matched with pre-screened students actively searching for an online French tutor",
        "Open to freshers, experienced teachers, and DELF/TEF/TCF-qualified candidates",
      ],
    },

    quickInfo: {
      duration: "Flexible — Part-Time, Full-Time, or Freelance",
      mode: "100% Live Online",
      level: "Teach A1 to C2 (Based on Your Expertise)",
      batchSize: "1-on-1 & Small Group Batches",
      certification: "DELF/DALF Certification Preferred",
    },

    howItWorks: [
      {
        step: "01",
        title: "Apply as an Online Tutor",
        desc: "Share your French proficiency level, teaching experience, and preferred online teaching hours.",
      },
      {
        step: "02",
        title: "Get Verified & Evaluated",
        desc: "We review your profile and conduct a brief conversational evaluation to match you with suitable student levels.",
      },
      {
        step: "03",
        title: "Receive Student Assignments",
        desc: "Once verified, receive student match notifications and start teaching live online on your own schedule.",
      },
    ],

    whatsCovered: [
      {
        title: "Teach Students Across India & Worldwide",
        desc: "Get matched with students from India, Canada, UAE, and beyond — no location restrictions.",
      },
      {
        title: "Freelance or Structured Teaching",
        desc: "Work as an independent freelance French teacher or take on a steady part-time/full-time online teaching role.",
      },
      {
        title: "Beginner to Exam-Prep Batches",
        desc: "Teach conversational French, French for adults and kids, or specialize in DELF/TEF/TCF exam preparation online.",
      },
      {
        title: "Freshers Welcome",
        desc: "New to online teaching? We guide freshers through onboarding alongside experienced faculty.",
      },
    ],

    whyChooseUs: [
      {
        title: "We Bring Students To You",
        desc: "No need to advertise on freelance platforms or chase leads — we match you directly with paying students.",
      },
      {
        title: "Work From Anywhere",
        desc: "Teach from home, another city, or another country — all you need is a stable internet connection.",
      },
      {
        title: "Open to Freshers Too",
        desc: "Passionate about French but new to teaching? We welcome freshers with guidance to get started confidently.",
      },
      {
        title: "Competitive Payouts",
        desc: "Earn reliable hourly or batch-based payouts, paid transparently for every session.",
      },
    ],

    pricing: {
      planName: "Online Tutor Earnings Structure",
      fee: "₹400 - ₹1,200 / Hour",
      originalFee: "",
      duration: "Paid Per Session / Per Batch",
      includes: [
        "Online 1-on-1 Session Rates",
        "Online Group Batch Rates",
        "Exam-Prep Batch Bonuses (DELF/TEF/TCF)",
        "Referral Bonuses for Steady Batches",
      ],
      discountNote: "Earnings depend on batch size, student level, and your experience. Discuss details during onboarding interview.",
      pricePageLink: "/online-french-tutor-jobs",
      pricePageTitle: "Apply to Discuss Your Earning Potential",
    },

    tutorCallout: {
      title: "Looking for French Classes Instead?",
      description: "If you're a student looking to learn French online — not teach it — check out our student courses.",
      buttonText: "Find Student Courses",
      link: "/services/french-classes-chandigarh",
    },

    faq: [
      {
        question: "How do I become an online French tutor with Inquisitive Mind Academy?",
        answer:
          "Apply through our tutor application form, sharing your French proficiency level and teaching experience. We review applications and conduct a short evaluation before matching you with online students.",
      },
      {
        question: "Are there online French teacher jobs I can do from anywhere?",
        answer:
          "Yes, our online French teaching roles are open to tutors located anywhere in India or abroad — all classes are conducted live online.",
      },
      {
        question: "Are there French tutoring jobs for freelancers?",
        answer:
          "Yes, you can work with us as a freelance French tutor, choosing your own hours and taking on as many or as few students as fits your schedule.",
      },
      {
        question: "Are there online French tutor jobs for freshers?",
        answer:
          "Yes, strong spoken French and enthusiasm for teaching matter most. We welcome freshers alongside experienced educators, with guidance to get started.",
      },
      {
        question: "Can I teach French online to adults as well as kids?",
        answer:
          "Yes, we match tutors with both adult learners and younger students based on your preference and teaching style.",
      },
      {
        question: "Is there demand for French teachers right now?",
        answer:
          "Yes, demand for French tutors is growing steadily in India, driven largely by students preparing for DELF, TEF, and TCF exams for Canada PR and study-abroad goals.",
      },
    ],


    relatedBlogs: [
      "french-classes-fees-in-chandigarh-cost-guide",
      "what-is-tef-tcf-exam-comparison-scores-fees",
    ],

    finalCta: {
      title: "Apply as an Online French Tutor Today",
      description:
        "Share your details and preferred teaching hours — and join our growing network of online educators.",
      buttonText: "Apply as a Tutor Now",
      whatsappMsg: "Hi Inquisitive Mind Academy! I want to apply as an online French tutor. Please share the application process.",
    },

    seo: {
      title: "Online French Tutor Jobs | Work From Anywhere | Inquisitive Mind Academy",
      description:
        "Online French tutor jobs — teach French remotely to students across India and worldwide. Open to freshers and experienced faculty. Flexible hours, steady student matches.",
      keywords: [
        "Online French tutor jobs",
        "French teacher jobs online",
        "Remote French tutor jobs",
        "French tutoring jobs near me",
        "Online French teacher jobs worldwide",
        "How to become a French tutor",
        "Freelance French teacher",
        "French jobs for freshers",
      ],
    },
  },
  // {
  //   slug: "online-french-teacher-jobs",
  //   category: "teacher",
  //   targetAudience: "For Remote Educators",
  //   ctaType: "apply",
  //   title: "Online French Teacher & Remote Educator Jobs",
  //   subtitle: "Teach French 100% Online — Remote Work, Global Students, Flexible Slots",
  //   description:
  //     "Join our virtual faculty and teach French to students across India, Canada, the UAE, and worldwide. Enjoy complete work-from-home freedom with provided digital teaching tools.",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80",

  //   trustBadges: [
  //     "100% Remote / Work-from-Home",
  //     "Worldwide Student Base",
  //     "Digital Lesson Plans Included",
  //     "Guaranteed Monthly Schedule",
  //   ],

  //   briefOverview: {
  //     summary:
  //       "Expand your teaching career without leaving home. We manage student marketing, scheduling, and billing while you focus on what you do best — delivering engaging live online French lessons.",
  //     highlights: [
  //       "Teach 1-on-1 private students or small interactive online groups (max 6 students)",
  //       "Flexible shifts: early morning, evening, or weekend slots available",
  //       "Full digital toolkit provided (presentation slides, audio exercises, mock test bank)",
  //       "Punctual monthly direct-deposit payouts",
  //     ],
  //   },

  //   quickInfo: {
  //     duration: "Flexible Remote Contracts",
  //     mode: "100% Online (Zoom / Google Meet)",
  //     level: "Teach A1 through C1 Levels",
  //     batchSize: "1-on-1 & Max 6 Online Groups",
  //     certification: "DELF B2 / C1 or Equivalent Preferred",
  //     rating: "4.9/5 (Based on Remote Faculty Reviews)",
  //   },

  //   howItWorks: [
  //     {
  //       step: "01",
  //       title: "Submit Remote Application",
  //       desc: "Fill out our online application detailing your tech setup, teaching hours, and French credentials.",
  //     },
  //     {
  //       step: "02",
  //       title: "Virtual Demo Session",
  //       desc: "Conduct a 15-minute live online demo lesson with our academic team.",
  //     },
  //     {
  //       step: "03",
  //       title: "Get Assigned Online Batches",
  //       desc: "Start receiving matched online students and group batches immediately upon approval.",
  //     },
  //   ],

  //   whatsCovered: [
  //     {
  //       title: "Spoken & General French Batches",
  //       desc: "Guide beginners and intermediate learners toward conversational fluency online.",
  //     },
  //     {
  //       title: "K-12 & University Support",
  //       desc: "Help school and college students excel in their academic French curriculum.",
  //     },
  //     {
  //       title: "Immigration & Test Prep",
  //       desc: "Specialize in online TEF / TCF Canada preparation for high-earning potential.",
  //     },
  //   ],

  //   whyChooseUs: [
  //     {
  //       title: "No Commute Necessary",
  //       desc: "Save hours and travel costs by teaching entirely from your home office or desk.",
  //     },
  //     {
  //       title: "Curated Materials Provided",
  //       desc: "Access ready-made lesson plans and slide decks so lesson prep time is minimized.",
  //     },
  //   ],

  //   pricing: {
  //     planName: "Remote Teacher Payouts",
  //     fee: "₹500 - ₹1,000 / Hour",
  //     originalFee: "",
  //     duration: "Weekly or Monthly Payouts",
  //     includes: [
  //       "Hourly Live Class Pay",
  //       "Performance & Retention Bonuses",
  //       "Full Content Access",
  //       "Admin & Tech Support",
  //     ],
  //     discountNote: "Higher rates for TEF/TCF exam specialists.",
  //     pricePageLink: "/french-tutor-jobs-chandigarh",
  //     pricePageTitle: "Apply for Online Teaching Positions",
  //   },

  //   tutorCallout: {
  //     title: "Looking for Online French Courses?",
  //     description: "If you're a student looking to enroll in online French classes, explore our course listing.",
  //     buttonText: "Explore Online Courses",
  //     link: "/french-classes-chandigarh",
  //   },

  //   faq: [
  //     {
  //       question: "What technical equipment do I need to teach online?",
  //       answer: "A stable high-speed internet connection, a laptop/PC with webcam, and a quiet teaching environment with a headset.",
  //     },
  //     {
  //       question: "Can I teach part-time while keeping my daytime job?",
  //       answer: "Yes, evening and weekend batches are available specifically for part-time educators.",
  //     },
  //   ],

  //   areasWeServe: [
  //     { city: "Remote / Worldwide", center: "Virtual Live Academy", href: "/locations/online-global-hub" },
  //   ],

  //   relatedBlogs: [
  //     "french-classes-fees-in-chandigarh-cost-guide",
  //   ],

  //   finalCta: {
  //     title: "Become an Online French Teacher Today",
  //     description: "Join our virtual faculty and start teaching motivated students from around the globe.",
  //     buttonText: "Apply as Online Teacher",
  //     whatsappMsg: "Hi Inquisitive Mind Academy! I want to apply for online French teaching jobs.",
  //   },

  //   seo: {
  //     title: "Online French Teacher Jobs | Work from Home Educator Vacancies",
  //     description: "Remote online French teaching jobs. Flexible hours, global students, competitive hourly payouts. Work from home with provided lesson plans.",
  //     keywords: ["online French teacher jobs", "work from home French tutor", "remote French teaching", "teach French online India"],
  //   },
  // },
  // {
  //   slug: "tef-tcf-exam-trainer-jobs",
  //   category: "teacher",
  //   targetAudience: "For Senior Exam Specialists",
  //   ctaType: "apply",
  //   title: "TEF & TCF Canada Certified Trainer Recruitment",
  //   subtitle: "High-Paying Hiring for Certified TEF & TCF Canada French Specialists",
  //   description:
  //     "Are you a master of the TEF or TCF Canada exam structure? We are recruiting senior exam trainers for high-ticket PR coaching batches and 1-on-1 interview simulations.",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",

  //   trustBadges: [
  //     "Premium Hourly Rates",
  //     "High-Motivation Candidates",
  //     "Dedicated Exam Simulation Tools",
  //     "Flexible Remote / Hybrid Batches",
  //   ],

  //   briefOverview: {
  //     summary:
  //       "Join Inquisitive Mind Academy as a specialized TEF/TCF exam coach. Our candidates are highly motivated professionals aiming for Canadian PR, requiring expert strategy in Expression Orale and Expression Écrite.",
  //     highlights: [
  //       "Lead high-ticket TEF Canada and TCF Canada intensive bootcamps",
  //       "Conduct 1-on-1 oral exam simulation interviews with structured rubrics",
  //       "Evaluate and grade complex fait divers and essay writing submissions",
  //       "Premium compensation model with completion and success bonuses",
  //     ],
  //   },

  //   quickInfo: {
  //     duration: "Contract & Retainer Roles Available",
  //     mode: "Online Live & Hybrid",
  //     level: "Senior Level (C1/C2 or Exam Trainer Certified)",
  //     batchSize: "Max 6 Students per Exam Batch",
  //     certification: "TEF/TCF Familiarity Required",
  //     rating: "5.0/5 (Senior Trainer Satisfaction)",
  //   },

  //   howItWorks: [
  //     {
  //       step: "01",
  //       title: "Expert Application",
  //       desc: "Submit your application detailing your personal TEF/TCF score, past student results, or examiner training.",
  //     },
  //     {
  //       step: "02",
  //       title: "Strategy & Oral Interview Review",
  //       desc: "Participate in a senior peer interview focusing on CCIP / France Éducation assessment criteria.",
  //     },
  //     {
  //       step: "03",
  //       title: "Lead Exam Batches",
  //       desc: "Take charge of premier exam prep batches with premium hourly remuneration.",
  //     },
  //   ],

  //   whatsCovered: [
  //     {
  //       title: "Expression Orale Simulation",
  //       desc: "Conducting timed Section A & B drills with actionable candidate scoring.",
  //     },
  //     {
  //       title: "Expression Écrite Correction",
  //       desc: "Detailed corrections based on CCIP / TCF grading criteria.",
  //     },
  //     {
  //       title: "Listening & Reading Speed Drills",
  //       desc: "Teaching audio elimination tactics and adaptive test strategies.",
  //     },
  //   ],

  //   whyChooseUs: [
  //     {
  //       title: "Top Tier Remuneration",
  //       desc: "Our exam trainers earn top-market hourly rates reflections of their specialized expertise.",
  //     },
  //     {
  //       title: "Motivated Professional Students",
  //       desc: "Work with ambitious Express Entry candidates who are dedicated to achieving NCLC 7+.",
  //     },
  //   ],

  //   pricing: {
  //     planName: "Exam Trainer Package",
  //     fee: "₹800 - ₹1,800 / Hour",
  //     originalFee: "",
  //     duration: "Retainer & Project Basis",
  //     includes: [
  //       "Premium Class Hourly Pay",
  //       "Oral Simulation Interview Fees",
  //       "Essay Correction Allowances",
  //       "Score Benchmark Bonuses",
  //     ],
  //     discountNote: "Bonus paid for candidates achieving NCLC 7+ on first attempt.",
  //     pricePageLink: "/french-tutor-jobs-chandigarh",
  //     pricePageTitle: "Apply for Senior Exam Trainer Positions",
  //   },

  //   tutorCallout: {
  //     title: "Looking for TEF/TCF Coaching as a Student?",
  //     description: "If you're a candidate preparing for Canadian PR exams, check our student TEF/TCF courses.",
  //     buttonText: "View TEF/TCF Courses",
  //     link: "/services/tef-canada-immigration-prep",
  //   },

  //   faq: [
  //     {
  //       question: "Do I need official CCIP certification to apply?",
  //       answer: "Official certification is a plus, but proven experience guiding students to NCLC 7+ is equally valued.",
  //     },
  //     {
  //       question: "Is this role available online?",
  //       answer: "Yes, TEF/TCF exam batches are conducted live online as well as in-person.",
  //     },
  //   ],

  //   areasWeServe: [
  //     { city: "Global Online", center: "Virtual Exam Prep Center", href: "/locations/online-global-hub" },
  //     { city: "Chandigarh", center: "Sector 17 Center", href: "/locations/chandigarh-center" },
  //   ],

  //   relatedBlogs: [
  //     "what-is-tef-tcf-exam-comparison-scores-fees",
  //     "tef-vs-tcf-canada-which-exam-to-choose",
  //   ],

  //   finalCta: {
  //     title: "Join as a TEF / TCF Certified Trainer",
  //     description: "Apply now to lead high-impact TEF & TCF Canada coaching batches.",
  //     buttonText: "Apply as Senior Exam Trainer",
  //     whatsappMsg: "Hi Inquisitive Mind Academy! I want to apply as a TEF/TCF Exam Trainer.",
  //   },

  //   seo: {
  //     title: "TEF & TCF Exam Trainer Jobs | Senior French Educator Hiring",
  //     description: "Hiring senior TEF & TCF Canada exam trainers. High-paying hourly rates, candidate success bonuses, live online & offline batches.",
  //     keywords: ["TEF exam trainer jobs", "TCF Canada teacher hiring", "French exam trainer jobs", "TEF tutor recruitment"],
  //   },
  // },
];
