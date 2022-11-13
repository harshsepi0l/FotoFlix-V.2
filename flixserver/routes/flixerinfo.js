const express = require("express");
const router = express.Router();
const { flixerinfo } = require("../models");
const bcrypt = require("bcrypt"); // for hashing passwords

const { sign } = require("jsonwebtoken");

// GET all flixerinfo

router.post("/", async (req, res) => {
  const { Firstname, Lastname, Username, Email, Password } = req.body;
  bcrypt.hash(Password, 10).then((hash) => {
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

router.post("/Login", async (req, res) => {
  const { Username, Password } = req.body;

  const user = await flixerinfo.findOne({ where: { Username: Username } });

  if (!user) {
    res.json({ error: "User Doesn't Exist" });
  } else {
    bcrypt.compare(Password, user.Password).then((match) => {
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
