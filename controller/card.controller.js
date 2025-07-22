// controller/card.controller.js
const db = require('../model');
const Card = db.Card;

exports.createCard = async (req, res) => {
  try {
    const {
      name,
      description,
      isVerified,
      isFeatured,
      views,
      visitlink,
      category,
      premiumtype,
      isNew,
    } = req.body;

    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    if (!name || !imagePath) {
      return res.status(400).json({ message: 'Name and image are required' });
    }

    const newCard = await Card.create({
      name,
      image: imagePath,
      description,
      isVerified,
      isFeatured,
      views,
      visitlink,
      category,
      premiumtype,
      isNew,
    });

    res.status(201).json(newCard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.status(200).json(cards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCardById = async (req, res) => {
  try {
    const card = await Card.findByPk(req.params.id);
    if (!card) return res.status(404).json({ message: 'Card not found' });
    res.status(200).json(card);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateCard = async (req, res) => {
  try {
    const card = await Card.findByPk(req.params.id);
    if (!card) return res.status(404).json({ message: 'Card not found' });

    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }

    await card.update(req.body);
    res.status(200).json({ message: 'Card updated', card });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findByPk(req.params.id);
    if (!card) return res.status(404).json({ message: 'Card not found' });

    await card.destroy();
    res.status(200).json({ message: 'Card deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
