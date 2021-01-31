const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");

const message = sequelize.define(
  "message",
  {
    name: DataTypes.STRING,
    message: DataTypes.STRING
  },
  { timestamps: true }
);

module.exports = message;
