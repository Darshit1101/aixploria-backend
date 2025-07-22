// model/Card.js
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isFeatured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    visitlink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    premiumtype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isNew: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Card;
};
