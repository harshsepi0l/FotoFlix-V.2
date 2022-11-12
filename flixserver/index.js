const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const bcrypt = require("bcrypt"); // for hashing passwords
const saltRounds = 10; // for hashing passwords

const db = require("./models");

// Routers

const signUpRouter = require("./routes/flixerinfo");
app.use("/SignUp", signUpRouter);

const postsRouter = require("./routes/cloudinary.js");
app.use("/Posts", postsRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("running on port 3000");
  });
});

// app.delete("/api/delete/:Username", (req, res) => {
//   const username = req.params.Username;
//   const sqlDelete = "DELETE FROM flixerinfo WHERE Username = ?";
//   db.query(sqlDelete, username, (err, result) => {
//     if (err) console.log(err);
//   });
// });

// app.put("/api/update", (req, res) => {
//   const username = req.body.Username;
//   const firstname = req.body.Firstname;

//   const sqlUpdate = "UPDATE flixerinfo SET Username = ? WHERE Firstname = ?";
//   db.query(sqlUpdate, [username, firstname], (err, result) => {
//     if (err) console.log(err);
//   });
// });

// app.post("/api/login", (req, res) => {
//   const username = req.body.Username;
//   const password = req.body.Password;

//   const sqlSelect = "SELECT * FROM flixerinfo WHERE Username = ?";
//   db.query(sqlSelect, [username], (err, result) => {
//     if (err) {
//       res.send({ err: err });
//     }

//     if (result.length > 0) {
//       bcrypt.compare(password, result[0].Password, (error, response) => {
//         if (response) {
//           res.send(result);
//         } else {
//           res.send({ message: "Wrong username/password combination!" });
//         }
//       });
//     } else {
//       res.send({ message: "User doesn't exist" });
//     }
//   });
// });
