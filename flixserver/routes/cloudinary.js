const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { posts } = require("../models");
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
    const fileStr = req.body.data;

    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "flixerimages",
    });
    console.log(uploadedResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

module.exports = router;
