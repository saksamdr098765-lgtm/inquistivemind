import api from "./apiInstance";

export  function addClassLinkApi({id,data}){
    return api.post(`/class/${id}/add`,data)
}
export  function getClassLinksApi(id){
    return api.get(`/class/${id}/class-links`)
}
export  function deleteClassLinksApi(id){
    return api.delete(`/class/${id}/delete`)
}