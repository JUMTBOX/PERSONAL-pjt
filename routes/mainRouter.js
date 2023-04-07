const express = require('express');
const {datarefreshing} = require('../controllers/mainController')

const router = express.Router();

router.get('/data', datarefreshing);

module.exports = router;