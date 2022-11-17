module.exports = (sequelize, DataTypes) => {
  const FlixerTaps = sequelize.define("flixertaps", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  });
  return FlixerTaps;
};
