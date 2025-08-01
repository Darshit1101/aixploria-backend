const express = require("express");
const router = express.Router();
const videoController = require("../controller/video.controller");

// Routes
router.post("/addvideo", videoController.createVideo);
router.get("/getallvideos", videoController.getAllVideos);
router.get("/:id", videoController.getVideoById);
router.put("/updatevideo/:id", videoController.updateVideo);
router.delete("/deletevideo/:id", videoController.deleteVideo);

module.exports = router;
