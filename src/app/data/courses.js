import {
  FaComments,
  FaMicrophone,
  FaBookOpen,
  FaCheckCircle,
  FaUserTie,
  FaBullhorn,
  FaGlobeEurope,
  FaGraduationCap,
} from "react-icons/fa";

export const courses = [
  // 1. English Speaking Mastery
  {
    _id: "685a1f4a7b9c4d001f2e1234",
    id: "course-eng-1",
    title: "English Speaking Mastery Course",
    slug: "english-speaking-mastery",
    category: "English Speaking",
    level: "Beginner to Intermediate",
    duration: "3 Months (60 Hours)",
    durationInMonths: 3,
    mode: "Live Online Batches",
    classType: "Live Online",
    price: 4999,
    originalPrice: 7999,
    language: "English",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "Fluency & Confidence",
    shortDescription:
      "Master spoken English, communication skills, pronunciation, vocabulary, public speaking, and interview preparation through live interactive classes.",
    description: `English Speaking Mastery is a comprehensive Spoken English and Communication Skills Program designed to help learners become confident, fluent, and effective English speakers.

The course focuses on practical communication rather than memorization. Students participate in live speaking activities, role plays, group discussions, pronunciation exercises, grammar workshops, vocabulary-building sessions, presentation practice, and interview preparation.`,
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/english-speaking-mastery",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    tags: [
      "english speaking course",
      "spoken english classes",
      "communication skills",
      "english fluency",
      "spoken english training",
      "public speaking",
      "interview preparation",
      "english grammar",
    ],
    learningOutcomes: [
      "Speak English confidently in daily life",
      "Improve pronunciation and fluency",
      "Build a strong practical vocabulary",
      "Master spoken grammar naturally",
      "Participate confidently in group discussions",
      "Prepare for job interviews effectively",
    ],
    outcomes: [
      "Speak English confidently in daily life",
      "Improve pronunciation and fluency",
      "Build a strong practical vocabulary",
      "Master spoken grammar naturally",
      "Prepare for job interviews effectively",
    ],
    requirements: [
      "Basic understanding of English is helpful but not mandatory",
      "Internet connection for online sessions",
      "Notebook for assignments and practice",
    ],
    targetAudience: [
      "School Students",
      "College Students",
      "Job Seekers",
      "Working Professionals",
      "Entrepreneurs",
    ],
    whoIsThisFor: [
      "School Students from Class 6 to 12",
      "College students preparing for placements",
      "Beginners who hesitate while speaking English",
      "Job seekers preparing for interviews",
      "Working professionals improving workplace communication",
    ],
    modules: [
      {
        title: "Introduction to Spoken English",
        description: "Build confidence through basic communication and everyday conversations.",
        lessons: ["Self Introduction", "Greetings and Introductions", "Basic Vocabulary", "Daily Conversations"],
      },
      {
        title: "Grammar Foundations",
        description: "Learn practical grammar required for fluent communication.",
        lessons: ["Tenses", "Sentence Structure", "Articles", "Prepositions"],
      },
      {
        title: "Vocabulary Development",
        description: "Expand vocabulary for academic, professional, and daily communication.",
        lessons: ["Daily Use Vocabulary", "Professional Vocabulary", "Synonyms and Antonyms"],
      },
      {
        title: "Pronunciation & Accent Improvement",
        description: "Improve pronunciation, clarity, and speaking confidence.",
        lessons: ["Pronunciation Rules", "Stress and Intonation", "Accent Neutralization"],
      },
      {
        title: "Public Speaking & Presentation Skills",
        description: "Learn to communicate confidently in front of an audience.",
        lessons: ["Speech Practice", "Presentation Techniques", "Storytelling"],
      },
      {
        title: "Interview Preparation",
        description: "Develop communication skills required for interviews.",
        lessons: ["HR Interview Questions", "Mock Interviews", "Professional Communication"],
      },
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Spoken English Basics & Grammar",
        topics: ["Self introductions and greetings", "Sentence structures and tenses", "Daily vocabulary"],
      },
      {
        module: "Module 2",
        title: "Fluency & Interview Prep",
        topics: ["Public speaking & presentation drills", "Mock interviews & HR Q&A", "Accent neutralization"],
      },
    ],
    features: [
      "60 Hours of Live Interactive Sessions",
      "Public Speaking & Presentation Drills",
      "Mock Interviews & HR Q&A Sessions",
      "Accredited Certificate of Completion",
    ],
    seoTitle: "English Speaking Course | Spoken English Classes & Communication Skills Training",
    seoDescription: "Join our English Speaking Mastery Course to improve spoken English, fluency, communication skills, public speaking, and interview preparation.",
    seo: {
      title: "English Speaking Course | Spoken English Classes | Inquisitive Mind Academy",
      description: "Improve spoken English fluency, public speaking, and interview skills with live interactive classes.",
      keywords: ["English speaking course", "Spoken English classes", "Communication skills"],
    },
    batches: [
      { _id: "eng-batch-1", name: "Morning Batch", startDate: "2026-07-01", students: 35 },
      { _id: "eng-batch-2", name: "Evening Batch", startDate: "2026-07-10", students: 28 },
    ],
    results: [
      {
        name: "Aman Sharma",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
        achievement: "Improved Spoken English Confidence",
        result: "Beginner → Fluent Speaker",
        quote: "I was afraid of speaking English in public. After completing this course, I confidently participate in presentations.",
      },
      {
        name: "Priya Verma",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        achievement: "Achieved IELTS Band 7.5",
        result: "Band 5.5 → Band 7.5",
        quote: "The speaking practice and vocabulary sessions significantly improved my fluency.",
      },
    ],
    learnings: [
      { icon: <FaComments />, title: "Speak Confidently", description: "Hold conversations naturally and express your thoughts clearly." },
      { icon: <FaMicrophone />, title: "Improve Pronunciation", description: "Learn correct pronunciation, intonation, and speaking clarity." },
      { icon: <FaBookOpen />, title: "Build Vocabulary", description: "Expand your vocabulary with practical and professional words." },
      { icon: <FaCheckCircle />, title: "Master Spoken Grammar", description: "Understand grammar naturally through speaking activities." },
      { icon: <FaUserTie />, title: "Interview Preparation", description: "Prepare confidently for job interviews." },
      { icon: <FaBullhorn />, title: "Public Speaking", description: "Develop presentation skills and confidence." },
    ],
    faq: [
      { question: "Do I need prior English knowledge?", answer: "No! This course starts from basic sentence building." },
      { question: "Will I get a certificate?", answer: "Yes, an accredited certificate is provided upon completion." },
    ],
    relatedCourses: ["french-language-program", "academic-excellence-program", "spoken-french-masterclass"],
  },

  // 2. French Language Mastery Program
  {
    _id: "685a1f4a7b9c4d001f2e1235",
    id: "course-fr-program",
    title: "French Language Mastery Program",
    slug: "french-language-program",
    category: "French Language",
    level: "Beginner to Advanced",
    duration: "6 Months (120 Hours)",
    durationInMonths: 6,
    mode: "Live Online & Offline Center",
    classType: "Live Online",
    price: 6999,
    originalPrice: 9999,
    language: "French",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "All-in-One French Mastery",
    shortDescription:
      "Learn French from beginner to advanced level through live interactive classes covering speaking, listening, grammar, vocabulary, pronunciation, and DELF exam preparation.",
    description: `French Language Mastery Program is a comprehensive French learning course designed for students, professionals, study-abroad aspirants, and language enthusiasts who want to communicate confidently in French.

The course focuses on all four language skills—speaking, listening, reading, and writing—while building a strong foundation in grammar, vocabulary, pronunciation, and real-world communication.`,
    coverImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/french-language-program",
      url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    },
    tags: [
      "french language course",
      "learn french",
      "french speaking classes",
      "french grammar",
      "delf preparation",
      "study abroad",
      "french communication",
    ],
    learningOutcomes: [
      "Speak French confidently in everyday situations",
      "Understand French grammar and sentence formation",
      "Improve listening and comprehension skills",
      "Develop strong French vocabulary",
      "Prepare for DELF and other French certifications",
    ],
    outcomes: [
      "Speak French confidently in everyday situations",
      "Understand French grammar and sentence formation",
      "Prepare for DELF and TEF certification exams",
    ],
    requirements: [
      "No prior French knowledge required",
      "Internet connection for online classes",
      "Notebook for assignments and vocabulary practice",
    ],
    targetAudience: [
      "School Students",
      "College Students",
      "Study Abroad Aspirants",
      "Working Professionals",
      "Travel Enthusiasts",
    ],
    whoIsThisFor: [
      "Students planning to study abroad in France or Canada",
      "College students seeking international education opportunities",
      "Professionals working with international clients",
      "Individuals preparing for DELF examinations",
    ],
    modules: [
      {
        title: "French Basics & Pronunciation",
        description: "Build a strong foundation with French alphabet, pronunciation, greetings, and introductions.",
        lessons: ["French Alphabet", "Pronunciation Rules", "Greetings & Introductions", "Basic Conversations"],
      },
      {
        title: "French Grammar Foundations",
        description: "Understand the building blocks of French grammar and sentence formation.",
        lessons: ["Nouns & Articles", "Present Tense Verbs", "Sentence Structure"],
      },
      {
        title: "Vocabulary & Conversation",
        description: "Expand practical vocabulary for everyday and professional communication.",
        lessons: ["Daily Life Vocabulary", "Travel Vocabulary", "Role Plays"],
      },
      {
        title: "DELF Exam Preparation",
        description: "Prepare for internationally recognized French language certification exams.",
        lessons: ["DELF Format", "Mock Tests", "Speaking Assessment"],
      },
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "French Foundations & Grammar",
        topics: ["Alphabet, phonetics & greetings", "Nouns, articles & present tenses", "Everyday vocabulary"],
      },
      {
        module: "Module 2",
        title: "Advanced Speaking & DELF Prep",
        topics: ["Role plays & conversation practice", "DELF A1-B2 exam modules", "Cultural communication"],
      },
    ],
    features: [
      "120 Hours of Complete Language Instruction",
      "Covers CEFR A1 to B2 Standards",
      "DELF & TEF Canada Mock Exam Practice",
      "Small Group Interactive Batches",
    ],
    seoTitle: "French Language Course | Learn French Online | DELF Preparation Classes",
    seoDescription: "Join our French Language Mastery Program to learn French speaking, grammar, vocabulary, pronunciation, and DELF exam preparation.",
    seo: {
      title: "French Language Mastery Program | Inquisitive Mind Academy",
      description: "Learn French online from A1 to B2 level with certified native-aligned tutors.",
      keywords: ["French language course", "Learn French online", "DELF prep"],
    },
    batches: [
      { _id: "fr-batch-1", name: "Weekend Batch", startDate: "2026-07-15", students: 20 },
      { _id: "fr-batch-2", name: "Evening Batch", startDate: "2026-08-01", students: 18 },
    ],
    results: [
      {
        name: "Neha Kapoor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        achievement: "Passed DELF A2 Certification",
        result: "Beginner → Certified French Learner",
        quote: "The structured lessons and speaking practice helped me achieve my DELF certification.",
      },
    ],
    learnings: [
      { icon: <FaGlobeEurope />, title: "French Communication", description: "Speak naturally and confidently in real-life situations." },
      { icon: <FaBookOpen />, title: "Grammar Mastery", description: "Understand French grammar through practical examples." },
      { icon: <FaComments />, title: "Conversation Practice", description: "Develop fluency through guided speaking activities." },
      { icon: <FaCheckCircle />, title: "DELF Preparation", description: "Prepare confidently for French certification exams." },
    ],
    faq: [
      { question: "Is this suitable for beginners?", answer: "Yes, it covers starting from zero up to advanced level." },
    ],
    relatedCourses: ["french-a1-beginner-course", "french-a2-elementary-course", "tef-canada-preparation-bundle"],
  },

  // 3. Academic Excellence Program
  {
    _id: "685a1f4a7b9c4d001f2e1236",
    id: "course-acad-1",
    title: "Academic Excellence Program",
    slug: "academic-excellence-program",
    category: "Academic Tuition",
    level: "Class 1 - 12",
    duration: "12 Months (Full Academic Year)",
    durationInMonths: 12,
    mode: "Online & Offline Centers",
    classType: "Online & Offline",
    price: 3999,
    originalPrice: 6999,
    language: "English & Hindi",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: false,
    badge: "Class 1-12 Board Prep",
    shortDescription:
      "Comprehensive academic tuition program for Class 1 to 12 students designed to improve grades, strengthen concepts, boost confidence, and prepare for board examinations.",
    description: `Academic Excellence Program is a complete tuition and academic support program designed for students from Class 1 to Class 12.

The program focuses on building strong subject fundamentals, improving academic performance, strengthening problem-solving abilities, and developing effective study habits. Students receive personalized attention, structured lesson plans, regular assessments, and board exam preparation.`,
    coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/academic-excellence",
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    tags: [
      "tuition classes",
      "academic coaching",
      "school tuition",
      "cbse tuition",
      "icse tuition",
      "pseb tuition",
      "board exam preparation",
    ],
    learningOutcomes: [
      "Improve academic performance and grades",
      "Strengthen conceptual understanding across subjects",
      "Develop effective study habits and discipline",
      "Perform confidently in school and board examinations",
    ],
    outcomes: [
      "Improve academic performance and school grades",
      "Master Mathematics, Science, English, and Social Studies concepts",
      "Excel in CBSE / ICSE / Board examinations",
    ],
    requirements: [
      "School Enrollment",
      "Notebook and study materials",
      "Regular attendance and participation",
    ],
    targetAudience: [
      "Students from Class 1 to Class 12",
      "CBSE, ICSE, and Board Exam Students",
      "Parents seeking structured academic guidance",
    ],
    whoIsThisFor: [
      "Students from Class 1 to Class 12",
      "CBSE, ICSE, and PSEB students preparing for board exams",
      "Students requiring individual academic attention",
    ],
    modules: [
      {
        title: "Foundation Building",
        description: "Strengthen basic concepts and develop a strong academic foundation.",
        lessons: ["Concept Understanding", "Learning Techniques", "Subject Fundamentals"],
      },
      {
        title: "Mathematics & Science Excellence",
        description: "Build strong analytical and problem-solving skills.",
        lessons: ["Algebra & Geometry", "Physics & Chemistry Concepts", "Biology Topics"],
      },
      {
        title: "Exam Preparation & Mock Tests",
        description: "Prepare effectively for school tests and board examinations.",
        lessons: ["Exam Strategies", "Revision Planning", "Sample Papers & Mock Tests"],
      },
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Core Subject Fundamentals",
        topics: ["Mathematics problem solving", "Science concepts & practicals", "English grammar & literature"],
      },
      {
        module: "Module 2",
        title: "Board Exam Revision & Mocks",
        topics: ["Previous years paper solving", "Time management in exams", "Dedicated doubt sessions"],
      },
    ],
    features: [
      "Complete Academic Year Support",
      "CBSE / ICSE / Board Curriculum Aligned",
      "Regular Chapter Tests & Parent Progress Meetings",
      "Small Batch Personal Attention",
    ],
    seoTitle: "Academic Tuition Classes | Class 1 to 12 Coaching & Board Exam Preparation",
    seoDescription: "Join our Academic Excellence Program for Class 1 to 12 students. Improve grades, strengthen concepts, and prepare for board exams.",
    seo: {
      title: "Academic Excellence Program | Class 1-12 Tuition | Inquisitive Mind Academy",
      description: "Comprehensive school tuition for Class 1 to 12 students in CBSE, ICSE, and Board exams.",
      keywords: ["School tuition", "CBSE coaching", "Class 1-12 tuition"],
    },
    batches: [
      { _id: "acad-batch-1", name: "Regular Batch", startDate: "2026-07-01", students: 50 },
      { _id: "acad-batch-2", name: "Weekend Batch", startDate: "2026-07-10", students: 35 },
    ],
    results: [
      {
        name: "Rahul Singh",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        achievement: "Improved Academic Performance",
        result: "70% → 92%",
        quote: "The regular tests, assignments, and guidance helped me improve my grades significantly.",
      },
    ],
    learnings: [
      { icon: <FaGraduationCap />, title: "Academic Growth", description: "Build strong subject knowledge and learning skills." },
      { icon: <FaCheckCircle />, title: "Exam Readiness", description: "Prepare confidently for school tests and board exams." },
      { icon: <FaBookOpen />, title: "Subject Mastery", description: "Develop deep understanding of core subjects." },
    ],
    faq: [
      { question: "Which boards are covered?", answer: "CBSE, ICSE, PSEB, and all state educational boards." },
    ],
    relatedCourses: ["english-speaking-mastery", "french-a1-beginner-course"],
  },

  // 4. French A1 Beginner Course
  {
    id: "course-1",
    _id: "685a2f5b7b9c4d001f2e5678",
    slug: "french-a1-beginner-course",
    title: "French A1 Beginner Foundation Course",
    category: "General French",
    level: "A1 Breakthrough (Beginner)",
    duration: "8 Weeks (60 Hours)",
    durationInMonths: 2,
    mode: "Online Live & Offline Center",
    classType: "Live Online",
    price: 4999,
    originalPrice: 7999,
    language: "French",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "Bestseller Beginner",
    shortDescription:
      "Start your French journey from scratch. Master basic greetings, phonetics, daily vocabulary, sentence structure, and simple conversations.",
    description:
      "The French A1 Beginner Foundation Course is designed for absolute beginners with zero prior knowledge of French. Following the CEFR framework, this course builds a rock-solid foundation in French phonetics, essential grammar, basic vocabulary, and everyday communication skills.",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/french-a1-beginner",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    tags: ["French A1 course", "Learn French for beginners", "French classes online", "CEFR A1"],
    curriculum: [
      {
        module: "Module 1",
        title: "French Alphabet, Phonetics & Salutations",
        topics: [
          "French pronunciation rules, accents, and silent letters",
          "Formal and informal greetings (Bonjour, Salutation, Au revoir)",
          "Introducing yourself: Name, age, nationality, and profession",
          "Numbers 0–100 and basic mathematical expressions",
        ],
      },
      {
        module: "Module 2",
        title: "Essential Grammar & Everyday Verbs",
        topics: [
          "Auxiliary verbs: Être (To be) & Avoir (To have)",
          "1st group regular -ER verbs conjugation in Present Tense",
          "Definite and indefinite articles (le, la, les, un, une, des)",
        ],
      },
    ],
    modules: [
      {
        title: "French Alphabet & Phonetics",
        description: "Master French sounds, greetings, and introductions.",
        lessons: ["Alphabet", "Phonetics", "Greetings", "Introductions"],
      },
      {
        title: "Essential Grammar",
        description: "Present tense, articles, and simple question formation.",
        lessons: ["Être & Avoir", "-ER Verbs", "Articles", "Questions"],
      },
    ],
    features: [
      "60 Hours of Live Interactive Sessions",
      "Comprehensive Digital Workbook & Audio Practice Files",
      "DELF A1 Pattern Practice & Mock Tests",
      "Small Batch Guarantee (Max 10 Students)",
    ],
    outcomes: [
      "Introduce yourself and hold simple French conversations fluently",
      "Understand basic spoken French at slow and clear speech rates",
      "Write short notes, emails, and personal messages in correct French",
    ],
    learningOutcomes: [
      "Introduce yourself confidently in French",
      "Understand everyday French conversations",
      "Write short emails and messages in French",
    ],
    requirements: ["No prior knowledge of French required", "Internet connection for online classes"],
    targetAudience: ["Complete Beginners", "Students", "Canada PR Aspirants"],
    whoIsThisFor: ["Complete beginners starting French", "Students planning study in France or Canada"],
    relatedCourses: ["french-a2-elementary-course", "french-b1-intermediate-course", "spoken-french-masterclass"],
    faq: [
      { question: "Do I need any previous knowledge of French?", answer: "No! This course starts from absolute zero." },
    ],
    seoTitle: "French A1 Beginner Course | Learn French Online | Inquisitive Mind Academy",
    seoDescription: "Enroll in the top-rated French A1 Beginner Course. Learn greetings, phonetics, grammar, and daily conversations.",
    seo: {
      title: "French A1 Beginner Course | Learn French Online | Inquisitive Mind Academy",
      description: "Enroll in the top-rated French A1 Beginner Course.",
      keywords: ["French A1 course", "Learn French for beginners"],
    },
    batches: [
      { _id: "fr-a1-b1", name: "Morning Batch", startDate: "2026-07-05", students: 22 },
    ],
    results: [
      {
        name: "Neha Kapoor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        achievement: "Started French from Scratch",
        result: "Beginner → A1 Certified",
        quote: "The interactive classes made learning French simple and enjoyable.",
      },
    ],
    learnings: [
      { icon: <FaComments />, title: "Speak Basic French", description: "Communicate confidently in everyday French." },
      { icon: <FaMicrophone />, title: "French Pronunciation", description: "Develop accurate pronunciation and listening skills." },
    ],
  },

  // 5. French A2 Elementary Course
  {
    id: "course-2",
    _id: "685a3f7b7b9c4d001f2e6789",
    slug: "french-a2-elementary-course",
    title: "French A2 Elementary Level Course",
    category: "General French",
    level: "A2 Elementary (Waystage)",
    duration: "10 Weeks (75 Hours)",
    durationInMonths: 3,
    mode: "Online Live & Offline Center",
    classType: "Live Online",
    price: 5999,
    originalPrice: 8999,
    language: "French",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "Intermediate Pathway",
    shortDescription:
      "Expand your communication skills. Master past tenses (Passé Composé, Imparfait), future tenses, express opinions, and handle routine social exchanges.",
    description:
      "Take your French to the next level with the French A2 Elementary Course. Designed for learners who have completed A1, this course focuses on expressing past events, making plans, giving advice, describing habits, and communicating smoothly.",
    coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/french-a2-course",
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    },
    tags: ["French A2 course", "DELF A2 coaching", "Learn French level A2"],
    curriculum: [
      {
        module: "Module 1",
        title: "Narrating Past Events (Passé Composé & Imparfait)",
        topics: [
          "Forming Passé Composé with Avoir and Être",
          "Irregular past participles and agreement rules",
          "Using L'Imparfait for past descriptions and habits",
        ],
      },
    ],
    modules: [
      {
        title: "Past & Future Tenses",
        description: "Passé Composé, Imparfait, and Futur Simple.",
        lessons: ["Passé Composé", "Imparfait", "Futur Simple", "Pronouns"],
      },
    ],
    features: [
      "75 Hours of Interactive Live Classroom Coaching",
      "In-Depth Grammar Worksheets & Audio Exercises",
      "DELF A2 Exam Strategies & Practice Tests",
    ],
    outcomes: [
      "Describe past personal experiences and future travel plans with ease",
      "Express personal opinions, agreement, and disagreement in French",
      "Pass the official DELF A2 diploma exam with high marks",
    ],
    learningOutcomes: [
      "Describe past experiences and future plans",
      "Pass official DELF A2 examination",
    ],
    requirements: ["Completion of French A1 or equivalent knowledge"],
    targetAudience: ["A1 Graduates", "Study Abroad Aspirants", "DELF A2 Candidates"],
    whoIsThisFor: ["Learners who completed A1 level", "Students preparing for DELF A2"],
    relatedCourses: ["french-a1-beginner-course", "french-b1-intermediate-course", "delf-b2-exam-prep-masterclass"],
    faq: [{ question: "What is the prerequisite?", answer: "Completion of French A1 level." }],
    seoTitle: "French A2 Elementary Course | DELF A2 Prep | Inquisitive Mind Academy",
    seoDescription: "Master past tenses, future plans, and routine conversations with our French A2 Elementary Course.",
    seo: {
      title: "French A2 Elementary Course | DELF A2 Prep",
      description: "Master past tenses and routine conversations.",
      keywords: ["French A2 course", "DELF A2 coaching"],
    },
    batches: [{ _id: "fr-a2-b1", name: "Morning Batch", startDate: "2026-07-08", students: 20 }],
    results: [
      {
        name: "Riya Sharma",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        achievement: "Passed DELF A2",
        result: "A1 → A2 Certified",
        quote: "The speaking sessions and mock tests gave me confidence.",
      },
    ],
    learnings: [
      { icon: <FaComments />, title: "Fluent Conversations", description: "Communicate naturally in everyday situations." },
    ],
  },

  // 6. French B1 Intermediate Course
  {
    id: "course-3",
    _id: "685a4f8c7b9c4d001f2e7890",
    slug: "french-b1-intermediate-course",
    title: "French B1 Intermediate Fluency Course",
    category: "Intermediate French",
    level: "B1 Threshold (Intermediate)",
    duration: "10 Weeks (75 Hours)",
    durationInMonths: 3,
    mode: "Online Live & Offline Center",
    classType: "Live Online",
    price: 7499,
    originalPrice: 11999,
    language: "French",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "Independent User",
    shortDescription:
      "Achieve independent communication. Express thoughts, feelings, debate topics, master Subjunctive mood, and prepare for DELF B1 certification.",
    description:
      "The French B1 Intermediate Course transforms you into an independent user of the language. Learn to enter unprepared into conversations on familiar topics, express emotions, explain reasons for opinions, and master Subjunctive mood.",
    coverImage: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/french-b1-course",
      url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3",
    },
    tags: ["French B1 course", "DELF B1 coaching", "Intermediate French classes"],
    curriculum: [
      {
        module: "Module 1",
        title: "Subjunctive Mood & Expressing Opinions",
        topics: [
          "Subjonctif Présent formation and usage triggers",
          "Expressing necessity, desire, emotion, doubt, and opinion",
        ],
      },
    ],
    modules: [
      {
        title: "Subjunctive & Debates",
        description: "Subjunctive mood, passive voice, and argumentative speech.",
        lessons: ["Subjonctif", "Relative Pronouns", "Debates"],
      },
    ],
    features: [
      "75 Hours of Advanced Interactive Training",
      "Debate Clubs & Conversational Workshops",
      "DELF B1 Mock Exam Series",
    ],
    outcomes: [
      "Maintain conversations comfortably on abstract and cultural topics",
      "Write structured essays, complaints, and formal letters",
      "Fully prepared for DELF B1 diploma exams",
    ],
    learningOutcomes: [
      "Maintain conversations comfortably on abstract topics",
      "Pass DELF B1 diploma exam",
    ],
    requirements: ["Completion of French A2 level"],
    targetAudience: ["A2 Graduates", "Canada Immigration Aspirants", "DELF B1 Candidates"],
    whoIsThisFor: ["Learners completing A2 level", "Students preparing for DELF B1"],
    relatedCourses: ["french-a2-elementary-course", "french-b2-advanced-course", "tef-canada-preparation-bundle"],
    faq: [{ question: "Is B1 sufficient for work?", answer: "B1 provides solid working proficiency for basic business." }],
    seoTitle: "French B1 Intermediate Course | DELF B1 Prep | Inquisitive Mind Academy",
    seoDescription: "Master independent French communication, Subjunctive mood, and debating skills with French B1 Course.",
    seo: {
      title: "French B1 Intermediate Course | DELF B1 Prep",
      description: "Master independent French communication.",
      keywords: ["French B1 course", "DELF B1 coaching"],
    },
    batches: [{ _id: "fr-b1-b1", name: "Evening Batch", startDate: "2026-07-10", students: 18 }],
    results: [
      {
        name: "Ananya Gupta",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        achievement: "Cleared DELF B1",
        result: "A2 → B1 Certified",
        quote: "The course gave me confidence in debating and writing in French.",
      },
    ],
    learnings: [
      { icon: <FaComments />, title: "Independent Fluency", description: "Express viewpoints and debate comfortably." },
    ],
  },

  // 7. DELF B2 Exam Prep Masterclass
  {
    id: "course-4",
    _id: "685a5f9d7b9c4d001f2e8901",
    slug: "delf-b2-exam-prep-masterclass",
    title: "DELF B2 Exam Preparation Masterclass",
    category: "Exam Preparation",
    level: "B2 Vantage (Upper-Intermediate)",
    duration: "10 Weeks (75 Hours)",
    durationInMonths: 3,
    mode: "Online Live & Offline Center",
    classType: "Live Online",
    price: 8999,
    originalPrice: 14999,
    language: "French",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "University Gateway",
    shortDescription:
      "Targeted masterclass for DELF B2. Master synthesis, formal essay writing, oral presentation, and complex listening comprehension.",
    description:
      "DELF B2 diploma is the gateway to tuition-free French universities and professional careers in Francophone nations. Our Masterclass is designed specifically around official France Éducation International exam standards.",
    coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/delf-b2-masterclass",
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    },
    tags: ["DELF B2 masterclass", "DELF B2 exam coaching", "French B2 test prep"],
    curriculum: [
      {
        module: "Module 1",
        title: "Production Écrite (Writing Mastery)",
        topics: [
          "Writing formal letters of complaint, protest, and proposal",
          "Mastering formal registers and connectors",
        ],
      },
      {
        module: "Module 2",
        title: "Production Orale (Oral Monologue & Debate)",
        topics: [
          "Constructing a structured 10-minute monologue",
          "Defending arguments against examiner counter-questions",
        ],
      },
    ],
    modules: [
      {
        title: "DELF B2 Writing & Oral Defense",
        description: "Formal letter synthesis, monologue construction, and debate.",
        lessons: ["Production Écrite", "Production Orale", "Compréhension Orale"],
      },
    ],
    features: [
      "75 Hours of Rigorous Exam Training",
      "Personalized Essay Grading by Certified Evaluators",
      "5 Full-Length DELF B2 Timed Mock Examinations",
    ],
    outcomes: [
      "Pass DELF B2 diploma with high scores across all 4 skill areas",
      "Qualify for direct university admission in France without language tests",
    ],
    learningOutcomes: [
      "Pass DELF B2 diploma with high scores",
      "Qualify for French university admission",
    ],
    requirements: ["B1/B2 level French proficiency"],
    targetAudience: ["DELF B2 Candidates", "France University Aspirants"],
    whoIsThisFor: ["Candidates sitting for official DELF B2 diploma"],
    relatedCourses: ["french-b1-intermediate-course", "french-b2-advanced-course", "tef-canada-preparation-bundle"],
    faq: [{ question: "Does DELF B2 expire?", answer: "No, DELF B2 is a lifetime valid diploma." }],
    seoTitle: "DELF B2 Prep Masterclass | Inquisitive Mind Academy",
    seoDescription: "Prepare for DELF B2 exam with certified evaluators. Master writing, oral defense, and synthesis.",
    seo: {
      title: "DELF B2 Prep Masterclass",
      description: "Prepare for DELF B2 exam with certified evaluators.",
      keywords: ["DELF B2 masterclass", "DELF B2 exam coaching"],
    },
    batches: [{ _id: "delf-b2-b1", name: "Weekend Sprint", startDate: "2026-07-20", students: 15 }],
    results: [
      {
        name: "Rohan Mehta",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
        achievement: "Passed DELF B2",
        result: "University Admission Secured",
        quote: "The essay evaluation and mock oral debates were crucial for my success.",
      },
    ],
    learnings: [
      { icon: <FaCheckCircle />, title: "DELF B2 Mastery", description: "Master formal writing synthesis and oral defense." },
    ],
  },

  // 8. TEF Canada Prep Bundle
  {
    id: "course-5",
    _id: "685a6fae7b9c4d001f2e9012",
    slug: "tef-canada-preparation-bundle",
    title: "TEF Canada Express Entry Exam Prep Bundle",
    category: "Exam Preparation",
    level: "B1-B2 Target NCLC 7+",
    duration: "12 Weeks (90 Hours)",
    durationInMonths: 3,
    mode: "Online Live Batches",
    classType: "Live Online",
    price: 12999,
    originalPrice: 19999,
    language: "French",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "PR CRS Booster",
    shortDescription:
      "Intensive coaching package specifically designed for Canadian immigration candidates aiming for NCLC 7+ (50 CRS points).",
    description:
      "Maximize your Express Entry CRS score with our TEF Canada Exam Prep Bundle. Focus on computer-based test strategies, listening speed drills, fast reading elimination techniques, and formal writing templates.",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/tef-canada-bundle",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    tags: ["TEF Canada prep course", "TEF French coaching", "Canadian PR French points"],
    curriculum: [
      {
        module: "Module 1",
        title: "TEF Reading & Listening Speed Hacks",
        topics: [
          "Techniques to tackle 40 fast-paced listening audio tracks",
          "Speed reading strategies for 40 comprehension texts in 60 minutes",
        ],
      },
      {
        module: "Module 2",
        title: "TEF Writing & Speaking Tasks A & B",
        topics: [
          "Task A: Newspaper continuation & Task B: Letter to editor",
          "Task A: Information gathering & Task B: Persuading a friend",
        ],
      },
    ],
    modules: [
      {
        title: "TEF Canada Speed & Accuracy",
        description: "Listening speed drills, reading techniques, Section A & B speaking/writing.",
        lessons: ["Compréhension Écrite", "Compréhension Orale", "Expression Écrite", "Expression Orale"],
      },
    ],
    features: [
      "90 Hours of Targeted TEF Canada Drills",
      "50+ 1-on-1 Simulated Oral Speaking Tests",
      "Unlimited Essay Task Evaluation with Detailed Feedback",
    ],
    outcomes: [
      "Achieve NCLC level 7 or higher across all 4 TEF modules",
      "Unlock 50 bonus CRS points under Canadian Express Entry",
    ],
    learningOutcomes: [
      "Score NCLC 7+ across all 4 modules",
      "Claim 50 bonus CRS points for Express Entry",
    ],
    requirements: ["B1 level French understanding recommended"],
    targetAudience: ["Canada PR Express Entry Applicants", "PNP Candidates"],
    whoIsThisFor: ["Express Entry & PNP candidates aiming for NCLC 7+"],
    relatedCourses: ["delf-b2-exam-prep-masterclass", "french-b1-intermediate-course", "french-b2-advanced-course"],
    faq: [{ question: "How long is TEF valid for IRCC?", answer: "TEF Canada results are valid for 2 years." }],
    seoTitle: "TEF Canada Exam Prep Bundle | Inquisitive Mind Academy",
    seoDescription: "Prepare for TEF Canada to get NCLC 7+ and 50 bonus CRS points for Express Entry Canadian PR.",
    seo: {
      title: "TEF Canada Exam Prep Bundle",
      description: "Get NCLC 7+ and 50 bonus CRS points for Express Entry.",
      keywords: ["TEF Canada prep course", "TEF French coaching"],
    },
    batches: [{ _id: "tef-b1", name: "Express PR Batch", startDate: "2026-07-12", students: 25 }],
    results: [
      {
        name: "Vikramjit Singh",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        achievement: "Achieved NCLC 7 in TEF Canada",
        result: "Secured 50 CRS Points",
        quote: "The 1-on-1 speaking mocks and writing feedback were essential for my score.",
      },
    ],
    learnings: [
      { icon: <FaCheckCircle />, title: "NCLC 7 Target", description: "Master speed techniques for TEF Canada listening & reading." },
    ],
  },

  // 9. Spoken French Masterclass
  {
    id: "course-6",
    _id: "685a7fbf7b9c4d001f2e0123",
    slug: "spoken-french-masterclass",
    title: "Spoken French Conversational Masterclass",
    category: "Spoken & Skill Booster",
    level: "All Levels (A1 to B2)",
    duration: "4 Weeks (30 Hours)",
    durationInMonths: 1,
    mode: "Online Live & Offline Center",
    classType: "Live Online",
    price: 3999,
    originalPrice: 5999,
    language: "French",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "Fluency Booster",
    shortDescription:
      "Overcome hesitation, refine your French accent, learn real slang & idioms, and build natural speaking confidence.",
    description:
      "Designed specifically for learners who know grammar but hesitate when speaking. This intensive 4-week workshop focuses exclusively on phonetics, conversational flow, everyday French expressions, and group discussions.",
    coverImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/spoken-french-masterclass",
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    },
    tags: ["Spoken French masterclass", "French speaking course", "Fluent French speaking"],
    curriculum: [
      {
        module: "Module 1",
        title: "French Phonetics & Accent Reduction",
        topics: [
          "Liaison, enchaînement, and nasal vowel sounds",
          "Intonation patterns in questions and exclamations",
        ],
      },
    ],
    modules: [
      {
        title: "Phonetics & Slang Workshop",
        description: "Pronunciation, liaison rules, everyday idioms, and informal French.",
        lessons: ["Phonetics", "Liaisons", "Argot & Idioms", "Debates"],
      },
    ],
    features: [
      "30 Hours of Pure Speaking Practice",
      "Small Group Discussions (Max 6 Students)",
      "Individual Pronunciation Audit & Audio Corrections",
    ],
    outcomes: [
      "Speak French without long pauses or hesitation",
      "Understand fast native French speakers comfortably",
    ],
    learningOutcomes: [
      "Speak French without hesitation",
      "Understand fast native French speakers",
    ],
    requirements: ["Basic French vocabulary knowledge"],
    targetAudience: ["Learners seeking oral fluency", "Travelers", "Job Seekers"],
    whoIsThisFor: ["Learners who know grammar but hesitate when speaking"],
    relatedCourses: ["french-a1-beginner-course", "french-a2-elementary-course"],
    faq: [{ question: "Is there a written exam?", answer: "No, this workshop is 100% oral speaking practice." }],
    seoTitle: "Spoken French Masterclass | Inquisitive Mind Academy",
    seoDescription: "Boost spoken French fluency, eliminate accent barriers, and gain confidence in conversation.",
    seo: {
      title: "Spoken French Masterclass",
      description: "Boost spoken French fluency and eliminate accent barriers.",
      keywords: ["Spoken French masterclass", "French speaking course"],
    },
    batches: [{ _id: "spk-b1", name: "Oral Fluency Batch", startDate: "2026-07-05", students: 12 }],
    results: [
      {
        name: "Karan Johar",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
        achievement: "Eliminated Hesitation",
        result: "Fluent Spoken French",
        quote: "The small group discussions helped me overcome my fear of making mistakes.",
      },
    ],
    learnings: [
      { icon: <FaMicrophone />, title: "Accent & Phonetics", description: "Refine your French accent and master nasal vowel sounds." },
    ],
  },

  // 10. French B2 Advanced Course
  {
    id: "course-7",
    _id: "685a8fc07b9c4d001f2e1234",
    slug: "french-b2-advanced-course",
    title: "French B2 Advanced Fluency Course",
    category: "Advanced French",
    level: "B2 Vantage (Upper-Intermediate)",
    duration: "10 Weeks (75 Hours)",
    durationInMonths: 3,
    mode: "Online Live & Offline Center",
    classType: "Live Online",
    price: 8499,
    originalPrice: 12999,
    language: "French",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "Near-Fluent Level",
    shortDescription:
      "Build advanced, near-fluent French. Master nuanced argumentation, formal writing, complex grammar structures, and confident spontaneous speech.",
    description:
      "The French B2 Advanced Fluency Course is for learners who've completed B1 and want to reach an independent, near-native level of communication. You'll learn to understand extended speech, produce clear formal writing, and interact spontaneously.",
    coverImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/french-b2-course",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    tags: ["French B2 course", "Advanced French classes", "B2 French fluency"],
    curriculum: [
      {
        module: "Module 1",
        title: "Advanced Grammar & Nuanced Expression",
        topics: [
          "Subjonctif Passé and advanced subjunctive triggers",
          "Gérondif and participe présent for fluid sentences",
        ],
      },
    ],
    modules: [
      {
        title: "Advanced B2 Fluency",
        description: "Complex syntax, formal argumentation, and media analysis.",
        lessons: ["Subjonctif Passé", "Formal Essays", "Media Comprehension"],
      },
    ],
    features: [
      "75 Hours of Advanced Interactive Coaching",
      "Media-Based Learning (French News, Podcasts)",
      "Structured Essay & Report Writing Feedback",
    ],
    outcomes: [
      "Communicate spontaneously and fluently on a wide range of topics",
      "Write clear, detailed, well-structured formal documents in French",
    ],
    learningOutcomes: [
      "Communicate spontaneously and fluently",
      "Write structured formal documents",
    ],
    requirements: ["Completion of B1 level French"],
    targetAudience: ["B1 Graduates", "University Aspirants"],
    whoIsThisFor: ["Learners who completed B1 level"],
    relatedCourses: ["french-b1-intermediate-course", "delf-b2-exam-prep-masterclass", "french-c1-proficiency-course"],
    faq: [{ question: "Is this different from DELF B2 Masterclass?", answer: "Yes, this builds general B2 fluency while the masterclass focuses on exam strategy." }],
    seoTitle: "French B2 Advanced Course | Near-Fluent French | Inquisitive Mind Academy",
    seoDescription: "Reach near-fluent French with our B2 Advanced Course. Master nuanced grammar and formal writing.",
    seo: {
      title: "French B2 Advanced Course",
      description: "Reach near-fluent French with our B2 Advanced Course.",
      keywords: ["French B2 course", "Advanced French classes"],
    },
    batches: [{ _id: "fr-b2-b1", name: "Evening Batch", startDate: "2026-07-15", students: 16 }],
    results: [
      {
        name: "Siddharth Sen",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
        achievement: "Advanced Fluency Achieved",
        result: "Near-Native Communication",
        quote: "Analyzing French news and podcasts in class took my comprehension to another level.",
      },
    ],
    learnings: [
      { icon: <FaGlobeEurope />, title: "Near-Fluent Expression", description: "Communicate spontaneously on abstract topics." },
    ],
  },

  // 11. French C1 Proficiency Course
  {
    id: "course-8",
    _id: "685a9fd17b9c4d001f2e2345",
    slug: "french-c1-proficiency-course",
    title: "French C1 Proficiency Course",
    category: "Advanced French",
    level: "C1 Effective Operational Proficiency",
    duration: "12 Weeks (90 Hours)",
    durationInMonths: 3,
    mode: "Online Live & Offline Center",
    classType: "Live Online",
    price: 10999,
    originalPrice: 16999,
    language: "French",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "Professional Proficiency",
    shortDescription:
      "Operate in French at a professional, academic level. Master idiomatic expression, stylistic nuance, and complex text production with ease.",
    description:
      "The French C1 Proficiency Course is designed for advanced learners aiming to use French fluently and effectively in academic, professional, and social settings. Refine stylistic control, master idiomatic language, and produce well-structured text on complex subjects.",
    coverImage: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/french-c1-course",
      url: "https://images.unsplash.com/photo-1583468982228-19f19164aee2",
    },
    tags: ["French C1 course", "DALF C1 coaching", "Advanced French proficiency"],
    curriculum: [
      {
        module: "Module 1",
        title: "Stylistic Refinement & Register Control",
        topics: [
          "Shifting fluidly between formal, academic, and colloquial registers",
          "Advanced connectors and rhetorical structuring",
        ],
      },
    ],
    modules: [
      {
        title: "Academic & Professional French C1",
        description: "Register control, document synthesis, and oral defense.",
        lessons: ["Register Control", "Idiomatic French", "Document Synthesis"],
      },
    ],
    features: [
      "90 Hours of Professional-Level Coaching",
      "Academic & Business French Case Studies",
      "One-on-One Oral Defense Practice Sessions",
    ],
    outcomes: [
      "Express yourself fluently and spontaneously without searching for words",
      "Fully prepared to attempt the DALF C1 diploma exam",
    ],
    learningOutcomes: [
      "Express yourself fluently without searching for words",
      "Pass DALF C1 diploma exam",
    ],
    requirements: ["Completion of B2 level French"],
    targetAudience: ["B2 Graduates", "Postgraduate Aspirants"],
    whoIsThisFor: ["Learners requiring professional or academic French C1"],
    relatedCourses: ["french-b2-advanced-course", "french-c2-mastery-course"],
    faq: [{ question: "Is C1 required for postgraduate study?", answer: "Many postgraduate programs in France request a C1 certificate." }],
    seoTitle: "French C1 Proficiency Course | DALF C1 Prep | Inquisitive Mind Academy",
    seoDescription: "Reach professional and academic French proficiency with our C1 course.",
    seo: {
      title: "French C1 Proficiency Course",
      description: "Reach professional and academic French proficiency.",
      keywords: ["French C1 course", "DALF C1 coaching"],
    },
    batches: [{ _id: "fr-c1-b1", name: "Academic Batch", startDate: "2026-07-18", students: 10 }],
    results: [
      {
        name: "Meera Nair",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        achievement: "Passed DALF C1",
        result: "C1 Academic Diploma Secured",
        quote: "The document synthesis practice was top-notch.",
      },
    ],
    learnings: [
      { icon: <FaGlobeEurope />, title: "Academic & Business C1", description: "Operate effectively in professional & academic contexts." },
    ],
  },

  // 12. French C2 Mastery Course
  {
    id: "course-9",
    _id: "685a0fe27b9c4d001f2e3456",
    slug: "french-c2-mastery-course",
    title: "French C2 Mastery Course",
    category: "Advanced French",
    level: "C2 Mastery (Near-Native)",
    duration: "12 Weeks (90 Hours)",
    durationInMonths: 3,
    mode: "Online Live & Offline Center",
    classType: "Live Online",
    price: 12999,
    originalPrice: 18999,
    language: "French",
    status: "published",
    enrollmentOpen: true,
    certificateAvailable: true,
    badge: "Near-Native Mastery",
    shortDescription:
      "Reach near-native mastery. Refine precision, subtlety, and spontaneity across every register of French, from literary to highly technical.",
    description:
      "The French C2 Mastery Course is our highest-level program, for learners who already communicate fluently at C1 and want to reach near-native precision. Work with complex literary and technical material.",
    coverImage: "https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1200&q=80",
    thumbnail: {
      public_id: "courses/french-c2-course",
      url: "https://images.unsplash.com/photo-1508614999368-9260051292e5",
    },
    tags: ["French C2 course", "DALF C2 coaching", "Near-native French mastery"],
    curriculum: [
      {
        module: "Module 1",
        title: "Precision & Subtlety in Expression",
        topics: [
          "Distinguishing fine shades of meaning between near-synonyms",
          "Mastering complex syntax and literary sentence construction",
        ],
      },
    ],
    modules: [
      {
        title: "C2 Near-Native Refinement",
        description: "Literary, technical, and diplomatic register mastery.",
        lessons: ["Literary Analysis", "Diplomatic French", "DALF C2 Prep"],
      },
    ],
    features: [
      "90 Hours of Near-Native Level Coaching",
      "Literary & Technical Text Analysis Sessions",
      "1-on-1 Evaluation From Senior Faculty",
    ],
    outcomes: [
      "Express yourself with precision, nuance, and spontaneity in any context",
      "Fully prepared to attempt the DALF C2 diploma, the highest official certification",
    ],
    learningOutcomes: [
      "Express yourself with near-native precision and spontaneity",
      "Pass DALF C2 diploma exam",
    ],
    requirements: ["C1 level French proficiency"],
    targetAudience: ["Diplomats", "Translators", "C1 Graduates"],
    whoIsThisFor: ["Advanced C1 speakers aiming for near-native mastery"],
    relatedCourses: ["french-c1-proficiency-course", "french-b2-advanced-course"],
    faq: [{ question: "Who needs C2 French?", answer: "Those pursuing senior diplomatic, academic research, or interpretation roles." }],
    seoTitle: "French C2 Mastery Course | DALF C2 Prep | Inquisitive Mind Academy",
    seoDescription: "Achieve near-native French mastery with our C2 course. Refine precision and literary fluency.",
    seo: {
      title: "French C2 Mastery Course",
      description: "Achieve near-native French mastery with our C2 course.",
      keywords: ["French C2 course", "DALF C2 coaching"],
    },
    batches: [{ _id: "fr-c2-b1", name: "Mastery Seminar", startDate: "2026-08-01", students: 8 }],
    results: [
      {
        name: "David Chen",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
        achievement: "Passed DALF C2",
        result: "Near-Native Certification",
        quote: "Reaching C2 with IMA allowed me to take on senior translation roles.",
      },
    ],
    learnings: [
      { icon: <FaGlobeEurope />, title: "Near-Native Precision", description: "Express fine shades of meaning across all registers." },
    ],
  },
];

// Re-export as coursesData for backwards compatibility across existing routes
export const coursesData = courses;

// Utility helper to get a course by slug
export function getCourse(slug) {
  return courses.find((course) => course.slug === slug);
}
