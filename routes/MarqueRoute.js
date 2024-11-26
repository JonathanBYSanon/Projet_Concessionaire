import express from "express";
import { getMarques, addMarque, deleteMarque } from "../controllers/MarqueController.js";

const marqueRoute = express.Router();

marqueRoute
  .get("/", getMarques) // Liste des marques
  .post("/", addMarque) // Ajoute une nouvelle marque
  .delete("/:id", deleteMarque); // Supprime une marque par ID

export default marqueRoute;
