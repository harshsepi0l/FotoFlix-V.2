const express = require("express");
const router = express.Router();
const { flixerinfo } = require("../models");
const bcrypt = require("bcrypt"); // for hashing passwords

// GET all flixerinfo

router.post("/SignUp", async (req, res) => {
  const { Firstname, Lastname, Username, Email, Password } = req.body;
  bcrypt.has(Password, 10).then((hash) => {
    Users.create({
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
  const user = await Users.finidOne({ where: { Username: Username } });
  if (!user) {
    res.json({ message: "User not found!" });
  }

  bcrypt.compare(Password, user.Password).then((match) => {
    if (!match) res.json({ message: "Wrong Username/Password!" });

    res.json({ message: "Login successful!" });
  });
});

module.exports = router;
