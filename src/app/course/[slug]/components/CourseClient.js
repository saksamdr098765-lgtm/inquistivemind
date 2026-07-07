import React from 'react'
import CourseHero from './Hero'
import WhatYouWillLearn from './WhatYouLearn';
import CourseOverview from './CourseOverview';
import CourseModules from './CourseModule';
import WhoIsThisCourseFor from './WhoIsThisFor';
import StudentResult from './StudentsResult';
import CourseCTA from './CTA';



export default function CourseClient({course}) {
  return (
   <>
   <CourseHero course={course}></CourseHero>
   <WhatYouWillLearn learnings={course.learnings}></WhatYouWillLearn>
   <CourseOverview course={course}></CourseOverview>
   <CourseModules modules={course.modules}></CourseModules>
   <WhoIsThisCourseFor whoIsThisFor={course.whoIsThisFor}></WhoIsThisCourseFor>
   <StudentResult results={course.results}></StudentResult>
   <CourseCTA course={course}></CourseCTA>

   </>
  )
}
