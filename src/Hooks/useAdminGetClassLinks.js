import {  adminGetCoursesApi } from "@/app/api/adminApi"
import { getClassLinksApi } from "@/app/api/classLinkApi"
import useAuthStore from "@/store/authStore"
import { keepPreviousData, useQuery } from "@tanstack/react-query"


export  const useAdminGetAllLinks=(id)=>{
    const user=useAuthStore.getState().user
    return useQuery({
        queryKey:["Admin-class-links",id],
        queryFn:async()=>{
            const response = await getClassLinksApi(id)
           
            return response.data.classLinks
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!user
    })
}