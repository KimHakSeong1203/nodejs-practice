"use strict";
const express = require('express');

const router = express.Router();
const controller = require('./home.controller.js');

router.get('/', controller.home);
router.get('/login', controller.login);

module.exports = router;