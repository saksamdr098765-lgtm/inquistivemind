"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../components/Dashboard";
import Courses from "../components/Courses";
import LiveClasses from "../components/LiveClasses";
import Batches from "../components/Batches";
import Settings from "../components/Settings";
import Profile from "../components/Profile";
import StudentLoading from "../components/StudentLoading";

import useMe from "@/Hooks/useMe";
import useAuthStore from "@/store/authStore";

export default function StudentPortal({ section }) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const profile = useAuthStore((state) => state.profile);

  const { isLoading } = useMe();

  useEffect(() => {
    if (section === "certificates") {
      router.replace("/student-profile/dashboard");
    }
  }, [section, router]);

  if (isLoading) {
    return <StudentLoading />;
  }

  return (
    <>
      {section === "dashboard" && <Dashboard user={user} />}
      {section === "profile" && <Profile user={user} profile={profile} />}
      {section === "courses" && <Courses />}
      {section === "classes" && <LiveClasses />}
      {section === "batches" && <Batches />}
      {section === "settings" && <Settings />}
    </>
  );
}