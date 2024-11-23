// Importer la fonction qui permet de creer les routes

import { Router } from 'express';   
import { addUser, deleteUser, getUsers, profilUser } from '../controllers/UtilisateurController.js';
import { updateRole } from '../controllers/RoleController.js';

//Creer une variable utilisant la fonction Router
const userRoute = Router()



//Creation des routes
userRoute.get('/', getUsers)
    .post('/', addUser)
    .put('/', updateRole)
    .delete('/:id', deleteUser);

export default userRoute