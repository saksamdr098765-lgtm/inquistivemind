
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

export const coursesData = [

{
  _id: "685a1f4a7b9c4d001f2e1234",

  title: "English Speaking Mastery Course",

  slug: "english-speaking-mastery",

  shortDescription:
    "Master spoken English, communication skills, pronunciation, vocabulary, public speaking, and interview preparation through live interactive classes designed for students, professionals, and job seekers.",

  description: `
English Speaking Mastery is a comprehensive Spoken English and Communication Skills Program designed to help learners become confident, fluent, and effective English speakers.

The course focuses on practical communication rather than memorization. Students participate in live speaking activities, role plays, group discussions, pronunciation exercises, grammar workshops, vocabulary-building sessions, presentation practice, and interview preparation.

Whether you are a school student, college student, job seeker, working professional, entrepreneur, or someone who wants to improve communication skills, this course provides a structured learning path from beginner to advanced speaking confidence.

Throughout the program, learners receive personalized feedback, speaking assessments, confidence-building activities, and real-world communication practice.

By the end of the course, students will be able to communicate fluently in personal, academic, professional, and social situations while demonstrating stronger vocabulary, pronunciation, confidence, and public speaking abilities.
  `,

  thumbnail: {
    public_id: "courses/english-speaking-mastery",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },

  // price: 4999,

  durationInMonths: 3,

  level: "Beginner to Intermediate",

  language: "English",

  category: "English Speaking",

  status: "published",

  enrollmentOpen: true,

  tags: [
    "english speaking course",
    "spoken english classes",
    "communication skills",
    "english fluency",
    "spoken english training",
    "public speaking",
    "interview preparation",
    "english grammar",
    "vocabulary building",
    "personality development",
    "english communication",
    "confidence building",
  ],

  learningOutcomes: [
    "Speak English confidently in daily life",
    "Improve pronunciation and fluency",
    "Build a strong practical vocabulary",
    "Master spoken grammar naturally",
    "Participate confidently in group discussions",
    "Improve public speaking skills",
    "Prepare for job interviews effectively",
    "Enhance workplace communication",
    "Reduce hesitation while speaking",
    "Develop confidence in presentations and conversations",
  ],

  requirements: [
    "Basic understanding of English is helpful but not mandatory",
    "Internet connection for online sessions",
    "Notebook for assignments and practice",
    "Commitment to participate in speaking activities",
  ],

  targetAudience: [
    "School Students",
    "College Students",
    "Job Seekers",
    "Working Professionals",
    "Entrepreneurs",
    "Beginners who struggle to speak English",
    "Students preparing for study abroad opportunities",
  ],

  modules: [
    {
      title: "Introduction to Spoken English",
      description:
        "Build confidence through basic communication and everyday conversations.",
      lessons: [
        "Self Introduction",
        "Greetings and Introductions",
        "Basic Vocabulary",
        "Daily Conversations",
      ],
    },
    {
      title: "Grammar Foundations",
      description:
        "Learn practical grammar required for fluent communication.",
      lessons: [
        "Tenses",
        "Sentence Structure",
        "Articles",
        "Prepositions",
        "Common Grammar Mistakes",
      ],
    },
    {
      title: "Vocabulary Development",
      description:
        "Expand vocabulary for academic, professional, and daily communication.",
      lessons: [
        "Daily Use Vocabulary",
        "Professional Vocabulary",
        "Synonyms and Antonyms",
        "Word Usage Practice",
      ],
    },
    {
      title: "Pronunciation & Accent Improvement",
      description:
        "Improve pronunciation, clarity, and speaking confidence.",
      lessons: [
        "Pronunciation Rules",
        "Stress and Intonation",
        "Accent Neutralization",
        "Speaking Practice",
      ],
    },
    {
      title: "Public Speaking & Presentation Skills",
      description:
        "Learn to communicate confidently in front of an audience.",
      lessons: [
        "Speech Practice",
        "Presentation Techniques",
        "Storytelling",
        "Audience Engagement",
      ],
    },
    {
      title: "Interview Preparation",
      description:
        "Develop communication skills required for interviews and professional settings.",
      lessons: [
        "HR Interview Questions",
        "Mock Interviews",
        "Professional Communication",
        "Confidence Building",
      ],
    },
  ],

  certificateAvailable: true,

  classType: "Live Online",

  seoTitle:
    "English Speaking Course | Spoken English Classes & Communication Skills Training",

  seoDescription:
    "Join our English Speaking Mastery Course to improve spoken English, fluency, communication skills, public speaking, interview preparation, pronunciation, and confidence through expert-led live classes.",

  batches: [
    {
      _id: "eng-batch-1",
      name: "Morning Batch",
      startDate: "2026-07-01",
      students: 35,
    },
    {
      _id: "eng-batch-2",
      name: "Evening Batch",
      startDate: "2026-07-10",
      students: 28,
    },
  ],

  createdAt: "2026-06-20T10:00:00.000Z",

  updatedAt: "2026-06-23T10:00:00.000Z",

  results: [
    {
      name: "Aman Sharma",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
      achievement: "Improved Spoken English Confidence",
      result: "Beginner → Fluent Speaker",
      quote:
        "I was afraid of speaking English in public. After completing this course, I confidently participate in presentations and discussions.",
    },
    {
      name: "Priya Verma",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      achievement: "Achieved IELTS Band 7.5",
      result: "Band 5.5 → Band 7.5",
      quote:
        "The speaking practice and vocabulary sessions significantly improved my fluency and helped me achieve my target IELTS score.",
    },
    {
      name: "Rahul Singh",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      achievement: "Improved Academic Performance",
      result: "Better Communication & Confidence",
      quote:
        "My grammar, vocabulary, and communication skills improved tremendously. I now participate confidently in school activities.",
    },
  ],

  learnings: [
    {
      icon: <FaComments />,
      title: "Speak Confidently",
      description:
        "Hold conversations naturally and express your thoughts clearly.",
    },
    {
      icon: <FaMicrophone />,
      title: "Improve Pronunciation",
      description:
        "Learn correct pronunciation, intonation, and speaking clarity.",
    },
    {
      icon: <FaBookOpen />,
      title: "Build Vocabulary",
      description:
        "Expand your vocabulary with practical and professional words.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Master Spoken Grammar",
      description:
        "Understand grammar naturally through speaking activities.",
    },
    {
      icon: <FaUserTie />,
      title: "Interview Preparation",
      description:
        "Prepare confidently for job interviews and professional communication.",
    },
    {
      icon: <FaBullhorn />,
      title: "Public Speaking",
      description:
        "Develop presentation skills and confidence while speaking to groups.",
    },
  ],

  whoIsThisFor: [
    "Students from Class 6 to 12 who want better English communication",
    "College students preparing for placements and higher education",
    "Beginners who hesitate while speaking English",
    "Job seekers preparing for interviews",
    "Working professionals looking to improve workplace communication",
    "Students preparing for IELTS, PTE, or study abroad opportunities",
    "Entrepreneurs and business owners improving communication skills",
    "Anyone wanting to become a confident and fluent English speaker",
  ],
},

{
  _id: "685a1f4a7b9c4d001f2e1235",

  title: "French Language Mastery Program",

  slug: "french-language-program",

  shortDescription:
    "Learn French from beginner to advanced level through live interactive classes covering speaking, listening, grammar, vocabulary, pronunciation, conversation practice, and DELF exam preparation.",

  description: `
French Language Mastery Program is a comprehensive French learning course designed for students, professionals, study-abroad aspirants, and language enthusiasts who want to communicate confidently in French.

The course focuses on all four language skills—speaking, listening, reading, and writing—while building a strong foundation in grammar, vocabulary, pronunciation, and real-world communication.

Students participate in live classes, conversation practice sessions, role plays, listening activities, pronunciation drills, cultural immersion exercises, and DELF exam preparation modules.

Whether your goal is studying abroad, improving career opportunities, preparing for French language certifications, traveling internationally, or learning a new language for personal growth, this program provides a structured roadmap from beginner to advanced proficiency.

By the end of the course, learners will be able to communicate confidently in French, understand native speakers more effectively, write correctly, and prepare successfully for internationally recognized French language examinations.
  `,

  thumbnail: {
    public_id: "courses/french-language-program",
    url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
  },

  price: 6999,

  durationInMonths: 6,

  level: "Beginner to Advanced",

  language: "French",

  category: "French Language",

  status: "published",

  enrollmentOpen: true,

  tags: [
    "french language course",
    "learn french",
    "french speaking classes",
    "french grammar",
    "delf preparation",
    "study abroad",
    "french communication",
    "french vocabulary",
    "foreign language course",
    "french pronunciation",
    "online french classes",
    "language certification",
  ],

  learningOutcomes: [
    "Speak French confidently in everyday situations",
    "Understand French grammar and sentence formation",
    "Improve listening and comprehension skills",
    "Develop strong French vocabulary",
    "Write emails, messages, and essays in French",
    "Communicate naturally with native speakers",
    "Prepare for DELF and other French certifications",
    "Improve pronunciation and accent",
    "Develop reading comprehension skills",
    "Build confidence using French professionally and academically",
  ],

  requirements: [
    "No prior French knowledge required",
    "Internet connection for online classes",
    "Notebook for assignments and vocabulary practice",
    "Commitment to regular speaking practice",
  ],

  targetAudience: [
    "School Students",
    "College Students",
    "Study Abroad Aspirants",
    "Working Professionals",
    "Travel Enthusiasts",
    "Language Learners",
    "Individuals preparing for DELF examinations",
  ],

  modules: [
    {
      title: "French Basics & Pronunciation",
      description:
        "Build a strong foundation with French alphabet, pronunciation, greetings, and introductions.",
      lessons: [
        "French Alphabet",
        "Pronunciation Rules",
        "Greetings & Introductions",
        "Basic Conversations",
      ],
    },

    {
      title: "French Grammar Foundations",
      description:
        "Understand the building blocks of French grammar and sentence formation.",
      lessons: [
        "Nouns & Articles",
        "Present Tense Verbs",
        "Sentence Structure",
        "Common Expressions",
      ],
    },

    {
      title: "Vocabulary Development",
      description:
        "Expand practical vocabulary for everyday and professional communication.",
      lessons: [
        "Daily Life Vocabulary",
        "Travel Vocabulary",
        "Education Vocabulary",
        "Professional Vocabulary",
      ],
    },

    {
      title: "Listening & Comprehension Skills",
      description:
        "Improve understanding through audio exercises and real-life conversations.",
      lessons: [
        "Listening Practice",
        "Conversation Analysis",
        "French Audio Exercises",
        "Understanding Native Speakers",
      ],
    },

    {
      title: "Speaking & Conversation Practice",
      description:
        "Develop fluency through speaking activities and interactive discussions.",
      lessons: [
        "Role Plays",
        "Situational Conversations",
        "Question & Answer Practice",
        "Fluency Exercises",
      ],
    },

    {
      title: "Reading & Writing Skills",
      description:
        "Learn to read and write confidently in French.",
      lessons: [
        "Reading Comprehension",
        "Email Writing",
        "Essay Writing",
        "Written Communication",
      ],
    },

    {
      title: "French Culture & Communication",
      description:
        "Understand cultural aspects and practical communication etiquette.",
      lessons: [
        "French Customs",
        "Cultural Communication",
        "Travel Communication",
        "Social Interactions",
      ],
    },

    {
      title: "DELF Exam Preparation",
      description:
        "Prepare for internationally recognized French language certification exams.",
      lessons: [
        "DELF Format",
        "Mock Tests",
        "Speaking Assessment",
        "Exam Strategies",
      ],
    },
  ],

  certificateAvailable: true,

  classType: "Live Online",

  seoTitle:
    "French Language Course | Learn French Online | DELF Preparation Classes",

  seoDescription:
    "Join our French Language Mastery Program to learn French speaking, grammar, vocabulary, pronunciation, communication skills, and DELF exam preparation through expert-led live classes.",

  batches: [
    {
      _id: "fr-batch-1",
      name: "Weekend Batch",
      startDate: "2026-07-15",
      students: 20,
    },
    {
      _id: "fr-batch-2",
      name: "Evening Batch",
      startDate: "2026-08-01",
      students: 18,
    },
  ],

  createdAt: "2026-06-20T10:00:00.000Z",

  updatedAt: "2026-06-23T10:00:00.000Z",

  results: [
    {
      name: "Neha Kapoor",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      achievement: "Passed DELF A2 Certification",
      result: "Beginner → Certified French Learner",
      quote:
        "The structured lessons and speaking practice helped me achieve my DELF certification and prepare for studying abroad.",
    },
    {
      name: "Rohan Mehta",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
      achievement: "Study Abroad Success",
      result: "French Beginner → University Admission",
      quote:
        "The course gave me the language confidence required for my university application process in Europe.",
    },
    {
      name: "Ananya Gupta",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      achievement: "Improved Professional Communication",
      result: "Better Career Opportunities",
      quote:
        "Learning French helped me communicate with international clients and expand my professional opportunities.",
    },
  ],

  learnings: [
    {
      icon: <FaGlobeEurope />,
      title: "French Communication",
      description:
        "Speak naturally and confidently in real-life situations.",
    },
    {
      icon: <FaBookOpen />,
      title: "Grammar Mastery",
      description:
        "Understand French grammar through practical examples and exercises.",
    },
    {
      icon: <FaComments />,
      title: "Conversation Practice",
      description:
        "Develop fluency through guided speaking activities and discussions.",
    },
    {
      icon: <FaCheckCircle />,
      title: "DELF Preparation",
      description:
        "Prepare confidently for internationally recognized French certification exams.",
    },
    {
      icon: <FaMicrophone />,
      title: "Pronunciation Training",
      description:
        "Improve pronunciation, accent, and listening comprehension.",
    },
    {
      icon: <FaGlobeEurope />,
      title: "Cultural Understanding",
      description:
        "Learn French culture and communication etiquette for real-world interactions.",
    },
  ],

  whoIsThisFor: [
    "Students planning to study abroad in France, Canada, or Europe",
    "College students seeking international education opportunities",
    "Professionals working with international clients",
    "Individuals preparing for DELF or French certification exams",
    "Travel enthusiasts visiting French-speaking countries",
    "Language learners interested in mastering French",
    "Beginners with no prior knowledge of French",
    "Anyone looking to learn a globally recognized foreign language",
  ],
},
{
  _id: "685a1f4a7b9c4d001f2e1236",

  title: "Academic Excellence Program",

  slug: "academic-excellence-program",

  shortDescription:
    "Comprehensive academic tuition program for students from Class 1 to 12 designed to improve grades, strengthen concepts, boost confidence, and prepare students for school and board examinations through expert guidance and personalized support.",

  description: `
Academic Excellence Program is a complete tuition and academic support program designed for students from Class 1 to Class 12.

The program focuses on building strong subject fundamentals, improving academic performance, strengthening problem-solving abilities, and developing effective study habits. Students receive personalized attention, structured lesson plans, regular assessments, doubt-clearing sessions, assignments, and exam-focused preparation.

Our experienced educators help students understand concepts deeply rather than relying on rote memorization. The curriculum is designed to support CBSE, ICSE, PSEB, and other major educational boards.

Whether a student needs help improving grades, preparing for board examinations, strengthening weak subjects, or building confidence in academics, this program provides a structured roadmap to long-term success.

By the end of the program, students demonstrate stronger conceptual understanding, better academic performance, improved confidence, and greater readiness for competitive and board examinations.
  `,

  thumbnail: {
    public_id: "courses/academic-excellence",
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },

  price: 3999,

  durationInMonths: 12,

  level: "Class 1 - 12",

  language: "English & Hindi",

  category: "Academic Tuition",

  status: "published",

  enrollmentOpen: true,

  tags: [
    "tuition classes",
    "academic coaching",
    "school tuition",
    "cbse tuition",
    "icse tuition",
    "pseb tuition",
    "board exam preparation",
    "academic excellence",
    "school coaching",
    "class 1 to 12 tuition",
    "online tuition",
    "offline tuition",
    "academic support",
    "exam preparation",
  ],

  learningOutcomes: [
    "Improve academic performance and grades",
    "Strengthen conceptual understanding across subjects",
    "Develop effective study habits and discipline",
    "Perform confidently in school examinations",
    "Prepare effectively for board examinations",
    "Improve problem-solving and analytical skills",
    "Develop confidence in Mathematics and Science",
    "Enhance English communication and writing skills",
    "Improve time management and exam strategy",
    "Build long-term academic confidence and success",
  ],

  requirements: [
    "School Enrollment",
    "Notebook and study materials",
    "Regular attendance and participation",
    "Commitment to completing assignments",
    "Willingness to learn and improve",
  ],

  targetAudience: [
    "Students from Class 1 to Class 12",
    "CBSE Students",
    "ICSE Students",
    "PSEB Students",
    "Board Examination Students",
    "Students requiring academic support",
    "Students aiming for higher grades",
    "Parents seeking structured academic guidance",
  ],

  modules: [
    {
      title: "Foundation Building",
      description:
        "Strengthen basic concepts and develop a strong academic foundation.",
      lessons: [
        "Concept Understanding",
        "Learning Techniques",
        "Subject Fundamentals",
        "Academic Confidence",
      ],
    },

    {
      title: "Mathematics Mastery",
      description:
        "Build strong mathematical skills through concept clarity and practice.",
      lessons: [
        "Arithmetic",
        "Algebra",
        "Geometry",
        "Problem Solving",
      ],
    },

    {
      title: "Science Excellence",
      description:
        "Develop understanding of scientific principles and practical applications.",
      lessons: [
        "Physics Fundamentals",
        "Chemistry Concepts",
        "Biology Topics",
        "Scientific Reasoning",
      ],
    },

    {
      title: "English Language Development",
      description:
        "Improve grammar, vocabulary, comprehension, and writing skills.",
      lessons: [
        "Grammar",
        "Vocabulary",
        "Reading Comprehension",
        "Writing Skills",
      ],
    },

    {
      title: "Social Studies & General Knowledge",
      description:
        "Develop understanding of history, geography, civics, and current affairs.",
      lessons: [
        "History",
        "Geography",
        "Civics",
        "General Knowledge",
      ],
    },

    {
      title: "Assignment & Practice Sessions",
      description:
        "Reinforce learning through worksheets, assignments, and exercises.",
      lessons: [
        "Homework Support",
        "Practice Worksheets",
        "Problem Solving",
        "Revision Activities",
      ],
    },

    {
      title: "Exam Preparation",
      description:
        "Prepare effectively for school tests and board examinations.",
      lessons: [
        "Exam Strategies",
        "Revision Planning",
        "Question Solving",
        "Time Management",
      ],
    },

    {
      title: "Mock Tests & Performance Analysis",
      description:
        "Track academic progress through assessments and feedback.",
      lessons: [
        "Mock Tests",
        "Performance Reviews",
        "Progress Tracking",
        "Improvement Planning",
      ],
    },
  ],

  certificateAvailable: false,

  classType: "Online & Offline",

  seoTitle:
    "Academic Tuition Classes | Class 1 to 12 Coaching & Board Exam Preparation",

  seoDescription:
    "Join our Academic Excellence Program for Class 1 to 12 students. Improve grades, strengthen concepts, prepare for board exams, and achieve academic success through expert tuition and personalized guidance.",

  batches: [
    {
      _id: "acad-batch-1",
      name: "Regular Batch",
      startDate: "2026-07-01",
      students: 50,
    },
    {
      _id: "acad-batch-2",
      name: "Weekend Batch",
      startDate: "2026-07-10",
      students: 35,
    },
  ],

  createdAt: "2026-06-20T10:00:00.000Z",

  updatedAt: "2026-06-23T10:00:00.000Z",

  results: [
    {
      name: "Rahul Singh",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      achievement: "Improved Academic Performance",
      result: "70% → 92%",
      quote:
        "The regular tests, assignments, and guidance helped me improve my grades significantly and gain confidence in my studies.",
    },
    {
      name: "Ananya Sharma",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      achievement: "Board Examination Success",
      result: "82% → 95%",
      quote:
        "The structured preparation and mock tests helped me perform exceptionally well in my board examinations.",
    },
    {
      name: "Karan Verma",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
      achievement: "Mathematics Improvement",
      result: "Weak Concepts → Subject Excellence",
      quote:
        "Mathematics was my weakest subject, but the personalized guidance helped me become one of the top performers in class.",
    },
  ],

  learnings: [
    {
      icon: <FaGraduationCap />,
      title: "Academic Growth",
      description:
        "Build strong subject knowledge and long-term learning skills.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Exam Readiness",
      description:
        "Prepare confidently for school tests and board examinations.",
    },
    {
      icon: <FaBookOpen />,
      title: "Subject Mastery",
      description:
        "Develop deep understanding of core academic subjects.",
    },
    {
      icon: <FaUserTie />,
      title: "Personalized Guidance",
      description:
        "Receive individual support based on learning needs.",
    },
    {
      icon: <FaComments />,
      title: "Doubt Resolution",
      description:
        "Clear academic doubts through dedicated support sessions.",
    },
    {
      icon: <FaBullhorn />,
      title: "Confidence Building",
      description:
        "Improve classroom participation and academic confidence.",
    },
  ],

  whoIsThisFor: [
    "Students from Class 1 to Class 12",
    "Students preparing for school examinations",
    "CBSE, ICSE, and PSEB students",
    "Board examination students",
    "Students struggling with specific subjects",
    "Students aiming to improve grades and rankings",
    "Parents seeking quality academic support",
    "Students looking for structured learning and guidance",
  ],
},
{
  _id: "685a2f5b7b9c4d001f2e5678",

  title: "French A1 Beginner Course",

  slug: "french-a1-beginner-course",

  shortDescription:
    "Learn French from scratch with our A1 Beginner Course. Master everyday vocabulary, pronunciation, grammar, listening, speaking, reading, and writing through live interactive classes designed for students, professionals, travelers, and study abroad aspirants.",

  description: `
French A1 Beginner Course is a comprehensive beginner-level program designed according to the Common European Framework of Reference for Languages (CEFR A1).

The course helps learners develop the ability to understand and use familiar everyday French expressions, introduce themselves confidently, ask and answer simple questions, and communicate in daily situations.

Students participate in live speaking sessions, pronunciation practice, grammar lessons, vocabulary-building activities, listening exercises, reading comprehension, writing assignments, and conversation practice with experienced trainers.

Whether you are planning to study abroad, migrate, travel to French-speaking countries, improve your career opportunities, or simply learn a new language, this course provides a structured foundation in French.

Throughout the program, learners receive regular assessments, speaking feedback, interactive assignments, and practical communication exercises.

By the end of the course, students will confidently communicate in basic French conversations and build a strong foundation for progressing to French A2 and higher CEFR levels.
  `,

  thumbnail: {
    public_id: "courses/french-a1-beginner",
    url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
  },

  // price: 6999,

  durationInMonths: 3,

  level: "A1 Beginner",

  language: "French",

  category: "French Language",

  status: "published",

  enrollmentOpen: true,

  tags: [
    "french course",
    "french a1",
    "learn french",
    "beginner french",
    "french speaking",
    "study abroad",
    "canada immigration",
    "france student visa",
    "french grammar",
    "french vocabulary",
    "cefr a1",
    "online french classes",
  ],

  learningOutcomes: [
    "Introduce yourself confidently in French",
    "Understand everyday French conversations",
    "Speak basic French in daily situations",
    "Read simple French texts",
    "Write short emails and messages in French",
    "Develop correct French pronunciation",
    "Build practical everyday vocabulary",
    "Understand basic French grammar",
    "Prepare for French A2 level",
    "Build confidence while communicating in French",
  ],

  requirements: [
    "No prior knowledge of French required",
    "Internet connection for online live classes",
    "Notebook for practice and assignments",
    "Commitment to attend speaking sessions regularly",
  ],

  targetAudience: [
    "Complete Beginners",
    "School Students",
    "College Students",
    "Study Abroad Aspirants",
    "Canada Immigration Applicants",
    "Working Professionals",
    "Travel Enthusiasts",
    "Language Learners",
  ],

  modules: [
    {
      title: "Introduction to French",
      description:
        "Learn the French alphabet, pronunciation, greetings, and introductions.",
      lessons: [
        "French Alphabet",
        "Greetings",
        "Introducing Yourself",
        "Basic Expressions",
      ],
    },
    {
      title: "Basic Grammar",
      description:
        "Understand essential grammar needed for beginner communication.",
      lessons: [
        "Articles",
        "Gender of Nouns",
        "Present Tense",
        "Pronouns",
        "Simple Sentences",
      ],
    },
    {
      title: "Vocabulary Building",
      description:
        "Develop vocabulary used in daily life and common conversations.",
      lessons: [
        "Numbers",
        "Colors",
        "Family",
        "Food",
        "Travel Vocabulary",
      ],
    },
    {
      title: "Listening & Speaking",
      description:
        "Practice listening comprehension and speaking confidently.",
      lessons: [
        "Daily Conversations",
        "Question & Answer Practice",
        "Pronunciation",
        "Role Plays",
      ],
    },
    {
      title: "Reading & Writing",
      description:
        "Learn to read simple passages and write basic French sentences.",
      lessons: [
        "Reading Practice",
        "Writing Short Paragraphs",
        "Email Writing",
        "Sentence Formation",
      ],
    },
    {
      title: "A1 Exam Preparation",
      description:
        "Prepare for CEFR A1 assessments and future language certifications.",
      lessons: [
        "Revision",
        "Mock Tests",
        "Speaking Assessment",
        "Final Evaluation",
      ],
    },
  ],

  certificateAvailable: true,

  classType: "Live Online",

  seoTitle:
    "French A1 Course | Beginner French Classes | Learn French Online",

  seoDescription:
    "Join our French A1 Beginner Course to learn French from scratch. Improve speaking, listening, reading, writing, grammar, pronunciation, and vocabulary through live online classes aligned with CEFR A1.",

  batches: [
    {
      _id: "fr-a1-batch-1",
      name: "Morning Batch",
      startDate: "2026-07-05",
      students: 22,
    },
    {
      _id: "fr-a1-batch-2",
      name: "Weekend Batch",
      startDate: "2026-07-12",
      students: 18,
    },
  ],

  createdAt: "2026-06-20T10:00:00.000Z",

  updatedAt: "2026-06-24T10:00:00.000Z",

  results: [
    {
      name: "Neha Kapoor",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      achievement: "Started French from Scratch",
      result: "Beginner → A1 Certified",
      quote:
        "The interactive classes made learning French simple and enjoyable. I can now introduce myself and communicate confidently.",
    },
    {
      name: "Arjun Malhotra",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
      achievement: "Study Abroad Preparation",
      result: "Ready for A2 Level",
      quote:
        "This course built a strong foundation for my higher studies in France. The speaking practice was extremely helpful.",
    },
    {
      name: "Simran Kaur",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      achievement: "Improved French Communication",
      result: "Confident Everyday Conversations",
      quote:
        "I loved the pronunciation sessions and vocabulary practice. Learning French became much easier than I expected.",
    },
  ],

  learnings: [
    {
      icon: <FaComments />,
      title: "Speak Basic French",
      description:
        "Communicate confidently in everyday French conversations.",
    },
    {
      icon: <FaMicrophone />,
      title: "French Pronunciation",
      description:
        "Develop accurate pronunciation and listening skills.",
    },
    {
      icon: <FaBookOpen />,
      title: "Vocabulary Building",
      description:
        "Learn practical vocabulary used in daily situations.",
    },
    {
      icon: <FaCheckCircle />,
      title: "French Grammar",
      description:
        "Master beginner grammar with practical exercises.",
    },
    {
      icon: <FaUserTie />,
      title: "Study Abroad Preparation",
      description:
        "Build a strong language foundation for international education.",
    },
    {
      icon: <FaBullhorn />,
      title: "Conversation Practice",
      description:
        "Gain confidence through live speaking sessions and role plays.",
    },
  ],

  whoIsThisFor: [
    "Complete beginners learning French",
    "Students planning to study in France or Canada",
    "College students learning a foreign language",
    "Professionals expanding career opportunities",
    "Travelers visiting French-speaking countries",
    "Canada PR applicants",
    "Anyone preparing for CEFR A2 and DELF exams",
    "Anyone interested in learning French from scratch",
  ],
},
{
  _id: "685a3f7b7b9c4d001f2e6789",

  title: "French A2 Intermediate Course",

  slug: "french-a2-intermediate-course",

  shortDescription:
    "Advance your French communication skills with our CEFR A2 Course. Improve speaking, listening, reading, writing, grammar, vocabulary, pronunciation, and real-life conversation through live interactive classes.",

  description: `
French A2 Intermediate Course is designed according to the Common European Framework of Reference for Languages (CEFR A2). It is ideal for learners who have completed the A1 level or already possess basic knowledge of French.

The course focuses on improving communication skills by helping learners understand frequently used expressions, participate in everyday conversations, describe experiences, express opinions, and communicate confidently in familiar situations.

Students practice through live speaking sessions, grammar workshops, listening exercises, reading comprehension, writing assignments, vocabulary development, role plays, and interactive classroom activities.

Whether you are preparing for higher education, immigration, DELF A2 certification, professional opportunities, or simply want to improve your French fluency, this course provides the next step in your language-learning journey.

By the end of the program, students will communicate comfortably in daily conversations, understand routine situations, write structured paragraphs, and confidently progress toward the B1 level.
  `,

  thumbnail: {
    public_id: "courses/french-a2-course",
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },

  // price: 7999,

  durationInMonths: 3,

  level: "A2 Intermediate",

  language: "French",

  category: "French Language",

  status: "published",

  enrollmentOpen: true,

  tags: [
    "french a2",
    "learn french online",
    "intermediate french",
    "cefr a2",
    "delf a2",
    "french speaking course",
    "french grammar",
    "study abroad",
    "canada immigration",
    "online french classes",
    "french communication",
    "french vocabulary",
  ],

  learningOutcomes: [
    "Communicate confidently in everyday French conversations",
    "Describe experiences, plans, and opinions",
    "Understand frequently used French expressions",
    "Improve listening and pronunciation",
    "Write emails, letters, and short paragraphs",
    "Strengthen French grammar skills",
    "Expand practical vocabulary",
    "Prepare for DELF A2 examination",
    "Develop conversational fluency",
    "Build a strong foundation for French B1",
  ],

  requirements: [
    "Completion of French A1 or equivalent knowledge",
    "Basic reading and speaking skills in French",
    "Internet connection for online classes",
    "Notebook for assignments and practice",
  ],

  targetAudience: [
    "Students who completed French A1",
    "Study Abroad Aspirants",
    "Canada PR Applicants",
    "Working Professionals",
    "College Students",
    "Language Enthusiasts",
    "Travelers",
    "Anyone preparing for DELF A2",
  ],

  modules: [
    {
      title: "Revision of A1 Concepts",
      description:
        "Refresh essential grammar and vocabulary before moving to A2.",
      lessons: [
        "A1 Grammar Review",
        "Conversation Practice",
        "Vocabulary Revision",
        "Pronunciation Review",
      ],
    },
    {
      title: "Intermediate Grammar",
      description:
        "Learn advanced grammar structures used in everyday communication.",
      lessons: [
        "Past Tense (Passé Composé)",
        "Future Tense",
        "Reflexive Verbs",
        "Object Pronouns",
        "Comparisons",
      ],
    },
    {
      title: "Vocabulary Expansion",
      description:
        "Build vocabulary for work, travel, education, shopping, and daily life.",
      lessons: [
        "Travel Vocabulary",
        "Shopping & Banking",
        "Health",
        "Education",
        "Professional Vocabulary",
      ],
    },
    {
      title: "Speaking & Listening",
      description:
        "Improve confidence through interactive conversations.",
      lessons: [
        "Role Plays",
        "Daily Situations",
        "Listening Practice",
        "Discussion Activities",
      ],
    },
    {
      title: "Reading & Writing",
      description:
        "Read authentic texts and improve writing skills.",
      lessons: [
        "Reading Articles",
        "Letter Writing",
        "Emails",
        "Paragraph Writing",
      ],
    },
    {
      title: "DELF A2 Preparation",
      description:
        "Prepare for CEFR A2 certification with practice tests.",
      lessons: [
        "Mock Speaking Test",
        "Listening Assessment",
        "Writing Practice",
        "Final Evaluation",
      ],
    },
  ],

  certificateAvailable: true,

  classType: "Live Online",

  seoTitle:
    "French A2 Course | Intermediate French Classes | DELF A2 Preparation",

  seoDescription:
    "Join our French A2 Intermediate Course to improve speaking, listening, reading, writing, grammar, pronunciation, vocabulary, and prepare for DELF A2 certification through live online classes.",

  batches: [
    {
      _id: "fr-a2-batch-1",
      name: "Morning Batch",
      startDate: "2026-07-08",
      students: 20,
    },
    {
      _id: "fr-a2-batch-2",
      name: "Evening Batch",
      startDate: "2026-07-15",
      students: 17,
    },
  ],

  createdAt: "2026-06-21T10:00:00.000Z",

  updatedAt: "2026-06-24T10:00:00.000Z",

  results: [
    {
      name: "Riya Sharma",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      achievement: "Passed DELF A2",
      result: "A1 → A2 Certified",
      quote:
        "The speaking sessions and mock tests gave me the confidence to clear my DELF A2 exam.",
    },
    {
      name: "Karan Verma",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
      achievement: "Study Abroad Ready",
      result: "Improved Communication",
      quote:
        "I can now confidently communicate during travel and university interactions in French.",
    },
    {
      name: "Simran Gill",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      achievement: "Better Workplace Communication",
      result: "Confident French Speaker",
      quote:
        "This course strengthened my grammar, vocabulary, and overall confidence while speaking French.",
    },
  ],

  learnings: [
    {
      icon: <FaComments />,
      title: "Fluent Conversations",
      description:
        "Communicate naturally in everyday situations.",
    },
    {
      icon: <FaMicrophone />,
      title: "Pronunciation & Listening",
      description:
        "Improve comprehension and pronunciation accuracy.",
    },
    {
      icon: <FaBookOpen />,
      title: "Advanced Vocabulary",
      description:
        "Expand vocabulary for education, travel, and professional use.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Intermediate Grammar",
      description:
        "Master essential grammar for A2 communication.",
    },
    {
      icon: <FaUserTie />,
      title: "DELF A2 Preparation",
      description:
        "Prepare confidently for the DELF A2 certification exam.",
    },
    {
      icon: <FaBullhorn />,
      title: "Real-Life Communication",
      description:
        "Practice speaking through discussions, role plays, and presentations.",
    },
  ],

  whoIsThisFor: [
    "Students who completed French A1",
    "Learners preparing for DELF A2",
    "Study abroad aspirants",
    "Canada immigration applicants",
    "Working professionals",
    "College students",
    "Travel enthusiasts",
    "Anyone aiming to reach French B1 level",
  ],
},
{
  _id: "685a4f8c7b9c4d001f2e7890",

  title: "French B1 Intermediate Course",

  slug: "french-b1-intermediate-course",

  shortDescription:
    "Achieve independent communication in French with our CEFR B1 Course. Develop fluency in speaking, listening, reading, writing, grammar, and vocabulary while preparing for DELF B1 certification, higher education, and international careers.",

  description: `
French B1 Intermediate Course is designed according to the Common European Framework of Reference for Languages (CEFR B1). It is ideal for learners who have successfully completed A2 or possess equivalent French language proficiency.

The course focuses on helping learners communicate independently in academic, professional, and everyday situations. Students learn to express opinions, discuss experiences, explain ideas, solve problems, and participate naturally in longer conversations.

The program includes live interactive speaking classes, advanced grammar lessons, pronunciation practice, vocabulary expansion, listening comprehension, reading authentic French materials, writing structured texts, presentations, debates, and real-world communication exercises.

Whether your goal is studying abroad, immigration, DELF B1 certification, career advancement, or becoming fluent in French, this course provides the skills required to confidently communicate in French-speaking environments.

By the end of the course, learners will confidently understand standard spoken French, participate in discussions, write well-structured texts, express viewpoints clearly, and build a strong foundation for the B2 level.
  `,

  thumbnail: {
    public_id: "courses/french-b1-course",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },

  // price: 9999,

  durationInMonths: 4,

  level: "B1 Intermediate",

  language: "French",

  category: "French Language",

  status: "published",

  enrollmentOpen: true,

  tags: [
    "French B1",
    "DELF B1",
    "Intermediate French",
    "French speaking course",
    "Learn French online",
    "French grammar",
    "French conversation",
    "French vocabulary",
    "Study abroad",
    "Canada immigration",
    "French certification",
    "Online French classes",
  ],

  learningOutcomes: [
    "Communicate independently in French",
    "Participate confidently in conversations and discussions",
    "Express opinions and ideas naturally",
    "Understand authentic spoken French",
    "Improve pronunciation and fluency",
    "Write essays, emails, and formal documents",
    "Expand advanced French vocabulary",
    "Master intermediate grammar concepts",
    "Prepare for DELF B1 examination",
    "Build confidence for French B2 level",
  ],

  requirements: [
    "Completion of French A2 or equivalent knowledge",
    "Basic conversational French skills",
    "Internet connection for live classes",
    "Notebook for assignments and practice",
  ],

  targetAudience: [
    "Students completing French A2",
    "Study Abroad Aspirants",
    "Canada PR Applicants",
    "Working Professionals",
    "College Students",
    "International Job Seekers",
    "Language Enthusiasts",
    "Learners preparing for DELF B1",
  ],

  modules: [
    {
      title: "Revision of A2 Concepts",
      description:
        "Strengthen previous concepts before moving to B1 level.",
      lessons: [
        "Grammar Revision",
        "Conversation Review",
        "Vocabulary Expansion",
        "Listening Practice",
      ],
    },
    {
      title: "Advanced Grammar",
      description:
        "Learn grammar required for independent communication.",
      lessons: [
        "Imparfait",
        "Future Simple",
        "Conditional",
        "Relative Pronouns",
        "Complex Sentences",
      ],
    },
    {
      title: "Speaking & Communication",
      description:
        "Develop fluency through practical speaking exercises.",
      lessons: [
        "Debates",
        "Presentations",
        "Storytelling",
        "Role Plays",
      ],
    },
    {
      title: "Reading & Listening",
      description:
        "Understand newspapers, interviews, podcasts, and articles.",
      lessons: [
        "News Articles",
        "Podcasts",
        "Audio Conversations",
        "Reading Comprehension",
      ],
    },
    {
      title: "Writing Skills",
      description:
        "Write structured and meaningful French texts.",
      lessons: [
        "Essay Writing",
        "Formal Emails",
        "Letters",
        "Opinion Writing",
      ],
    },
    {
      title: "DELF B1 Preparation",
      description:
        "Comprehensive preparation for DELF B1 examination.",
      lessons: [
        "Mock Tests",
        "Speaking Assessment",
        "Writing Evaluation",
        "Final Practice",
      ],
    },
  ],

  certificateAvailable: true,

  classType: "Live Online",

  seoTitle:
    "French B1 Course | DELF B1 Preparation | Intermediate French Classes",

  seoDescription:
    "Master independent French communication with our French B1 Course. Improve speaking, listening, reading, writing, grammar, vocabulary, and prepare for DELF B1 certification through expert-led live online classes.",

  batches: [
    {
      _id: "fr-b1-batch-1",
      name: "Morning Batch",
      startDate: "2026-07-10",
      students: 18,
    },
    {
      _id: "fr-b1-batch-2",
      name: "Weekend Batch",
      startDate: "2026-07-18",
      students: 15,
    },
  ],

  createdAt: "2026-06-22T10:00:00.000Z",

  updatedAt: "2026-06-25T10:00:00.000Z",

  results: [
    {
      name: "Aarav Mehta",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
      achievement: "Passed DELF B1",
      result: "A2 → B1 Certified",
      quote:
        "The speaking practice and presentations helped me become comfortable communicating entirely in French.",
    },
    {
      name: "Sneha Kapoor",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      achievement: "Study Abroad Success",
      result: "French University Admission",
      quote:
        "This course gave me the confidence and language skills needed for my university interviews and daily life in France.",
    },
    {
      name: "Rohan Verma",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      achievement: "Career Growth",
      result: "Professional French Communication",
      quote:
        "My vocabulary and grammar improved tremendously, allowing me to communicate confidently with international clients.",
    },
  ],

  learnings: [
    {
      icon: <FaComments />,
      title: "Independent Conversations",
      description:
        "Communicate naturally in academic, professional, and social situations.",
    },
    {
      icon: <FaMicrophone />,
      title: "Advanced Pronunciation",
      description:
        "Improve fluency, pronunciation, and listening comprehension.",
    },
    {
      icon: <FaBookOpen />,
      title: "Rich Vocabulary",
      description:
        "Develop vocabulary for work, education, travel, and daily communication.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Complex Grammar",
      description:
        "Master intermediate grammar and sentence structures.",
    },
    {
      icon: <FaUserTie />,
      title: "DELF B1 Preparation",
      description:
        "Prepare confidently for the official DELF B1 examination.",
    },
    {
      icon: <FaBullhorn />,
      title: "Presentation Skills",
      description:
        "Develop confidence through presentations, discussions, and debates.",
    },
  ],

  whoIsThisFor: [
    "Students who completed French A2",
    "Learners preparing for DELF B1",
    "Study abroad aspirants",
    "Canada immigration applicants",
    "Working professionals",
    "College students",
    "International job seekers",
    "Anyone planning to advance to French B2",
  ],
},
{
  _id: "685a1f4a7b9c4d001f2e1238",

  title: "French B2 Advanced Communication Course",

  slug: "french-b2-advanced",

  shortDescription:
    "Master advanced French communication, professional writing, debates, presentations, business communication, and DELF B2 exam preparation through immersive live online classes.",

  description: `
The French B2 Advanced Communication Course is designed for learners who already possess a strong intermediate understanding of French and wish to achieve independent, confident, and professional communication.

The course focuses on advanced speaking, listening, writing, reading comprehension, grammar refinement, professional communication, public presentations, debates, critical thinking, and authentic French media.

Students engage in discussions on current affairs, business topics, culture, travel, technology, education, and professional situations while learning advanced sentence structures and natural expressions.

Special attention is given to DELF B2 examination strategies, formal writing, argument development, opinion essays, presentations, interviews, and workplace conversations.

By the end of this program, learners will confidently communicate with native speakers, express opinions fluently, understand complex conversations, and prepare successfully for DELF B2 certification or professional opportunities requiring French.
  `,

  thumbnail: {
    public_id: "courses/french-b2-advanced",
    url: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
  },

  durationInMonths: 4,

  level: "Upper Intermediate (B2)",

  language: "French",

  category: "French Language",

  status: "published",

  enrollmentOpen: true,

  tags: [
    "French B2",
    "Advanced French",
    "DELF B2",
    "French communication",
    "Business French",
    "French speaking",
    "French writing",
    "French grammar",
    "French vocabulary",
    "French fluency",
    "French certification",
    "French online course",
  ],

  learningOutcomes: [
    "Communicate fluently with native speakers",
    "Participate confidently in debates and discussions",
    "Write professional emails and formal documents",
    "Understand advanced spoken French",
    "Improve pronunciation and natural fluency",
    "Prepare successfully for DELF B2",
    "Present ideas clearly in French",
    "Develop business communication skills",
    "Expand advanced vocabulary",
    "Gain confidence for study or work in French-speaking countries",
  ],

  requirements: [
    "Completion of French B1 or equivalent knowledge",
    "Comfortable with intermediate grammar and conversation",
    "Internet connection for live classes",
    "Notebook for assignments and speaking practice",
  ],

  targetAudience: [
    "Students completing French B1",
    "Professionals working with French companies",
    "Students preparing for DELF B2",
    "Learners planning higher education abroad",
    "Individuals relocating to French-speaking countries",
    "Professionals seeking career growth through French",
  ],

  modules: [
    {
      title: "Advanced Grammar & Sentence Structures",
      description:
        "Refine grammar accuracy using advanced sentence patterns.",
      lessons: [
        "Complex Sentences",
        "Subjunctive Mood",
        "Advanced Verb Usage",
        "Reported Speech",
      ],
    },
    {
      title: "Professional Communication",
      description:
        "Communicate confidently in workplace and business environments.",
      lessons: [
        "Business Emails",
        "Meetings",
        "Negotiations",
        "Professional Vocabulary",
      ],
    },
    {
      title: "Debates & Opinion Expression",
      description:
        "Develop confidence in discussing complex topics.",
      lessons: [
        "Current Affairs",
        "Expressing Opinions",
        "Arguments",
        "Critical Thinking",
      ],
    },
    {
      title: "Listening & Media",
      description:
        "Understand authentic French through various media sources.",
      lessons: [
        "News",
        "Podcasts",
        "Interviews",
        "TV Programs",
      ],
    },
    {
      title: "Presentation & Public Speaking",
      description:
        "Deliver structured presentations with confidence.",
      lessons: [
        "Presentation Skills",
        "Storytelling",
        "Audience Engagement",
        "Speech Practice",
      ],
    },
    {
      title: "DELF B2 Preparation",
      description:
        "Comprehensive preparation for all DELF B2 exam sections.",
      lessons: [
        "Listening Practice",
        "Reading Comprehension",
        "Writing Tasks",
        "Speaking Examination",
      ],
    },
  ],

  certificateAvailable: true,

  classType: "Live Online",

  seoTitle:
    "French B2 Course | Advanced French Language & DELF B2 Preparation",

  seoDescription:
    "Join our French B2 Advanced Course to master fluent French communication, professional writing, advanced grammar, speaking, and DELF B2 exam preparation through expert-led live online classes.",

  batches: [
    {
      _id: "fr-b2-batch-1",
      name: "Weekend Batch",
      startDate: "2026-07-20",
      students: 18,
    },
    {
      _id: "fr-b2-batch-2",
      name: "Evening Batch",
      startDate: "2026-08-05",
      students: 16,
    },
  ],

  createdAt: "2026-06-20T10:00:00.000Z",

  updatedAt: "2026-06-23T10:00:00.000Z",

  results: [
    {
      name: "Aditi Sharma",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      achievement: "Passed DELF B2",
      result: "B1 → DELF B2 Certified",
      quote:
        "The debate sessions, mock exams, and advanced grammar practice helped me clear DELF B2 confidently.",
    },
    {
      name: "Rahul Kapoor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
      achievement: "Job Opportunity in France",
      result: "Professional French Communication",
      quote:
        "This course helped me communicate confidently during interviews and secure a position with a French company.",
    },
    {
      name: "Sanya Gupta",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      achievement: "University Admission",
      result: "Advanced Academic French",
      quote:
        "The structured writing and speaking practice prepared me perfectly for university admissions abroad.",
    },
  ],

  learnings: [
    {
      icon: <FaComments />,
      title: "Advanced Conversations",
      description:
        "Discuss complex topics confidently with fluent communication.",
    },
    {
      icon: <FaMicrophone />,
      title: "Professional Speaking",
      description:
        "Deliver presentations, meetings, and interviews naturally.",
    },
    {
      icon: <FaBookOpen />,
      title: "Advanced Vocabulary",
      description:
        "Build professional, academic, and business vocabulary.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Grammar Mastery",
      description:
        "Use advanced grammar accurately in speaking and writing.",
    },
    {
      icon: <FaUserTie />,
      title: "Business French",
      description:
        "Communicate effectively in international workplaces.",
    },
    {
      icon: <FaBullhorn />,
      title: "DELF B2 Preparation",
      description:
        "Prepare confidently for all DELF B2 examination modules.",
    },
  ],

  whoIsThisFor: [
    "Students completing French B1",
    "Learners preparing for DELF B2 certification",
    "Professionals working with international companies",
    "Students planning higher education in France or Canada",
    "Individuals relocating to French-speaking countries",
    "Business professionals communicating with French clients",
    "Advanced learners aiming for fluent communication",
    "Anyone pursuing professional-level French proficiency",
  ],
},
{
  _id: "685a1f4a7b9c4d001f2e1239",

  title: "French C1 Professional Fluency Course",

  slug: "french-c1-professional-fluency",

  shortDescription:
    "Achieve professional-level French fluency with advanced communication, academic writing, public speaking, business French, and DALF C1 preparation through immersive live online classes.",

  description: `
The French C1 Professional Fluency Course is designed for advanced learners who want to communicate naturally, accurately, and confidently in academic, professional, and social environments.

This intensive program focuses on mastering sophisticated vocabulary, advanced grammar, spontaneous speaking, persuasive communication, academic writing, presentations, negotiations, public speaking, and cultural understanding.

Students participate in real-life discussions, debates, business meetings, research presentations, media analysis, literature discussions, and workplace simulations to develop native-like fluency.

The course also provides complete preparation for the DALF C1 examination, including advanced listening, reading, writing, and oral production.

By the end of the course, learners will confidently understand complex French content, communicate with native speakers effortlessly, write professional and academic documents, and perform successfully in higher education or international careers requiring advanced French proficiency.
  `,

  thumbnail: {
    public_id: "courses/french-c1-professional-fluency",
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },

  durationInMonths: 5,

  level: "Advanced (C1)",

  language: "French",

  category: "French Language",

  status: "published",

  enrollmentOpen: true,

  tags: [
    "French C1",
    "DALF C1",
    "Advanced French",
    "Professional French",
    "Business French",
    "Academic French",
    "French fluency",
    "French communication",
    "French writing",
    "French public speaking",
    "French online course",
    "French certification",
  ],

  learningOutcomes: [
    "Speak French fluently in professional environments",
    "Express complex ideas with confidence",
    "Write advanced academic and professional documents",
    "Understand native speakers effortlessly",
    "Participate in debates and negotiations",
    "Master advanced grammar and stylistic expressions",
    "Prepare successfully for DALF C1",
    "Deliver presentations in French",
    "Develop near-native pronunciation",
    "Gain confidence for international careers and higher education",
  ],

  requirements: [
    "Completion of French B2 or equivalent proficiency",
    "Strong command of intermediate and advanced grammar",
    "Regular participation in speaking sessions",
    "Internet connection for live online classes",
  ],

  targetAudience: [
    "Students preparing for DALF C1",
    "Professionals working in multinational companies",
    "University students pursuing higher education abroad",
    "Translators and language professionals",
    "Individuals relocating to France or Canada",
    "Learners aiming for near-native fluency",
  ],

  modules: [
    {
      title: "Advanced Grammar & Expression",
      description:
        "Master sophisticated grammatical structures and stylistic language.",
      lessons: [
        "Advanced Syntax",
        "Complex Sentence Structures",
        "Idiomatic Expressions",
        "Language Register",
      ],
    },
    {
      title: "Professional Communication",
      description:
        "Communicate confidently in corporate and international environments.",
      lessons: [
        "Business Meetings",
        "Negotiation Skills",
        "Professional Emails",
        "Corporate Presentations",
      ],
    },
    {
      title: "Academic Writing",
      description:
        "Develop advanced writing skills for university and research purposes.",
      lessons: [
        "Essays",
        "Reports",
        "Research Writing",
        "Argumentative Writing",
      ],
    },
    {
      title: "Media & Cultural Analysis",
      description:
        "Understand authentic French media and cultural perspectives.",
      lessons: [
        "Newspapers",
        "Podcasts",
        "TV Discussions",
        "Literature Analysis",
      ],
    },
    {
      title: "Public Speaking & Debate",
      description:
        "Present and defend ideas confidently before an audience.",
      lessons: [
        "Public Speaking",
        "Debates",
        "Critical Thinking",
        "Persuasive Communication",
      ],
    },
    {
      title: "DALF C1 Preparation",
      description:
        "Comprehensive preparation for all DALF C1 examination sections.",
      lessons: [
        "Listening",
        "Reading",
        "Writing",
        "Oral Production",
      ],
    },
  ],

  certificateAvailable: true,

  classType: "Live Online",

  seoTitle:
    "French C1 Course | DALF C1 Preparation & Professional French Fluency",

  seoDescription:
    "Master advanced French communication with our French C1 Course. Learn professional speaking, academic writing, business French, public speaking, and prepare for DALF C1 certification through expert-led live online classes.",

  batches: [
    {
      _id: "fr-c1-batch-1",
      name: "Weekend Advanced Batch",
      startDate: "2026-08-01",
      students: 14,
    },
    {
      _id: "fr-c1-batch-2",
      name: "Evening Professional Batch",
      startDate: "2026-08-18",
      students: 11,
    },
  ],

  createdAt: "2026-06-20T10:00:00.000Z",

  updatedAt: "2026-06-23T10:00:00.000Z",

  results: [
    {
      name: "Neha Arora",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      achievement: "Passed DALF C1",
      result: "B2 → DALF C1 Certified",
      quote:
        "The advanced discussions and mock examinations helped me achieve my DALF C1 certification with confidence.",
    },
    {
      name: "Karan Malhotra",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
      achievement: "International Career",
      result: "Professional French Fluency",
      quote:
        "I now conduct meetings and presentations entirely in French while working for an international organization.",
    },
    {
      name: "Sarah Wilson",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      achievement: "University Admission",
      result: "Academic French Excellence",
      quote:
        "This course gave me the confidence to pursue postgraduate studies in France with advanced French proficiency.",
    },
  ],

  learnings: [
    {
      icon: <FaComments />,
      title: "Native-Level Conversations",
      description:
        "Communicate naturally in complex personal and professional situations.",
    },
    {
      icon: <FaMicrophone />,
      title: "Professional Presentations",
      description:
        "Deliver impactful presentations and speeches confidently.",
    },
    {
      icon: <FaBookOpen />,
      title: "Academic Writing",
      description:
        "Write research papers, reports, and professional documents effectively.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Advanced Grammar",
      description:
        "Master sophisticated grammar and stylistic language structures.",
    },
    {
      icon: <FaUserTie />,
      title: "Business Communication",
      description:
        "Lead meetings, negotiations, and workplace discussions in French.",
    },
    {
      icon: <FaBullhorn />,
      title: "DALF C1 Success",
      description:
        "Prepare comprehensively for every section of the DALF C1 examination.",
    },
  ],

  whoIsThisFor: [
    "Students completing French B2",
    "Learners preparing for DALF C1",
    "Professionals seeking international career opportunities",
    "University students pursuing higher education in French-speaking countries",
    "Researchers and academics",
    "Translators and interpreters",
    "Business professionals working with French-speaking clients",
    "Anyone aiming for near-native French fluency",
  ],
},
{
  _id: "685a1f4a7b9c4d001f2e1240",

  title: "French C2 Native Mastery Course",

  slug: "french-c2-native-mastery",

  shortDescription:
    "Achieve near-native French proficiency with advanced communication, literature, research writing, interpretation, public speaking, and DALF C2 preparation through immersive live online training.",

  description: `
The French C2 Native Mastery Course is our highest level of French language training, designed for learners who wish to communicate with the precision, confidence, and sophistication of a native speaker.

This program emphasizes complete mastery of spoken and written French through advanced academic discussions, professional communication, literature analysis, research writing, interpretation techniques, cultural studies, and high-level presentations.

Students explore authentic French media, legal and business communication, advanced vocabulary, idiomatic expressions, regional language variations, and complex grammar structures while participating in debates, seminars, conferences, and public speaking exercises.

Special attention is given to DALF C2 examination strategies, spontaneous communication, critical analysis, persuasive writing, and advanced listening comprehension using real-world French content.

Upon completion, learners will confidently communicate in any personal, academic, governmental, corporate, or international environment while demonstrating exceptional fluency, cultural awareness, and professional-level French proficiency.
  `,

  thumbnail: {
    public_id: "courses/french-c2-native-mastery",
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },

  durationInMonths: 6,

  level: "Mastery (C2)",

  language: "French",

  category: "French Language",

  status: "published",

  enrollmentOpen: true,

  tags: [
    "French C2",
    "DALF C2",
    "Native French",
    "French Mastery",
    "Professional French",
    "Academic French",
    "Interpreter Training",
    "French Literature",
    "Advanced French Communication",
    "French Fluency",
    "French Certification",
    "French Online Course",
  ],

  learningOutcomes: [
    "Communicate like a native French speaker",
    "Understand every form of spoken and written French",
    "Master academic and research writing",
    "Lead professional meetings and negotiations",
    "Interpret complex conversations accurately",
    "Develop advanced public speaking skills",
    "Understand regional accents and idiomatic expressions",
    "Prepare successfully for DALF C2",
    "Analyze literature and media critically",
    "Achieve complete professional French fluency",
  ],

  requirements: [
    "Completion of French C1 or equivalent proficiency",
    "Excellent command of advanced grammar",
    "Regular participation in discussions and presentations",
    "Internet connection for live online classes",
  ],

  targetAudience: [
    "Students preparing for DALF C2",
    "Professional translators and interpreters",
    "University researchers",
    "International business professionals",
    "Government and diplomatic professionals",
    "Teachers of French language",
    "Learners seeking native-level fluency",
  ],

  modules: [
    {
      title: "Native-Level Communication",
      description:
        "Develop effortless communication across every situation.",
      lessons: [
        "Spontaneous Speaking",
        "Regional Expressions",
        "Idioms",
        "Conversation Mastery",
      ],
    },
    {
      title: "Advanced Academic Writing",
      description:
        "Produce research papers and high-level professional documents.",
      lessons: [
        "Research Writing",
        "Academic Essays",
        "Critical Reviews",
        "Professional Reports",
      ],
    },
    {
      title: "French Literature & Culture",
      description:
        "Study authentic literary works and cultural perspectives.",
      lessons: [
        "Classic Literature",
        "Modern Literature",
        "French Society",
        "Cultural Analysis",
      ],
    },
    {
      title: "Interpretation & Translation",
      description:
        "Develop advanced translation and interpretation skills.",
      lessons: [
        "Simultaneous Interpretation",
        "Professional Translation",
        "Contextual Meaning",
        "Terminology",
      ],
    },
    {
      title: "Leadership Communication",
      description:
        "Master executive presentations and public speaking.",
      lessons: [
        "Executive Meetings",
        "Negotiations",
        "Seminars",
        "Conference Speaking",
      ],
    },
    {
      title: "DALF C2 Preparation",
      description:
        "Comprehensive preparation for every component of DALF C2.",
      lessons: [
        "Listening",
        "Reading",
        "Advanced Writing",
        "Oral Defense",
      ],
    },
  ],

  certificateAvailable: true,

  classType: "Live Online",

  seoTitle:
    "French C2 Course | Native French Mastery & DALF C2 Preparation",

  seoDescription:
    "Master native-level French with our French C2 Course. Learn advanced communication, academic writing, literature, interpretation, business French, and prepare for DALF C2 certification through expert-led live classes.",

  batches: [
    {
      _id: "fr-c2-batch-1",
      name: "Weekend Mastery Batch",
      startDate: "2026-08-15",
      students: 8,
    },
    {
      _id: "fr-c2-batch-2",
      name: "Professional Evening Batch",
      startDate: "2026-09-01",
      students: 6,
    },
  ],

  createdAt: "2026-06-20T10:00:00.000Z",

  updatedAt: "2026-06-23T10:00:00.000Z",

  results: [
    {
      name: "Ritika Sharma",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      achievement: "Passed DALF C2",
      result: "C1 → DALF C2 Certified",
      quote:
        "The advanced discussions, literature analysis, and mock exams helped me achieve the highest level of French proficiency.",
    },
    {
      name: "Arjun Mehta",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
      achievement: "Interpreter at International Conference",
      result: "Professional French Interpreter",
      quote:
        "This course transformed my communication skills and prepared me for international interpretation assignments.",
    },
    {
      name: "Emily Brown",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      achievement: "Research Scholar in France",
      result: "Native-Level Academic French",
      quote:
        "The academic writing and presentation modules prepared me perfectly for doctoral studies in France.",
    },
  ],

  learnings: [
    {
      icon: <FaComments />,
      title: "Native-Level Fluency",
      description:
        "Communicate naturally in every professional and personal situation.",
    },
    {
      icon: <FaMicrophone />,
      title: "Executive Communication",
      description:
        "Deliver world-class presentations, lectures, and speeches.",
    },
    {
      icon: <FaBookOpen />,
      title: "Academic Excellence",
      description:
        "Produce research papers and advanced academic publications.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Language Mastery",
      description:
        "Master every aspect of French grammar, vocabulary, and style.",
    },
    {
      icon: <FaUserTie />,
      title: "Translation & Interpretation",
      description:
        "Develop professional-level interpreting and translation skills.",
    },
    {
      icon: <FaBullhorn />,
      title: "DALF C2 Success",
      description:
        "Prepare comprehensively for the highest French language certification.",
    },
  ],

  whoIsThisFor: [
    "Students completing French C1",
    "Learners preparing for DALF C2 certification",
    "Professional translators and interpreters",
    "University professors and researchers",
    "Government and diplomatic professionals",
    "International business executives",
    "French language teachers",
    "Anyone aiming for native-level French proficiency",
  ],
}
];

