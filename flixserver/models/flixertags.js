module.exports = (sequelize, DataTypes) => {
    const FlixerInfo = sequelize.define("flixertags", {
      Tag: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    return FlixerInfo;
  };
  