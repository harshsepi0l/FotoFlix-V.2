module.exports = (sequelize, DataTypes) => {
    const FlixerTags = sequelize.define("flixertags", {
      Tag: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    return FlixerTags;
  };
  