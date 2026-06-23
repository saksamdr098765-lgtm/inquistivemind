import api from "./apiInstance";

export  function getLoggedUserApi(){
    return api.get('/student/me')
}
export  function userUpdateApi(data){
    return api.patch('/student/update',data)
}
export  function studentBatchesApi(id){
    return api.get(`/student/${id}/batches`)
}
export  function getStudentNotesApi(id){
    return api.get(`/student/${id}/notes`)
}
export  function getStudentClassLinksApi(id){
    return api.get(`/student/${id}/class-links`)
}


export const updateProfileImageApi = (file) => {
  const formData=new FormData()
  formData.append("image",file)
  return api.patch(
    "/user/profileImage/update",
    formData
   
  );
};