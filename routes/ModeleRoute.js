import express from "express";
import { getModeles, addModele, deleteModele } from "../controllers/ModeleController.js";
import { validateModeleCreation, validateModeleUpdate } from "../validations/ModeleValidation.js";
import handleValidationErrors from "../validations/handleValidationErrors.js";

const modeleRoute = express.Router();

modeleRoute
  .get("/", getModeles) // Liste des modèles
  .post("/",validateModeleCreation, handleValidationErrors, addModele) // Ajoute un nouveau modèle
  .delete("/:id", deleteModele); // Supprime un modèle par ID

export default modeleRoute;
