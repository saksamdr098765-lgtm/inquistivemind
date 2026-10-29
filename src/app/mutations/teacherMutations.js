"use client";

import {
  updateTeacherProfileApi,
  teacherCreateClassLinkApi,
  teacherCreateNoteApi,
} from "../api/teacherApi";
import handleError from "@/Utils/handleError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "@/store/authStore";
import { toast } from "sonner";

export const useTeacherProfileUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      const response = await updateTeacherProfileApi(payload);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      toast.success(data.message || "Profile updated successfully.");
      if (data.data?.user) {
        useAuthStore.getState().setUser(data.data.user);
      }
      if (data.data?.profile) {
        useAuthStore.getState().setProfile(data.data.profile);
      }
      queryClient.invalidateQueries({ queryKey: ["Me"] });
    },
    onError: (error) => handleError(error),
  });
};

export const useTeacherCreateClassLinkMutation = (onSuccessCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ batchId, data }) => {
      const response = await teacherCreateClassLinkApi(batchId, data);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      toast.success(data.message || "Class link created successfully.");
      queryClient.invalidateQueries({ queryKey: ["Teacher-Classes"] });
      queryClient.invalidateQueries({ queryKey: ["Teacher-Stats"] });
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (error) => handleError(error),
  });
};

export const useTeacherCreateNoteMutation = (onSuccessCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ batchId, formData }) => {
      const response = await teacherCreateNoteApi(batchId, formData);
      return response.data;
    },
    retry: false,
    onSuccess: (data) => {
      toast.success(data.message || "Note uploaded successfully.");
      queryClient.invalidateQueries({ queryKey: ["Teacher-Classes"] });
      queryClient.invalidateQueries({ queryKey: ["Teacher-Stats"] });
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (error) => handleError(error),
  });
};
