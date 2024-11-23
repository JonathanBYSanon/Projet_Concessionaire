// Importer la fonction qui permet de créer les routes
import { Router } from 'express';   
import { addUser, deleteUser, getUsers, getUser, updateUser} from '../controllers/UtilisateurController.js';

//Creer une variable utilisant la fonction Router
const utilisateurRoute = Router();

//Creation des routes
utilisateurRoute.get('/', getUsers)
    .get('/:id', getUser)
    .post('/', addUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser);

export default utilisateurRoute;