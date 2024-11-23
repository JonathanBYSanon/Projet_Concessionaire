import { Couleur } from "../models/couleur.js";
import { validationResult } from "express-validator";

// Obtenir toutes les couleurs
export const getCouleurs = async (req, res) => {
  try {
    const couleurs = await Couleur.findAll();
    res.status(200).json(couleurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter une couleur
export const addCouleur = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nom, code } = req.body;

  try {
    const nouvelleCouleur = await Couleur.create({ nom, code });
    res.status(201).json(nouvelleCouleur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une couleur
export const deleteCouleur = async (req, res) => {
  const { id } = req.params;

  try {
    const couleur = await Couleur.findByPk(id);
    if (!couleur) return res.status(404).json({ message: "Couleur non trouvée" });

    await couleur.destroy();
    res.status(200).json({ message: "Couleur supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
