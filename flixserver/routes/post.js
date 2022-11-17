const express = require("express");
const { sequelize } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
// const router = express.Router();
let router = express.Router({ mergeParams: true });
const { DataTypes } = require("sequelize");
const post = require("../models/post")(sequelize, DataTypes);

const bodyParser = require("body-parser");
const tagsModel = require("../models/flixertags")(sequelize, DataTypes);
const tapsModel = require("../models/flixertaps")(sequelize, DataTypes);

const { cloudinary } = require("../utils/cloudinary");

router.get("/byUID", validateToken, async (req, res) => {
  const uid = req.user.uid;
  const posts = await post.findAll({
    where: {
      uid: uid,
    },
  });
  res.json(posts);
});

router.get("/", async (req, res) => {
  const posts = await post.findAll();
  res.json(posts);
});

router.get("/byId/:id", async (req, res) => {
  let id = req.params.id; // Get the id
  const img = await post.findByPk(id);
  res.json(img);
  console.log(json(img));
});

router.get("/tagsByid/:id", async (req, res) => {
  let id = req.params.id; // Get the id
  const t = await tags.findAll({
    where: { ImageId: id },
  });
  console.log(`Backend tags: ${t}`);
  res.json(t);
});

router.post("/byUID", validateToken, async (req, res) => {
  const fileStr = req.body.data;
  const uid = req.user.uid;
  try {
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "flixerimages",
    });

    const postResult = await post.create({
      uid: uid,
      imageType: uploadedResponse.format,
      postType: uploadedResponse.resource_type,
      url: uploadedResponse.url,
      title: req.body.title,
      description: req.body.description,
      publicOrPrivate: req.body.publicOrPrivate,
      tags: req.body.tags,
    });

    await Array.from(tags).forEach((tag) => {
      tagsModel.create({
        tag: tag,
      });
    });

    await tapsModel.create({
      postId: postResult.id,
      likes: 0,
      dislikes: 0,
      tagsId: 0,
    });
  } catch (error) {
    console.log(error);
  }

  res.json({ message: "Post created!" });
});
module.exports = router;
