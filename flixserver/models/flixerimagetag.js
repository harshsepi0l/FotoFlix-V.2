const flixerimages = require("./post");
const flixertags = require("./flixertags");

module.exports = (sequelize, DataTypes) => {
    const FlixerImageTag = sequelize.define("flixerimagetag", {
        ImageID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: flixerimages,
              key: 'id',
            }
          },
        ImageID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: flixertags,
              key: 'Tag',
            }
          }
    });
    return FlixerImageTag;
  };