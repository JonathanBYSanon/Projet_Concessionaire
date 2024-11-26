import common from './commonValidations.js';

const ValidateRoleCreation = [
    common.validateDate('titre', { isRequired: true })
];

const ValidateRoleUpdate = [
    common.validateDate('titre', { isRequired: false })
];

export { ValidateRoleCreation, ValidateRoleUpdate };