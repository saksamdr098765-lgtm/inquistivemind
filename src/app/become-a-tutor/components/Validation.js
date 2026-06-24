export function validateStep(step, form) {
  switch (step) {
    case 0:
      if (!form.goal) {
        return "Please select an option";
      }
      break;

    case 1:
      if (!form.language && !form.subject) {
        return "Please select a subject";
      }
      break;

    case 2:
      if (!form.level && !form.studentLevel) {
        return "Please select your level";
      }
      break;

    case 3:
      if (!form.focus && !form.mode) {
        return "Please make a selection";
      }
      break;

    case 4:
      if (!form.budget && !form.availability?.length) {
        return "Please make a selection";
      }
      break;

    case 5:
      if (
        form.availability &&
        form.availability.length === 0
      ) {
        return "Please select availability";
      }

      if (!form.timeSlot) {
        return "Please select a time slot";
      }
      break;

    case 6:
      if (
        !form.tutor &&
        !form.earnings
      ) {
        return "Please make a selection";
      }
      break;

    case 7:
      if (
        form.qualification !== undefined &&
        !form.qualification
      ) {
        return "Please select a qualification";
      }

      if (
        form.name !== undefined &&
        !form.name.trim()
      ) {
        return "Please enter your name";
      }
      break;

    case 8:
      if (
        !form.name?.trim()
      ) {
        return "Please enter your name";
      }

      if (
        !form.email?.trim()
      ) {
        return "Please enter your email";
      }

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailRegex.test(form.email)
      ) {
        return "Please enter a valid email";
      }

      if (
        form.phone !== undefined
      ) {
        const phoneRegex =
          /^[0-9]{10,15}$/;

        if (
          !phoneRegex.test(form.phone)
        ) {
          return "Please enter a valid phone number";
        }
      }

      break;

    default:
      return null;
  }

  return null;
}