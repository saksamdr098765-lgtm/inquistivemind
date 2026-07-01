import {  adminGetCoursesApi } from "@/app/api/adminApi"
import { CourseByIdApi } from "@/app/api/coursesApi"
import useAuthStore from "@/store/authStore"
import { keepPreviousData, useQuery } from "@tanstack/react-query"


export  const useGetCourseById=(id)=>{
    const user=useAuthStore.getState().user
    return useQuery({
        queryKey:["course",id],
        queryFn:async()=>{
            const response = await CourseByIdApi(id)
           
            return response.data.course
        },
        keepPreviousData:true,
        placeholderData:keepPreviousData,
        enabled:!!user
    })
}