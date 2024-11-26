import common from './commonValidations.js';

const ValidateOptionCreation = [
    common.validateText('nom', { isRequired: true }),
    common.validateText('description', { isRequired: true })
];

const ValidateOptionUpdate = [
    common.validateText('nom', { isRequired: false }),
    common.validateText('description', { isRequired: false })
];

export { ValidateOptionCreation, ValidateOptionUpdate };