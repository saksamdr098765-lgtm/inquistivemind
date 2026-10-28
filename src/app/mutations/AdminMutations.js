import handleError from "@/Utils/handleError";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  adminApproveUserApi,
  adminBlockUserApi,
  adminDeleteUserByIdApi,
  adminGetUserById,
  adminRejectUserApi,
  adminUnblockUserApi,
  adminUpdateTeacherById,
  adminUpdateUserById,
  adminReviewTutorApplicationApi,
  adminPublishTeacherProfileApi,
  adminUnpublishTeacherProfileApi,
  adminUpdateTeacherPublicSettingsApi,
  adminUpdateStudentRequirementStatusApi,
  adminAddRequirementNoteApi,
  adminShortlistCandidateApi,
  adminRecommendCandidateApi,
  adminUpdateMatchStatusApi,
  adminDeleteTutorApplicationApi,
  adminDeleteStudentRequirementApi,
} from "../api/adminApi";
import queryClient from "@/lib/queryClient";

export const useAdminUserUpdateMutation = (id) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminUpdateUserById(id, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["Admin-User", id],
      });
      queryClient.invalidateQueries({
        queryKey: ["Admin-Student-List"],
      });
      toast.success(data.message);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminTeacherUpdateMutation = (id) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminUpdateTeacherById(id, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["Admin-User", id],
      });
      queryClient.invalidateQueries({
        queryKey: ["Admin-teacher", id],
      });
      queryClient.invalidateQueries({
        queryKey: ["Admin-Student-List"],
      });
      toast.success(data.message);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminApproveUser = (id) => {
  return useMutation({
    mutationFn: async () => {
      const response = await adminApproveUserApi(id);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["Admin-User", id],
      });
      queryClient.invalidateQueries({
        queryKey: ["Admin-Student-List"],
      });
      toast.success(data.message);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminRejectUser = (id) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminRejectUserApi(id, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["Admin-User", id],
      });
      queryClient.invalidateQueries({
        queryKey: ["Admin-Student-List"],
      });
      toast.success(data.message);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminBlockUser = (id, setOpen) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminBlockUserApi(id, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["Admin-User", id],
      });
      queryClient.invalidateQueries({
        queryKey: ["Admin-Student-List"],
      });
      toast.success(data.message);
    },
    onSettled: () => setOpen(false),
    onError: (error) => handleError(error),
  });
};

export const useAdminUnblockUser = (id) => {
  return useMutation({
    mutationFn: async () => {
      const response = await adminUnblockUserApi(id);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["Admin-User", id],
      });
      queryClient.invalidateQueries({
        queryKey: ["Admin-Student-List"],
      });
      toast.success(data.message);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminDeleteUser = () => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await adminDeleteUserByIdApi(id);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["Admin-Student-List"],
      });
      toast.success(data.message);
    },
  });
};

// ==========================================
// TUTOR APPLICATIONS MUTATIONS
// ==========================================
export const useAdminReviewTutorApplicationMutation = (id, onSuccessCallback) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminReviewTutorApplicationApi(id, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Tutor-Applications"] });
      queryClient.invalidateQueries({ queryKey: ["Admin-Tutor-Application", id] });
      queryClient.invalidateQueries({ queryKey: ["Admin-Student-List"] });
      toast.success(data.message);
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminPublishTeacherMutation = (id, onSuccessCallback) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminPublishTeacherProfileApi(id, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Tutor-Applications"] });
      queryClient.invalidateQueries({ queryKey: ["Admin-Teacher", id] });
      queryClient.invalidateQueries({ queryKey: ["Public-Tutors"] });
      toast.success(data.message);
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminUnpublishTeacherMutation = (id, onSuccessCallback) => {
  return useMutation({
    mutationFn: async () => {
      const response = await adminUnpublishTeacherProfileApi(id);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Tutor-Applications"] });
      queryClient.invalidateQueries({ queryKey: ["Admin-Teacher", id] });
      queryClient.invalidateQueries({ queryKey: ["Public-Tutors"] });
      toast.success(data.message);
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminUpdateTeacherPublicSettingsMutation = (id, onSuccessCallback) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminUpdateTeacherPublicSettingsApi(id, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Tutor-Applications"] });
      queryClient.invalidateQueries({ queryKey: ["Admin-Teacher", id] });
      queryClient.invalidateQueries({ queryKey: ["Public-Tutors"] });
      toast.success(data.message);
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};

// ==========================================
// STUDENT REQUIREMENTS MUTATIONS
// ==========================================
export const useAdminUpdateRequirementStatusMutation = (id, onSuccessCallback) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminUpdateStudentRequirementStatusApi(id, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Student-Requirements"] });
      queryClient.invalidateQueries({ queryKey: ["Admin-Student-Requirement", id] });
      toast.success(data.message);
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminAddRequirementNoteMutation = (id, onSuccessCallback) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminAddRequirementNoteApi(id, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Student-Requirement", id] });
      toast.success(data.message);
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};

// ==========================================
// MATCHING MUTATIONS
// ==========================================
export const useAdminShortlistCandidateMutation = (onSuccessCallback) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminShortlistCandidateApi(data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Matching-Candidates"] });
      queryClient.invalidateQueries({ queryKey: ["Admin-Student-Requirements"] });
      toast.success(data.message);
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminRecommendCandidateMutation = (onSuccessCallback) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await adminRecommendCandidateApi(data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Matching-Candidates"] });
      queryClient.invalidateQueries({ queryKey: ["Admin-Student-Requirements"] });
      toast.success(data.message);
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminUpdateMatchStatusMutation = (onSuccessCallback) => {
  return useMutation({
    mutationFn: async ({ matchId, data }) => {
      const response = await adminUpdateMatchStatusApi(matchId, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Matching-Candidates"] });
      toast.success(data.message);
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminDeleteTutorApplicationMutation = (onSuccessCallback) => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await adminDeleteTutorApplicationApi(id);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Tutor-Applications"] });
      toast.success(data.message || "Tutor application deleted.");
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};

export const useAdminDeleteStudentRequirementMutation = (onSuccessCallback) => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await adminDeleteStudentRequirementApi(id);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Admin-Student-Requirements"] });
      queryClient.invalidateQueries({ queryKey: ["Admin-Matching-Candidates"] });
      toast.success(data.message || "Student requirement deleted.");
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => handleError(error),
  });
};
