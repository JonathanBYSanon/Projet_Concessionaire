import express from "express";
//import { body } from "express-validator";
import { getOptions, addOption, deleteOption, getOption, updateOption } from "../controllers/optionController.js";
import { ValidateOptionCreation, ValidateOptionUpdate } from "../validations/optionValidation.js";
import handleValidationErrors from "../validations/handleValidationErrors.js";

const optionRoute = express.Router();


optionRoute.get("/", getOptions)
            .get("/:id", getOption)
              .post("/", ValidateOptionCreation, handleValidationErrors, addOption)
              .delete("/:id", deleteOption)
              .put("/:id", ValidateOptionUpdate, handleValidationErrors, updateOption);

export default optionRoute;
