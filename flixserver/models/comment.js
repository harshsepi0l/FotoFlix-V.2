module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("flixerComment", {
      id: { // The id of the comment. Primary key and automatically generated
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      CommentText: { // The text of the comment
        type: DataTypes.STRING,
      },
      Likes: { // Likes on the comment
        type: DataTypes.INTEGER,
      },
      Dislikes: { // Dislikes on the comment
        type: DataTypes.INTEGER,
      }
    });
    Comment.belongsTo(FlixerInfo, { // A comment is associated with one user.
        foreignKey: "UserId", // Name the foreign key in flixerComment "UserId"
        targetKey: "id" // Use key id from FlixerInfo
        }); 
    Comment.belongsTo(Post, { // A comment is associated with one image.
        foreignKey: "ImageId", // Name the foreign key in flixerComment "UserId"
        targetKey: "id" // Use key id from Post/flixerimages
        }); 
    return Comment;
  };