import api from "./apiInstance";

export function getPublicTutorsApi(params = {}) {
  const {
    page = 1,
    limit = 12,
    search = "",
    subject = "",
    mode = "",
    city = "",
    sort = "rating",
  } = params;

  return api.get(
    `/tutors?page=${page}&limit=${limit}&search=${encodeURIComponent(
      search
    )}&subject=${encodeURIComponent(subject)}&mode=${encodeURIComponent(
      mode
    )}&city=${encodeURIComponent(city)}&sort=${sort}`
  );
}

export function getPublicTutorByIdApi(id) {
  return api.get(`/tutors/${id}`);
}
