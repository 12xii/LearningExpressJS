const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(("Write"), {
        writeID: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true,
        },
        writeUser: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        writeHead: {
            type: DataTypes.STRING(),
            allowNull: false,
            defaultValue: 'HEAD'
        },
        writeBody: {
            type: DataTypes.STRING(),
        }
    })
}