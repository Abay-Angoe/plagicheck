export interface ValidationErrors {
  name?: string;
  email?: string;
  number?: string;
  qualification?: string;
  department?: string;
}
export function validateForm(
  name: string,
  email: string,
  number: string,
  qualification?: string
  //department?: string | number
): ValidationErrors {
  const validationErrors: ValidationErrors = {};

  if (!name || name.length < 8) {
    validationErrors.name = 'Name must be at least 8 characters';
  }

  if (!email) {
    validationErrors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    validationErrors.email = 'Invalid email format';
  }

  if (!number) {
    validationErrors.number = 'Number is required';
  } else if (!isValidPhoneNumber(number)) {
    validationErrors.number = 'Invalid phone number format';
  }

  if (qualification && qualification.length < 8) {
    validationErrors.qualification =
      'Qualification must be at least 8 characters';
  }

  // if (!department) {
  //   validationErrors.department = 'Department is required';
  // }

  return validationErrors;
}

function isValidEmail(value: string) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(value);
}

function isValidPhoneNumber(value: string) {
  const phoneRegex = /^\+?[0-9]{1,}$/;
  return phoneRegex.test(value);
}
