const express = require('express');
const {datarefreshing, sendData} = require('../controllers/mainController')

const router = express.Router();

router.get('/data', datarefreshing);
router.get('/data/getdata', sendData);

module.exports = router;