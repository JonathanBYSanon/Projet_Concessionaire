// Modèle de la table User


// Connection à la base de données

import database from "../config/Connections.js";

// Les types de données

import { DataTypes } from "sequelize";

// Modèle de User

const User = database.define('User', {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom:  DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    naissance: DataTypes.DATEONLY,
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Role',
        key: 'id',
      },
    },
  });


  // Association User et Role
  User.belongsTo(Role, { foreignKey: 'roleId' });

  export default User