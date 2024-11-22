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
    }
}, {
    tableName: 'options',
    timestamps: false
});

module.exports = Options;
