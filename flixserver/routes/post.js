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
const flixerinfo = require("../models/flixerinfo");

router.get("/", validateToken, async (req, res) => {
  const posts = await post.findAll();
  res.json(posts);
});

router.post("/", validateToken, async (req, res) => {
  const fileStr = req.body;
  console.log(fileStr);

  const UID = req.user.UID;
  flieStr.UID = UID;

  const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: "flixerimages",
  });

  fileStr.ImageType = uploadedResponse.format;
  fileStr.Url = uploadedResponse.url;
  fileStr.PostType = uploadedResponse.resource_type;

  await post.create(fileStr);
});

module.exports = router;
