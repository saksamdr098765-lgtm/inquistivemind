export const validateStep = (step, form) => {
  switch (step) {
    // Contact
    case 0:
      if (!form.name.trim()) {
        return "Please enter your name.";
      }

      if (!form.email.trim()) {
        return "Please enter your email.";
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        return "Please enter a valid email.";
      }

      if (!form.phone?.trim()) {
        return "Please enter your phone number.";
      }

      if (!/^[0-9]{10}$/.test(form.phone)) {
        return "Please enter a valid 10 digit phone number.";
      }
      break;

    // Goal
    case 1:
      if (!form.goal) {
        return "Please select a learning category.";
      }
      break;

    // Language / Subject
    case 2:
      if (!form.language) {
        return "Please select a language or subject.";
      }
      break;

    // Level
    case 3:
      if (!form.level) {
        return "Please select your current level.";
      }
      break;

    // Availability
    case 4:
      if (form.availability.length === 0) {
        return "Please select at least one day.";
      }
      break;

    // Time Slot
    case 5:
      if (!form.timeSlot) {
        return "Please select a preferred time slot.";
      }
      break;

    // Learning Preference
    case 6:
      if (!form.tutor) {
        return "Please select a learning preference.";
      }
      break;

    default:
      return "";
  }

  return "";
};