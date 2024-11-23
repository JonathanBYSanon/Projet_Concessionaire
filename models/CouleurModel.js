import { DataTypes } from "sequelize";
import database from "../config/Connections.js";

const Couleur = database.define("Couleur", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Le champ nom ne peut pas être vide" },
    },
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Le champ code ne peut pas être vide" },
    },
  },
});

export default Couleur;