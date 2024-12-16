import { Marque } from "../models/Relations.js";

// Liste toutes les marques
export const getMarques = async (req, res) => {
  try {
    const marques = await Marque.findAll();
    res.status(200).json({data : marques});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir une marque par ID
export const getMarque = async (req, res) => {
  try {
    const { id } = req.params;
    const marque = await Marque.findByPk(id);

    if (!marque) return res.status(404).json({ message: "Marque introuvable." });

    res.status(200).json({data : marque});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ajoute une nouvelle marque
export const addMarque = async (req, res) => {
  try {
    const { nom, pays } = req.body;

    const nouvelleMarque = await Marque.create({ nom, pays });
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

// Met à jour une marque par ID
export const updateMarque = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, pays } = req.body;

    const marque = await Marque.findByPk(id);
    if (!marque) return res.status(404).json({ message: "Marque introuvable." });

    await marque.update({ nom, pays });
    res.status(200).json(marque);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
