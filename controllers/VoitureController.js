import { Voiture } from '../models/Relations.js';

// Obtenir une voiture
export const getVoiture = async (req, res) => {
  const { id } = req.params;

  try {
    const voiture = await Voiture.findByPk(id);
    if (!voiture) return res.status(404).json({ message: "Voiture non trouvée" });

    res.status(200).json({data : voiture});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir toutes les voitures
export const getVoitures = async (req, res) => {
  try {
    const voitures = await Voiture.findAll();
    res.status(200).json({data : voitures});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter une voiture
export const addVoiture = async (req, res) => {
  const { marque, modele, annee, prix, image } = req.body;

  try {
    const nouvelleVoiture = await Voiture.create({ marque, modele, annee, prix, image });
    res.status(201).json({data : nouvelleVoiture});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une voiture
export const deleteVoiture = async (req, res) => {
  const { id } = req.params;

  try {
    const voiture = await Voiture.findByPk(id);
    if (!voiture) return res.status(404).json({ message: "Voiture non trouvée" });

    await voiture.destroy();
    res.status(200).json({ message: "Voiture supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une voiture
export const updateVoiture = async (req, res) => {
  const { id } = req.params;
  const { marque, modele, annee, prix, image } = req.body;

  try {
    const voiture = await Voiture.findByPk(id);
    if (!voiture) return res.status(404).json({ message: "Voiture non trouvée" });

    voiture.marque = marque;
    voiture.modele = modele;
    voiture.annee = annee;
    voiture.prix = prix;
    voiture.image = image;

    await voiture.save();
    res.status(200).json({data : voiture});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};