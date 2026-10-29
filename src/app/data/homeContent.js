/**
 * ==============================================================================
 * INQUISITIVE MIND ACADEMY — HOMEPAGE CONTENT & DATA ("CURIOSITY CONNECTS")
 * ==============================================================================
 * All copy adheres strictly to the design rules:
 * - Headlines: MAXIMUM 6 WORDS.
 * - Captions: MAXIMUM 1 LINE.
 * - Visual-first architecture with living mind map connection nodes.
 * ==============================================================================
 */

export const HOME_CONTENT = {
  /* -------------------------------------------------------------------------- */
  /* 1. HERO: "CURIOSITY CONNECTS" LIVING MIND MAP                              */
  /* -------------------------------------------------------------------------- */
  hero: {
    student: {
      eyebrow: "CURIOSITY CONNECTS",
      headline: "Curiosity Connects You With Tutors.", // 5 words
      subheadline: "Pick what you want to learn — watch verified mentors connect in real time.", // 1 line
      primaryCta: {
        text: "Find Your Tutor",
        href: "/find-tutor",
        label: "Hero CTA - Find Tutor",
      },
      secondaryCta: {
        text: "Browse All Guides",
        href: "/tutors",
        label: "Hero Secondary - Browse Tutors",
      },
      trustBadges: [
        "Free Demo Evaluation",
        "100% Vetted Faculty",
        "Tutor Replacement Guarantee",
      ],
      heroImage: "/classroom1.jpg",
    },
    tutor: {
      eyebrow: "TEACH WITH FREEDOM",
      headline: "Teach On Your Own Terms.", // 5 words
      subheadline: "Connect with dedicated students and receive guaranteed weekly payouts.", // 1 line
      primaryCta: {
        text: "Become a Tutor",
        href: "/become-a-tutor",
        label: "Hero CTA - Become Tutor",
      },
      secondaryCta: {
        text: "Teacher Portal",
        href: "/login",
        label: "Hero Secondary - Portal",
      },
      trustBadges: [
        "0% Commission First 10 Lessons",
        "Weekly Direct Payouts",
        "Full Schedule Freedom",
      ],
      heroImage: "/classroom.jpg",
    },
    // The interactive Question Nodes (Students) connecting to Guide Nodes (Tutors)
    mindMapPairs: [
      {
        id: "pair-french",
        subject: "French Language",
        flag: "🇫🇷",
        question: "Master French for DELF & Canada PR?",
        studentName: "Aarav",
        studentGoal: "TEF Canada B2",
        tutor: {
          name: "Sakshi Goel",
          role: "Lead French Faculty",
          credentials: "DELF Certified • 10+ Yrs",
          rating: 5.0,
          rate: "₹750/hr",
          image: "/founder.webp",
          badge: "Lead Faculty",
          matchScore: 99,
          link: "/find-tutor?subject=french",
        },
      },
      {
        id: "pair-math",
        subject: "Mathematics",
        flag: "📐",
        question: "Score 95%+ in Class 10 Boards?",
        studentName: "Diya",
        studentGoal: "CBSE Board Prep",
        tutor: {
          name: "Priyanka Sharma",
          role: "Senior Math Mentor",
          credentials: "M.Sc. Math • 4+ Yrs",
          rating: 4.9,
          rate: "₹650/hr",
          image: "/faculty/emily.jpg",
          badge: "Board Specialist",
          matchScore: 97,
          link: "/find-tutor?subject=math",
        },
      },
      {
        id: "pair-english",
        subject: "Spoken English",
        flag: "🗣️",
        question: "Speak English with Natural Fluency?",
        studentName: "Kabir",
        studentGoal: "Corporate Speaking",
        tutor: {
          name: "Aman Verma",
          role: "Fluency Coach",
          credentials: "IELTS 8.5 • 6+ Yrs",
          rating: 5.0,
          rate: "₹600/hr",
          image: "/faculty/michael.jpg",
          badge: "Fluency Champion",
          matchScore: 98,
          link: "/find-tutor?subject=english",
        },
      },
    ],
  },

  /* -------------------------------------------------------------------------- */
  /* 2. TRUST METRICS STRIP                                                     */
  /* -------------------------------------------------------------------------- */
  trustStats: [
    {
      value: 12000,
      suffix: "+",
      label: "Curious Learners",
      detail: "Across India & Canada",
    },
    {
      value: 450,
      suffix: "+",
      label: "Verified Guides",
      detail: "Top 5% faculty screening",
    },
    {
      value: 98.4,
      decimals: 1,
      suffix: "%",
      label: "Exam Success Rate",
      detail: "Proven score improvements",
    },
    {
      value: 35,
      suffix: "+",
      label: "Subjects & Certifications",
      detail: "DELF, CBSE, IELTS, STEM",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* 3. HOW IT WORKS: 3-STEP CONNECTION                                        */
  /* -------------------------------------------------------------------------- */
  howItWorks: {
    studentTrack: {
      eyebrow: "HOW IT WORKS",
      title: "Three Steps. Instant Connection.", // 4 words
      subtitle: "From your question to your first class in 24 hours.", // 1 line
      steps: [
        {
          number: "01",
          badge: "QUESTION",
          title: "Post Your Curiosity",
          description: "Choose your subject, target goal, and preferred timetable in 60 seconds.",
          icon: "FaRegCompass",
          nodeType: "question",
        },
        {
          number: "02",
          badge: "CONNECTION",
          title: "Get Matched in 24h",
          description: "Our algorithm hand-matches you with vetted educators suited to your pace.",
          icon: "FaSearchPlus",
          nodeType: "line",
        },
        {
          number: "03",
          badge: "GROWTH",
          title: "Learn with Confidence",
          description: "Experience a free trial class and begin personalized weekly sessions.",
          icon: "FaChartLine",
          nodeType: "guide",
        },
      ],
      ctaText: "Start Your Match",
      ctaHref: "/find-tutor",
    },
    tutorTrack: {
      eyebrow: "FOR EDUCATORS",
      title: "Share Knowledge. Earn Confidently.", // 4 words
      subtitle: "Focus on teaching while we connect you with dedicated learners.", // 1 line
      steps: [
        {
          number: "01",
          badge: "PROFILE",
          title: "Create Educator Profile",
          description: "Submit your qualifications, teaching subjects, and available hours online.",
          icon: "FaUserEdit",
          nodeType: "question",
        },
        {
          number: "02",
          badge: "VERIFIED",
          title: "Pass Fast 48h Screening",
          description: "Complete a quick demo with our academic board to receive your verified badge.",
          icon: "FaUserCheck",
          nodeType: "line",
        },
        {
          number: "03",
          badge: "PAYOUTS",
          title: "Teach and Earn Weekly",
          description: "Receive student matches and enjoy guaranteed weekly direct bank deposits.",
          icon: "FaCoins",
          nodeType: "guide",
        },
      ],
      ctaText: "Apply as Tutor",
      ctaHref: "/become-a-tutor",
    },
  },

  /* -------------------------------------------------------------------------- */
  /* 4. BENTO FEATURES: "WHY CURIOSITY THRIVES"                                 */
  /* -------------------------------------------------------------------------- */
  bentoFeatures: {
    eyebrow: "PLATFORM PILLARS",
    title: "Engineered for Fast, Reliable Learning.", // 5 words
    subtitle: "Every feature connects curiosity with real measurable outcomes.", // 1 line
    cards: [
      {
        id: "smart-matching",
        title: "Intelligent Tutor Matching",
        subtitle: "Matches syllabus alignment, pace, and schedule in 24 hours.",
        icon: "FaMagic",
        tag: "Core AI",
        span: "col-span-1 lg:col-span-2",
        image: "/courses/french1.avif",
        accent: "from-amber-500/15 via-yellow-500/10 to-transparent",
      },
      {
        id: "verified-tutors",
        title: "Top 5% Vetted Faculty",
        subtitle: "Rigorous 4-stage background, degree, and demo teaching review.",
        icon: "FaShieldAlt",
        tag: "Quality",
        span: "col-span-1",
        image: "/founder.webp",
        accent: "from-blue-500/15 via-sky-500/10 to-transparent",
      },
      {
        id: "flexible-format",
        title: "Online & Doorstep Modes",
        subtitle: "100% live interactive online classes or home tutors in Tricity.",
        icon: "FaChalkboardTeacher",
        tag: "Formats",
        span: "col-span-1",
        image: "/classroom1.jpg",
        accent: "from-emerald-500/15 via-teal-500/10 to-transparent",
      },
      {
        id: "milestone-tracking",
        title: "Transparent Progress Analytics",
        subtitle: "Weekly feedback reports, attendance logs, and test score curves.",
        icon: "FaChartBar",
        tag: "Parent Dashboard",
        span: "col-span-1 lg:col-span-2",
        image: "/courses/academic1.avif",
        accent: "from-purple-500/15 via-indigo-500/10 to-transparent",
      },
      {
        id: "curriculum-coverage",
        title: "DELF, CBSE & Global Syllabi",
        subtitle: "Covers DELF A1–C2, TEF Canada, CBSE, ICSE, and Spoken English.",
        icon: "FaGraduationCap",
        tag: "Curriculum",
        span: "col-span-1",
        image: "/courses/english1.avif",
        accent: "from-rose-500/15 via-amber-500/10 to-transparent",
      },
      {
        id: "concierge-support",
        title: "Free Tutor Rematch Guarantee",
        subtitle: "Don't love your tutor? We rematch you immediately for free.",
        icon: "FaHeadset",
        tag: "Zero Risk",
        span: "col-span-1 lg:col-span-2",
        image: "/classroom.jpg",
        accent: "from-yellow-500/20 via-amber-400/10 to-transparent",
      },
    ],
  },

  /* -------------------------------------------------------------------------- */
  /* 5. TUTOR SHOWCASE (Profile Constellation)                                  */
  /* -------------------------------------------------------------------------- */
  tutorShowcase: {
    eyebrow: "MEET THE GUIDES",
    title: "Explore Guides Ready to Teach.", // 5 words
    subtitle: "Filter by subject to view verified mentors and request a trial.", // 1 line
    filters: [
      { id: "all", label: "All Guides" },
      { id: "french", label: "French & DELF" },
      { id: "academics", label: "School Academics" },
      { id: "english", label: "Spoken English" },
      { id: "stem", label: "Math & Science" },
    ],
    tutors: [
      {
        id: "t1",
        category: "french",
        name: "Sakshi Goel",
        role: "Head of French Faculty",
        credentials: "DELF Certified • 10+ Yrs",
        rating: 5.0,
        reviewsCount: 148,
        hourlyRate: "₹750/hr",
        subjects: ["French", "DELF A1–B2", "TEF Canada"],
        avatarImage: "/founder.webp",
        badge: "Lead Faculty",
        location: "Chandigarh • Live Online",
      },
      {
        id: "t2",
        category: "stem",
        name: "Priyanka Sharma",
        role: "Lead Math Faculty",
        credentials: "M.Sc. Math • 4+ Yrs",
        rating: 4.9,
        reviewsCount: 112,
        hourlyRate: "₹650/hr",
        subjects: ["Class 9-12 Math", "Calculus", "Algebra"],
        avatarImage: "/faculty/emily.jpg",
        badge: "Board Specialist",
        location: "Mohali • Home & Online",
      },
      {
        id: "t3",
        category: "english",
        name: "Aman Verma",
        role: "Fluency Coach",
        credentials: "IELTS 8.5 Band • 6+ Yrs",
        rating: 5.0,
        reviewsCount: 94,
        hourlyRate: "₹600/hr",
        subjects: ["Spoken English", "IELTS Academic", "Interview Prep"],
        avatarImage: "/faculty/michael.jpg",
        badge: "Fluency Coach",
        location: "Pan-India Online",
      },
      {
        id: "t4",
        category: "stem",
        name: "Dr. Neha Kapoor",
        role: "Senior Science Specialist",
        credentials: "Ph.D. Physics • 8+ Yrs",
        rating: 4.9,
        reviewsCount: 130,
        hourlyRate: "₹800/hr",
        subjects: ["Physics", "Chemistry", "CBSE"],
        avatarImage: "/faculty/jean.jpg",
        badge: "Senior Scientist",
        location: "Panchkula • Home & Online",
      },
    ],
  },

  /* -------------------------------------------------------------------------- */
  /* 6. DUAL CTA SPLIT                                                         */
  /* -------------------------------------------------------------------------- */
  dualCta: {
    student: {
      badge: "START LEARNING",
      title: "Looking for the Right Tutor?", // 5 words
      subtitle: "Hand-matched with verified educators in 24 hours.", // 1 line
      points: [
        "100% Free 30-min evaluation session",
        "Personalized pace, schedule & budget",
        "Free tutor rematch guarantee",
      ],
      buttonText: "Find Your Tutor",
      buttonHref: "/find-tutor",
      bgImage: "/classroom1.jpg",
    },
    tutor: {
      badge: "JOIN AS GUIDE",
      title: "Passionate About Teaching Online?", // 4 words
      subtitle: "Teach on your terms with weekly guaranteed deposits.", // 1 line
      points: [
        "0% commission on your first 10 lessons",
        "Weekly direct deposits with zero fee chasing",
        "Complete schedule autonomy",
      ],
      buttonText: "Become a Tutor",
      buttonHref: "/become-a-tutor",
      bgImage: "/classroom.jpg",
    },
  },

  /* -------------------------------------------------------------------------- */
  /* 7. VIDEO TESTIMONIALS                                                     */
  /* -------------------------------------------------------------------------- */
  testimonials: {
    eyebrow: "STUDENT BREAKTHROUGHS",
    title: "Watch Real Breakthrough Stories.", // 4 words
    subtitle: "Click any student story to watch their transformation video.", // 1 line
    summaryBadge: {
      score: "4.9",
      totalReviews: "850+",
      subtext: "Verified Ratings",
    },
    videoStories: [
      {
        id: "vid-1",
        name: "Mansi Sharma",
        role: "TEF Canada Candidate",
        result: "B1 → C1 in 6 Months",
        course: "DELF B2 & TEF Canada",
        video: "/students/anjali.mp4",
        thumbnail: "/students/anjali.jpg",
        quote: "Scored CLB 7 on my first attempt with Sakshi ma'am's speaking drills.",
        location: "Chandigarh",
        rating: 5,
      },
      {
        id: "vid-2",
        name: "Ishika",
        role: "Study Abroad Candidate",
        result: "IELTS 7.5 Band Score",
        course: "IELTS Academic Preparation",
        video: "/students/rahul.mp4",
        thumbnail: "/students/rahul.jpg",
        quote: "My band score jumped from 6.0 to 7.5 in just 8 weeks of mentoring.",
        location: "Mohali",
        rating: 5,
      },
      {
        id: "vid-3",
        name: "Ishita Dutt Sharma",
        role: "Language Immersion Student",
        result: "Fluent Conversation Level",
        course: "Conversational French",
        video: "/students/sofia.mp4",
        thumbnail: "/students/sofia.jpg",
        quote: "Interactive discussions gave me the freedom to speak without translating.",
        location: "Panchkula",
        rating: 5,
      },
    ],
  },

  /* -------------------------------------------------------------------------- */
  /* 8. FAQS                                                                    */
  /* -------------------------------------------------------------------------- */
  faqs: {
    eyebrow: "COMMON QUESTIONS",
    title: "Frequently Asked Questions.", // 3 words
    subtitle: "Clear answers about tutor matching, safety, and payments.", // 1 line
    categories: [
      { id: "all", label: "All Questions" },
      { id: "students", label: "For Students" },
      { id: "tutors", label: "For Tutors" },
    ],
    items: [
      {
        id: "faq-1",
        category: "students",
        question: "How does the tutor matching process work?",
        answer:
          "Submit what you want to learn. Our algorithm and coordinator pair you with a verified educator within 24 hours, followed by a free 30-minute evaluation class.",
      },
      {
        id: "faq-2",
        category: "students",
        question: "What if I am not satisfied with my matched tutor?",
        answer:
          "We offer a 100% Satisfaction Guarantee. We will rematch you with another educator immediately at zero additional fee.",
      },
      {
        id: "faq-3",
        category: "students",
        question: "Are classes online or at home?",
        answer:
          "Both options are supported: 100% live interactive online classes globally, or doorstep home tutoring across Chandigarh, Mohali, Panchkula, and Zirakpur.",
      },
      {
        id: "faq-4",
        category: "tutors",
        question: "How do I become an approved tutor?",
        answer:
          "Submit our 5-minute application form. Once our academic board reviews your credentials and a brief 20-minute video demo, your verified profile goes live.",
      },
      {
        id: "faq-5",
        category: "tutors",
        question: "When and how do tutors receive payouts?",
        answer:
          "Tutors receive direct bank transfers every week for all conducted and verified teaching hours, with zero fee deductions or chasing.",
      },
    ],
  },

  /* -------------------------------------------------------------------------- */
  /* 9. FINAL CTA                                                               */
  /* -------------------------------------------------------------------------- */
  finalCta: {
    eyebrow: "START TODAY",
    title: "Where Curiosity Meets Its Guide.", // 5 words
    subtitle: "Join over 12,000+ students and 450+ verified tutors today.", // 1 line
    studentButton: {
      text: "Find Your Tutor",
      href: "/find-tutor",
    },
    tutorButton: {
      text: "Join as Tutor",
      href: "/become-a-tutor",
    },
    guaranteeTags: [
      "100% Free Demo Session",
      "No Upfront Lock-in",
      "Free Rematch Guarantee",
    ],
  },
};

export default HOME_CONTENT;
