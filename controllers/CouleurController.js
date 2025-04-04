import { Couleur } from "../models/Relations.js";
// import { validationResult } from "express-validator";

// Obtenir une couleur
export const getCouleur = async (req, res) => {
  const { id } = req.params;

  try {
    const couleur = await Couleur.findByPk(id);
    if (!couleur) return res.status(404).json({ message: "Couleur non trouvée" });

    res.status(200).json({data: couleur});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtenir toutes les couleurs
export const getCouleurs = async (req, res) => {
  try {
    const couleurs = await Couleur.findAll();
    res.status(200).json({data:couleurs});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Modifier une couleur
export const updateCouleur = async (req, res) => {
  const { id } = req.params;
  const { nom, code } = req.body;

  try {
    const couleur = await Couleur.findByPk(id);
    if (!couleur) return res.status(404).json({ message: "Couleur non trouvée" });

    couleur.nom = nom;
    couleur.code = code;

    await couleur.save();
    res.status(200).json({data: couleur});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Ajouter une couleur
export const addCouleur = async (req, res) => {
  const { nom, code } = req.body;

  try {
    const nouvelleCouleur = await Couleur.create({ nom, code });
    res.status(201).json({data: nouvelleCouleur});
  } catch (error) {
    res.status(400).json({ message: error.message });
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
    res.status(400).json({ message: error.message });
  }
};
