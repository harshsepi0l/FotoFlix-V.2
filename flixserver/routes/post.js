const express = require("express");
const { sequelize } = require("../models");
// const router = express.Router();
let router = express.Router({ mergeParams : true });
const { validateToken } = require("../middlewares/AuthMiddleware");
const { DataTypes } = require("sequelize");
const post = require("../models/post")(sequelize, DataTypes);

const bodyParser = require("body-parser");
const tags = require("../models/flixertags")(sequelize, DataTypes);

const { cloudinary } = require("../utils/cloudinary");

router.get("/byUID/:UID", validateToken, async (req, res) => {
  const UID = req.user.UID;
  const posts = await post.findAll({
    where: {
      UID: UID,
    },
  });

  res.json(posts);
});


router.get("/byId/:id", async (req, res) => {
  let id = req.params.id; // Get the id
  const img = await post.findByPk(id);
  res.json(img);
});

router.get("/tagsByid/:id", async (req, res) => {
  let id = req.params.id; // Get the id
  const t = await tags.findAll(
    {
      where: {ImageId: id},
    }
  );
  console.log(`Backend tags: ${t}`);
  res.json(t);
});

router.post("/", async (req, res) => {
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
