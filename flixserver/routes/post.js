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

router.get("/", async (req, res) => {
  const posts = await post.findAll();
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
