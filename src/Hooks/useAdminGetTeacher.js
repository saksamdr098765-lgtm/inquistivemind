

import useAuthStore from "@/store/authStore"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { adminGetTeacherById } from './../app/api/adminApi';


export const useAdminTeacherById = (id, isTeacher = true) => {
    const user = useAuthStore.getState().user;
    return useQuery({
        queryKey: ["Admin-teacher", id],
        queryFn: async () => {
            const response = await adminGetTeacherById(id);
            return response.data?.teacher || response.data?.user || response.data;
        },
        keepPreviousData: true,
        placeholderData: keepPreviousData,
        enabled: !!user && !!id && Boolean(isTeacher),
    });
};