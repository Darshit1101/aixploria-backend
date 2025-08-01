// routes/hubspotRoutes.js

const express = require("express");
const router = express.Router();
const hubspotController = require("../controller/hubspot.controller");
const upload = require("../middleware/upload");

router.post("/addhubspot", upload.single("image"), hubspotController.createHubspot);
router.get("/gethubspot", hubspotController.getAllHubspots);
router.get("/:id", hubspotController.getHubspotById);
router.put("/updatehubspot/:id", upload.single("image"), hubspotController.updateHubspot);
router.delete("/deletehubspot/:id", hubspotController.deleteHubspot);

module.exports = router;
