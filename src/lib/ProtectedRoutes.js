"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";
import PortalLoading from "@/app/Components/portal-ui/PortalLoading";

export default function ProtectedRoute({
  children,
  roles = [],
}) {
  const router = useRouter();

  const {
    isAuthenticated,
    isInitialized,
    user,
  } = useAuthStore();

  useEffect(() => {
    if (!isInitialized) return;

    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    if (roles.length && !roles.includes(user?.role)) {
      router.replace("/");
    }
  }, [isAuthenticated, isInitialized, user, roles, router]);

  if (!isInitialized) {
    const defaultType = roles.includes("admin") && !roles.includes("student")
      ? "admin"
      : roles.includes("teacher") && !roles.includes("student")
      ? "teacher"
      : roles.includes("student")
      ? "student"
      : undefined;

    return <PortalLoading type={defaultType} />;
  }

  if (!isAuthenticated) {
    return null;
  }

  if (roles.length && !roles.includes(user?.role)) {
    return null;
  }

  return children;
}