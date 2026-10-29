import api from "./apiInstance";

// Logged-in teacher profile
export function getTeacherProfileApi() {
  return api.get("/teacher/me");
}

export function updateTeacherProfileApi(data) {
  return api.patch("/teacher/update", data);
}

// Logged-in teacher portal data
export function getTeacherStatsApi() {
  return api.get("/teacher/me/stats");
}

export function getTeacherBatchesApi() {
  return api.get("/teacher/me/batches");
}

export function getTeacherClassesApi() {
  return api.get("/teacher/me/classes");
}

export function getTeacherStudentsApi() {
  return api.get("/teacher/me/students");
}

export function getTeacherCoursesApi() {
  return api.get("/teacher/me/courses");
}

// Teacher class link & notes management for assigned batches
export function teacherCreateClassLinkApi(batchId, data) {
  return api.post(`/class/${batchId}/add`, data);
}

export function teacherCreateNoteApi(batchId, formData) {
  return api.post(`/notes/${batchId}/add`, formData);
}
