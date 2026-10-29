export const validateStep = (step, form) => {
  switch (step) {
    // Contact
    case 0:
      if (!form.name?.trim()) {
        return "Please enter your full name.";
      }

      if (!form.email?.trim()) {
        return "Please enter your email address.";
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        return "Please enter a valid email address.";
      }

      if (!form.phone?.trim()) {
        return "Please enter your phone number.";
      }

      if (!/^[0-9]{10}$/.test(form.phone.replace(/[\s-]/g, ""))) {
        return "Please enter a valid 10-digit phone number.";
      }
      break;

    // Goal
    case 1:
      if (!form.goal) {
        return "Please select your primary learning goal.";
      }
      break;

    // Language / Subject
    case 2:
      if (
        !form.language ||
        !form.language.trim() ||
        form.language === "Other" ||
        form.language === "Other Language" ||
        form.language === "Other Subject"
      ) {
        return "Please select or type your language or subject.";
      }
      break;

    // Level
    case 3:
      if (!form.level) {
        return "Please select your current proficiency level.";
      }
      break;

    // Availability
    case 4:
      if (!form.availability || form.availability.length === 0) {
        return "Please select at least one available day.";
      }
      break;

    // Time Slot
    case 5:
      if (
        !form.timeSlot ||
        (Array.isArray(form.timeSlot) && form.timeSlot.length === 0) ||
        (typeof form.timeSlot === "string" && !form.timeSlot.trim())
      ) {
        return "Please select at least one preferred time slot.";
      }
      break;

    // Learning Preference
    case 6:
      if (!form.tutor) {
        return "Please choose your preferred learning format.";
      }
      break;

    default:
      return "";
  }

  return "";
};
