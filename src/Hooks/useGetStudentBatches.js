
import {  adminGetUserById } from "@/app/api/adminApi"
import { studentBatchesApi } from "@/app/api/userApi"
import useAuthStore from "@/store/authStore"
import { keepPreviousData, useQuery } from "@tanstack/react-query"


export  const useGetStudentBatches=()=>{
    const user=useAuthStore.getState().user
    return useQuery({
        queryKey:["batches",user.id],
        queryFn:async()=>{
            const response = await studentBatchesApi(user.id)
            return response.data.batches
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!user
    })
}