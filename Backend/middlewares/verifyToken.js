const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

const verifyRecruiterToken = async (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return res.status(400).json({ message: "Authorization Error" });
  }

  const jwtToken = authorization.split(" ")[1];

  if (!jwtToken)
    return res.status(400).json({ message: "Authentication Error" });
  try {
    const payload = jwt.verify(jwtToken, secretKey);
    const { email, role } = payload;
    if (role !== "recruiter") return;
    req.email = email;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

const verifyUserToken = async (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return res.status(400).json({ message: "Authentication Error" });
  }

  const jwtToken = authorization.split(" ")[1];

  if (!jwtToken)
    return res.status(400).json({ message: "Authentication Error" });
  try {
    const payload = jwt.verify(jwtToken, secretKey);
    const { email, role } = payload;
    if (role !== "user") return;
    req.email = email;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = { verifyRecruiterToken, verifyUserToken };
