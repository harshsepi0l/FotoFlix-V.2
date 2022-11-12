module.exports = (sequelize, DataTypes) => {
  const Cloudinary = sequelize.define("flixerimages", {
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cloudinary_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Cloudinary;
};
