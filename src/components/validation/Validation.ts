export const isEmailValid = (email: string): boolean => {
  // Regular expression to validate email format
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};
export const isStaffIdValid = (staffId: string): boolean => {
  // Regular expression to validate staffId format
  const staffIdRegex = /^[A-Za-z0-9_/-]{6,14}$/;
  return staffIdRegex.test(staffId);
};

export const isPasswordStrong = (password: string): boolean => {
  // Check password length and the presence of uppercase, lowercase, digit, and symbol
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*()_+{}[]:;"'<>,.?\|~`=]/.test(password)
  );
};
