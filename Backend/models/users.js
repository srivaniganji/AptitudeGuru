const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: { type: Array, required: false },
  resume: { type: String, required: false },
  education: { type: String, required: false },
  experience: { type: String, required: false },
  address: { type: String, required: false },
  contactNumber: { type: String, required: false },
  qualifications: { type: Array, required: false },
  jobsApplied: { type: Array, required: false },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
