const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
const { DataTypes } = require("sequelize");
const post = require("../models/post")(sequelize, DataTypes);

const bodyParser = require("body-parser");
const tags = require("../models/flixertags");

const { cloudinary } = require("../utils/cloudinary");

router.get("/byUID", validateToken, async (req, res) => {
  const UID = req.user.UID;
  const posts = await post.findAll({
    where: {
      UID: UID,
    },
  });
  res.json(posts);
});

router.get("/", validateToken, async (req, res) => {
  const posts = await post.findAll();
  res.json(posts);
});

router.post("/byUID", validateToken, async (req, res) => {
  const fileStr = req.body.data;

  const UID = req.user.UID;

  const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: "flixerimages",
  });

  await post.create({
    UID: UID,
    ImageType: uploadedResponse.format,
    PostType: uploadedResponse.resource_type,
    Url: uploadedResponse.url,
    Title: req.body.Title,
    Description: req.body.Description,
    PublicOrPrivate: req.body.PublicOrPrivate,
    Likes: 0,
    Dislikes: 0,
  });

  console.log(uploadedResponse);
});

module.exports = router;
