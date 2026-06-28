import api from "./apiInstance";

export  function studentsLeadsApi(data){
    return api.post(`/leads/students/save`,data)
}
export  function teacherLeadsApi(data){
    return api.post(`/leads/teacher/save`,data)
}