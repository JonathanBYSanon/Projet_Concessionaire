// Importation des modules nécessaires
import database from "../config/Connections.js";// Connection à la base de données
import { DataTypes } from "sequelize";// Les types de données
import bcrypt from "bcrypt";
import Role from "./RoleModel.js"; // Assurez-vous que le modèle Role est correctement importé


// Modèle de User

const User = database.define('User', {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom:  DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true,
      validate: { isEmail: true } // Valider que c'est un email valide
      },
password: {

  type: DataTypes.STRING, 
  allowNull: false,
  validate: { len: [6, 100] } // Longueur minimale de 6 caractères
},
    naissance: DataTypes.DATEONLY,
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Role',
        key: 'id',
      }
      },
    }, { 
           hooks: {
        // Avant de créer un utilisateur, crypte le mot de passe
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSalt(10); // Génère un sel
            user.password = await bcrypt.hash(user.password, salt); // Hash le mot de passe
          }
        },
        // Avant de mettre à jour un utilisateur, crypte le mot de passe s'il est modifié
        beforeUpdate: async (user) => {
          if (user.password && user.changed('password')) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        }
      }

  });


  // Association User et Role
  User.belongsTo(Role, { foreignKey: 'roleId' });

  export default User