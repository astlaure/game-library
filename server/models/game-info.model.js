const { DataTypes, Model } = require('sequelize');

/** @type {import('sequelize/types').ModelAttributes} */
const gameInfoSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    platform: {
      type: DataTypes.ENUM(['PC', 'PS4', 'SWICH', 'XBOXONE']),
      allowNull: true,
    },
    playerNbr: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    rules: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
}

class GameInfo extends Model {}

module.exports = { GameInfo, gameInfoSchema };
