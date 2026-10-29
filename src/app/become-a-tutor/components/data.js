import {
  FaLanguage,
  FaGlobe,
  FaBook,
  FaComments,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaLaptop,
  FaSchool,
  FaCalculator,
  FaFlask,
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa";

export const tutorSteps = [
  "contact",
  "subject",
  "experience",
  "students",
  "mode",
  "availability",
  "time",
  "qualification",
  "success",
];

export const tutorAvatars = [
  {
    id: "prof",
    emoji: "👨‍🏫",
    name: "Senior Faculty",
    trait: "Master Educator",
    badge: "Senior Mentor",
    gradient: "from-amber-400 via-orange-400 to-amber-500",
  },
  {
    id: "lang",
    emoji: "👩‍🏫",
    name: "Language Virtuoso",
    trait: "TEF & DELF Expert",
    badge: "Fluency Coach",
    gradient: "from-yellow-400 via-amber-400 to-yellow-500",
  },
  {
    id: "stem",
    emoji: "🔬",
    name: "STEM Innovator",
    trait: "Math & Science Lead",
    badge: "Concept Specialist",
    gradient: "from-amber-300 via-yellow-400 to-orange-400",
  },
  {
    id: "coach",
    emoji: "🚀",
    name: "Board Coach",
    trait: "Exam Specialist",
    badge: "Top Ranker Mentor",
    gradient: "from-yellow-500 via-amber-500 to-yellow-600",
  },
  {
    id: "mentor",
    emoji: "💡",
    name: "Curious Mentor",
    trait: "Interactive Guide",
    badge: "1-on-1 Specialist",
    gradient: "from-yellow-400 via-amber-300 to-yellow-500",
  },
  {
    id: "polyglot",
    emoji: "🌍",
    name: "Global Polyglot",
    trait: "Multi-Language Faculty",
    badge: "International Lead",
    gradient: "from-amber-400 via-yellow-500 to-amber-600",
  },
];

export const tutorQuestStages = [
  { step: 0, label: "Faculty Profile", icon: "👤", xp: 125 },
  { step: 1, label: "Teaching Subject", icon: "📚", xp: 250 },
  { step: 2, label: "Classroom Experience", icon: "💼", xp: 375 },
  { step: 3, label: "Target Students", icon: "🎯", xp: 500 },
  { step: 4, label: "Teaching Arena", icon: "💻", xp: 625 },
  { step: 5, label: "Available Days", icon: "📅", xp: 750 },
  { step: 6, label: "Prime Teaching Slots", icon: "⏰", xp: 875 },
  { step: 7, label: "Academic Credentials", icon: "🎓", xp: 1000 },
  { step: 8, label: "Guild Induction", icon: "🏆", xp: 1000 },
];

export const tutorSubjectOptions = [
  {
    title: "French",
    subtitle: "Teach beginner to advanced (DELF, TCF, TEF Canada prep)",
    icon: FaGlobe,
    badge: "🇫🇷 Top Inquiries",
    powerTag: "High Earnings Potential",
  },
  {
    title: "English",
    subtitle: "Teach communication, fluency & IELTS exam coaching",
    icon: FaLanguage,
    badge: "🇬🇧 High Demand",
    powerTag: "All Age Groups",
  },
  {
    title: "German",
    subtitle: "Teach Goethe-Zertifikat A1-B2 & conversational fluency",
    icon: FaGlobe,
    badge: "🇩🇪 Global Language",
    powerTag: "Study Abroad Focus",
  },
  {
    title: "Spanish",
    subtitle: "Teach DELE / SIELE certification & conversational Spanish",
    icon: FaGlobe,
    badge: "🇪🇸 Growing Inquiries",
    powerTag: "Global Language",
  },
  {
    title: "Italian",
    subtitle: "Teach CELI / CILS exam preparation & conversational Italian",
    icon: FaGlobe,
    badge: "🇮🇹 European Edge",
    powerTag: "Culture & Career",
  },
  {
    title: "Mathematics",
    subtitle: "School (CBSE/ICSE) & competitive board exam coaching",
    icon: FaCalculator,
    badge: "📐 High Demand",
    powerTag: "Class 1 to 12",
  },
  {
    title: "Science",
    subtitle: "Physics, Chemistry & Biology with real-world applications",
    icon: FaFlask,
    badge: "🔬 Lab & Theory",
    powerTag: "Concept Building",
  },
  {
    title: "Other Subject / Language",
    subtitle: "Teach Japanese, Russian, Sanskrit, Commerce, or any other subject",
    icon: FaBook,
    badge: "✏️ Custom Domain",
    powerTag: "Specify Your Subject",
    isCustom: true,
  },
];

export const experienceOptions = [
  {
    title: "Less than 1 Year",
    subtitle: "Passionate educator starting a fresh teaching career",
    icon: FaUserGraduate,
    badge: "🌱 Fresh Talent",
  },
  {
    title: "1 - 3 Years",
    subtitle: "Building classroom experience and interactive lesson plans",
    icon: FaChalkboardTeacher,
    badge: "⚡ Gaining Momentum",
  },
  {
    title: "3 - 5 Years",
    subtitle: "Proven track record with successful student transformations",
    icon: FaSchool,
    badge: "🔥 Experienced Mentor",
  },
  {
    title: "5+ Years",
    subtitle: "Senior teaching authority with deep syllabus and exam mastery",
    icon: FaLaptop,
    badge: "👑 Senior Faculty",
  },
];

export const studentLevelOptions = [
  {
    title: "Primary School (1-5)",
    subtitle: "Foundation learning, engaging activities & language basics.",
    badge: "🎒 Primary",
  },
  {
    title: "Middle School (6-8)",
    subtitle: "Core academic concepts & subject interest building.",
    badge: "📚 Middle School",
  },
  {
    title: "High School (9-10)",
    subtitle: "Secondary CBSE/ICSE board preparation & exam strategies.",
    badge: "⚡ Board Prep",
  },
  {
    title: "Senior Secondary (11-12)",
    subtitle: "Advanced stream topics & competitive exam guidance.",
    badge: "🏆 Senior Secondary",
  },
  {
    title: "College Students",
    subtitle: "Higher education coursework & university language credits.",
    badge: "🎓 Higher Ed",
  },
  {
    title: "Adult Learners",
    subtitle: "PR immigration preparation, business communication & hobbies.",
    badge: "💼 Professional",
  },
];

export const teachingModeOptions = [
  {
    title: "Online Classes",
    subtitle: "Teach students worldwide from home via live video & digital whiteboard.",
    badge: "💻 Most Popular",
  },
  {
    title: "Home Tutoring (visits student's home)",
    subtitle: "Visit nearby students for in-person personalized tuition sessions.",
    badge: "🏠 In-Person",
  },
  {
    title: "Hybrid Teaching",
    subtitle: "Flexible combination of online classes and local home visits.",
    badge: "🌟 Maximum Reach",
  },
];

export const tutorAvailabilityOptions = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export const tutorTimeSlots = [
  "6:00 AM - 9:00 AM",
  "9:00 AM - 12:00 PM",
  "12:00 PM - 3:00 PM",
  "3:00 PM - 6:00 PM",
  "6:00 PM - 9:00 PM",
  "9:00 PM - 11:00 PM",
];

export const earningOptions = [
  "₹5,000 - ₹10,000 / month",
  "₹10,000 - ₹20,000 / month",
  "₹20,000 - ₹40,000 / month",
  "₹40,000 - ₹60,000 / month",
  "₹60,000+ / month",
];

export const qualificationOptions = [
  {
    title: "Post Graduate",
    subtitle: "Master's Degree (M.A., M.Sc., M.Com, M.Ed, or equivalent)",
    badge: "🎓 Master's Degree",
  },
  {
    title: "Graduate",
    subtitle: "Bachelor's Degree (B.A., B.Sc., B.Com, B.Tech, or equivalent)",
    badge: "📚 Bachelor's Degree",
  },
  {
    title: "B.Ed",
    subtitle: "Bachelor of Education with professional pedagogy credentials",
    badge: "🏫 Certified Teacher",
  },
  {
    title: "IELTS / Language Certified",
    subtitle: "DELF C1/C2, TEF, Goethe-Zertifikat, or IELTS 8.0+ certified",
    badge: "🌍 Language Specialist",
  },
  {
    title: "Teaching Certification",
    subtitle: "CTET, State TET, or recognized teacher training certification",
    badge: "📜 Board Certified",
  },
  {
    title: "Other Professional Qualification",
    subtitle: "Industry specialist, corporate trainer, or specialized practitioner",
    badge: "⚡ Industry Expert",
  },
];

export const tutorBenefits = [
  {
    title: "Flexible Schedule",
    description: "Teach according to your preferred days and time slots with full control.",
  },
  {
    title: "Consistent Matched Students",
    description: "Receive pre-qualified student leads that match your subject & rate.",
  },
  {
    title: "Keep Up to 85% Earnings",
    description: "Transparent, prompt payouts directly to your bank account with zero delays.",
  },
];
