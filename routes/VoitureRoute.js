import { Router } from 'express';
import { getVoiture, getVoitures, addVoiture, updateVoiture, deleteVoiture } from '../controllers/VoitureController.js';
import { ValidateVoitureCreation, ValidateVoitureUpdate } from '../validations/VoitureValidation.js';
import handleValidationErrors from '../validations/handleValidationErrors.js';

const VoitureRoute = Router();

VoitureRoute.get('/', getVoitures)
            .get('/:id', getVoiture)
            .post('/', ValidateVoitureCreation, handleValidationErrors, addVoiture)
            .put('/:id', ValidateVoitureUpdate, handleValidationErrors, updateVoiture)
            .delete('/:id', deleteVoiture);

export default VoitureRoute;