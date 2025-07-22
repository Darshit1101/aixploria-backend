module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'news',
    timestamps: true, // adds createdAt & updatedAt
  });

  return News;
};
