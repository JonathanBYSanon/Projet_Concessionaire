 
 import database from "../config/Connections.js"
  import { DataTypes } from "sequelize";

  
  const Role = database.define('Role', {
    titre: {     type: DataTypes.STRING,     allowNull: false, 
      validate: { len: [3, 50] } // Limite la longueur entre 3 et 50 caractères
    }
  });

  // Association User et Role
  Role.hasMany(User, { foreignKey: 'roleId' });

  export default Role;


 