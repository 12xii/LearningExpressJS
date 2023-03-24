const seuquelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        userID: {
            type: DataTypes.STRING(),
            primaryKey: true,
            allowNull: false,
        },
        PW: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(),
            allowNull: false,
            defaultValue: 'nonamedUser',
        },
        accessToken: {
            type: DataTypes.STRING(),
        },
        salt: {
            type: DataTypes.STRING(),
        }
    })
}