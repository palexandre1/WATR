const express = require('express');
require('dotenv').config();
const router = express.Router();
const controller = require('./controllers');

router.get('/key', function(req, res) {
  res.status(200).send(process.env.GOOGLE_API_KEY)
})
router.get('/courts', controller.getCourts);
router.put('/courts/:id', controller.updatePlayerCount);

module.exports = router;