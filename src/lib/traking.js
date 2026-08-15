import { event } from "./analytics";

export const trackWhatsAppClick = (location) => {
  event({
    action: "whatsapp_click",
    category: "Engagement",
    label: location,
  });
};

export const trackPhoneClick = (location) => {
  event({
    action: "phone_call",
    category: "Contact",
    label: location,
  });
};

export const trackBookDemo = (label = "Book Demo") => {
  event({
    action: "book_demo",
    category: "Lead",
    label,
  });
};

export const trackSocialClick = (platform) => {
  event({
    action: "social_click",
    category: "Social",
    label: platform,
  });
};

export const trackCourseClick = (courseTitle, location = "Course Grid") => {
  event({
    action: "course_click",
    category: "Course",
    label: `${courseTitle} (${location})`,
  });
};

export const trackSearchQuery = (query, category = "Search") => {
  event({
    action: "search",
    category,
    label: query,
  });
};

export const trackFormSubmit = (formName, status = "success") => {
  event({
    action: "form_submit",
    category: "Form",
    label: `${formName} - ${status}`,
  });
};

export const trackFilterSelect = (filterName, filterValue) => {
  event({
    action: "filter_select",
    category: "Filter",
    label: `${filterName}: ${filterValue}`,
  });
};