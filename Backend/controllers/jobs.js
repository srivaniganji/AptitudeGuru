const { Jobs } = require("../models");

const getJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find({
      applicationDeadline: { $gt: new Date() },
    });
    res.status(200).json({ message: "Jobs Found", jobs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addJob = async (req, res) => {
  try {
    const { email } = req;
    const {
      companyName,
      jobRole,
      jobLocation,
      mode,
      stipend,
      jobDescription,
      applicationDeadline,
      jobDuration,
      numberOfOpenings,
      workHours,
    } = req.body;
    const newJob = new Jobs({
      companyName,
      jobRole,
      jobLocation,
      mode,
      stipend,
      jobDescription,
      jobPostingDate: new Date(),
      applicationDeadline: new Date() + 1,
      jobDuration,
      numberOfOpenings,
      workHours,
      postedBy: email,
    });
    await newJob.save();
    res.status(200).json({ message: "Job Posted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getJob = async (req, res) => {
  try {
    console.log("asdf");
    const job = await Jobs.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: "Job Not Found" });
    res.status(200).json({ message: "Job Found", job });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getJobs,
  addJob,
  getJob,
};
