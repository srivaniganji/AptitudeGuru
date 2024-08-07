const express = require("express");
const { applyJob } = require("../controllers/applications");
const { verifyUserToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello, World!");
});

router.post("/", verifyUserToken, applyJob);

module.exports = router;
