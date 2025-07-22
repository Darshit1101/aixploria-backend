const { DataTypes } = require("sequelize");
const { sequelize, Sequelize } = require(".");


module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        role:{
            type:DataTypes.STRING,
            defaultValue:'admmin',
        }
    });
};