const express = require('express');
const router = express.Router();
const gptCategoryController = require('../controller/gptcategory.controller');

// Create category
router.post('/', gptCategoryController.createCategory);

// Get all categories
router.get('/', gptCategoryController.getAllCategories);

// Update category
router.put('/:id', gptCategoryController.updateCategory);

// Delete category
router.delete('/:id', gptCategoryController.deleteCategory);

module.exports = router;
