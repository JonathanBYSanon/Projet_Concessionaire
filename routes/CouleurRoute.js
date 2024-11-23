import express from "express";
import { getCouleurs, addCouleur, deleteCouleur } from "../controllers/CouleurController.js";

const couleurRoute = express.Router();

couleurRoute.get("/", getCouleurs)
              .post("/", addCouleur)
              .delete("/:id", deleteCouleur);

export default couleurRoute;
