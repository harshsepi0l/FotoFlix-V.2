const express = require("express");
const app = express();
const { cloudinary } = require("./utils/cloudinary");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt"); // for hashing passwords
const saltRounds = 10;

const jwt = require("jsonwebtoken");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

/*
// CSRF HTTP ONLY COOKIE
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const csrfProtection = csrf({ cookie: true });
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "flixersecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      httpOnly: true,
    },
  })
);

app.get("/api/Login", csrfProtection, function (req, res) {
  res.render("Login", { csrfToken: req.csrfToken() });
});
*/

app.use(
  cors({
    origin: [
      "http://localhost:3000/Login",
      "http://localhost:3001",
      "http://localhost:3001/HomePage",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
*/
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "flixers",
  password: "runmommy",
});

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

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("Yo, we need a token, please give it to us next time");
  } else {
    jwt.verify(token, "flixuser", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "You failed to authenticate" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("You are authenticated");
});

app.put("/api/update", (req, res) => {
  const username = req.body.Username;
  const firstname = req.body.Firstname;

  const sqlUpdate = "UPDATE flixerinfo SET Username = ? WHERE Firstname = ?";
  db.query(sqlUpdate, [username, firstname], (err, result) => {
    if (err) console.log(err);
  });
});

// app.get("/api/login", (req, res) => {
//   if (req.session.user) {
//     res.send({ loggedIn: true, user: req.session.user });
//   } else {
//     res.send({ loggedIn: false });
//   }
// });

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
          const id = result[0].id; // id from database
          const token = jwt.sign({ id }, "flixuser", {
            expiresIn: 300,
          });
          // req.session.user = result;

          res.json({ auth: true, token: token, result: result });
        } else {
          res.json({
            auth: false,
            message: "Wrong username/password combination!",
          });
        }
      });
    } else {
      res.json({ auth: false, message: "no user exists" });
    }
  });
});
//IMAGE UPLOADS
app.get("/api/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:flixerimages")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});

app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "flixerimages",
    });
    console.log(uploadedResponse);
    res.json({ msg: "YAYAYAY" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("running on port " + PORT);
});
