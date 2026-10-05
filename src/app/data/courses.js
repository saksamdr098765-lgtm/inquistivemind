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
    id: "course-eng-1",
    title: "English Speaking Mastery Course",
    slug: "english-speaking-mastery",
    category: "English Speaking",
    level: "Beginner to Intermediate",
    duration: "3 Months (60 Hours)",
    durationInMonths: 3,
    mode: "Live Online Batches",
    classType: "Live Online",
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
    // SEO title kept to 50-60 characters; meta description kept to 140-160 characters
    seoTitle: "Spoken English Classes in Chandigarh | IMA Course",
    seoDescription:
      "Join live Spoken English classes in Chandigarh. Build fluency, pronunciation, vocabulary and interview confidence with expert trainers at IMA.",
    seo: {
      title: "Spoken English Classes in Chandigarh | IMA Course",
      description:
        "Join live Spoken English classes in Chandigarh. Build fluency, pronunciation, vocabulary and interview confidence with expert trainers at IMA.",
      keywords: ["English speaking course", "Spoken English classes", "Communication skills"],
    },
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
      { question: "Do I need prior English knowledge to join?", answer: "No! This course starts from basic sentence building, so complete beginners are welcome." },
      { question: "Will I get a certificate after completion?", answer: "Yes, an accredited certificate of completion is provided at the end of the course." },
      { question: "How can I improve my spoken English fast?", answer: "Consistent daily speaking practice, live role plays, and immediate feedback — exactly what this course provides — is the fastest way to improve." },
      { question: "Is 3 months enough to become fluent in English?", answer: "For most beginner to intermediate learners, 60 hours of structured live practice over 3 months builds noticeable, lasting fluency." },
      { question: "Can I learn spoken English online from home?", answer: "Yes, all sessions are live and interactive online, so you can join from anywhere with a stable internet connection." },
      { question: "How do I overcome hesitation while speaking English?", answer: "Regular group discussions, role plays, and low-pressure speaking drills in class gradually remove hesitation and build confidence." },
      { question: "What is the best way to prepare for an English interview?", answer: "Mock interviews, HR question practice, and professional vocabulary building — all covered in this course — are the most effective preparation methods." },
    ],
    relatedCourses: ["french-language-program", "academic-excellence-program", "spoken-french-masterclass"],
  },

  // 2. French Language Mastery Program
  {
    id: "course-fr-program",
    title: "French Language Mastery Program",
    slug: "french-language-program",
    category: "French Language",
    level: "Beginner to Advanced",
    duration: "6 Months (120 Hours)",
    durationInMonths: 6,
    mode: "Live Online & Offline Center",
    classType: "Live Online",
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
    seoTitle: "French Language Course in Chandigarh | A1 to B2",
    seoDescription:
      "Learn French from A1 to B2 in Chandigarh with live classes covering speaking, grammar, vocabulary and DELF exam preparation at IMA.",
    seo: {
      title: "French Language Course in Chandigarh | A1 to B2",
      description:
        "Learn French from A1 to B2 in Chandigarh with live classes covering speaking, grammar, vocabulary and DELF exam preparation at IMA.",
      keywords: ["French language course", "Learn French online", "DELF prep"],
    },
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
      { question: "Is this suitable for complete beginners?", answer: "Yes, it covers everything from zero knowledge up to an advanced B2 level." },
      { question: "How long does it take to become fluent in French?", answer: "With 120 hours of structured live classes over 6 months, most learners reach conversational B1-B2 fluency." },
      { question: "Which is better for Canada PR, DELF or TEF?", answer: "TEF Canada is the exam accepted for Express Entry CRS points, while DELF is a general proficiency diploma; this program prepares you for both pathways." },
      { question: "Can I learn French online from India?", answer: "Yes, this program is delivered through live online classes as well as an offline center, so you can choose either mode." },
      { question: "Is French difficult to learn for Hindi or Punjabi speakers?", answer: "French has a learning curve for pronunciation and grammar, but with structured, step-by-step teaching it becomes manageable even for absolute beginners." },
      { question: "How many levels of French are there?", answer: "French proficiency follows the CEFR framework with six levels: A1, A2, B1, B2, C1, and C2, and this program covers A1 through B2." },
      { question: "Do you provide DELF exam mock tests?", answer: "Yes, the program includes DELF and TEF Canada mock exam practice as part of the curriculum." },
    ],
    relatedCourses: ["french-a1-beginner-course", "french-a2-elementary-course", "tef-canada-preparation-bundle"],
  },

  // 3. Academic Excellence Program
  {
    id: "course-acad-1",
    title: "Academic Excellence Program",
    slug: "academic-excellence-program",
    category: "Academic Tuition",
    level: "Class 1 - 12",
    duration: "12 Months (Full Academic Year)",
    durationInMonths: 12,
    mode: "Online & Offline Centers",
    classType: "Online & Offline",
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
    seoTitle: "Tuition Classes in Chandigarh | Class 1-12 CBSE/ICSE",
    seoDescription:
      "Academic tuition in Chandigarh for Class 1-12 CBSE, ICSE and PSEB students. Improve grades, strengthen concepts and ace board exams.",
    seo: {
      title: "Tuition Classes in Chandigarh | Class 1-12 CBSE/ICSE",
      description:
        "Academic tuition in Chandigarh for Class 1-12 CBSE, ICSE and PSEB students. Improve grades, strengthen concepts and ace board exams.",
      keywords: ["School tuition", "CBSE coaching", "Class 1-12 tuition"],
    },
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
      { question: "Which boards are covered in this tuition program?", answer: "CBSE, ICSE, PSEB, and all major state educational boards are covered." },
      { question: "Which is the best tuition center in Chandigarh?", answer: "Look for a center offering small batches, regular assessments, and board-aligned curriculum — all of which this program provides." },
      { question: "How can I improve my child's grades quickly?", answer: "Regular chapter tests, doubt-clearing sessions, and personalized attention, as offered in this program, are the fastest way to improve grades." },
      { question: "Do you provide both online and offline tuition classes?", answer: "Yes, this program is available through both online sessions and offline center classes." },
      { question: "What is the fee for tuition classes in Chandigarh?", answer: "Fees vary by class and subject; contact us directly for the latest fee structure for your child's grade." },
      { question: "Do you offer one-on-one doubt clearing sessions?", answer: "Yes, dedicated doubt sessions are built into the exam preparation module for every student." },
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
      { question: "Do I need any previous knowledge of French?", answer: "No! This course starts from absolute zero, ideal for complete beginners." },
      { question: "How long does it take to complete French A1?", answer: "This course runs for 8 weeks (60 hours) of live, structured instruction." },
      { question: "Is French A1 enough to work or settle in Canada?", answer: "A1 is only a starting point; Canada PR pathways like TEF Canada typically require at least a B1-B2 level for meaningful CRS points." },
      { question: "Can a complete beginner learn French A1 in 2 months?", answer: "Yes, with consistent attendance and practice, most learners comfortably complete the A1 level within this 8-week course." },
      { question: "What is covered in the French A1 syllabus?", answer: "The A1 syllabus covers phonetics, greetings, basic grammar (être, avoir, -ER verbs), articles, and everyday vocabulary." },
      { question: "Is there a certificate after completing French A1?", answer: "Yes, a certificate of completion is provided along with DELF A1 pattern mock test practice." },
    ],
    seoTitle: "French A1 Beginner Course in Chandigarh | IMA",
    seoDescription:
      "Start learning French from scratch with our A1 Beginner Course in Chandigarh. Master greetings, phonetics, grammar and daily conversation.",
    seo: {
      title: "French A1 Beginner Course in Chandigarh | IMA",
      description:
        "Start learning French from scratch with our A1 Beginner Course in Chandigarh. Master greetings, phonetics, grammar and daily conversation.",
      keywords: ["French A1 course", "Learn French for beginners"],
    },
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
    faq: [
      { question: "What is the prerequisite for French A2?", answer: "Completion of French A1 level or equivalent basic knowledge is required." },
      { question: "What is the difference between French A1 and A2?", answer: "A1 covers basic greetings and present tense, while A2 adds past and future tenses, opinions, and more complex everyday conversation." },
      { question: "How long does it take to reach A2 level in French?", answer: "This course covers A2 in 10 weeks (75 hours) of live classes, assuming A1 is already completed." },
      { question: "Is DELF A2 certification required for Canada immigration?", answer: "DELF A2 alone is generally not sufficient for Canada PR points; higher levels like B1-B2 via TEF Canada are usually needed." },
      { question: "Can I join French A2 directly without doing A1?", answer: "You'll need A1-level knowledge first; if you already know the basics from elsewhere, we assess your level before enrollment." },
    ],
    seoTitle: "French A2 Elementary Course in Chandigarh | DELF A2",
    seoDescription:
      "Advance to French A2 level in Chandigarh. Master past & future tenses, opinions and everyday conversation with DELF A2 exam prep.",
    seo: {
      title: "French A2 Elementary Course in Chandigarh | DELF A2",
      description:
        "Advance to French A2 level in Chandigarh. Master past & future tenses, opinions and everyday conversation with DELF A2 exam prep.",
      keywords: ["French A2 course", "DELF A2 coaching"],
    },
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
    faq: [
      { question: "Is French B1 sufficient for a job in a French-speaking country?", answer: "B1 provides solid working proficiency for basic business and daily workplace communication." },
      { question: "Is French B1 enough for Canada PR CRS points?", answer: "B1 level (NCLC 7) via TEF Canada can earn you meaningful CRS points, though higher levels earn more." },
      { question: "What comes after B1 in French learning?", answer: "After B1, learners typically progress to B2 (upper-intermediate), followed by C1 and C2 for professional/academic mastery." },
      { question: "How many CRS points does TEF Canada B1 give?", answer: "NCLC 7, roughly equivalent to B1-B2, is the common target for meaningful Express Entry bonus points — exact figures depend on IRCC's current point grid." },
      { question: "What is covered in the DELF B1 exam?", answer: "DELF B1 tests listening, reading, writing (formal letters/essays), and speaking on familiar and abstract everyday topics." },
    ],
    seoTitle: "French B1 Intermediate Course in Chandigarh | DELF B1",
    seoDescription:
      "Achieve independent French fluency at B1 level in Chandigarh. Master subjunctive mood, debates and writing with DELF B1 exam prep.",
    seo: {
      title: "French B1 Intermediate Course in Chandigarh | DELF B1",
      description:
        "Achieve independent French fluency at B1 level in Chandigarh. Master subjunctive mood, debates and writing with DELF B1 exam prep.",
      keywords: ["French B1 course", "DELF B1 coaching"],
    },
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
    faq: [
      { question: "Does the DELF B2 diploma expire?", answer: "No, DELF B2 is a lifetime-valid diploma with no expiry date." },
      { question: "What is the DELF B2 exam pattern?", answer: "It tests four skills — listening, reading, writing (essay/synthesis), and oral presentation with examiner debate." },
      { question: "How difficult is the DELF B2 exam?", answer: "B2 is upper-intermediate level, more demanding than B1, requiring nuanced argumentation and formal writing — this masterclass is built specifically to prepare for it." },
      { question: "Which universities accept DELF B2 for admission?", answer: "Many French public universities accept DELF B2 as proof of language proficiency, waiving separate language entrance tests." },
      { question: "How many mock exams are included in this masterclass?", answer: "Five full-length, timed DELF B2 mock examinations are included, along with personalized essay grading." },
    ],
    seoTitle: "DELF B2 Exam Prep Masterclass in Chandigarh | IMA",
    seoDescription:
      "Prepare for DELF B2 in Chandigarh with certified evaluators. Master writing, oral defense and synthesis with 5 full mock exams.",
    seo: {
      title: "DELF B2 Exam Prep Masterclass in Chandigarh | IMA",
      description:
        "Prepare for DELF B2 in Chandigarh with certified evaluators. Master writing, oral defense and synthesis with 5 full mock exams.",
      keywords: ["DELF B2 masterclass", "DELF B2 exam coaching"],
    },
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
    faq: [
      { question: "How long is TEF Canada valid for IRCC?", answer: "TEF Canada results are valid for 2 years from the test date for Express Entry purposes." },
      { question: "What is a good TEF Canada score for Express Entry?", answer: "NCLC 7 or higher across all four modules is generally targeted to unlock significant CRS bonus points." },
      { question: "What is the difference between TEF Canada and TCF Canada?", answer: "Both are IRCC-approved French tests for Express Entry; TEF is administered by CCI Paris, while TCF is administered by France Éducation International — this bundle focuses on TEF Canada strategy." },
      { question: "How many CRS points can TEF Canada add to my profile?", answer: "Strong French scores (NCLC 7+) combined with English ability can unlock up to 50 bonus CRS points under current Express Entry rules — always verify the latest IRCC point grid." },
      { question: "Is TEF Canada harder than a regular French exam?", answer: "TEF Canada is fast-paced and computer-based with strict time limits, which is why this bundle focuses heavily on speed and accuracy drills." },
    ],
    seoTitle: "TEF Canada Exam Prep in Chandigarh | NCLC 7+ Coaching",
    seoDescription:
      "Boost your Express Entry CRS score with TEF Canada coaching in Chandigarh. Targeted drills to help you reach NCLC 7+ across all modules.",
    seo: {
      title: "TEF Canada Exam Prep in Chandigarh | NCLC 7+ Coaching",
      description:
        "Boost your Express Entry CRS score with TEF Canada coaching in Chandigarh. Targeted drills to help you reach NCLC 7+ across all modules.",
      keywords: ["TEF Canada prep course", "TEF French coaching"],
    },
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
    faq: [
      { question: "Is there a written exam in this masterclass?", answer: "No, this workshop is 100% oral speaking practice with no written examination." },
      { question: "How can I improve my French speaking fluency fast?", answer: "Focused speaking-only practice, like the small group discussions in this 4-week workshop, is the fastest way to build fluency." },
      { question: "Why do I hesitate while speaking French even though I know grammar?", answer: "Hesitation usually comes from lack of speaking practice, not grammar gaps — this masterclass is designed specifically to close that gap through constant conversation practice." },
      { question: "Do I need any prior French knowledge to join?", answer: "Yes, basic French vocabulary knowledge is required since this workshop focuses purely on speaking, not grammar basics." },
      { question: "How is this different from the Spoken French sessions in other courses?", answer: "This is a dedicated, intensive 4-week workshop focused exclusively on accent, idioms, and conversational flow for learners at any level from A1 to B2." },
    ],
    seoTitle: "Spoken French Classes in Chandigarh | Fluency Workshop",
    seoDescription:
      "Overcome hesitation and speak French fluently. Join our Spoken French Masterclass in Chandigarh for accent, idioms and conversation practice.",
    seo: {
      title: "Spoken French Classes in Chandigarh | Fluency Workshop",
      description:
        "Overcome hesitation and speak French fluently. Join our Spoken French Masterclass in Chandigarh for accent, idioms and conversation practice.",
      keywords: ["Spoken French masterclass", "French speaking course"],
    },
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
    faq: [
      { question: "Is this course different from the DELF B2 Masterclass?", answer: "Yes, this course builds general B2 fluency across all skills, while the DELF B2 Masterclass focuses specifically on exam strategy and scoring." },
      { question: "What is B2 level French equivalent to?", answer: "B2 (CEFR upper-intermediate) is roughly equivalent to being able to work and study comfortably in a French-speaking environment." },
      { question: "Is B2 French enough to get a job in France?", answer: "B2 provides strong working proficiency for many roles, though some professional or academic positions may require C1." },
      { question: "How long does it take to reach B2 level from B1?", answer: "This course covers B1-to-B2 progression in 10 weeks (75 hours) of live, structured classes." },
      { question: "What topics are covered in French B2 grammar?", answer: "Advanced grammar including Subjonctif Passé, gérondif, participe présent, and nuanced argumentative structures." },
    ],
    seoTitle: "French B2 Advanced Course in Chandigarh | Near-Fluent",
    seoDescription:
      "Reach near-fluent French at B2 level in Chandigarh. Master advanced grammar, formal writing and spontaneous conversation with IMA.",
    seo: {
      title: "French B2 Advanced Course in Chandigarh | Near-Fluent",
      description:
        "Reach near-fluent French at B2 level in Chandigarh. Master advanced grammar, formal writing and spontaneous conversation with IMA.",
      keywords: ["French B2 course", "Advanced French classes"],
    },
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
    faq: [
      { question: "Is C1 required for postgraduate study in France?", answer: "Many postgraduate programs in France request a C1 certificate, especially for programs taught in French." },
      { question: "What jobs require French C1 proficiency?", answer: "Senior professional, academic, diplomatic, and client-facing roles in Francophone environments often require C1-level proficiency." },
      { question: "Is the DALF C1 exam hard?", answer: "DALF C1 is demanding, testing nuanced argumentation, document synthesis, and oral defense — this course is built specifically around those exam requirements." },
      { question: "How long does it take to reach C1 from B2?", answer: "This course covers the B2-to-C1 progression in 12 weeks (90 hours) of professional-level coaching." },
      { question: "What is the difference between C1 and C2 French?", answer: "C1 is effective operational proficiency for professional/academic use, while C2 is near-native mastery with full command over every register." },
    ],
    seoTitle: "French C1 Proficiency Course in Chandigarh | DALF C1",
    seoDescription:
      "Reach professional French C1 proficiency in Chandigarh. Master idiomatic expression, document synthesis and oral defense for DALF C1.",
    seo: {
      title: "French C1 Proficiency Course in Chandigarh | DALF C1",
      description:
        "Reach professional French C1 proficiency in Chandigarh. Master idiomatic expression, document synthesis and oral defense for DALF C1.",
      keywords: ["French C1 course", "DALF C1 coaching"],
    },
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
    faq: [
      { question: "Who needs French C2 level proficiency?", answer: "Diplomats, senior translators, interpreters, and those pursuing advanced academic research typically require C2 level." },
      { question: "Is DALF C2 the highest official French certification?", answer: "Yes, DALF C2 is the highest diploma in the official French CEFR certification system, above C1." },
      { question: "How rare is C2-level French proficiency?", answer: "C2 represents near-native mastery and is achieved by a very small percentage of non-native French learners." },
      { question: "How long does it take to go from C1 to C2?", answer: "This course covers the C1-to-C2 progression in 12 weeks (90 hours) of near-native level coaching." },
      { question: "What kind of material is studied at C2 level?", answer: "Learners work with complex literary texts, technical documents, and diplomatic-register material to refine precision and nuance." },
    ],
    seoTitle: "French C2 Mastery Course in Chandigarh | DALF C2",
    seoDescription:
      "Achieve near-native French mastery at C2 level in Chandigarh. Refine precision, literary fluency and prepare for the DALF C2 diploma.",
    seo: {
      title: "French C2 Mastery Course in Chandigarh | DALF C2",
      description:
        "Achieve near-native French mastery at C2 level in Chandigarh. Refine precision, literary fluency and prepare for the DALF C2 diploma.",
      keywords: ["French C2 course", "DALF C2 coaching"],
    },
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