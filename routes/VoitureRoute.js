import { Router } from 'express';
import { getVoiture, getVoitures, addVoiture, updateVoiture, deleteVoiture } from '../controllers/VoitureController.js';

const VoitureRoute = Router();

VoitureRoute.get('/', getVoitures)
            .get('/:id', getVoiture)
            .post('/', addVoiture)
            .put('/:id', updateVoiture)
            .delete('/:id', deleteVoiture);

export default VoitureRoute;