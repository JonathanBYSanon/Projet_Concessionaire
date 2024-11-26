import common from './commonValidations.js';

const validateUtilisateurCreation = [
    common.validateText('nom', { isRequired: true }),
    common.validateText('prenom', { isRequired: false }),
    common.validateEmail('email', true),
    common.validatePassword('password', true),
    common.validateDate('naissance', true),
];
  
const validateUtilisateurUpdate = [
    common.validateText('nom', { isRequired: false }),
    common.validateText('prenom', { isRequired: false }),
    common.validateEmail('email', false),
    common.validatePassword('password', false),
    common.validateDate('naissance', false),
];

export { validateUtilisateurCreation, validateUtilisateurUpdate };