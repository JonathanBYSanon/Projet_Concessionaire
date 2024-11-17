import {sequelize} from 'sequelize';
import dotenv from 'dotenv';

const ENV = dotenv.config().parsed;

const connection = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
  host: ENV.DB_HOST,
  dialect: ENV.DB_DIALECT
});

try {
  await connection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {    
  console.error('Unable to connect to the database:', error);
}

export default connection;
