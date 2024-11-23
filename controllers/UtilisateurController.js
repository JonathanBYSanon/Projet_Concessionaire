/* Contrôleur pour les opérations CRUD pour Utilisateur */

/* Importer l'accès à la table des utilisateurs (Importation du modèle Utilisateur)*/

import { Utilisateur } from '../models/UtilisateurModel.js';

// 1- La liste des utilisateurs (Lecture=R)
export const getUsers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  try {
    // Lecture de la liste quand tout se passe bien
    const utilisateurs = await Utilisateur.findAndCountAll({ limit, offset });
    res.status(200).json({ 
      total: utilisateurs.count, 
      data: utilisateurs.rows, 
      currentPage: parseInt(page), 
      totalPages: Math.ceil(utilisateurs.count / limit) 
    });
  } catch (error) {
    // Message retourné en cas d'erreur
    res.status(400).json({ message: error.message });
  }
};

// 2- Création d'un utilisateur (Création=C)
export const addUtilisateur = async (req, res) => {
  // Les informations de l'utilisateur (formulaire ou postman)
  const infoUtilisateur = req.body;

  try {
    const result = await Utilisateur.create(infoUtilisateur);
    res.status(201).json({ message: 'Utilisateur créé avec succès', data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 3- Mise à jour d'un utilisateur (U)
export const updateUtilisateur = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;

  try {
    const utilisateur = await Utilisateur.findByPk(id);
    if (!utilisateur) return res.status(404).json({ message: "Utilisateur non trouvé" });

    // Mettre à jour les champs
    Object.assign(utilisateur, newInfo);
    await utilisateur.save();

    res.status(200).json({ message: "Utilisateur mis à jour avec succès", data: utilisateur });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 4- Suppression d'un utilisateur (D)
export const deleteUtilisateur = async (req, res) => {
  // Récupérer l'id de l'utilisateur à supprimer
  const { id } = req.params;

  try {
    const result = await Utilisateur.destroy({ where: { id } });
    res.status(200).json({ message: "L'utilisateur supprimé avec succès", data: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Crée un nouvel utilisateur
exports.createUtilisateur = async (req, res) => {
  try {
    const { nom, prenom, email, roleId } = req.body; // Récupération des données utilisateur
    const nouvelUtilisateur = await Utilisateur.create({ nom, prenom, email, roleId }); // Création dans la base de données
    res.status(201).json(nouvelUtilisateur); // Réponse avec l'utilisateur créé
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupère un utilisateur par ID
exports.getUtilisateurById = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id); // Recherche par clé primaire
    if (!utilisateur) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.status(200).json(utilisateur); // Réponse avec l'utilisateur trouvé
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Met à jour un utilisateur par ID
exports.updateUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id); // Recherche de l'utilisateur
    if (!utilisateur) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    utilisateur.nom = req.body.nom; // Mise à jour du champ "nom"
    utilisateur.email = req.body.email; // Mise à jour du champ "email"
    utilisateur.roleId = req.body.roleId; // Mise à jour du rôle
    await utilisateur.save(); // Sauvegarde des changements
    res.status(200).json(utilisateur); // Réponse avec les données mises à jour
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprime un utilisateur par ID
exports.deleteUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByPk(req.params.id); // Recherche de l'utilisateur
    if (!utilisateur) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    await utilisateur.destroy(); // Suppression
    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};