// Importation d'Express pour gérer les routes
import express from 'express';

// Importation des fonctions du contrôleur pour "Role"
import {getRoles, getRoleById, addRole, updateRole, deleteRole} from '../controllers/RoleController.js';

// Création d'un routeur Express
const router = express.Router();

// Route pour créer un nouveau rôle
// Méthode : POST | URL : /role
router.post('/role', addRole);

// Route pour récupérer un rôle spécifique par son ID
// Méthode : GET | URL : /role/:id
router.get('/role/:id', getRoleById);

// Route pour mettre à jour un rôle existant par son ID
// Méthode : PUT | URL : /role/:id
router.put('/role/:id', updateRole);

// Route pour supprimer un rôle par son ID
// Méthode : DELETE | URL : /role/:id
router.delete('/role/:id', deleteRole);

// Exportation du routeur pour utilisation dans l'application principale
export default router;