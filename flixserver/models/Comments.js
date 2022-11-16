const flixerinfo = require("./FlixerInfo");
const Post = require("./Post");

module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
      id: { // The id of the comment. Primary key and automatically generated
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      CommentText: { // The text of the comment
        type: DataTypes.STRING,
        allowNull: false,
      },
      Likes: { // Likes on the comment
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      Dislikes: { // Dislikes on the comment
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      Parent: { // id of the comment it is replying to. -1 if it is not replying to another comment
        type: DataTypes.INTEGER,
        defaultValue: -1,
      }
    });
    Comments.associate = (models) => {
      Comments.belongsTo(models.FlixerInfo, {
        foreignKey: "UserID",
      });
    };
    return Comments;
};