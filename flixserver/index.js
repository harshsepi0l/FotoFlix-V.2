const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json({ limit: "500mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "500mb",
  })
);
app.use(bodyParser.json());
app.use(cors());

const bcrypt = require("bcrypt"); // for hashing passwords
const saltRounds = 10; // for hashing passwords

const db = require("./models");

// Routers

const signUpRouter = require("./routes/flixerinfo");
app.use("/SignUp", signUpRouter);

const cloudinaryRouter = require("./routes/post");
app.use("/Cloudinary", cloudinaryRouter);

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

// app.get("/api/images", async (req, res) => {
//   const { resources } = await cloudinary.search
//     .expression("folder:flixerimages")
//     .sort_by("public_id", "desc")
//     .max_results(30)
//     .execute();
//   const publicIds = resources.map((file) => file.public_id);
//   res.send(publicIds);
// });

// app.post("/api/upload", async (req, res) => {
//   try {
//     const fileStr = req.body.data;

//     const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
//       upload_preset: "flixerimages",
//     });
//     console.log(uploadedResponse);
//     res.json({ msg: "YAYAYAY" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ err: "something went wrong" });
//   }
// });

// app.get("/api/getimages", (req, res) => {
//   const sqlSelect = "SELECT * FROM flixerimages";

//   db.query(sqlSelect, (err, result) => {
//     res.send(result);
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(3000, () => {
//   console.log("running on port " + PORT);
// });
