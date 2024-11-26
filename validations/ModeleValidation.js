import common from './commonValidations.js';

const validateModeleCreation = [
    common.validateText('nom', { isRequired: true }),
    common.validateYear('annee', { isRequired: true })
];

const validateModeleUpdate = [
    common.validateText('nom', { isRequired: false }),
    common.validateYear('annee', { isRequired: false })
];

export { validateModeleCreation, validateModeleUpdate };