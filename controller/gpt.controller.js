const db = require('../model');
const GPT = db.GPT;
const GPTCategory = db.GPTCategory;

// Create GPT
exports.createGPT = async (req, res) => {
  try {
    const { title, description, hashtags, link, categoryId } = req.body;

    if (!title || !categoryId) {
      return res.status(400).json({ error: 'Title and Category are required' });
    }

    const gpt = await GPT.create({
      title,
      description,
      hashtags: Array.isArray(hashtags) ? hashtags.join(',') : hashtags,
      link,
      categoryId,
    });

    res.status(201).json(gpt);
  } catch (err) {
    console.error('Create GPT Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get All GPT Entries
exports.getAllGPTs = async (req, res) => {
  try {
    const gpts = await GPT.findAll({
      include: [{ model: GPTCategory }],
      order: [['createdAt', 'DESC']],
    });

    res.status(200).json(gpts);
  } catch (err) {
    console.error('Fetch GPT Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update GPT
exports.updateGPT = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, hashtags, link, categoryId } = req.body;

    const gpt = await GPT.findByPk(id);
    if (!gpt) return res.status(404).json({ error: 'GPT entry not found' });

    await gpt.update({
      title,
      description,
      hashtags: Array.isArray(hashtags) ? hashtags.join(',') : hashtags,
      link,
      categoryId,
    });

    res.status(200).json(gpt);
  } catch (err) {
    console.error('Update GPT Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete GPT
exports.deleteGPT = async (req, res) => {
  try {
    const { id } = req.params;
    const gpt = await GPT.findByPk(id);
    if (!gpt) return res.status(404).json({ error: 'GPT entry not found' });

    await gpt.destroy();
    res.status(200).json({ message: 'GPT entry deleted' });
  } catch (err) {
    console.error('Delete GPT Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
