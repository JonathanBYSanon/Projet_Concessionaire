import common from './commonValidations.js';

const ValidateVoitureCreation = [
    common.validateText('vin', { isRequired: true, minLength: 17, maxLength: 17 }),
    common.validateInteger('kilometrage', { isRequired: true, min: 0 }),
    common.validateText('etat', { isRequired: true, minLength: 4, maxLength: 50 })
];

const ValidateVoitureUpdate = [
    common.validateText('vin', { isRequired: false, minLength: 17, maxLength: 17 }),
    common.validateInteger('kilometrage', { isRequired: false, min: 0 }),
    common.validateText('etat', { isRequired: false, minLength: 4, maxLength: 50 })
];

export { ValidateVoitureCreation, ValidateVoitureUpdate };