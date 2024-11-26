import { body } from 'express-validator';

const validateText = (field, { isRequired = true, minLength = 2, maxLength = 50 } = {}) => {
  let rule = body(field)
    .isLength({ min: minLength, max: maxLength })
    .withMessage(`${field} doit avoir entre ${minLength} et ${maxLength} caractères`);

  if (isRequired) {
    rule = rule.notEmpty().withMessage(`${field} est requis`);
  } else {
    rule = rule.optional().if(body(field).exists());
  }

  return rule;
};


const validateEmail = (field = 'email', isRequired = true) => {
  let rule = body(field)
    .isEmail().withMessage(`${field} doit être un email valide`);

  if (isRequired) {
    rule = rule.notEmpty().withMessage(`${field} est requis`);
  } else {
    rule = rule.optional().if(body(field).exists());
  }

  return rule;
};


const validatePassword = (field = 'password', isRequired = true, minLength = 8) => {
  let rule = body(field)
    .isLength({ min: minLength }).withMessage(`${field} doit avoir au moins ${minLength} caractères`);

  if (isRequired) {
    rule = rule.notEmpty().withMessage(`${field} est requis`);
  } else {
    rule = rule.optional().if(body(field).exists());
  }

  return rule;
};


const validateDate = (field, isRequired = true) => {
  let rule = body(field)
    .isDate().withMessage(`${field} doit être une date valide`)
    .custom((value) => {
      const dateValue = new Date(value);
      const today = new Date();

      if (dateValue > today) {
        throw new Error(`${field} ne peut pas être dans le futur`);
      }

      return true;
    });

  if (isRequired) {
    rule = rule.notEmpty().withMessage(`${field} est requis`);
  } else {
    rule = rule.optional().if(body(field).exists());
  }

  return rule;
};

const validateYear = (field, { isRequired = true, minYear = 1900, maxYear = new Date().getFullYear() } = {}) => {
  let rule = body(field)
    .isInt({ min: minYear, max: maxYear })
    .withMessage(`${field} doit être une année valide entre ${minYear} et ${maxYear}`);

  if (isRequired) {
    rule = rule.notEmpty().withMessage(`${field} est requis`);
  } else {
    rule = rule.optional().if(body(field).exists());
  }

  return rule;
};


const validateUrl = (field, { isRequired = true, minLength = 5, maxLength = 2048 } = {}) => {
  let rule = body(field)
    .isURL().withMessage(`${field} doit être une URL valide`)
    .isLength({ min: minLength, max: maxLength })
    .withMessage(`${field} doit avoir entre ${minLength} et ${maxLength} caractères`);

  if (isRequired) {
    rule = rule.notEmpty().withMessage(`${field} est requis`);
  } else {
    rule = rule.optional().if(body(field).exists());
  }

  return rule;
};

const validateInteger = (field, { isRequired = true, min = 0, max = Number.MAX_SAFE_INTEGER } = {}) => {
  let rule = body(field)
    .isInt({ min, max })
    .withMessage(`${field} doit être un entier entre ${min} et ${max}`);

  if (isRequired) {
    rule = rule.notEmpty().withMessage(`${field} est requis`);
  } else {
    rule = rule.optional().if(body(field).exists());
  }

  return rule;
};

export default {
    validateText,
    validateEmail,
    validatePassword,
    validateDate,
    validateYear,
    validateUrl,
    validateInteger
};
