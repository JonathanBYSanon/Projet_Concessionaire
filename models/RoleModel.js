import database from "../config/Connections.js"
import { DataTypes } from "sequelize";

  
const Role = database.define('Role', {
  titre: {     
    type: DataTypes.STRING,     
    allowNull: false, 
    validate: { len: [3, 50] } // Limite la longueur entre 3 et 50 caractères
  }
});

export default Role;


 