"use client";

import { getTeacherCoursesApi } from "@/app/api/teacherApi";
import useAuthStore from "@/store/authStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useTeacherCourses = () => {
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);

  return useQuery({
    queryKey: ["Teacher-Courses", user?.id || user?._id],
    queryFn: async () => {
      const response = await getTeacherCoursesApi();
      return response.data?.courses || [];
    },
    keepPreviousData: true,
    placeholderData: keepPreviousData,
    enabled: !!accessToken && user?.role === "teacher",
  });
};
