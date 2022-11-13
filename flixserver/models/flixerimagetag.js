module.exports = (sequelize, DataTypes) => {
    const FlixerInfo = sequelize.define("flixerimagetag", {
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
    return FlixerInfo;
  };