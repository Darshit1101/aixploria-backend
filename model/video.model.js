module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define("Video", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.STRING, // You can also use INTEGER if you store in seconds
      allowNull: false,
    },
    youtubeLink: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    hashtags: {
      type: DataTypes.TEXT, // Store as comma-separated or JSON string
      allowNull: true,
      get() {
        const raw = this.getDataValue('hashtags');
        return raw ? raw.split(',') : [];
      },
      set(val) {
        this.setDataValue('hashtags', Array.isArray(val) ? val.join(',') : val);
      }
    }
  });

  return Video;
};
