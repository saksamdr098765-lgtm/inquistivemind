
import { getBatchById } from "@/app/api/BatchApi"
import useAuthStore from "@/store/authStore"
import { keepPreviousData, useQuery } from "@tanstack/react-query"


export  const useGetBatchById=(id)=>{
    const user=useAuthStore.getState().user
    return useQuery({
        queryKey:["batch",id],
        queryFn:async()=>{
            const response = await getBatchById(id)
        
            return response.data.batch
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!user
    })
}