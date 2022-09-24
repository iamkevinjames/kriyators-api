const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  firstName: {
    type: "string",
    required: true,
  },
  lastName: {
    type: "string",
    required: true,
  },
  emailAddress: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("userData", userDataSchema);
