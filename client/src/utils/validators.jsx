export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Matches a phone number in the format of ###-###-#### or (###)###-#### or ### ### ####
export const phoneNumberRegex =
  /^(\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4}|\d{3}\s\d{3}\s\d{4})$/;

// Allows usernames to contain letters, numbers, underscores, and dots. Must be at least 6 characters long.
export const usernameRegex = /^[a-zA-Z0-9_.]{6,}$/;

// At least one digit, one lowercase letter, one uppercase letter, one special character and must be at least 8 characters long.
export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/]).{8,}$/;
