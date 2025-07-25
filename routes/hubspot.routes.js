// routes/hubspotRoutes.js

const express = require("express");
const router = express.Router();
const hubspotController = require("../controller/hubspot.controller");
const upload = require("../middleware/upload");

router.post("/", upload.single("image"), hubspotController.createHubspot);
router.get("/", hubspotController.getAllHubspots);
router.get("/:id", hubspotController.getHubspotById);
router.put("/:id", upload.single("image"), hubspotController.updateHubspot);
router.delete("/:id", hubspotController.deleteHubspot);

module.exports = router;
