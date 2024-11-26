import { DataTypes } from "sequelize";
import database from "../config/Connections.js";

const Marque = database.define("Marque", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: "Le nom de la marque est requis." },
    },
  },
});

export default Marque;
