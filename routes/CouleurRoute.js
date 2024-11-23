import express from "express";
import { body } from "express-validator";
import { getCouleurs, addCouleur, deleteCouleur } from "./controllers/couleurController.js";

const router = express.Router();

router.get("/", getCouleurs);
router.post(
  "/",
  [body("nom").notEmpty().withMessage("Le nom est requis"), body("code").notEmpty().withMessage("Le code est requis")],
  addCouleur
);
router.delete("/:id", deleteCouleur);

export default router;
