import { Router } from 'express';
import { getImages, getImage, addImage, deleteImage, updateImage } from '../controllers/ImageController.js';
import { validateImageCreation, validateImageUpdate} from '../validations/ImageValidation.js';
import handleValidationsErrors from '../validations/handleValidationErrors.js';

const ImageRoute = Router();

ImageRoute.get('/', getImages)
            .get('/:id', getImage)
            .post('/', validateImageCreation, handleValidationsErrors , addImage)
            .put('/:id', validateImageUpdate, handleValidationsErrors, updateImage)
            .delete('/:id', deleteImage);

export default ImageRoute;