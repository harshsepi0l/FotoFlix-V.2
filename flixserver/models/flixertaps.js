module.exports = (sequelize, DataTypes) => {
  const FlixerTaps = sequelize.define("flixertaps", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dislikes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tagsId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return FlixerTaps;
};
