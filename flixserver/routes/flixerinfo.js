const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");

const bcryptjs = require("bcryptjs"); // for hashing passwords

const flixerinfo = require("../models/flixerinfo");

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

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const flixers = await flixerinfo.findByPk(id);
  res.json(flixers);
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
          { Username: user.Username, id: user.id },
          "flixerinfosecret"
        );

        res.json(accessToken);
      }
    });
  }
});

module.exports = router;
