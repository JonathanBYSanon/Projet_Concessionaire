import bcrypt from 'bcryptjs';
import database from './Connections.js';
import { Role, Utilisateur } from '../models/Relations.js';

export default async function checkDatabaseAndInitialize() {
  try {
    // Vérification de l'existence des tables
    const tables = await database.getQueryInterface().showAllTables();
    if (tables.length === 0) {
      console.log('Database is empty. Syncing...');
      await database.sync({ alter: true });
      console.log('Database synced successfully.');

      // Création du rôle Admin
      const adminRole = await Role.create({ titre: 'Admin' });
      console.log('Admin role created.');

      // Création de l'utilisateur Admin par défaut
      const hashedPassword = bcrypt.hashSync('admin1234', 10);
      await Utilisateur.create({
        nom: 'Admin',
        prenom: 'Default',
        email: 'admin@email.com',
        password: hashedPassword,
        naissance: '1990-01-01',
        RoleId: adminRole.id,
      });
      console.log('Default admin user created.');
      console.log('Database initialization completed.\n Admin email: admin@email.com\n Admin password: admin1234');
    } else {
      console.log('Database already exists. Skipping sync.');
    }
  } catch (error) {
    console.error('Error during database initialization:', error);
  }
}
