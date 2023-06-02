const express = require('express');
const TickersController = require('../controllers/tickerController');

const router = express.Router();

router.get('/fetch', TickersController.fetchAndSaveTickers);

module.exports = router;
