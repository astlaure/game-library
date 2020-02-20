const { Sequelize } = require('sequelize');
const config = require('./config');
const { userSchema, User } = require('../models/user.model');
const { gameInfoSchema, GameInfo } = require('../models/game-info.model');
const { gameStatusSchema, GameStatus } = require('../models/game-status.model');
const { gameSchema, Game } = require('../models/game.model');

const sequelize = new Sequelize({
  host: config.database.host,
  database: config.database.name,
  username: config.database.username,
  password: config.database.password,
  dialect: 'mysql',
});

User.init(userSchema, {
  sequelize,
  tableName: 'users',
  indexes: [
    {
      fields: ['username'],
    },
  ],
});

GameInfo.init(gameInfoSchema, {
  sequelize,
  tableName: 'game_infos',
});

GameStatus.init(gameStatusSchema, {
  sequelize,
  tableName: 'game_status',
});

Game.init(gameSchema, {
  sequelize,
  tableName: 'games',
});

Game.hasOne(GameStatus);
Game.hasOne(GameInfo);

module.exports = sequelize;
