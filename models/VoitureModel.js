// vin (Numéro d’identification unique)
// kilometrage (Kilométrage de la voiture)
// etat (État général : neuf, occasion, etc.)

import database from '../config/Connections.js';
import { DataTypes } from 'sequelize';

// Definition du modele voiture
const Voiture = database.define('Voiture', {
    vin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kilometrage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    etat: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Voiture;