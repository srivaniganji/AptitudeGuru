const express = require("express");
const router = express.Router();
const { getJobs, addJob, getJob } = require("../controllers/jobs");
const {
  verifyRecruiterToken,
  verifyUserToken,
} = require("../middlewares/verifyToken");

router.get("/", verifyUserToken, getJobs);

router.post("/", verifyRecruiterToken, addJob);

router.get("/:jobId", verifyUserToken, getJob);

module.exports = router;
