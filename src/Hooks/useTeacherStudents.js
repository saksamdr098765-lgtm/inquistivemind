"use client";

import { getTeacherStudentsApi } from "@/app/api/teacherApi";
import useAuthStore from "@/store/authStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useTeacherStudents = () => {
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);

  return useQuery({
    queryKey: ["Teacher-Students", user?.id || user?._id],
    queryFn: async () => {
      const response = await getTeacherStudentsApi();
      return response.data?.students || [];
    },
    keepPreviousData: true,
    placeholderData: keepPreviousData,
    enabled: !!accessToken && user?.role === "teacher",
  });
};
