module.exports = (sequelize, DataTypes) => {
  const FlixerTaps = sequelize.define("flixertaps", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PostId: {
      type: DataTypes.INTEGER,
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
    TagsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return FlixerTaps;
};
