const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
const { cloudinary } = require("../utils/cloudinary");

router.get("/", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:flixerimages")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});

router.post("/", async (req, res) => {
  try {
    const { Title, Description, Image, Cloudinary_id } = req.body;
    const result = await cloudinary.uploader.upload(Image, {
      upload_preset: "flixserver",
    });
    const post = await Posts.create({
      Title,
      Description,
      Image: result.secure_url,
      Cloudinary_id: result.public_id,
    });
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
