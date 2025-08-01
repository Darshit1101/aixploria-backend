const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog.controller");

router.post("/addblog", blogController.createBlog);
router.get("/getallblog", blogController.getBlogs);
router.get("/blogbyid/:id", blogController.getBlogById); // New route
router.put("/updateblog/:id", blogController.updateBlog);
router.delete("/deleteblog/:id", blogController.deleteBlog);

module.exports = router;
