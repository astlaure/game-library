const express = require('express');
const logger = require('../core/logger');
const { Game } = require('../models/game.model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const games = await Game.findAll();

    return res.status(200).json(games);
  } catch (err) {
    logger.error(err.message);
    return res.sendStatus(500);
  }
});

module.exports = router;
