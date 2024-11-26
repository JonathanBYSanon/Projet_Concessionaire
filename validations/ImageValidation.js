import common from './commonValidations.js';

const validateImageCreation = [
    common.validateUrl('url', { isRequired: true }),
];

const validateImageUpdate = [
    common.validateUrl('url', { isRequired: false }),
];

export { validateImageCreation, validateImageUpdate };

