import { DataTypes } from "sequelize";
import database from "../config/Connections.js";

const Modele = database.define("Modele", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Le nom du modèle est requis." },
    },
  },
  annee: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      isInt: { msg: "L'année doit être un entier valide." },
    },
  },
});


export default Modele;
