const express = require("express");
const router = express.Router();

const { cloudinary } = require("../utils/cloudinary");
const flixertags = require("../models/FlixerTags");
const { validateToken } = require("../middlewares/AuthMiddleware");

// GET all posts
const { sequelize } = require("../models");
const { DataTypes, Association } = require("sequelize");
const post = require("../models/post.js");

router.post("/", validateToken, async (req, res) => {
  const fileStr = req.body.data;
  const UserId = req.params.UserId;
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
    Likes: 0,
    Dislikes: 0,
    UploadDate: uploadedResponse.created_at,
  });
  // await flixertags.create({

  // });

  res.json({ message: "Image created!" });
});

router.get("/byUsername/:Username", async (req, res) => {
  const Username = req.params.Username;
  const posts = await post.findByPk(Username);

  res.json(posts);
});

module.exports = router;
