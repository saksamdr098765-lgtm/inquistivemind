"use client";

import { getTeacherBatchesApi } from "@/app/api/teacherApi";
import useAuthStore from "@/store/authStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useTeacherBatches = () => {
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);

  return useQuery({
    queryKey: ["Teacher-Batches", user?.id || user?._id],
    queryFn: async () => {
      const response = await getTeacherBatchesApi();
      return response.data?.batches || [];
    },
    keepPreviousData: true,
    placeholderData: keepPreviousData,
    enabled: !!accessToken && user?.role === "teacher",
  });
};
