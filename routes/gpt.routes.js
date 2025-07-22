const express = require('express');
const router = express.Router();
const controller = require('../controller/gpt.controller');

// POST /api/gpts
router.post('/', controller.createGPT);

// GET /api/gpts
router.get('/', controller.getAllGPTs);

// PUT /api/gpts/:id
router.put('/:id', controller.updateGPT);

// DELETE /api/gpts/:id
router.delete('/:id', controller.deleteGPT);

module.exports = router;
