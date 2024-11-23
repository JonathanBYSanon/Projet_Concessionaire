const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Couleur = sequelize.define('Couleur', {
    couleur_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'couleurs',
    timestamps: false
});

module.exports = Couleur;
