const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const path = require("path");
const db = require("./model");

const authRoutes = require("./routes/auth.routes");
const categoryRoutes = require("./routes/category.routes");
const cardRoutes = require("./routes/card.routes");
const videoRoutes = require("./routes/video.routes");
const videoCategoryRoutes = require("./routes/videoCategory.routes");
const newsRoutes = require("./routes/news.route");
const hubspotRoutes = require("./routes/hubspot.routes");
const gptCategoryRoutes = require("./routes/gptcategory.routes");
const gptRoutes = require("./routes/gpt.routes");
const blogRoutes = require("./routes/blog.routes");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use(express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/cards", cardRoutes);
app.use("/videos", videoRoutes);
app.use("/video-categories", videoCategoryRoutes);
app.use("/news", newsRoutes);
app.use("/hubspot", hubspotRoutes);
app.use("/gpt-categories", gptCategoryRoutes);
app.use("/gpt", gptRoutes);
app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("✅ Server is running...");
});

const PORT = process.env.PORT || 5000;

db.sequelize
  .sync({ force: false })
  .then(async () => {
    const adminUsername = process.env.ADMIN_USERNAME || "admin";
    const adminPassword = process.env.ADMIN_PASSWORD || "secure@123";

    const adminExists = await db.User.findOne({
      where: { username: adminUsername },
    });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await db.User.create({
        username: adminUsername,
        password: hashedPassword,
        role: "admin",
      });
      console.log("✅ Admin user created");
    } else {
      console.log("✅ Admin already exists");
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error connecting to database:", err);
  });
