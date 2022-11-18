const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
require("dotenv").config();

const bcryptjs = require("bcryptjs"); // for hashing passwords

const flixerinfo = require("../models/flixerinfo")(sequelize, DataTypes);

const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");

// GET all flixerinfo

router.post("/signUp", async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body;
  bcryptjs.hash(password, 10).then((hash) => {
    flixerinfo.create({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: hash,
    });
    res.json({ message: "User created!" });
  });
});

router.get("/byUID", async (req, res) => {
  const { uid } = req.body;
  const flixer = await flixerinfo.findOne({
    where: {
      uid: uid,
    },
  });
  res.json(flixer);
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const user = await flixerinfo.findOne({ where: { userName: userName } });

  if (!user) {
    res.json({ error: "User Doesn't Exist" });
  } else {
    bcryptjs.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Wrong Username And Password Combination" });
      } else {
        const accessToken = sign(
          { uid: user.uid },
          `${process.env.ACCESS_TOKEN_SECRET}`
        );
        res.json(accessToken);
      }
    });
  }
});

router.get("/login/:byUID", async (req, res) => {
  const { uid } = req.params;
  const user = await flixerinfo.findOne({ where: { uid: uid } });
  res.json(user);
});

router.get("/byUsername", async (req, res) => {
  const { userName } = req.body;
  const flixer = await flixerinfo.findOne({
    where: {
      userName: userName,
    },
  });
  res.json(flixer);
});

router.get("/", async (req, res) => {
  const flixers = await flixerinfo.findAll();
  res.json(flixers);
})

module.exports = router;
