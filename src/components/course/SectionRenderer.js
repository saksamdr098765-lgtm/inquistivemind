import Hero from "./sections/Hero";
import QuickFacts from "./sections/QuickFacts";
import Outcomes from "./sections/Outcomes";
import WhoItsFor from "./sections/WhoItsFor";
import Curriculum from "./sections/Curriculum";
import ExamAlignment from "./sections/ExamAlignment";
import TeachingMethod from "./sections/TeachingMethod";
import SchedulePricing from "./sections/SchedulePricing";
import Instructor from "./sections/Instructor";
import SampleLesson from "./sections/SampleLesson";
import LevelPath from "./sections/LevelPath";
import Comparison from "./sections/Comparison";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import RelatedCourses from "./sections/RelatedCourses";
import FinalCTA from "./sections/FinalCTA";
import FreeLevelTestCTA from "./sections/FreeLevelTestCTA";
import {
  PronunciationPreview,
  PastTensesMastery,
  ArgumentationDebates,
  CLB7Mapping,
  AcademicSynthesisLab,
  LiteraryStylisticsSeminar,
  TEFExamSimulator,
  PathwayOverview,
  CorporateSpeechLab,
  AcademicBoardSplit,
} from "./sections/UniqueSections";

const SECTION_COMPONENTS = {
  hero: Hero,
  "quick-facts": QuickFacts,
  outcomes: Outcomes,
  "who-its-for": WhoItsFor,
  curriculum: Curriculum,
  "exam-alignment": ExamAlignment,
  "teaching-method": TeachingMethod,
  "schedule-pricing": SchedulePricing,
  instructor: Instructor,
  // "sample-lesson": SampleLesson,
  "level-path": LevelPath,
  comparison: Comparison,
  testimonials: Testimonials,
  faq: FAQ,
  "related-courses": RelatedCourses,
  "final-cta": FinalCTA,
  "free-level-test": FreeLevelTestCTA,
  "pronunciation-preview": PronunciationPreview,
  "past-tenses-mastery": PastTensesMastery,
  "argumentation-debates": ArgumentationDebates,
  "clb7-express-entry-mapping": CLB7Mapping,
  "academic-synthesis-lab": AcademicSynthesisLab,
  "literary-stylistics-seminar": LiteraryStylisticsSeminar,
  "tef-exam-simulator": TEFExamSimulator,
  "pathway-overview": PathwayOverview,
  "corporate-speech-lab": CorporateSpeechLab,
  "academic-board-split": AcademicBoardSplit,
};

export default function SectionRenderer({ course }) {
  if (!course) return null;

  const sectionKeys = course.sections || [
    "hero",
    "quick-facts",
    "outcomes",
    "who-its-for",
    "curriculum",
    "exam-alignment",
    "teaching-method",
    "schedule-pricing",
    "instructor",
    // "sample-lesson",
    "comparison",
    "faq",
    "related-courses",
    "final-cta",
  ];

  return (
    <>
      {sectionKeys.map((key, index) => {
        const Component = SECTION_COMPONENTS[key];
        if (!Component) return null;
        return <Component key={`${key}-${index}`} course={course} />;
      })}
    </>
  );
}
