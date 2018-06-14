var express = require('express');
var router = express.Router();

var system = require('./system/system.controller');

router.get('/about', system.getSystemInfo);

module.exports = router;