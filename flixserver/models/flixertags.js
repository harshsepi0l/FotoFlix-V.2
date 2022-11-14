module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define("flixertags", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imageID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Tags;
};
