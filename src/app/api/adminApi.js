import api from "./apiInstance";

export function adminGetAllStudentsApi(page, search, status, approvalStatus, role) {
  return api.get(
    `/admin/users?search=${search}&page=${page}&status=${status}&approvalStatus=${approvalStatus}&role=${role}`
  );
}

export function adminGetUserById(id) {
  return api.get(`/admin/user/${id}`);
}

export function adminGetTeacherById(id) {
  return api.get(`/teacher/${id}`);
}

export function adminApproveUserApi(id) {
  return api.patch(`/admin/user/${id}/approve`);
}

export function adminRejectUserApi(id) {
  return api.patch(`/admin/user/${id}/reject`);
}

export function adminBlockUserApi(id, data) {
  return api.patch(`/admin/user/${id}/block`, data);
}

export function adminUnblockUserApi(id) {
  return api.patch(`/admin/user/${id}/unblock`);
}

export function adminUpdateUserById(id, data) {
  return api.patch(`/admin/user/${id}/update`, data);
}

export function adminUpdateTeacherById(id, data) {
  return api.patch(`/admin/teacher/${id}/update`, data);
}

export function adminDeleteUserByIdApi(id) {
  return api.delete(`/admin/user/${id}`);
}

export function adminCreateStudentApi(data) {
  return api.post(`/admin/student/create`, data);
}

// course
export function adminGetCoursesApi() {
  return api.get(`/courses/`);
}

export function DeleteCoursesApi(id) {
  return api.delete(`/courses/${id}`);
}

// stats
export function adminGetStats() {
  return api.get(`/admin/dashboard-stats`);
}

// batches
export function adminGetBatchApi(slug) {
  return api.get(`/batches/${slug}/batches`);
}

export function adminUpdateBatchApi(id, data) {
  return api.patch(`/batches/${id}/update`, data);
}

export function adminGetBatchByIdApi(id) {
  return api.get(`/batches/${id}/byId`);
}

// announcements
export function adminCreateAnnouncementApi(data) {
  return api.post(`/announcements/create`, data);
}

export function adminDeleteAnnouncementApi(id) {
  return api.delete(`/announcements/${id}/delete`);
}

export function adminGetRecipeEnrollents() {
  return api.get(`/admin/recent-activties`);
}

export function adminGetAllClasses() {
  return api.get(`/admin/all-classes`);
}

export function adminGetAllAnnoucements() {
  return api.get(`/admin/all-announcements`);
}

// ==========================================
// TUTOR APPLICATIONS
// ==========================================
export function adminGetTutorApplicationsApi(
  page = 1,
  limit = 10,
  search = "",
  status = "",
  subject = ""
) {
  return api.get(
    `/admin/tutor-applications?page=${page}&limit=${limit}&search=${encodeURIComponent(
      search
    )}&status=${status}&subject=${encodeURIComponent(subject)}`
  );
}

export function adminGetTutorApplicationByIdApi(id) {
  return api.get(`/admin/tutor-application/${id}`);
}

export function adminReviewTutorApplicationApi(id, data) {
  return api.patch(`/admin/tutor-application/${id}/review`, data);
}

export function adminDeleteTutorApplicationApi(id) {
  return api.delete(`/admin/tutor-application/${id}`);
}

// ==========================================
// TEACHER PUBLICATION CONTROLS
// ==========================================
export function adminPublishTeacherProfileApi(id, data = {}) {
  return api.patch(`/admin/teacher/${id}/publish`, data);
}

export function adminUnpublishTeacherProfileApi(id) {
  return api.patch(`/admin/teacher/${id}/unpublish`);
}

export function adminUpdateTeacherPublicSettingsApi(id, data) {
  return api.patch(`/admin/teacher/${id}/public-settings`, data);
}

// ==========================================
// STUDENT REQUIREMENTS
// ==========================================
export function adminGetStudentRequirementsApi(
  page = 1,
  limit = 10,
  search = "",
  status = "",
  subject = "",
  mode = ""
) {
  return api.get(
    `/admin/student-requirements?page=${page}&limit=${limit}&search=${encodeURIComponent(
      search
    )}&status=${status}&subject=${encodeURIComponent(
      subject
    )}&mode=${encodeURIComponent(mode)}`
  );
}

export function adminGetStudentRequirementByIdApi(id) {
  return api.get(`/admin/student-requirement/${id}`);
}

export function adminUpdateStudentRequirementStatusApi(id, data) {
  return api.patch(`/admin/student-requirement/${id}/status`, data);
}

export function adminAddRequirementNoteApi(id, data) {
  return api.post(`/admin/student-requirement/${id}/note`, data);
}

export function adminDeleteStudentRequirementApi(id) {
  return api.delete(`/admin/student-requirement/${id}`);
}

// ==========================================
// TUTOR-STUDENT MATCHING
// ==========================================
export function adminGetMatchingCandidatesApi(requirementId) {
  return api.get(`/admin/matching/candidates/${requirementId}`);
}

export function adminShortlistCandidateApi(data) {
  return api.post(`/admin/matching/shortlist`, data);
}

export function adminRecommendCandidateApi(data) {
  return api.post(`/admin/matching/recommend`, data);
}

export function adminUpdateMatchStatusApi(matchId, data) {
  return api.patch(`/admin/matching/match/${matchId}/status`, data);
}
