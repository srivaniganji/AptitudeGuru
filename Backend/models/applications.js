const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Jobs", required: true },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  applicantName: { type: "String", required: true },
  status: { type: String, required: true },
  applicationDate: { type: Date, required: true },
});

const Applications = mongoose.model("Application", applicationSchema);

module.exports = Applications;
