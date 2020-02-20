const express = require('express');
const path = require('path');

const router = express.Router();

router.all('*', (req, res) => {
  res.sendFile(path.resolve(process.cwd(), 'public/index.html'));
});

module.exports = router;
