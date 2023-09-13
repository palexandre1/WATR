const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/courts', controller.getCourts);
router.put('/courts/:id', controller.updatePlayerCount);

module.exports = router;