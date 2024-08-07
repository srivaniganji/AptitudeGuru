const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  companyName: { type: String, required: false },
  currentJobRole: { type: String, required: false },
  jobsPosted: { type: Array, required: false },
});

const Recruiters = mongoose.model("Recruiters", recruiterSchema);

module.exports = Recruiters;
