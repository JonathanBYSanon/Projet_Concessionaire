import { Marque } from "../models/Relations.js";

// Liste toutes les marques
export const getMarques = async (req, res) => {
  try {
    const marques = await Marque.findAll();
    res.status(200).json(marques);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ajoute une nouvelle marque
export const addMarque = async (req, res) => {
  try {
    const { nom } = req.body;
    if (!nom) return res.status(400).json({ message: "Le nom est requis." });

    const nouvelleMarque = await Marque.create({ nom });
    res.status(201).json(nouvelleMarque);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprime une marque par ID
export const deleteMarque = async (req, res) => {
  try {
    const { id } = req.params;
    const marque = await Marque.findByPk(id);

    if (!marque) return res.status(404).json({ message: "Marque introuvable." });

    await marque.destroy();
    res.status(200).json({ message: "Marque supprimée avec succès." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
