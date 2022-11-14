const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const { DataTypes } = require("sequelize");
const post = require("../models/post")(sequelize, DataTypes);

const bodyParser = require("body-parser");
const tags = require("../models/flixertags");

const { cloudinary } = require("../utils/cloudinary");
const flixertags = require("../models/flixertags")(sequelize, DataTypes);

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
  console.log(req.body.Tags);

  // Add tags to the database
  // for (let t of req.body.Tags)
  // {
  //   await flixertags.create({
  //     Tag: t.label
  //   });
    
  // }
  // Get ids of tags
  const tagIds=[];
  for (let t of req.body.Tags){
    await flixertags.findOrCreate({
      where: {Tag: t.label},
    }).then(([result, created]) => {});
    flixertags.findOne({
      where: {Tag: t.label},
      attributes: ["id"]
    }).then((foundResult) => {tagIds.push(foundResult)});
  }
  const tag1 = tagIds[0].id;
  console.log("TAG 1:");
  console.log(tag1);

  // Post
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
    TagsId: tag1 // Add the first tag now
  });
  // Add rest of tags
  // get current postid
  await post.findOne({
    
  });
  for (let t = 1;  t < tagIds.length; t++){
    
  }

  res.json({ message: "Image created!" });
});

module.exports = router;
