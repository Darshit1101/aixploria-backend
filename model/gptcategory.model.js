// models/gptcategory.model.js
module.exports = (sequelize, DataTypes) => {
  const GPTCategory = sequelize.define('GPTCategory', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return GPTCategory;
};
