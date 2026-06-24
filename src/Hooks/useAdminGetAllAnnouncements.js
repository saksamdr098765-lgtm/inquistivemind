import {  adminGetAllAnnoucements, adminGetCoursesApi } from "@/app/api/adminApi"
import useAuthStore from "@/store/authStore"
import { keepPreviousData, useQuery } from "@tanstack/react-query"


export  const useAdminGetAllAnnoucements=()=>{
    const user=useAuthStore.getState().user
    return useQuery({
        queryKey:["Admin-annoucements"],
        queryFn:async()=>{
            const response = await adminGetAllAnnoucements()
      
            return response.data.announcements
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!user
    })
}