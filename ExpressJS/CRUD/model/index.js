const Sequelize = require('sequelize');
const env = "development";
const config = require("../config/config.js");

const db = {};

const sequelize = new Sequelize({ ...config, sync: false });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.write = require('./write')(sequelize, Sequelize);

module.exports = db;