const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Options = sequelize.define('Options', {
    option_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true // Peut être null si aucune description n'est fournie
    }
}, {
    tableName: 'options',
    timestamps: false
});

module.exports = Options;

