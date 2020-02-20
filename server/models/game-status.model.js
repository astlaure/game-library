const { DataTypes, Model } = require('sequelize');

/** @type {import('sequelize/types').ModelAttributes} */
const gameStatusSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    owned: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    played: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    watched: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
}

class GameStatus extends Model {}

module.exports = { GameStatus, gameStatusSchema };
