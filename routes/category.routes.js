// routes/category.routes.js
const express = require('express');
const router = express.Router();
const {
  addCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} = require('../controller/category.controller');

router.post('/add', addCategory);
router.get('/', getAllCategories);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
