// Importation des modules nécessaires
import database from "../config/Connections.js";// Connection à la base de données
import { DataTypes } from "sequelize";


// Modèle de User

const Utilisateur = database.define('Utilisateur', {
  nom: { type: DataTypes.STRING, allowNull: false },
  prenom: {type :  DataTypes.STRING },
  email: { 
    type: DataTypes.STRING, allowNull: false, unique: true,
    validate: { isEmail: true } // Valider que c'est un email valide
  },
  password: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  naissance: {type : DataTypes.DATEONLY }
});

export default Utilisateur;
