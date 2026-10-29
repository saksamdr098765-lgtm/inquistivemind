"use client";

import { getTeacherClassesApi } from "@/app/api/teacherApi";
import useAuthStore from "@/store/authStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useTeacherClasses = () => {
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);

  return useQuery({
    queryKey: ["Teacher-Classes", user?.id || user?._id],
    queryFn: async () => {
      const response = await getTeacherClassesApi();
      return response.data?.classes || [];
    },
    keepPreviousData: true,
    placeholderData: keepPreviousData,
    enabled: !!accessToken && user?.role === "teacher",
  });
};
