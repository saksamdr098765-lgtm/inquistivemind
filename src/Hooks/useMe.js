"use client";

import { getLoggedUserApi } from "@/app/api/userApi";
import { getTeacherProfileApi } from "@/app/api/teacherApi";
import useAuthStore from "@/store/authStore";
import { useQuery } from "@tanstack/react-query";

const useMe = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const user = useAuthStore((state) => state.user);
  const setProfile = useAuthStore((state) => state.setProfile);

  return useQuery({
    queryKey: ["Me", user?.id || user?._id, user?.role],
    queryFn: async () => {
      if (user?.role === "teacher") {
        const { data } = await getTeacherProfileApi();
        setProfile(data.teacher);
        return data.teacher;
      }

      if (user?.role === "student") {
        const { data } = await getLoggedUserApi();
        setProfile(data.student);
        return data.student;
      }

      if (user?.role === "admin") {
        return { role: "admin" };
      }

      return null;
    },
    retry: false,
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled: !!accessToken && !!user,
  });
};

export default useMe;
