import EditCourseClient from "./EditCourseClient";

export default async function EditCoursePage({ searchParams }) {
  const params = await searchParams;
  const courseId = params?.courseId;

  return <EditCourseClient courseId={courseId} />;
}