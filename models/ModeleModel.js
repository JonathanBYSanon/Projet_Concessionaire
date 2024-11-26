import { DataTypes } from "sequelize";
import database from "../config/Connections.js";
import Marque from "./MarqueModel.js";

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

// Relation : un modèle appartient à une marque
Modele.belongsTo(Marque, { foreignKey: "marqueId" });
Marque.hasMany(Modele, { foreignKey: "marqueId" });

export default Modele;
