import {  adminGetBatchApi, adminGetBatchByIdApi, adminGetRecipeEnrollents } from "@/app/api/adminApi"
import useAuthStore from "@/store/authStore"
import { keepPreviousData, useQuery } from "@tanstack/react-query"


export  const useAdminGetRecentActivities=()=>{
    const user=useAuthStore.getState().user
    return useQuery({
        queryKey:["Admin-recent-activities"],
        queryFn:async()=>{
            const response = await adminGetRecipeEnrollents()
        
            return response.data.enrollments
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!user
    })
}