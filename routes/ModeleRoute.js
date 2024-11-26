import express from "express";
import { getModeles, addModele, deleteModele } from "../controllers/ModeleController.js";

const modeleRoute = express.Router();

modeleRoute
  .get("/", getModeles) // Liste des modèles
  .post("/", addModele) // Ajoute un nouveau modèle
  .delete("/:id", deleteModele); // Supprime un modèle par ID

export default modeleRoute;
