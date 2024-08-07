const mongoose = require("mongoose");

const connectMongoDB = (url) => {
  mongoose
    .connect(url)
    .then(console.log("MongoDB connected..."))
    .catch((err) => console.log(err));
};

module.exports = { connectMongoDB };
