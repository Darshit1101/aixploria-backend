const express = require('express');
const router = express.Router();
const gptCategoryController = require('../controller/gptcategory.controller');

// Create category
router.post('/addgptcategory', gptCategoryController.createCategory);

// Get all categories
router.get('/getgptcategories', gptCategoryController.getAllCategories);

// Update category
router.put('/updategptcategory/:id', gptCategoryController.updateCategory);

// Delete category
router.delete('/deletegptcategory/:id', gptCategoryController.deleteCategory);

module.exports = router;
