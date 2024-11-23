import { Router } from 'express';
import { getImages, getImage, addImage, deleteImage } from '../controllers/ImageController.js';

const ImageRoute = Router();

ImageRoute.get('/', getImages)
            .get('/:id', getImage)
            .post('/', addImage)
            .delete('/:id', deleteImage);

export default ImageRoute;