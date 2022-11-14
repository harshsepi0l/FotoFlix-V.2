module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define("flixertags", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Tags;
};
