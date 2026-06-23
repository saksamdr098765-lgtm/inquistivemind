import {  adminGetBatchApi, adminGetBatchByIdApi } from "@/app/api/adminApi"
import useAuthStore from "@/store/authStore"
import { keepPreviousData, useQuery } from "@tanstack/react-query"


export  const useAdminGetBatche=(batchId)=>{
    const user=useAuthStore.getState().user
    return useQuery({
        queryKey:["Admin-batch",batchId],
        queryFn:async()=>{
            const response = await adminGetBatchByIdApi(batchId)
        
            return response.data.batch
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!user
    })
}