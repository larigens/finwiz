module.exports.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Matches a phone number in the format of ###-###-#### or (###)###-#### or ### ### ####
module.exports.phoneNumberRegex = /^(\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4}|\d{3}\s\d{3}\s\d{4})$/;
// Allows usernames to contain letters, numbers, underscores, and dots.
module.exports.usernameRegex = /^[a-zA-Z0-9_.]+$/;
// At least one digit, one lowercase letter, one uppercase letter, one special character and must be at least 8 characters long.
module.exports.passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;