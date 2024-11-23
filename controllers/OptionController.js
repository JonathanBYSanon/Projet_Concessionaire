import { Options } from "../models/options.js";
import { validationResult } from "express-validator";

// Obtenir toutes les options
export const getOptions = async (req, res) => {
  try {
    const options = await Options.findAll();
    res.status(200).json(options);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter une option
export const addOption = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nom, description } = req.body;

  try {
    const nouvelleOption = await Options.create({ nom, description });
    res.status(201).json(nouvelleOption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une option
export const deleteOption = async (req, res) => {
  const { id } = req.params;

  try {
    const option = await Options.findByPk(id);
    if (!option) return res.status(404).json({ message: "Option non trouvée" });

    await option.destroy();
    res.status(200).json({ message: "Option supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
