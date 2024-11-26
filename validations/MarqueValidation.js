import common from "./commonValidations.js";

const ValidateMarqueCreation = [
    common.validateText("nom", { isRequired: true }),
    common.validateText("pays", { isRequired: true })
];

const ValidateMarqueUpdate = [
    common.validateText("nom", { isRequired: false }),
    common.validateText("pays", { isRequired: false })
];

export { ValidateMarqueCreation, ValidateMarqueUpdate };