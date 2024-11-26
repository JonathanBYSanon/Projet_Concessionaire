// Importer la fonction qui permet de créer les routes
import { Router } from 'express';   
import { addUtilisateur, deleteUtilisateur, getUtilisateurs, getUtilisateur, updateUtilisateur} from '../controllers/UtilisateurController.js';
import { validateUtilisateurCreation, validateUtilisateurUpdate} from '../validations/UtilisateurValidation.js';
import handleValidationErrors from '../validations/handleValidationErrors.js';

//Creer une variable utilisant la fonction Router
const utilisateurRoute = Router();

//Creation des routes
utilisateurRoute.get('/', getUtilisateurs)
    .get('/:id', getUtilisateur)
    .post('/', validateUtilisateurCreation, handleValidationErrors, addUtilisateur)
    .put('/:id',validateUtilisateurUpdate, handleValidationErrors,  updateUtilisateur)
    .delete('/:id',deleteUtilisateur);

export default utilisateurRoute;