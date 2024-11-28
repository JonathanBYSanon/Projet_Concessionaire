/* Contrôleur pour les opérations CRUD pour Utilisateur */

/* Importer l'accès à la table des utilisateurs (Importation du modèle Utilisateur)*/

import { Utilisateur, Role } from '../models/Relations.js';
import bcrypt from 'bcryptjs';

// Obetnenir un utilisateur par son ID
export const getUtilisateur = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Utilisateur.findByPk(id);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//1- La liste de utilisateurs (Lecture=R)
export const getUtilisateurs = async (req,res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page-1) * limit;
  try{
     //Lecture de la liste quand tout se passe bien
     const users = await Utilisateur.findAndCountAll({ limit, offset});
     res.status(200).json({ total : users.count, data: users.rows, currentPage: parseInt(page), totalPages: Math.ceil(users.count / limit)  });

  } catch (error){
    
     //Message retourne en cas d'erreur
     res.status(400).json({message:error.message})
  }
}

// 2- Création d'un utilisateur (Création=C)
export const addUtilisateur = async (req, res) => {
  // Les informations de l'utilisateur (formulaire ou postman)
  const {password, ...infoUtilisateur} = req.body;

  //verfier que les clefs etrangere existent
  const role = await Role.findByPk(infoUtilisateur.RoleId);
  if (!role) return res.status(404).json({ message: "Vous ne pouvez pas creer un utlisateur avec un role inexistant" });

  // Crypter le mot de passe
  const hash = bcrypt.hashSync(password);
  infoUtilisateur.password = hash;

  try {
      const result = await Utilisateur.create(infoUtilisateur)
      res.status(201).json({ message: 'Utilisateur cree avec succes', data: result })
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 3- Mise à jour d'un utilisateur
export const updateUtilisateur = async (req, res) => {
  // Les informations de l'utilisateur (formulaire ou postman)
  const { id } = req.params;
  const {password, ...infoUtilisateur} = req.body;

  //verfier que les clefs etrangere existent
  const role = await Role.findByPk(infoUtilisateur.RoleId);
  if (!role) return res.status(404).json({ message: "Vous ne pouvez pas creer un utlisateur avec un role inexistant" });

  // Crypter le mot de passe
  //const hash = bcrypt.hashSync(password);
  //infoUtilisateur.password = hash;

  try {
      const result = await Utilisateur.update(infoUtilisateur, { where: { id } })
      const user = await Utilisateur.findByPk(id)
      res.status(200).json({ message: 'Utilisateur modifie avec succes', data: user })
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 4- Suppression d'un utilisateur (D)
export const deleteUtilisateur = async (req, res) => {
  // Récupérer l'id de l'utilisateur à supprimer
  const { id } = req.params;

  try {
      const result = await Utilisateur.destroy({ where: { id } })
      res.status(200).json({ message: "L'utilisateur supprime avec succes", data: result })

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
