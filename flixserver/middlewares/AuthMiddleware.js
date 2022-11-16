const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) {
    return res.json({ message: "User not Logged In!" });
  } else {
    try {
      const validToken = verify(
        accessToken,
        `${process.env.ACCESS_TOKEN_SECRET}`
      );
      req.user = validToken;
      if (validToken) {
        return next();
      }
    } catch (err) {
      return res.json({ message: err });
    }
  }
};

module.exports = { validateToken };
