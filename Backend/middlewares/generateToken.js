const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const generateJwtToken = async (email, role) => {
  const payload = { email: email, role: role };
  const jwtToken = await jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return jwtToken;
};

module.exports = { generateJwtToken };
