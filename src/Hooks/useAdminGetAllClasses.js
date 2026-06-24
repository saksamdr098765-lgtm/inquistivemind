import {  adminGetAllClasses, adminGetBatchApi, adminGetBatchByIdApi, adminGetRecipeEnrollents } from "@/app/api/adminApi"
import useAuthStore from "@/store/authStore"
import { keepPreviousData, useQuery } from "@tanstack/react-query"


export  const useAdminGetAllClasses=()=>{
    const user=useAuthStore.getState().user
    return useQuery({
        queryKey:["Admin-allclassses"],
        queryFn:async()=>{
            const response = await adminGetAllClasses()
        
            return response.data.classes
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!user
    })
}