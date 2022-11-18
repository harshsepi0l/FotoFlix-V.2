const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
const { validateToken } = require("../middlewares/AuthMiddleware");
const flixertags = require("../models/flixertags")(sequelize, DataTypes);

router.post("/createdTag", validateToken, async (req, res) => {
  const uid = req.user;
  await flixertags.create({
    uid: uid,
    tag: req.body.tag,
  });
  res.json({ message: "Tag created!" });
});
module.exports = router;
