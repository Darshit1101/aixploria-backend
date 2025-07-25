const express = require('express');
const router = express.Router();
const newsController = require('../controller/news.controller');

router.post('/createNews', newsController.createNews);
router.get('/getAllNews', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.delete('/deleteNews/:id', newsController.deleteNews);
router.put('/updateNews/:id', newsController.updateNews);

module.exports = router;
