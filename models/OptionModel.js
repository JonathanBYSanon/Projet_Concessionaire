import { DataTypes } from "sequelize";
import database from "../config/Connections.js";

const Option = database.define("Option", {
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

export default Option;
