const { Jobs } = require("../models");

const applyJob = async (req, res) => {
  try {
    const job = await Jobs.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job Not Found" });
    const { userId } = req.body;
    job.applications.push(userId);
    await job.save();
    res.status(200).json({ message: "Application Submitted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { applyJob };
