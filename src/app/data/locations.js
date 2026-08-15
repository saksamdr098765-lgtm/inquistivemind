export const locations = [
  {
    slug: "french-classes-mohali",
    city: "Mohali",
    title: "Inquisitive Mind Academy - Online French Classes for Mohali",
    shortDescription:
      "Join live online French classes for Mohali with certified French faculty, small batch sizes, and DELF/TEF/TCF exam preparation for Phase 3B2, Phase 7, Phase 8, Sector 62, Sector 70 and nearby areas.",
    coverImage: "/locations/french-classes-mohali/cover.webp",
    address: "Live Online Interactive Classes (Serving Mohali & Worldwide)",
    phone: "+91 98787 61488",
    hours: "Mon - Sat: 09:00 AM - 07:00 PM | Live Online Batches: 07:00 AM - 10:00 PM IST",

    // Data-Driven Flags for Future Expansion:
    offersVisits: false, // Set to true when physical center / in-person visits resume
    isOnlineOnly: true,  // Indicates all classes are currently conducted online
    physicalAddress: "Sector 62, Phase 8, Mohali, Punjab 160062", // Preserved for future physical campus activation

    centralHub: [
      {
        title: "French Classes for Mohali — Live Online",
        desc: "Live interactive online French batches for beginners to advanced learners across Mohali",
        href: "/services/french-classes-chandigarh",
        badge: "Featured Service",
        buttonText: "Explore Classes",
      },
      {
        title: "French Tutor Jobs in Chandigarh & Mohali",
        desc: "Apply for French tutor jobs and teach students through flexible home and online opportunities",
        href: "/services/french-tutor-jobs-chandigarh",
        badge: "Career Opportunity",
        buttonText: "Apply as Tutor",
      },
     {
  title: "French Classes in Mohali",
  desc: "Home and online French classes covering Mohali and nearby sectors for beginners to advanced learners",
  href: "/locations/french-classes-mohali",
  badge: "Location",
  buttonText: "Explore French Classes",
},
    ],
    areas: [
      "Phase 3B2",
      "Phase 7",
      "Phase 8",
      "Phase 9",
      "Phase 11",
      "Sector 62",
      "Sector 70",
      "Sector 71",
      "Kharar",
      "Zirakpur",
      "Dera Bassi",
      "Dhakoli",
    ],
    courses: [
      "french-a1-beginner-course",
      "french-a2-elementary-course",
      "french-b1-intermediate-course",
      "french-b2-advanced-course",
      "delf-b2-exam-prep-masterclass",
      "tef-canada-preparation-bundle",
    ],
    features: [
      "Live Online Batches Dedicated to Mohali Learners",
      "1-on-1 Online Mentorship & Speaking Drills",
      "Small Batch Sizes (Max 6–8 Students)",
      "DELF, TEF & TCF Canada Exam Preparation",
    ],
 whyChoose: [
  {
    title: "French Classes in Mohali with Experienced Tutors",
    description:
      "Learn French with experienced and DELF/DALF-trained faculty offering structured online French classes for students, professionals, and learners across Mohali.",
  },
  {
    title: "Live Online French Classes in Mohali",
    description:
      "Join live interactive French classes from anywhere in Mohali with real-time teacher interaction, speaking practice, doubt solving, and guided learning.",
  },

  {
    title: "DELF, TEF & TCF Exam Preparation",
    description:
      "Prepare for DELF, TEF Canada, and TCF Canada with focused French exam training, speaking practice, mock sessions, and personalized feedback.",
  },

  {
    title: "Free Trial French Class",
    description:
      "Experience our teaching approach before enrolling with a free trial session and get guidance on the right French course, level, and learning format for your goals.",
  },
],
    faq: [
      {
        question: "Are French classes for Mohali available online?",
        answer:
          "Yes! All our French classes for Mohali are currently conducted live online with interactive audio/video labs, small batches, and 1-on-1 options. Learners in Phase 3B2, Phase 7, Phase 8, Sector 62, and Sector 70 can join seamlessly from home.",
      },
      {
        question: "Do you offer 1-on-1 online tutoring for Mohali students?",
        answer:
          "Yes, we provide personalized 1-on-1 live online French sessions for students in Mohali who prefer individual attention or targeted exam preparation for DELF, TEF, or TCF Canada.",
      },
      {
        question: "Can I join online French batches from Zirakpur, Kharar, or Dera Bassi?",
        answer:
          "Yes, our live online batches serve learners across Mohali, Kharar, Zirakpur, Dhakoli, Dera Bassi, and surrounding Tricity areas.",
      },
      {
        question: "What are the French classes fees for Mohali learners?",
        answer:
          "Fees depend on the batch mode — live online group batches are the most affordable option, while 1-on-1 online mentorship is tailored for individual pace. Check our fee guide for a full breakdown.",
      },
      {
        question: "Are physical center visits available in Mohali right now?",
        answer:
          "Physical center visits are currently paused while all classes are conducted live online. Physical visit options will be updated on this page once resumed.",
      },
    ],
    seo: {
      title: "French Classes for Mohali | Live Online Coaching | Inquisitive Mind Academy",
      description:
        "Live online French classes for Mohali learners. Covers Phase 3B2, Phase 7, Phase 8, Sector 62, Sector 70, Zirakpur & Dera Bassi. DELF/TEF/TCF exam prep available.",
      keywords: [
        "French classes Mohali",
        "Online French classes Mohali",
        "French tutor Mohali",
        "French coaching Mohali",
        "French classes Phase 7 Mohali",
        "French classes Phase 3B2 Mohali",
        "Learn French Mohali",
      ],
    },
    googleMaps: {
      iframe: "",
      direction: "",
    },
  },
];

export function getLocation(slug) {
  return locations.find((location) => location.slug === slug);
}
