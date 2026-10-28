import { useQuery } from "@tanstack/react-query";
import {
  adminGetTutorApplicationsApi,
  adminGetTutorApplicationByIdApi,
} from "@/app/api/adminApi";

export const useAdminTutorApplications = (
  page = 1,
  search = "",
  status = "",
  subject = ""
) => {
  return useQuery({
    queryKey: ["Admin-Tutor-Applications", page, search, status, subject],
    queryFn: async () => {
      const response = await adminGetTutorApplicationsApi(
        page,
        10,
        search,
        status,
        subject
      );
      return response.data;
    },
    keepPreviousData: true,
  });
};

export const useAdminTutorApplicationById = (id) => {
  return useQuery({
    queryKey: ["Admin-Tutor-Application", id],
    queryFn: async () => {
      const response = await adminGetTutorApplicationByIdApi(id);
      return response.data?.application;
    },
    enabled: Boolean(id),
  });
};
