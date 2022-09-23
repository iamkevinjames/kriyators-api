const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const data = {
  firstName: "Vladimir",
  lastName: "Putin",
  emailAddress: "vladmirputin@gmail.com",
};

app.use(cors());
app.use(bodyParser.json());

app.get("/getData", (req, res) => {
  res.send(data);
});

app.post("/postData", (req, res) => {
  data.firstName = req.body.firstName;
  data.lastName = req.body.lastName;
  data.emailAddress = req.body.emailAddress;
  //console.log(req.body);
  res.send("User Data updated successfully!");
});

app.listen(8000, () => {
  console.log("API Server is running...");
});
