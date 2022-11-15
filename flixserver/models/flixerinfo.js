module.exports = (sequelize, DataTypes) => {
  const FlixerInfo = sequelize.define("flixerinfo", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return FlixerInfo;
};
