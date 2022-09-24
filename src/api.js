const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const data = {
  firstName: "Vladimir",
  lastName: "Putin",
  emailAddress: "vladmirputin@kyro.com",
};

router.get("/getData", (req, res) => {
  res.send(data);
});

router.post("/postData", (req, res) => {
  data.firstName = req.body.firstName;
  data.lastName = req.body.lastName;
  data.emailAddress = req.body.emailAddress;
  res.send("User Data updated successfully!");
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
