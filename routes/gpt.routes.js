const express = require('express');
const router = express.Router();
const controller = require('../controller/gpt.controller');

// POST /api/gpts
router.post('/addgpt', controller.createGPT);

// GET /api/gpts
router.get('/getallgpts', controller.getAllGPTs);

// PUT /api/gpts/:id
router.put('/updategpt/:id', controller.updateGPT);

// DELETE /api/gpts/:id
router.delete('/deletegpt/:id', controller.deleteGPT);

module.exports = router;
