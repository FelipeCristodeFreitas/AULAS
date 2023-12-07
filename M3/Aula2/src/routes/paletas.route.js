const express = require('express');
const router = express.Router();
const paletasController = require('../controllers/paletas.controllers');

router.get('/', paletasController.initialController);
module.exports = router;