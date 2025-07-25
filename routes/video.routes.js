const express = require("express");
const router = express.Router();
const videoController = require("../controller/video.controller");

// Routes
router.post("/", videoController.createVideo);
router.get("/", videoController.getAllVideos);
router.get("/:id", videoController.getVideoById);
router.put("/:id", videoController.updateVideo);
router.delete("/:id", videoController.deleteVideo);

module.exports = router;
