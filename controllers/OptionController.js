import { Option } from "../models/Relations.js";
// import { validationResult } from "express-validator";

// Obtenir une option
export const getOption = async (req, res) => {
  const { id } = req.params;

  try {
    const option = await Option.findByPk(id);
    if (!option) return res.status(404).json({ message: "Option non trouvée" });

    res.status(200).json({data : option});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir toutes les options
export const getOptions = async (req, res) => {
  try {
    const options = await Option.findAll();
    res.status(200).json({data : options});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Ajouter une option
export const addOption = async (req, res) => {
  const { nom, description } = req.body;

  try {
    const nouvelleOption = await Option.create({ nom, description });
    res.status(201).json(nouvelleOption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOption = async (req, res) => {
  const { id } = req.params;
  const { nom, description } = req.body;

  try {
    const option = await Option.findByPk(id);
    if (!option) return res.status(404).json({ message: "Option non trouvée" });

    option.nom = nom;
    option.description = description;

    await option.save();
    res.status(200).json({data: option});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Supprimer une option
export const deleteOption = async (req, res) => {
  const { id } = req.params;

  try {
    const option = await Option.findByPk(id);
    if (!option) return res.status(404).json({ message: "Option non trouvée" });

    await option.destroy();
    res.status(200).json({ message: "Option supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
