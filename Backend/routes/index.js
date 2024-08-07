const express = require("express");
const router = express.Router();

const loginRouter = require("./login");
const signUpRouter = require("./signup");
const jobsRouter = require("./jobs");
const applicationsRouter = require("./applications");

router.use("/login", loginRouter);
router.use("/signup", signUpRouter);
router.use("/jobs", jobsRouter);
router.use("/applications", applicationsRouter);

module.exports = router;
