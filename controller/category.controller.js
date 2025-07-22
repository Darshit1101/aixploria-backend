// controller/category.controller.js
const db = require('../model');
const Category = db.Category;

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: 'Name is required' });

    const exists = await Category.findOne({ where: { name } });
    if (exists) return res.status(400).json({ message: 'Category already exists' });

    await Category.create({ name });
    res.status(201).json({ message: 'Category added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories' });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    category.name = name;
    await category.save();

    res.json({ message: 'Category updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Update failed' });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (!category) return res.status(404).json({ message: 'Category not found' });

    await category.destroy();
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed' });
  }
};

module.exports = {
  addCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
