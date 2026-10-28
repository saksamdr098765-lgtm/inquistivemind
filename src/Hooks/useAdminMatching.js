import { useQuery } from "@tanstack/react-query";
import { adminGetMatchingCandidatesApi } from "@/app/api/adminApi";

export const useAdminMatchingCandidates = (requirementId) => {
  return useQuery({
    queryKey: ["Admin-Matching-Candidates", requirementId],
    queryFn: async () => {
      const response = await adminGetMatchingCandidatesApi(requirementId);
      return response.data;
    },
    enabled: Boolean(requirementId),
  });
};
