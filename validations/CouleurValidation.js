import common from './commonValidations.js';

const validateCouleurCreation = [
    common.validateText('nom', { isRequired: true }),
    common.validateText('code', { isRequired: true, minLength: 7, maxLength: 9 }),
];

const validateCouleurUpdate = [
    common.validateText('nom', { isRequired: false }),
    common.validateText('code', { isRequired: false, minLength: 7, maxLength: 9 })
];

export { validateCouleurCreation, validateCouleurUpdate };