import { Voiture, Image, Modele, Couleur, Option, Marque } from '../models/Relations.js';

// Obtenir une voiture
export const getVoiture = async (req, res) => {
  const { id } = req.params;

  try {
    //avoir les voutes avec les options le tableau des options. Seulement les id
    const voiture = await Voiture.findByPk(id, {
      include: [
        {
          model: Option,
          as: "Options",
          attributes: ["id"],
          through: { attributes: [] },
        },
        {
          model: Image,
          as: "Image",
          attributes: ["id","url"],
        },
      ],
    });
    if (!voiture) return res.status(404).json({ message: "Voiture non trouvée" });

    res.status(200).json({data : voiture});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir toutes les voitures
export const getVoitures = async (req, res) => {
  try {
    const voitures = await Voiture.findAll({
      include: [
        {
          model: Image,
          as: "Image",
          attributes: ["id","url"],
        },
        {
          model: Modele,
          as: "Modele",
          attributes: ["id","nom","annee"],
          include: {
            model: Marque,
            as: "Marque",
            attributes: ["id","nom", "pays"],
          },
        },
        {
          model: Couleur,
          as: "Couleur",
          attributes: ["code"],
        },
        {
          model: Option,
          as: "Options",
          attributes: ["nom"],
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).json({data : voitures});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter une voiture
export const addVoiture = async (req, res) => {
  const { vin, kilometrage, etat, ImageId, CouleurId, ModeleId, options } = req.body;

  // s'assurer que les clefs étrangères existent
  const image = await Image.findByPk(ImageId);
  if (!image) return res.status(404).json({ message: "L'image est inexistant" });

  const modele = await Modele.findByPk(ModeleId);
  if (!modele) return res.status(404).json({ message: "Le modele est inexistant" });

  const couleur = await Couleur.findByPk(CouleurId);
  if (!couleur) return res.status(404).json({ message: "La couleur est inexistante" });

  options.forEach(async (optionId) => {
    const option = await Option.findByPk(optionId);
    if (!option) return res.status(404).json({ message: "Option non trouvée" });
  });

  try {
    const nouvelleVoiture = await Voiture.create({
      vin,
      kilometrage,
      etat,
      ImageId,
      CouleurId,
      ModeleId
    });

    if (options && options.length > 0) {
      await nouvelleVoiture.setOptions(options);
    }

    res.status(201).json({ data: nouvelleVoiture });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Mettre à jour une voiture
export const updateVoiture = async (req, res) => {
  const { id } = req.params;
  const { vin, kilometrage, etat, ImageId, ModeleId, CouleurId, options } = req.body;

  // s'assurer que les clefs étrangères existent
  const image = await Image.findByPk(ImageId);
  if (!image) return res.status(404).json({ message: "L'image est inexistante" });

  const modele = await Modele.findByPk(ModeleId);
  if (!modele) return res.status(404).json({ message: "Le modele est inexistant" });

  const couleur = await Couleur.findByPk(CouleurId);
  if (!couleur) return res.status(404).json({ message: "La couleur est inexistante" });

  options.forEach(async (optionId) => {
    const option = await Option.findByPk(optionId);
    if (!option) return res.status(404).json({ message: "Option non trouvée" });
  });

  try {
    const voiture = await Voiture.findByPk(id);
    if (!voiture) return res.status(404).json({ message: "Voiture non trouvée" });

    voiture.vin = vin;
    voiture.kilometrage = kilometrage;
    voiture.etat = etat;
    voiture.ImageId = ImageId;
    voiture.CouleurId = CouleurId;
    voiture.ModeleId = ModeleId;
    

    await voiture.save();

    if (options && options.length > 0) {
      await voiture.setOptions(options);
    }

    res.status(200).json({ data: voiture });
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
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};