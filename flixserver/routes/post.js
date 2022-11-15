const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
const { DataTypes } = require("sequelize");
const post = require("../models/post")(sequelize, DataTypes);

const bodyParser = require("body-parser");
const tags = require("../models/flixertags");

const { cloudinary } = require("../utils/cloudinary");
const flixertags = require("../models/flixertags");

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
  // await flixertags.create({

  // });

  res.json({ message: "Image created!" });
});
module.exports = router;
