const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const { DataTypes } = require("sequelize");
const post = require("../models/post")(sequelize, DataTypes);

const bodyParser = require("body-parser");

const { cloudinary } = require("../utils/cloudinary");

router.get("/", async (req, res) => {
  const posts = await post.findAll();
  res.json(posts);
});

router.post("/", async (req, res) => {
  const fileStr = req.body.data;

  const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: "flixerimages",
  });

  console.log(uploadedResponse);

  await post.create({
    Title: "test",
    Description: "test",
    PublicOrPrivate: "1",
    ImageType: "test",
    PostType: "test",
    Url: uploadedResponse.url,
    Likes: "0",
    Dislikes: "0",
    TagsId: "1",
  });

  res.json({ message: "Image created!" });
});

module.exports = router;
