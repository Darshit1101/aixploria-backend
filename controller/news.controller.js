const db = require('../model');
const News = db.News;

// Create a news article
exports.createNews = async (req, res) => {
  try {
    const { title, link } = req.body;

    if (!title || !link) {
      return res.status(400).json({ message: "Title and link are required." });
    }

    const news = await News.create({ title, link });
    res.status(201).json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all news
exports.getAllNews = async (req, res) => {
  try {
    const newsList = await News.findAll({ order: [['createdAt', 'DESC']] });
    res.json(newsList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a news item by ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found." });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a news article
exports.deleteNews = async (req, res) => {
  try {
    const rowsDeleted = await News.destroy({ where: { id: req.params.id } });
    if (!rowsDeleted) return res.status(404).json({ message: "News not found." });
    res.json({ message: "News deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a news article
exports.updateNews = async (req, res) => {
  try {
    const { title, link } = req.body;
    const news = await News.findByPk(req.params.id);

    if (!news) return res.status(404).json({ message: "News not found." });

    if (title) news.title = title;
    if (link) news.link = link;

    await news.save();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
