import {
  FaPlane,
  FaBriefcase,
  FaGraduationCap,
  FaHeart,
  FaLanguage,
  FaGlobe,
  FaBook,
  FaComments,
  FaBolt,
  FaCalculator,
  FaFlask,
  FaCompass,
} from "react-icons/fa";

export const steps = [
  "contact",
  "goal",
  "language",
  "level",
  "availability",
  "time",
  "tutor",
  "matching",
];

export const studentAvatars = [
  {
    id: "fox",
    emoji: "🦊",
    name: "Swift Fox",
    trait: "Speed Learner",
    badge: "Agile & Curious",
    gradient: "from-amber-400 via-orange-400 to-amber-500",
  },
  {
    id: "owl",
    emoji: "🦉",
    name: "Wise Owl",
    trait: "Deep Thinker",
    badge: "Analytical Mind",
    gradient: "from-yellow-400 via-amber-400 to-yellow-500",
  },
  {
    id: "astro",
    emoji: "🚀",
    name: "Astro Cadet",
    trait: "Aiming High",
    badge: "Ambitious Goal",
    gradient: "from-amber-300 via-yellow-400 to-orange-400",
  },
  {
    id: "lion",
    emoji: "🦁",
    name: "Bold Lion",
    trait: "Confident Voice",
    badge: "Fluency Champion",
    gradient: "from-yellow-500 via-amber-500 to-yellow-600",
  },
  {
    id: "spark",
    emoji: "💡",
    name: "Curious Spark",
    trait: "Creative Thinker",
    badge: "Problem Solver",
    gradient: "from-yellow-400 via-amber-300 to-yellow-500",
  },
  {
    id: "target",
    emoji: "🎯",
    name: "Target Master",
    trait: "Exam Focus",
    badge: "Top Ranker",
    gradient: "from-amber-400 via-yellow-500 to-amber-600",
  },
];

export const questStages = [
  { step: 0, label: "Character Profile", icon: "👤", xp: 125 },
  { step: 1, label: "Target Destination", icon: "🎯", xp: 250 },
  { step: 2, label: "Focus Discipline", icon: "📚", xp: 375 },
  { step: 3, label: "Skill Rating", icon: "⚡", xp: 500 },
  { step: 4, label: "Battle Schedule", icon: "📅", xp: 625 },
  { step: 5, label: "Prime Time Slots", icon: "⏰", xp: 750 },
  { step: 6, label: "Learning Arena", icon: "🏛️", xp: 875 },
  { step: 7, label: "Radar Scanner", icon: "🛰️", xp: 1000 },
  { step: 8, label: "Quest Victory", icon: "🏆", xp: 1000 },
];

export const goalOptions = [
  {
    title: "Languages",
    subtitle: "English, French & German Fluency Programs",
    icon: FaLanguage,
    badge: "🔥 Most Popular",
    powerTag: "Certified Faculty",
    highlight: "TEF, DELF & IELTS Ready",
  },
  {
    title: "Academics",
    subtitle: "CBSE & ICSE School Subjects & Board Exam Prep",
    icon: FaGraduationCap,
    badge: "⭐ Proven Syllabus",
    powerTag: "Top Faculty & Mentors",
    highlight: "Class 1 to 12 All Boards",
  },
];

export const languageOptions = [
  {
    title: "French",
    icon: FaGlobe,
    badge: "🇫🇷 Flagship Program",
    powerTag: "TEF / TCF / DELF A1-C2",
    subtitle: "Certified French instructors for Canada PR, DELF exams & school curriculum.",
  },
  {
    title: "English",
    icon: FaLanguage,
    badge: "🇬🇧 High Demand",
    powerTag: "Fluency & IELTS 8.0+",
    subtitle: "Public speaking, business communication, and competitive English training.",
  },
  {
    title: "German",
    icon: FaGlobe,
    badge: "🇩🇪 Global Edge",
    powerTag: "Goethe A1 to B2",
    subtitle: "Structure, grammar & conversational German for studies and career in Europe.",
  },
  {
    title: "Spanish",
    icon: FaGlobe,
    badge: "🇪🇸 Global Language",
    powerTag: "DELE / SIELE A1-C1",
    subtitle: "Master conversational Spanish, business fluency, and official DELE diploma prep.",
  },
  {
    title: "Italian",
    icon: FaGlobe,
    badge: "🇮🇹 European Edge",
    powerTag: "CELI / CILS Prep",
    subtitle: "Learn Italian grammar, accent, and conversational fluency for travel, studies, and culture.",
  },
  {
    title: "Other Language",
    icon: FaGlobe,
    badge: "🌍 Custom Language",
    subtitle: "Learn Japanese, Russian, Arabic, Sanskrit, or another language of your choice.",
    isCustom: true,
  },
];

export const levels = [
  {
    title: "Beginner",
    subtitle: "Starting from scratch — learn basic sounds, vocabulary & foundation.",
    badge: "🌱 Level 1",
  },
  {
    title: "Elementary",
    subtitle: "Know simple phrases — building everyday conversation & basic sentences.",
    badge: "⚡ Level 2",
  },
  {
    title: "Intermediate",
    subtitle: "Comfortable with basics — targeting fluency, complex grammar & speed.",
    badge: "🔥 Level 3",
  },
  {
    title: "Upper Intermediate",
    subtitle: "Conversational speaker — refining accent, idioms & exam questions.",
    badge: "🚀 Level 4",
  },
  {
    title: "Advanced",
    subtitle: "High proficiency — targeting C1/C2 mastery, professional/business fluency.",
    badge: "👑 Level 5",
  },
];

export const focusAreas = [
  "Speaking",
  "Grammar",
  "Writing",
  "Listening",
  "Business Communication",
  "IELTS Preparation",
  "French Conversation",
  "French Certification",
];

export const languageBudgetOptions = [
  "$5 - $10 / lesson",
  "$10 - $20 / lesson",
  "$20 - $30 / lesson",
  "$30 - $50 / lesson",
  "$50+ / lesson",
];

export const timeSlotRichOptions = [
  {
    slot: "6:00 AM - 9:00 AM",
    title: "Morning Fresh",
    badge: "🌅 Early Focus",
    desc: "Quiet, high-concentration morning hours before school/work.",
  },
  {
    slot: "9:00 AM - 12:00 PM",
    title: "Midday Prime",
    badge: "☀️ Prime Energy",
    desc: "Peak alertness for concept clarity and interactive practice.",
  },
  {
    slot: "12:00 PM - 3:00 PM",
    title: "Afternoon Session",
    badge: "🌤️ Midday Flexibility",
    desc: "Great for college students and flexible home learners.",
  },
  {
    slot: "3:00 PM - 6:00 PM",
    title: "Post-School Slot",
    badge: "☕ High Demand",
    desc: "Ideal slot after school hours for homework help & doubts.",
  },
  {
    slot: "6:00 PM - 9:00 PM",
    title: "Evening Peak",
    badge: "🔥 Most Popular",
    desc: "Student favorite slot with maximum active tutors online.",
  },
  {
    slot: "9:00 PM - 11:00 PM",
    title: "Night Owl",
    badge: "🌙 Quiet Focus",
    desc: "Late-night uninterrupted focus for working professionals.",
  },
];

export const timeSlotOptions = [
  "6:00 AM - 9:00 AM",
  "9:00 AM - 12:00 PM",
  "12:00 PM - 3:00 PM",
  "3:00 PM - 6:00 PM",
  "6:00 PM - 9:00 PM",
  "9:00 PM - 11:00 PM",
];

export const academicBudgetOptions = [
  "₹1,000 - ₹2,000 / month",
  "₹2,000 - ₹4,000 / month",
  "₹4,000 - ₹6,000 / month",
  "₹6,000 - ₹10,000 / month",
  "₹10,000+ / month",
];

export const academicSubjects = [
  {
    title: "Mathematics",
    icon: FaCalculator,
    badge: "📐 High Demand",
    subtitle: "Concepts, problem solving & board exam preparation.",
  },
  {
    title: "Science",
    icon: FaFlask,
    badge: "🔬 Lab & Theory",
    subtitle: "Physics, Chemistry & Biology with clear real-world examples.",
  },
  {
    title: "English",
    icon: FaLanguage,
    badge: "📖 Reading & Writing",
    subtitle: "Grammar, literature, comprehension & creative writing skills.",
  },
  {
    title: "Social Studies",
    icon: FaGlobe,
    badge: "🌍 History & Civics",
    subtitle: "Geography, History, Economics & Civics made simple & memorable.",
  },
  {
    title: "Other Subject",
    icon: FaBook,
    badge: "✏️ Custom Domain",
    subtitle: "Economics, Commerce, Accountancy, Computer Science, or other domains.",
    isCustom: true,
  },
];

export const academicLevels = [
  {
    title: "Class 1 - 5",
    subtitle: "Primary School Foundation: gentle guidance, fun learning & curiosity.",
    badge: "🎒 Primary",
  },
  {
    title: "Class 6 - 8",
    subtitle: "Middle School Transition: strong core concepts & subject interest.",
    badge: "📚 Middle School",
  },
  {
    title: "Class 9 - 10",
    subtitle: "Secondary & Board Preparation: CBSE/ICSE board focus & past papers.",
    badge: "⚡ Board Prep",
  },
  {
    title: "Class 11 - 12",
    subtitle: "Senior Secondary Mastery: advanced stream topics & competitive edges.",
    badge: "🏆 Senior Secondary",
  },
];

export const academicFocusAreas = [
  "Homework Help",
  "Exam Preparation",
  "Board Exams",
  "Concept Building",
  "Assignment Support",
  "Higher Grades",
];

export const academicPreferences = [
  {
    title: "Online Classes",
    subtitle: "Live 1-on-1 interactive digital whiteboard sessions from home.",
    badge: "💻 Most Flexible",
  },
  {
    title: "Home Tutoring (tutor visits your home)",
    subtitle: "Verified tutor visits your residence for in-person personalized guidance.",
    badge: "🏠 In-Person",
  },
  {
    title: "One-to-One Tuition",
    subtitle: "Dedicated 100% personal attention focused solely on your pace.",
    badge: "🎯 Maximum Focus",
  },
  {
    title: "Group Classes",
    subtitle: "Small interactive peer squad (3-5 students) for collaborative energy.",
    badge: "👥 Collaborative",
  },
  {
    title: "Weekend Batches",
    subtitle: "Concentrated 2-day deep dive sessions on Saturdays & Sundays.",
    badge: "🗓️ Weekends",
  },
];

export const availabilityOptions = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export const tutorPreferences = [
  {
    title: "Online Classes",
    subtitle: "Live 1-on-1 interactive digital video sessions with recording access.",
    badge: "💻 Recommended",
  },
  {
    title: "Home Tutoring (tutor visits your home)",
    subtitle: "Certified faculty visits your home for direct personal attention.",
    badge: "🏠 In-Person",
  },
  {
    title: "Weekend Classes",
    subtitle: "Saturday & Sunday focused batches designed for busy weekday routines.",
    badge: "🗓️ Weekends",
  },
  {
    title: "Weekday Classes",
    subtitle: "Regular Monday to Friday learning pace for steady daily progress.",
    badge: "⚡ Steady Pace",
  },
  {
    title: "One-to-One Learning",
    subtitle: "Exclusive custom curriculum matching your exact goals and learning speed.",
    badge: "🎯 1-on-1 Ultra Focus",
  },
];

export const tutors = [
  {
    name: "English Program",
    role: "Communication & Fluency",
    rating: "4.9",
    students: "Active",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "French Program",
    role: "Beginner to Advanced",
    rating: "4.8",
    students: "Active",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];
