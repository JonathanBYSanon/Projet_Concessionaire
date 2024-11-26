import { Marque, Modele } from "../models/Relations.js";

// Liste tous les modèles avec leurs marques associées
export const getModeles = async (req, res) => {
  try {
    const modeles = await Modele.findAll({
      include: {
        model: Marque,
        attributes: ["nom"],
      },
    });
    res.status(200).json(modeles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ajoute un nouveau modèle
export const addModele = async (req, res) => {
  try {
    const { nom, annee, marqueId } = req.body;

    if (!nom || !marqueId)
      return res.status(400).json({ message: "Le nom et la marque sont requis." });

    const nouveauModele = await Modele.create({ nom, annee, marqueId });
    res.status(201).json(nouveauModele);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprime un modèle par ID
export const deleteModele = async (req, res) => {
  try {
    const { id } = req.params;
    const modele = await Modele.findByPk(id);

    if (!modele) return res.status(404).json({ message: "Modèle introuvable." });

    await modele.destroy();
    res.status(200).json({ message: "Modèle supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
