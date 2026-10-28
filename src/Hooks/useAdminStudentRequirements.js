import { useQuery } from "@tanstack/react-query";
import {
  adminGetStudentRequirementsApi,
  adminGetStudentRequirementByIdApi,
} from "@/app/api/adminApi";

export const useAdminStudentRequirements = (
  page = 1,
  search = "",
  status = "",
  subject = "",
  mode = ""
) => {
  return useQuery({
    queryKey: [
      "Admin-Student-Requirements",
      page,
      search,
      status,
      subject,
      mode,
    ],
    queryFn: async () => {
      const response = await adminGetStudentRequirementsApi(
        page,
        10,
        search,
        status,
        subject,
        mode
      );
      return response.data;
    },
    keepPreviousData: true,
  });
};

export const useAdminStudentRequirementById = (id) => {
  return useQuery({
    queryKey: ["Admin-Student-Requirement", id],
    queryFn: async () => {
      const response = await adminGetStudentRequirementByIdApi(id);
      return response.data;
    },
    enabled: Boolean(id),
  });
};
