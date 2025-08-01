// routes/videoCategory.routes.js

const express = require("express");
const router = express.Router();
const videocatController = require("../controller/videoCategory.controller");

router.post("/addvideocat", videocatController.addVideoCategory);
router.get("/getvideocat", videocatController.getAllVideoCategories);
router.put("/update/:id", videocatController.updateVideoCategory);
router.delete("/delete/:id", videocatController.deleteVideoCategory);

module.exports = router;
