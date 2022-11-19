const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200,
  exposedHeaders: [
    "Content-Length",
    "X-Requested-With",
    "Authorization",
    "Content-Type",
  ],
};

require("dotenv").config();

app.use(cors(corsOptions));
app.use(express.json({ limit: "500mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "500mb",
  })
);

const db = require("./models");

// Routers

const flixerInfoRouter = require("./routes/flixerinfo");
app.use("/", flixerInfoRouter);

const cloudinaryRouter = require("./routes/post");
app.use("/Cloudinary", cloudinaryRouter);

const likesRouter = require("./routes/flixertaps");
app.use("/Likes", likesRouter);

const tagsRouter = require("./routes/flixertags");
app.use("/Tags", tagsRouter);

try {
  db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("running on port 3000");
    });
  });
} catch (err) {
  console.log(err);
}

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
//changes 2
