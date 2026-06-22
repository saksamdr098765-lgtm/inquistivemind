import {  adminGetStats } from "@/app/api/adminApi"
import useAuthStore from "@/store/authStore"
import { keepPreviousData, useQuery } from "@tanstack/react-query"


export  const useAdminGetStats=()=>{
    const user=useAuthStore.getState().user
    return useQuery({
        queryKey:["Admin-stats"],
        queryFn:async()=>{
            const response = await adminGetStats()
           
            return response.data.stats
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:user?.role==="admin"
    })
}