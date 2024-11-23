// Importation du modèle Role

import { Role } from '../models/RoleModel.js';

// Liste des roles : Lecture
export const getRoles = async (req, res) => {
  try {
    // Lecture de tous les rôles
    const roles = await Role.findAll();
    res.status(200).json({ data: roles }); // Réponse avec la liste des rôles
  } catch (error) {
    console.error('Erreur lors de la récupération des rôles:', error);
    res.status(400).json({ message: error.message });
  }
};

//Création d'un rôle
export const addRole = async (req, res) => {
  const infoRole = req.body; // Récupération des données du rôle

  try {
    // Création du rôle dans la base de données
    const newRole = await Role.create(infoRole);
    res.status(201).json({ message: 'Rôle créé avec succès', data: newRole });
  } catch (error) {
    console.error('Erreur lors de la création du rôle:', error);
    res.status(400).json({ message: error.message });
  }
};


//  Mise à jour d'un rôle
export const updateRole = async (req, res) => {
  const { id } = req.params; // Récupération de l'ID du rôle à mettre à jour
  const newInfo = req.body; // Données mises à jour

  try {
    // Recherche du rôle par ID
    const role = await Role.findByPk(id);
    if (!role) {
      return res.status(404).json({ message: "Rôle non trouvé" });
    }

    // Mise à jour des champs
    Object.assign(role, newInfo);
    await role.save(); // Sauvegarde des changements

    res.status(200).json({ message: 'Rôle mis à jour avec succès', data: role });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du rôle:', error);
    res.status(400).json({ message: error.message });
  }
};


//Suppression d'un rôle
export const deleteRole = async (req, res) => {
  const { id } = req.params; // Récupération de l'ID du rôle à supprimer

  try {
    // Suppression du rôle
    const result = await Role.destroy({ where: { id } });

    if (result === 0) {
      return res.status(404).json({ message: "Rôle non trouvé" });
    }

    res.status(200).json({ message: "Rôle supprimé avec succès" });
  } catch (error) {
    console.error('Erreur lors de la suppression du rôle:', error);
    res.status(400).json({ message: error.message });
  }
};

//Récupération d'un rôle par ID

export const getRoleById = async (req, res) => {
  const { id } = req.params; // Récupération de l'ID du rôle

  try {
    const role = await Role.findByPk(id); // Recherche du rôle
    if (!role) {
      return res.status(404).json({ message: "Rôle non trouvé" });
    }

    res.status(200).json({ data: role }); // Réponse avec le rôle trouvé
  } catch (error) {
    console.error('Erreur lors de la récupération du rôle:', error);
    res.status(400).json({ message: error.message });
  }
};












































// Crée un nouveau rôle
exports.createRole = async (req, res) => {
  try {
    // Récupère le nom du rôle depuis la requête
    const { nom } = req.body;

    // Crée un nouveau rôle dans la base de données
    const nouveauRole = await Role.create({ nom });

    // Réponse avec le rôle créé
    res.status(201).json(nouveauRole);
  } catch (error) {
    // En cas d'erreur, renvoie une réponse avec le message d'erreur
    res.status(500).json({ error: error.message });
  }
};

// Récupère un rôle par ID
exports.getRoleById = async (req, res) => {
  try {
    // Recherche le rôle dans la base de données en fonction de l'ID
    const role = await Role.findByPk(req.params.id);

    // Si le rôle n'existe pas, renvoie une erreur 404
    if (!role) {
      return res.status(404).json({ message: 'Rôle non trouvé' });
    }

    // Réponse avec le rôle trouvé
    res.status(200).json(role);
  } catch (error) {
    // En cas d'erreur, renvoie une réponse avec le message d'erreur
    res.status(500).json({ error: error.message });
  }
};

// Met à jour un rôle par ID
exports.updateRole = async (req, res) => {
  try {
    // Recherche le rôle à mettre à jour
    const role = await Role.findByPk(req.params.id);

    // Si le rôle n'existe pas, renvoie une erreur 404
    if (!role) {
      return res.status(404).json({ message: 'Rôle non trouvé' });
    }

    // Met à jour les champs du rôle
    role.nom = req.body.nom;

    // Sauvegarde les modifications
    await role.save();

    // Réponse avec les données mises à jour
    res.status(200).json(role);
  } catch (error) {
    // En cas d'erreur, renvoie une réponse avec le message d'erreur
    res.status(500).json({ error: error.message });
  }
};

// Supprime un rôle par ID
exports.deleteRole = async (req, res) => {
  try {
    // Recherche le rôle à supprimer
    const role = await Role.findByPk(req.params.id);

    // Si le rôle n'existe pas, renvoie une erreur 404
    if (!role) {
      return res.status(404).json({ message: 'Rôle non trouvé' });
    }

    // Supprime le rôle
    await role.destroy();

    // Réponse de confirmation
    res.status(200).json({ message: 'Rôle supprimé avec succès' });
  } catch (error) {
    // En cas d'erreur, renvoie une réponse avec le message d'erreur
    res.status(500).json({ error: error.message });
  }
};