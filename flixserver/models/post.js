const flixerinfo = require("./FlixerInfo");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "flixerimages",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publicOrPrivate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dislikes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      timestamps: true,
    }
  );
  return Post;
};
