const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const cardController = require("../controller/card.controller");

// Create with image
router.post("/add-card", upload.single("image"), cardController.createCard);

// CRUD Routes
router.get("/getallcards", cardController.getAllCards);
router.get("/:id", cardController.getCardById);

// ✅ Updated PUT to allow image upload
router.put(
  "/update-card/:id",
  upload.single("image"),
  cardController.updateCard
);

router.delete("/delete-card/:id", cardController.deleteCard);

module.exports = router;
