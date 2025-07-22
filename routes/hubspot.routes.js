// routes/hubspotRoutes.js

const express = require('express');
const router = express.Router();
const hubspotController = require('../controller/hubspot.controller');

router.post('/', hubspotController.createHubspot);
router.get('/', hubspotController.getAllHubspots);
router.get('/:id', hubspotController.getHubspotById);
router.put('/:id', hubspotController.updateHubspot);
router.delete('/:id', hubspotController.deleteHubspot);

module.exports = router;
