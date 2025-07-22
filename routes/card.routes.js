const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const cardController = require('../controller/card.controller');

// Create with image
router.post('/upload', upload.single('image'), cardController.createCard);

// CRUD Routes
router.get('/', cardController.getAllCards);
router.get('/:id', cardController.getCardById);

// ✅ Updated PUT to allow image upload
router.put('/:id', upload.single('image'), cardController.updateCard);

router.delete('/:id', cardController.deleteCard); 

module.exports = router;
