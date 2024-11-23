import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Options = sequelize.define("Options", {
  option_id: {
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
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
