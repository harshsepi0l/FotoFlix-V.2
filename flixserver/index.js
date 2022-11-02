const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

const bcrypt = require("bcrypt"); // for hashing passwords
const saltRounds = 10; // for hashing passwords

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "flixers",
  password: "Hxrsh295",
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM flixerinfo";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/registration", (req, res) => {
  const Firstname = req.body.Firstname;
  const Lastname = req.body.Lastname;
  const Username = req.body.Username;
  const Email = req.body.Email;
  const Password = req.body.Password;

  const sqlInsert =
    "INSERT INTO flixerinfo (Firstname, Lastname, Username, Email, Password) VALUES (?,?,?,?,?)";

  bcrypt.hash(Password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      sqlInsert,
      [Firstname, Lastname, Username, Email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.delete("/api/delete/:Username", (req, res) => {
  const username = req.params.Username;
  const sqlDelete = "DELETE FROM flixerinfo WHERE Username = ?";
  db.query(sqlDelete, username, (err, result) => {
    if (err) console.log(err);
  });
});

app.put("/api/update", (req, res) => {
  const username = req.body.Username;
  const firstname = req.body.Firstname;

  const sqlUpdate = "UPDATE flixerinfo SET Username = ? WHERE Firstname = ?";
  db.query(sqlUpdate, [username, firstname], (err, result) => {
    if (err) console.log(err);
  });
});

app.post("/api/login", (req, res) => {
  const username = req.body.Username;
  const password = req.body.Password;

  const sqlSelect = "SELECT * FROM flixerinfo WHERE Username = ?";
  db.query(sqlSelect, [username], (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].Password, (error, response) => {
        if (response) {
          res.send(result);
        } else {
          res.send({ message: "Wrong username/password combination!" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
    }
  });
});
app.listen(3000, () => {
  console.log("running on port 3000");
});
