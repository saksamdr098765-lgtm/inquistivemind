import { useQuery } from "@tanstack/react-query";
import { getPublicTutorsApi, getPublicTutorByIdApi } from "@/app/api/tutorApi";

export const usePublicTutors = (params = {}) => {
  return useQuery({
    queryKey: ["Public-Tutors", params],
    queryFn: async () => {
      const response = await getPublicTutorsApi(params);
      return response.data;
    },
    keepPreviousData: true,
  });
};

export const usePublicTutorById = (id) => {
  return useQuery({
    queryKey: ["Public-Tutor", id],
    queryFn: async () => {
      const response = await getPublicTutorByIdApi(id);
      return response.data?.tutor;
    },
    enabled: Boolean(id),
  });
};
