const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const { posts } = require("../models");
const { cloudinary } = require("../utils/cloudinary");

router.get("/uploaded", async (req, res) => {
  const all_image = await cloudinary.api.resources();
  console.log(all_image);
  all_image.resources.forEach((image) => {
    res.json(all_image);
  });
});

router.post("/", async (req, res) => {
  const fileStr = req.body.data;

  const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: "flixerimages",
  });

  console.log(uploadedResponse);
  const { format, access_mode, url } = uploadedResponse;

  posts.create({
    ImageType: "image",
    PostType: "image",
    url: "url",
  });
  res.json({ message: "Image created!" });
  console.log(format, access_mode, url);
  res.send({ msg: "YAYAYAY" });
});

module.exports = router;
