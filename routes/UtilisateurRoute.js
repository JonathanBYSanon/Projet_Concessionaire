// Importer la fonction qui permet de creer les routes

import { Router } from 'express';   
import { addUser, deleteUser, getUsers, getUser, updateUser} from '../controllers/UtilisateurController.js';

//Creer une variable utilisant la fonction Router
const userRoute = Router()

//Creation des routes
userRoute.get('/', getUsers)
    .get('/:id', getUser)
    .post('/', addUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser);

export default userRoute




