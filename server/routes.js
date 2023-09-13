const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/courts', controller.getCourts);

module.exports = router;