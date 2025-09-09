const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password && password.length >= 6;
};

const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    throw new Error(`${fieldName} is required`);
  }
  return true;
};

const validateLength = (value, fieldName, min, max) => {
  if (value && typeof value === 'string') {
    if (min && value.length < min) {
      throw new Error(`${fieldName} must be at least ${min} characters long`);
    }
    if (max && value.length > max) {
      throw new Error(`${fieldName} must be no more than ${max} characters long`);
    }
  }
  return true;
};

const validateInteger = (value, fieldName) => {
  if (value && (isNaN(value) || !Number.isInteger(Number(value)))) {
    throw new Error(`${fieldName} must be a valid integer`);
  }
  return true;
};

const validateBoolean = (value, fieldName) => {
  if (value !== undefined && value !== null && typeof value !== 'boolean') {
    throw new Error(`${fieldName} must be a boolean value`);
  }
  return true;
};

module.exports = {
  validateEmail,
  validatePassword,
  validateRequired,
  validateLength,
  validateInteger,
  validateBoolean
}; 