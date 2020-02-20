const express = require('express');
const security = require('../core/security');
const localMiddleware = require('../middlewares/local.middleware');

const router = express.Router();

router.post('/login', security.authenticate('local', { session: true }), (req, res) => {
  return res.status(200).json({
    csrf: req.csrfToken(),
  });
});

router.post('/logout', localMiddleware, (req, res) => {
  req.logout();

  return res.sendStatus(200);
});

module.exports = router;
