/* Controleur pour les opérations CRUD pour User */

/* Importer l'accès à la table des utilisateurs (Importation du modèle User)*/

import { User } from '../models/UtilisateurModel.js'


//1- La liste de utilisateurs (Lecture=R)
export const getUsers = async (req,res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page-1) * limit;
  try{
     //Lecture de la liste quand tout se passe bien
     const users = await User.findAndCountAll({ limit, offset});
     res.status(200).json({ total : users.count, data: users.rows, currentPage: parseInt(page), totalPages: Math.ceil(users.count / limit)  });

  } catch (error){
    
     //Message retourne en cas d'erreur
     res.status(400).json({message:error.message})

  }

};

//2- Creation d'un utilisateur (Creation=C)
export const addUser = async (req, res) => {
  //Les informations de l'utilisateur (formulaire ou postman)
  const infoUser = req.body

  try {
      const result = await User.create(infoUser)
      res.status(201).json({ message: 'Utilisateur cree avec succes', data: result })

  } catch (error) {
      res.status(400).json({ message: error.message })
  }

}

//3- Mise a jour d'un utilisateur (U)
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

    // Mettre à jour les champs
    Object.assign(user, newInfo);
    await user.save();

    res.status(200).json({ message: "Utilisateur mis à jour avec succès", data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//4- Suppression d'un utilisateur (D)
export const deleteUser = async (req, res) => {
  //Recuperer l'id de l'utilisateur a supprimer
  const { id } = req.params
  // const user=await User.findByPk(id)
  // user.destroy()

  try {
      const result = await User.destroy({ where: { id } })
      res.status(200).json({ message: "L'utilisateur supprime avec succes", data: result })

  } catch (error) {
      res.status(400).json({ message: error.message })
  }
}







/* Crée un nouvel utilisateur
exports.createUser = async (req, res) => {
  try {
    const { nom, prenom, email, roleId } = req.body; // Récupération des données utilisateur
    const nouvelUtilisateur = await User.create({ nom, prenom, email, roleId }); // Création dans la base de données
    res.status(201).json(nouvelUtilisateur); // Réponse avec l'utilisateur créé
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupère un utilisateur par ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // Recherche par clé primaire
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.status(200).json(user); // Réponse avec l'utilisateur trouvé
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Met à jour un utilisateur par ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // Recherche de l'utilisateur
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    user.nom = req.body.nom; // Mise à jour du champ "nom"
    user.email = req.body.email; // Mise à jour du champ "email"
    user.roleId = req.body.roleId; // Mise à jour du rôle
    await user.save(); // Sauvegarde des changements
    res.status(200).json(user); // Réponse avec les données mises à jour
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprime un utilisateur par ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // Recherche de l'utilisateur
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    await user.destroy(); // Suppression
    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};*/