// Importer la fonction qui permet de créer les routes
import { Router } from 'express';   
import { addUtilisateur, deleteUtilisateur, getUsers, profilUtilisateur } from '../controllers/UtilisateurController.js';
import { updateRole } from '../controllers/RoleController.js';

// Créer une variable utilisant la fonction Router
const utilisateurRoute = Router();

// Création des routes
utilisateurRoute.get('/', getUsers) // Liste des utilisateurs
    .post('/', addUtilisateur) // Ajout d'un utilisateur
    .put('/', updateRole) // Mise à jour du rôle (vérifiez si c'est lié à Utilisateur)
    .delete('/:id', deleteUtilisateur); // Suppression d'un utilisateur par ID

export default utilisateurRoute;