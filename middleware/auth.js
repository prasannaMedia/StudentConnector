const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //get the token from header
  const token = req.header("x-auth-token"); //doubt
  //check if token present
  if (!token) {
    res.status(401).json({ msg: "no token authorization denied" });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "invalid token" });
  }
};
