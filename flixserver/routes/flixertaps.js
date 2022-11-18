const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
const post = require("../models/post");
const flixertaps = require("../models/post")(sequelize, DataTypes);
const { validateToken } = require("../middlewares/AuthMiddleware");

// router.get("/", async (req, res) => {
//   await.create({

// });

// router.post("/like".async(req, res)) => {
//     const postid = req.params.postid;
//     const post
// }
module.exports = router;
