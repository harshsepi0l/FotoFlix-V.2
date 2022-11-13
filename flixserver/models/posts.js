module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("flixerimages", {
    ImageType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PostType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Posts;
};
