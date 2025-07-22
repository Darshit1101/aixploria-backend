const express = require('express');
const router = express.Router();
const newsController = require('../controller/news.controller');

router.post('/', newsController.createNews);
router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.delete('/:id', newsController.deleteNews);

module.exports = router;
