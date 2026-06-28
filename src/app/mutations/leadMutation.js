import handleError from "@/Utils/handleError"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { studentsLeadsApi, teacherLeadsApi } from "../api/LeadApi"
import SITE_CONFIG from "../siteConfig"

export const useStudentLeadMutation=()=>{

    return useMutation({
        mutationFn:async(data)=>{
         const response= await studentsLeadsApi(data)
         return response.data
        },
         retry:false,
        onError:(error)=>handleError(error),
       
    })
}
export const useTeacherLeadMutation=()=>{
    return useMutation({
        mutationFn:async(data)=>{
         const response= await teacherLeadsApi(data)
         return response.data
        },
         retry:false,
        onError:(error)=>handleError(error),
      
    })
}