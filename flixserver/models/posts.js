module.exports = (sequelize, DataTypes) => {
  const Cloudinary = sequelize.define("flixerimages", {
    ImageFormat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cloudinaryID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accessMode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Cloudinary;
};
