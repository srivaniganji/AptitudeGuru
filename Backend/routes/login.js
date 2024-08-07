const express = require("express");
const router = express.Router();
const { Users, Recruiters } = require("../models");
const { generateJwtToken } = require("../middlewares/generateToken");

router.post("/user", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email, password });
    if (!user) return res.status(401).json({ message: "Invalid Credentials" });
    if (user.password !== password)
      return res.status(401).json({ message: "Invalid Credentials" });
    const jwtToken = await generateJwtToken(email, "user");
    res.status(200).json({ message: "Login succefull", jwtToken });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/recruiter", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Recruiters.findOne({ email, password });
    if (!user) return res.status(401).json({ message: "Invalid Credentials" });
    if (user.password !== password)
      return res.status(401).json({ message: "Invalid Credentials" });
    const jwtToken = await generateJwtToken(email, "recruiter");
    res.status(200).json({ message: "Login succefull", jwtToken });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
