"use client";

import { getTeacherStatsApi } from "@/app/api/teacherApi";
import useAuthStore from "@/store/authStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useTeacherStats = () => {
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);

  return useQuery({
    queryKey: ["Teacher-Stats", user?.id || user?._id],
    queryFn: async () => {
      const response = await getTeacherStatsApi();
      return response.data?.stats || {};
    },
    keepPreviousData: true,
    placeholderData: keepPreviousData,
    enabled: !!accessToken && user?.role === "teacher",
  });
};
