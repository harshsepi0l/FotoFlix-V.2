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
      tags: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //changed
    },

    {
      timestamps: true,
    }
  );
  return Post;
};
