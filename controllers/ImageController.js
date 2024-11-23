import { Image } from '../models/Relations.js';

// Obtenir une image
export const getImage = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Image.findByPk(id);
    if (!image) return res.status(404).json({ message: "Image non trouvée" });

    res.status(200).json({data : image});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir toutes les images
export const getImages = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.status(200).json({data : images});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter une image
export const addImage = async (req, res) => {
  const { nom, url } = req.body;

  try {
    const nouvelleImage = await Image.create({ nom, url });
    res.status(201).json({data : nouvelleImage});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une image
export const deleteImage = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Image.findByPk(id);
    if (!image) return res.status(404).json({ message: "Image non trouvée" });

    await image.destroy();
    res.status(200).json({ message: "Image supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};