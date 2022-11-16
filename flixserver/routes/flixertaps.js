const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
const post = require("../models/post");
const flixertaps = require("../models/post")(sequelize, DataTypes);
sequelize, DataTypes;
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  const postid = req.params.postid;
  const posts = await post.findAll({
    where: {
      postid: postid,
    },
  });
  flixertaps = await flixertaps.findAll({
    where: {
      postid: postid,
    },
  });
  res.json(posts);
});
module.exports = router;
