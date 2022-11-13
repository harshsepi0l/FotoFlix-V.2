module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("flixerimages", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
  return Post;
};
