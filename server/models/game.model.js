const { DataTypes, Model } = require('sequelize');

/** @type {import('sequelize/types').ModelAttributes} */
const gameSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('BOARDGAME', 'CARDGAME', 'VIDEOGAME'),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(2, 5),
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  ranking: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
};

class Game extends Model {}

module.exports = { Game, gameSchema };
