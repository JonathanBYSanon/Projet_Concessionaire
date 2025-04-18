// Importation d'Express pour gérer les routes
import express from 'express';

// Importation des fonctions du contrôleur pour "Role"
import {getRoles, getRole, addRole, updateRole, deleteRole} from '../controllers/RoleController.js';
import { ValidateRoleCreation, ValidateRoleUpdate } from "../validations/RoleValidation.js";
import handleValidationErrors from '../validations/handleValidationErrors.js';

// Création d'un routeur Express
const router = express.Router();

// Route pour créer un nouveau rôle
// Méthode : POST | URL : /role
router.post('/', ValidateRoleCreation, handleValidationErrors, addRole);

// Route pour récupérer un rôle spécifique par son ID
// Méthode : GET | URL : /role/:id
router.get('/:id', getRole);

// Route pour récupérer tous les rôles
router.get('/', getRoles);

// Route pour mettre à jour un rôle existant par son ID
// Méthode : PUT | URL : /role/:id
router.put('/:id', ValidateRoleUpdate, handleValidationErrors, updateRole);

// Route pour supprimer un rôle par son ID
// Méthode : DELETE | URL : /role/:id
router.delete('/:id', deleteRole);

// Exportation du routeur pour utilisation dans l'application principale
export default router;