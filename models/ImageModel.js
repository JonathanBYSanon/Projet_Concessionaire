// image_id (Primary Key)
// url (Lien vers l’image)

import database from '../config/Connections.js';
import { DataTypes } from 'sequelize';

// Definition du modele image
const Image = database.define('Image', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Image;