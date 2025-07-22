// const GPTCategory = require('../model/gptcategory.model');
const db = require('../model');
const GPTCategory = db.GPTCategory;
// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const category = await GPTCategory.create({ name });
    res.status(201).json(category);
  } catch (error) {
    console.error('Create Category Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await GPTCategory.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(categories);
  } catch (error) {
    console.error('Get Categories Error:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

// Update a category
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const category = await GPTCategory.findByPk(id);

    if (!category) return res.status(404).json({ error: 'Category not found' });

    await category.update({ name });
    res.status(200).json({ message: 'Category updated', category });
  } catch (error) {
    console.error('Update Category Error:', error);
    res.status(500).json({ error: 'Failed to update category' });
  }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await GPTCategory.findByPk(id);

    if (!category) return res.status(404).json({ error: 'Category not found' });

    await category.destroy();
    res.status(200).json({ message: 'Category deleted' });
  } catch (error) {
    console.error('Delete Category Error:', error);
    res.status(500).json({ error: 'Failed to delete category' });
  }
};
