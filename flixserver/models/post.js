module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("flixerimages", {
    id: {
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
    PublicOrPrivate: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
