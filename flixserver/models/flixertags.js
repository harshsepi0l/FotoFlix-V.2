module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define("flixertags", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tag: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  });

  return Tags;
};
//updated
