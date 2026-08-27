"use client";

import StudentNavbar from "../components/StudentNavbar";
import Dashboard from "../components/Dashboard";
import Courses from "../components/Courses";
import LiveClasses from "../components/LiveClasses";
import Batches from "../components/Batches";
import Certificates from "../components/Certificates";
import Settings from "../components/Settings";
import Profile from "../components/Profile";
import StudentLoading from "../components/StudentLoading";

import useMe from "@/Hooks/useMe";
import useAuthStore from "@/store/authStore";

export default function StudentPortal({ section }) {
  const user = useAuthStore((state) => state.user);
  const profile = useAuthStore((state) => state.profile);

  const { isLoading } = useMe();

  if (isLoading) {
    return <StudentLoading />;
  }

  return (
    <div className="pt-28 sm:pt-32 pb-16 min-h-screen bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StudentNavbar section={section} />

        {section === "dashboard" && <Dashboard user={user} />}
        {section === "profile" && <Profile user={user} profile={profile} />}
        {section === "courses" && <Courses />}
        {section === "classes" && <LiveClasses />}
        {section === "batches" && <Batches />}
        {section === "certificates" && <Certificates />}
        {section === "settings" && <Settings />}
      </div>
    </div>
  );
}