import handleError from "@/Utils/handleError"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { createCourseApi, updatedCourseApi } from "../api/coursesApi"
import { toast } from "sonner"
import { DeleteCoursesApi } from "../api/adminApi"
import queryClient from "@/lib/queryClient"

export const useCreateCourseMutation=(resetForm)=>{
   
    const router=useRouter()
    return useMutation({
        mutationFn:async(data)=>{
         const response= await createCourseApi(data)
         return response.data
        },
         retry:false,
        onError:(error)=>handleError(error),
         onSuccess:(data)=>{
               toast.success(data.message)
             resetForm();

  setTimeout(() => {
    router.push("/admin-panel/courses");
  }, 1500);
  
        }
    })
}
export const useDeleteCourseMutation=()=>{
   
    return useMutation({
        mutationFn:async(id)=>{
         const response= await DeleteCoursesApi(id)
         return response.data
        },
         retry:false,
        onError:(error)=>handleError(error),
         onSuccess:(data)=>{
               toast.success(data.message)
       queryClient.invalidateQueries({
        queryKey:["Admin-courses"]
       })
       queryClient.invalidateQueries({
        queryKey:["Admin-batches"]
       })
        }
    })
}
export const useUpdateCourseMutation=()=>{
   const router=useRouter()
    return useMutation({
        mutationFn:async(data)=>{
         const response= await updatedCourseApi(data)
         return response.data
        },
         retry:false,
        onError:(error)=>handleError(error),
         onSuccess:(data)=>{
               toast.success(data.message)
       queryClient.invalidateQueries({
        queryKey:["Admin-courses"]
       })
       queryClient.invalidateQueries({
        queryKey:["course"]
       })
      router.push('/admin-panel/courses')
        }
    })
}