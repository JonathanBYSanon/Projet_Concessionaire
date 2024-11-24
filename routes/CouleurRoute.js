import express from "express";
import { getCouleurs, addCouleur, deleteCouleur, getCouleur, updateCouleur } from "../controllers/CouleurController.js";

const couleurRoute = express.Router();

couleurRoute.get("/", getCouleurs)
              .post("/", addCouleur)
              .delete("/:id", deleteCouleur)
              .get("/:id", getCouleur)
              .put("/:id", updateCouleur);

export default couleurRoute;
