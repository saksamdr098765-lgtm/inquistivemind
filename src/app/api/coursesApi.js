import api from "./apiInstance";

export  function createCourseApi(data){
    return api.post('/courses/createCourse',data)
}
export  function CourseByIdApi(id){
    return api.get(`/courses/${id}`)
}
export  function updatedCourseApi({id,data}){
    return api.patch(`/courses/${id}`,data)
}