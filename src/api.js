const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb://localhost/userData";
const userRouter = require("../routes/userData");

const app = express();
const router = express.Router();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected...");
});

app.use(cors());
app.use(express.json());

app.use(`/.netlify/functions/api`, userRouter);

module.exports = app;
module.exports.handler = serverless(app);
