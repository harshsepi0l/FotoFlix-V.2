const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
require("dotenv").config();

const bcryptjs = require("bcryptjs"); // for hashing passwords

const flixerinfo = require("../models/flixerinfo")(sequelize, DataTypes);

const { sign } = require("jsonwebtoken");

// GET all flixerinfo

router.post("/", async (req, res) => {
  const { Firstname, Lastname, Username, Email, Password } = req.body;
  bcryptjs.hash(Password, 10).then((hash) => {
    flixerinfo.create({
      Firstname: Firstname,
      Lastname: Lastname,
      Username: Username,
      Email: Email,
      Password: hash,
    });
    res.json({ message: "User created!" });
  });
});

router.get("/byId", async (req, res) => {
  const { UID } = req.body;
  const flixer = await flixerinfo.findOne({
    where: {
      UID: UID,
    },
  });
  res.json(flixer);
});

router.post("/Login", async (req, res) => {
  const { Username, Password } = req.body;
  const user = await flixerinfo.findOne({ where: { Username: Username } });

  if (!user) {
    res.json({ error: "User Doesn't Exist" });
  } else {
    bcryptjs.compare(Password, user.Password).then((match) => {
      if (!match) {
        res.json({ error: "Wrong Username And Password Combination" });
      } else {
        const accessToken = sign(
          { UID: user.UID },
          `${process.env.ACCESS_TOKEN_SECRET}`
        );
        res.json(accessToken);
      }
    });
  }
});

router.get("/Login/:byUID", async (req, res) => {
  const { UID } = req.params;
  const user = await flixerinfo.findOne({ where: { UID: UID } });
  res.json(user);
});

module.exports = router;
