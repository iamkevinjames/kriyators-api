const express = require("express");
const router = express.Router();
const userDataModel = require("../models/userDataModel");

router.get("/", async (req, res) => {
  try {
    const userData = await userDataModel.find();
    res.json(userData);
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await userDataModel.findById(req.params.id);
    res.json(userData);
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

router.post("/", async (req, res) => {
  const userData = new userDataModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
  });

  try {
    const userData1 = await userData.save();
    res.json(userData1);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const userData = await userDataModel.findById(req.params.id);
    userData.emailAddress = req.body.emailAddress;
    const userData1 = await userData.save();
    res.json(userData1);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
