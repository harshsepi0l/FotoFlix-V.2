module.exports = (sequelize, DataTypes) => {
  const FlixerInfo = sequelize.define(
    "flixerinfo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
        varchar: 500,
      },
    },
    {
      tableName: "flixerinfo",
      timestamps: false,
    }
  );
  return FlixerInfo;
};
