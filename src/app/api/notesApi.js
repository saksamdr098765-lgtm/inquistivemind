import api from "./apiInstance";

export  function addNoteApi({id,data}){
    return api.post(`/notes/${id}/add`,data)
}
export  function getNoteApi(id){
    return api.get(`/notes/${id}/notes`)
}