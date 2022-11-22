const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
const { validateToken } = require("../middlewares/AuthMiddleware");
const flixertags = require("../models/flixertags")(sequelize, DataTypes);

router.post("/", validateToken, async (req, res) => {
  await flixertags.create({
    uid: req.user.uid,
    tag: req.body.tag,
  });
  res.json({ message: "Tag created!" });
});
// updated
router.get("/byUID", async (req, res) => {
  const tags = await flixertags.findAll();
  res.json(tags);
});

module.exports = router;
