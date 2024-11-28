import express from "express";
import { getModeles, addModele, deleteModele, updateModele, getModele } from "../controllers/ModeleController.js";
import { validateModeleCreation, validateModeleUpdate } from "../validations/ModeleValidation.js";
import handleValidationErrors from "../validations/handleValidationErrors.js";

const modeleRoute = express.Router();

modeleRoute
  .get("/", getModeles) // Liste des modèles
  .get("/:id", getModele) // Récupère un modèle par ID
  .post("/",validateModeleCreation, handleValidationErrors, addModele) // Ajoute un nouveau modèle
  .put("/:id", validateModeleUpdate, handleValidationErrors, updateModele) // Modifie un modèle par ID
  .delete("/:id", deleteModele); // Supprime un modèle par ID

export default modeleRoute;
