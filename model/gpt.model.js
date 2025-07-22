// models/gpt.model.js

module.exports = (sequelize, DataTypes) => {
  const GPT = sequelize.define('GPT', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    hashtags: {
      type: DataTypes.STRING, // Store as comma-separated string
    },
    link: {
      type: DataTypes.STRING,
    },
  });

  return GPT;
};
