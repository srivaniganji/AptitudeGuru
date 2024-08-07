const express = require("express");
const router = express.Router();
const { Users, Recruiters } = require("../models");

router.post("/user", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) return res.status(200).json({ message: "User Already Exists." });
    const newUser = new Users({ username, email, password });
    newUser.save();
    res.status(200).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/recruiter", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await Recruiters.findOne({ email });
    if (user) return res.status(200).json({ message: "User Already Exists." });
    const newUser = new Recruiters({ username, email, password });
    newUser.save();
    res.status(200).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
