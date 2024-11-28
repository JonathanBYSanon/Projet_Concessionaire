import common from './commonValidations.js';

const ValidateRoleCreation = [
    common.validateText('titre', { isRequired: true })
];

const ValidateRoleUpdate = [
    common.validateText('titre', { isRequired: false })
];

export { ValidateRoleCreation, ValidateRoleUpdate };