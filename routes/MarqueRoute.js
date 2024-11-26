import express from "express";
import { getMarques, addMarque, deleteMarque } from "../controllers/MarqueController.js";
import { ValidateMarqueCreation, ValidateMarqueUpdate} from "../validations/MarqueValidation.js"
import handleValidationErrors from "../validations/handleValidationErrors.js";

const marqueRoute = express.Router();

marqueRoute
  .get("/", getMarques) // Liste des marques
  .post("/",ValidateMarqueCreation, handleValidationErrors, addMarque) // Ajoute une nouvelle marque
  .delete("/:id", deleteMarque); // Supprime une marque par ID

export default marqueRoute;
