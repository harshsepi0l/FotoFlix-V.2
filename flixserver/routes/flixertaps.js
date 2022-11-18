const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
const post = require("../models/post")(sequelize, DataTypes);
const flixertaps = require("../models/flixertaps")(sequelize, DataTypes);
const { validateToken } = require("../middlewares/AuthMiddleware");

module.exports = router;
