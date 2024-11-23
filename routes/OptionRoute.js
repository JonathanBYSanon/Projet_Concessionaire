import express from "express";
import { body } from "express-validator";
import { getOptions, addOption, deleteOption } from "../controllers/optionsController.js";

const router = express.Router();

router.get("/", getOptions);
router.post(
  "/",
  [body("nom").notEmpty().withMessage("Le nom est requis")],
  addOption
);
router.delete("/:id", deleteOption);

export default router;
