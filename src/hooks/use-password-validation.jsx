import { useState } from 'react';

const usePasswordValidation = () => {
  const [validation, setValidation] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialChar: false,
    hasNumber: false,
    hasMinLength: false,
    hasMaxLength: true,
  });

  const validatePassword = (password) => {
    const criteria = {
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasMinLength: password.length >= 8,
      hasMaxLength: password.length <= 38,
    };

    setValidation(criteria);
  };

  return { validation, validatePassword };
};

export default usePasswordValidation;
