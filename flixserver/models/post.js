const flixerinfo = require("./FlixerInfo");
const Comments = require("./Comments");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "flixerimages",
    {
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
      Likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Dislikes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // TagsId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
    },
    {
      timestamps: true,
    }
  );
  Post.associate = (models) => {
    Post.belongsTo(models.FlixerInfo, {
      foreignKey: "UserID",
    });
    Post.hasMany(models.Comments, {
      onDelete: "cascade", // Deleting a post deletes all associated comments
    });
  };
  return Post;
};
