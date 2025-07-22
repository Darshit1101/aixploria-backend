// controller/videoCategory.controller.js

const db = require('../model');
const VideoCategory = db.VideoCategory;

const addVideoCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });

    const exists = await VideoCategory.findOne({ where: { name } });
    if (exists) return res.status(400).json({ message: 'Video category already exists' });

    await VideoCategory.create({ name });
    res.status(201).json({ message: 'Video category added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getAllVideoCategories = async (req, res) => {
  try {
    const categories = await VideoCategory.findAll({
      order: [['createdAt', 'DESC']], // ✅ Shows most recently added categories first
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching video categories' });
  }
};


const updateVideoCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await VideoCategory.findByPk(id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    category.name = name;
    await category.save();

    res.json({ message: 'Video category updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Update failed' });
  }
};

const deleteVideoCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await VideoCategory.findByPk(id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    await category.destroy();
    res.json({ message: 'Video category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed' });
  }
};

module.exports = {
  addVideoCategory,
  getAllVideoCategories,
  updateVideoCategory,
  deleteVideoCategory,
};
