// src/data/tutors.js
// Brand-Aligned Tutor Discovery Data System & Normalization

export const SUBJECT_THEMES = {
  French: {
    name: "French",
    colorKey: "amber",
    bg: "#FEF3C7", // amber-100
    bgClass: "bg-amber-50",
    textClass: "text-amber-900",
    borderClass: "border-amber-200",
    chipBg: "bg-amber-100/80 text-amber-900 border-amber-300",
    accentGlow: "rgba(245, 158, 11, 0.25)",
    emoji: "🇫🇷",
  },
  German: {
    name: "German",
    colorKey: "yellow",
    bg: "#FEF9C3", // yellow-100
    bgClass: "bg-yellow-50",
    textClass: "text-yellow-950",
    borderClass: "border-yellow-200",
    chipBg: "bg-yellow-100/80 text-yellow-950 border-yellow-300",
    accentGlow: "rgba(234, 179, 8, 0.25)",
    emoji: "🇩🇪",
  },
  Mathematics: {
    name: "Mathematics",
    colorKey: "sky",
    bg: "#E0F2FE", // sky-100
    bgClass: "bg-sky-50",
    textClass: "text-sky-950",
    borderClass: "border-sky-200",
    chipBg: "bg-sky-100/80 text-sky-950 border-sky-300",
    accentGlow: "rgba(14, 165, 233, 0.25)",
    emoji: "📐",
  },
  Maths: {
    name: "Mathematics",
    colorKey: "sky",
    bg: "#E0F2FE",
    bgClass: "bg-sky-50",
    textClass: "text-sky-950",
    borderClass: "border-sky-200",
    chipBg: "bg-sky-100/80 text-sky-950 border-sky-300",
    accentGlow: "rgba(14, 165, 233, 0.25)",
    emoji: "📐",
  },
  Science: {
    name: "Science",
    colorKey: "emerald",
    bg: "#D1FAE5", // emerald-100
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-950",
    borderClass: "border-emerald-200",
    chipBg: "bg-emerald-100/80 text-emerald-950 border-emerald-300",
    accentGlow: "rgba(16, 185, 129, 0.25)",
    emoji: "🔬",
  },
  Physics: {
    name: "Science",
    colorKey: "emerald",
    bg: "#D1FAE5",
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-950",
    borderClass: "border-emerald-200",
    chipBg: "bg-emerald-100/80 text-emerald-950 border-emerald-300",
    accentGlow: "rgba(16, 185, 129, 0.25)",
    emoji: "⚡",
  },
  Chemistry: {
    name: "Science",
    colorKey: "emerald",
    bg: "#D1FAE5",
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-950",
    borderClass: "border-emerald-200",
    chipBg: "bg-emerald-100/80 text-emerald-950 border-emerald-300",
    accentGlow: "rgba(16, 185, 129, 0.25)",
    emoji: "🧪",
  },
  English: {
    name: "English",
    colorKey: "violet",
    bg: "#EDE9FE", // violet-100
    bgClass: "bg-violet-50",
    textClass: "text-violet-950",
    borderClass: "border-violet-200",
    chipBg: "bg-violet-100/80 text-violet-950 border-violet-300",
    accentGlow: "rgba(139, 92, 246, 0.25)",
    emoji: "📖",
  },
  Geography: {
    name: "Geography",
    colorKey: "rose",
    bg: "#FFE4E6",
    bgClass: "bg-rose-50",
    textClass: "text-rose-950",
    borderClass: "border-rose-200",
    chipBg: "bg-rose-100/80 text-rose-950 border-rose-300",
    accentGlow: "rgba(244, 63, 94, 0.25)",
    emoji: "🌍",
  },
  Coding: {
    name: "Coding",
    colorKey: "amber",
    bg: "#FEF3C7",
    bgClass: "bg-amber-50",
    textClass: "text-amber-950",
    borderClass: "border-amber-200",
    chipBg: "bg-amber-100/80 text-amber-950 border-amber-300",
    accentGlow: "rgba(245, 158, 11, 0.25)",
    emoji: "💻",
  },
};

export function getSubjectTheme(subject) {
  if (!subject) return SUBJECT_THEMES.French;
  if (SUBJECT_THEMES[subject]) return SUBJECT_THEMES[subject];
  const lower = subject.toLowerCase();
  for (const [key, theme] of Object.entries(SUBJECT_THEMES)) {
    if (lower.includes(key.toLowerCase())) return theme;
  }
  return SUBJECT_THEMES.French;
}

/**
 * Normalizes any tutor record into a clean, honest schema without false claims
 */
export function normalizeTutor(tutor) {
  if (!tutor) return null;
  const name = tutor.fullName || tutor.name || "Educator";
  const subject = tutor.subject || tutor.primarySubject || "French";
  const hourly =
    tutor.hourlyRate?.min ||
    tutor.pricePerHour ||
    tutor.hourlyRate?.max ||
    (subject === "French" ? 800 : 700);

  return {
    id: tutor.id || tutor._id,
    name: name,
    photo: tutor.profileImage || tutor.photo || null,
    tagline:
      tutor.headline ||
      tutor.tagline ||
      `${subject} Educator • ${tutor.experience || "5+ Years"} Experience`,
    subjects:
      Array.isArray(tutor.subjects) && tutor.subjects.length > 0
        ? tutor.subjects
        : [subject],
    primarySubject: subject,
    classes: tutor.studentLevel
      ? [tutor.studentLevel]
      : Array.isArray(tutor.classes) && tutor.classes.length > 0
      ? tutor.classes
      : ["Class 6–12", "All Levels"],
    experienceYears: tutor.experience ? parseInt(tutor.experience) || 5 : 5,
    experienceText: tutor.experience || "5+ Years",
    pricePerHour: hourly,
    hourlyRateObj: tutor.hourlyRate || { min: hourly, max: hourly + 300, currency: "INR" },
    mode:
      tutor.mode?.toLowerCase().includes("hybrid") || tutor.mode === "Both"
        ? "Both"
        : tutor.mode?.toLowerCase().includes("home")
        ? "Home"
        : "Online",
    modeRaw: tutor.mode || "Online Classes",
    languages:
      tutor.languages || [
        "English",
        "Hindi",
        ...(subject === "French" ? ["French"] : subject === "German" ? ["German"] : []),
      ],
    isOnline: true,
    nextSlot: tutor.timeSlot?.[0]
      ? tutor.timeSlot[0]
      : tutor.nextSlot || "Tomorrow 5:00 PM",
    about:
      tutor.bio ||
      tutor.about ||
      `Dedicated ${subject} faculty at Inquisitive Mind Academy focused on personalized 1-on-1 learning, concept clarity, and academic progress.`,
    teachingStyle:
      tutor.teachingStyle ||
      "Structured 1-on-1 sessions, personalized study notes, regular doubt resolution, and practice revision sheets.",
    qualification:
      tutor.qualification || "Certified University Faculty",
    city: tutor.city || "Chandigarh / Online",
    availability:
      tutor.availability || ["Monday", "Wednesday", "Friday"],
    timeSlots: tutor.timeSlot || ["3:00 PM - 5:00 PM", "6:00 PM - 8:00 PM"],
  };
}

// Fallback initial dataset (used only when backend is unreachable)
export const TUTORS_DATA = [
  {
    id: "tutor-claire",
    fullName: "Prof. Claire Dupont",
    subject: "French",
    experience: "7+ Years",
    qualification: "Master in French Literature",
    studentLevel: "School & Adult Learners",
    mode: "Online Classes",
    bio: "Bonjour! I specialize in teaching French for all levels from beginner (A1) to advanced (C2). Conversational practice, grammar clarity, and DELF exam preparation.",
    hourlyRate: { min: 800, max: 1500, currency: "INR" },
    availability: ["Monday", "Wednesday", "Friday", "Saturday"],
    timeSlot: ["3:00 PM - 6:00 PM", "6:00 PM - 9:00 PM"],
    headline: "French Faculty | DELF Preparation & School Curriculum",
  },
  {
    id: "tutor-madhurima",
    fullName: "Madhurima Sapra",
    subject: "Mathematics",
    experience: "8+ Years",
    qualification: "M.Sc. Applied Mathematics, B.Ed.",
    studentLevel: "Class 6-12",
    mode: "Hybrid Teaching",
    bio: "Helping students build strong mathematical fundamentals through step-by-step problem-solving. Specialized in CBSE, ICSE, and foundation concepts.",
    hourlyRate: { min: 700, max: 1300, currency: "INR" },
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlot: ["3:00 PM - 6:00 PM", "6:00 PM - 9:00 PM"],
    headline: "Mathematics Faculty | CBSE & ICSE Curriculum",
  },
  {
    id: "tutor-daniels",
    fullName: "Kouadio Akotto Daniels",
    subject: "French",
    experience: "5+ Years",
    qualification: "B.A. French Studies & DELF Trainer",
    studentLevel: "Beginners & School Students",
    mode: "Online Classes",
    bio: "Passionate French educator helping students develop correct pronunciation, school board preparation, and conversational confidence.",
    hourlyRate: { min: 650, max: 1100, currency: "INR" },
    availability: ["Tuesday", "Thursday", "Saturday", "Sunday"],
    timeSlot: ["12:00 PM - 3:00 PM", "6:00 PM - 9:00 PM"],
    headline: "French Language Instructor | Spoken & Academic French",
  },
  {
    id: "tutor-palak",
    fullName: "Palak Sharma",
    subject: "German",
    experience: "4+ Years",
    qualification: "Goethe-Zertifikat C1, B.A. German Studies",
    studentLevel: "School & College Students",
    mode: "Online Classes",
    bio: "Structured German lessons for school curriculum and Goethe certification (A1-B2). Focus on grammar fundamentals and spoken dialogue.",
    hourlyRate: { min: 600, max: 1000, currency: "INR" },
    availability: ["Monday", "Wednesday", "Friday"],
    timeSlot: ["9:00 AM - 12:00 PM", "6:00 PM - 9:00 PM"],
    headline: "German Language Instructor | A1–B2 Prep & School Studies",
  },
  {
    id: "tutor-priyanka",
    fullName: "Priyanka Verma",
    subject: "Mathematics",
    experience: "6+ Years",
    qualification: "B.Tech & Vedic Math Trainer",
    studentLevel: "Class 6-10",
    mode: "Online Classes",
    bio: "Focused on conceptual understanding, speed calculation techniques, and systematic practice for middle and high school students.",
    hourlyRate: { min: 550, max: 950, currency: "INR" },
    availability: ["Monday", "Tuesday", "Thursday", "Saturday"],
    timeSlot: ["3:00 PM - 6:00 PM"],
    headline: "Mathematics Teacher | Conceptual Mastery & Problem Solving",
  },
  {
    id: "tutor-anshika",
    fullName: "Anshika Gupta",
    subject: "English",
    experience: "5+ Years",
    qualification: "M.A. English Literature",
    studentLevel: "Class 1-12 & Spoken English",
    mode: "Online Classes",
    bio: "English grammar, writing skills, and spoken fluency sessions tailored to individual student needs.",
    hourlyRate: { min: 500, max: 900, currency: "INR" },
    availability: ["Tuesday", "Thursday", "Friday", "Sunday"],
    timeSlot: ["12:00 PM - 3:00 PM", "6:00 PM - 9:00 PM"],
    headline: "English Faculty | Grammar, Writing & Spoken Communication",
  },
].map(normalizeTutor);
