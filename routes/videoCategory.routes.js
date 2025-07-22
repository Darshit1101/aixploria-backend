// routes/videoCategory.routes.js

const express = require('express');
const router = express.Router();

const {
  addVideoCategory,
  getAllVideoCategories,
  updateVideoCategory,
  deleteVideoCategory,
} = require('../controller/videoCategory.controller');

router.post('/', addVideoCategory);            // POST /api/video-categories
router.get('/', getAllVideoCategories);        // GET /api/video-categories
router.put('/:id', updateVideoCategory);       // PUT /api/video-categories/:id
router.delete('/:id', deleteVideoCategory);    // DELETE /api/video-categories/:id

module.exports = router;
