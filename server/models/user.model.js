const { DataTypes, Model } = require('sequelize');

/** @type {import('sequelize/types').ModelAttributes} */
const userSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
}

class User extends Model {}

module.exports = { User, userSchema };
