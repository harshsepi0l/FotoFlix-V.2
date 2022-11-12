module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("flixerimages", {
    ImageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ImageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Dislikes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Posts;
};
