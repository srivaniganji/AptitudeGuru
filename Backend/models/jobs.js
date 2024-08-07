const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  jobRole: { type: String, required: true },
  jobLocation: { type: String, required: true },
  mode: { type: String, required: true },
  stipend: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobPostingDate: { type: Date, required: true },
  applicationDeadline: { type: Date, required: true },
  jobDuration: { type: String, required: true },
  numberOfOpenings: { type: String, required: false },
  workHours: { type: String, required: true },
  postedBy: { type: String, required: false },
  applications: { type: Array, required: false },
});

const Jobs = mongoose.model("Job", jobSchema);

module.exports = Jobs;
