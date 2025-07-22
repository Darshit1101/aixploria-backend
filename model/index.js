const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

// Sequelize instance
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false,
  }
);

// Define db object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.User = require('./user.model')(sequelize, DataTypes);
db.Category = require('./category.model')(sequelize, DataTypes);
db.Card = require('../model/card.model')(sequelize, DataTypes);
db.Video = require('../model/video.model')(sequelize, DataTypes);
db.VideoCategory = require('./video.category')(sequelize, DataTypes);
db.News = require('../model/news.model')(sequelize, DataTypes);
db.Hubspot = require('../model/hubspot.model')(sequelize, DataTypes);

// GPT models
db.GPTCategory = require('./gptcategory.model')(sequelize, DataTypes);
db.GPT = require('./gpt.model')(sequelize, DataTypes);

// Setup GPTCategory <-> GPT relation
db.GPT.belongsTo(db.GPTCategory, {
  foreignKey: {
    name: 'categoryId',
    allowNull: false,
  },
});
db.GPTCategory.hasMany(db.GPT, { foreignKey: 'categoryId' });
// const Blog = require('./blog.model')(sequelize, DataTypes);
// db.Blog = Blog;
db.Blog = require("./blog.model")(sequelize, DataTypes);
module.exports = db;
