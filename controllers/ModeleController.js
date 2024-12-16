import { Marque, Modele } from "../models/Relations.js";

// Liste tous les modèles avec leurs marques associées
export const getModeles = async (req, res) => {
  try {
    const modeles = await Modele.findAll({
      include: {
        model: Marque,
        attributes: ["nom","pays"],
      },
    });
    res.status(200).json({data: modeles});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Trouver un modele par ID
export const getModele = async (req, res) => {
  try {
    const { id } = req.params;
    const modele = await Modele.findByPk(id);

    if (!modele) return res.status(404).json({ message: "Modèle introuvable." });

    res.status(200).json({ data: modele});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Ajoute un nouveau modèle
export const addModele = async (req, res) => {
  try {
    const { nom, annee, MarqueId } = req.body;

    if (!nom || !MarqueId)
      return res.status(400).json({ message: "Le nom et la marque sont requis." });

    const nouveauModele = await Modele.create({ nom, annee, MarqueId });
    res.status(201).json(nouveauModele);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Met à jour un modèle par ID
export const updateModele = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, annee, MarqueId } = req.body;

    const marque = await Marque.findByPk(MarqueId);
    if (!marque) return res.status(404).json({ message: "L'id de la marque doit est valide" });

    const modele = await Modele.findByPk(id);

    if (!modele) return res.status(404).json({ message: "Modèle introuvable." });

    modele.nom = nom;
    modele.annee = annee;
    modele.MarqueId = MarqueId;

    await modele.save();
    res.status(200).json(modele);
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
