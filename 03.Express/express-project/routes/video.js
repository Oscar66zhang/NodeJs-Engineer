const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoControl');
router
    .get('/list', videoController.list)
    .get('/users', videoController.users);

module.exports = router;