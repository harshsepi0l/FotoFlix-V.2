const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const { DataTypes } = require("sequelize");
const post = require("../models/post")(sequelize, DataTypes);
const bodyParser = require("body-parser");
const imagetags = require("../models/flixerimagetag");
const tags = require("../models/flixertags");

const { cloudinary } = require("../utils/cloudinary");

router.get("/uploaded", async (req, res) => {
  const all_image = await cloudinary.api.resources();
  console.log(all_image);
  all_image.resources.forEach((image) => {
    res.json(all_image);
  });
});

router.post("/", async (req, res) => {
  const fileStr = req.body.data;

  const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: "flixerimages",
  });

  console.log(uploadedResponse);

  await post.create({
    ImageType: uploadedResponse.format,
    PostType: uploadedResponse.resource_type,
    Url: uploadedResponse.url,
    Title: req.body.Title,
    Description: req.body.Description,
    PublicOrPrivate: req.body.PublicOrPrivate,
    UserID: 2,
    Likes: 0,
    Dislikes: 0,
    UploadDate: uploadedResponse.created_at,
  });

  // Upload the tags
  console.log(Tags);

  res.json({ message: "Image created!" });
});

module.exports = router;
