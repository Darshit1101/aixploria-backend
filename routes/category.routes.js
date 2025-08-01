// routes/category.routes.js
const express = require("express");
const router = express.Router();
const {
  addCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getSomeCategories,
} = require("../controller/category.controller");

router.post("/add-category", addCategory);
router.get("/getallcategories", getAllCategories);
router.get("/getsomecategories", getSomeCategories);
router.put("/update-category/:id", updateCategory);
router.delete("/delete-category/:id", deleteCategory);

module.exports = router;
