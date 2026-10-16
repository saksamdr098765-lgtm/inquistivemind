"use client";

import TeacherDashboard from "../components/TeacherDashboard";
import TeacherProfile from "../components/TeacherProfile";
import TeacherBatches from "../components/TeacherBatches";
import TeacherLiveClasses from "../components/TeacherLiveClasses";
import TeacherCourses from "../components/TeacherCourses";
import TeacherStudents from "../components/TeacherStudents";
import TeacherSettings from "../components/TeacherSettings";
import TeacherLoading from "../components/TeacherLoading";

import useMe from "@/Hooks/useMe";
import useAuthStore from "@/store/authStore";

export default function TeacherClient({ section }) {
  const user = useAuthStore((state) => state.user);
  const profile = useAuthStore((state) => state.profile);
  const { isLoading } = useMe();

  if (isLoading) {
    return <TeacherLoading />;
  }

  return (
    <>
      {section === "dashboard" && <TeacherDashboard user={user} />}
      {section === "profile" && <TeacherProfile user={user} profile={profile} />}
      {section === "batches" && <TeacherBatches />}
      {section === "classes" && <TeacherLiveClasses />}
      {section === "courses" && <TeacherCourses />}
      {section === "students" && <TeacherStudents />}
      {section === "settings" && <TeacherSettings />}
      {!["dashboard", "profile", "batches", "classes", "courses", "students", "settings"].includes(section) && (
        <TeacherDashboard user={user} />
      )}
    </>
  );
}
