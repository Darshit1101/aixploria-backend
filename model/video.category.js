// model/VideoCategory.js

module.exports = (sequelize, DataTypes) => {
  const VideoCategory = sequelize.define('VideoCategory', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'video_categories',
    timestamps: true,
  });

  return VideoCategory;
};
