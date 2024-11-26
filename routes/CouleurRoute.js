import express from "express";
import { getCouleurs, addCouleur, deleteCouleur, getCouleur, updateCouleur } from "../controllers/CouleurController.js";
import { validateCouleurCreation, validateCouleurUpdate } from "../validations/CouleurValidation.js";
import handleValidationErrors from "../validations/handleValidationErrors.js";

const couleurRoute = express.Router();

couleurRoute.get("/", getCouleurs)
              .post("/",validateCouleurCreation,handleValidationErrors, addCouleur)
              .delete("/:id", deleteCouleur)
              .get("/:id", getCouleur)
              .put("/:id",validateCouleurUpdate,handleValidationErrors, updateCouleur);

export default couleurRoute;
