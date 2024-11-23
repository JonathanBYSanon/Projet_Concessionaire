import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Couleur = sequelize.define("Couleur", {
  couleur_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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