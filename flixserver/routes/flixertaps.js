const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
const post = require("../models/post")(sequelize, DataTypes);
const flixertaps = require("../models/flixertaps")(sequelize, DataTypes);
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/:id", validateToken, async (req, res) => {
    const { id } = req.params;
    const taps = await flixertaps.find();
    await flixertaps.create({
      uid: req.user.uid,
      tag: req.body.tag,
    });
    res.json({ taps });
});

module.exports = router;
