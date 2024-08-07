const express = require("express");
const cors = require("cors");
const { connectMongoDB } = require("./connection");
const router = require("./routes");
require("dotenv").config();

const port = process.env.PORT || 8000;
const dbUrl = process.env.DB_URL;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const startServer = () => {
  app.listen(port, () => console.log(`Server is running on port ${port}...`));
  connectMongoDB(dbUrl);
};

startServer();
