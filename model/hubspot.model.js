// models/Hubspot.js

module.exports = (sequelize, DataTypes) => {
  const Hubspot = sequelize.define("Hubspot", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    link: {
      type: DataTypes.STRING,
    },
    options: {
      type: DataTypes.JSON,
    },
    image: {
      type: DataTypes.STRING,
    },
  });

  return Hubspot;
};
