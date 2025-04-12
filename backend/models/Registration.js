const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  semester: String,
  admissionNumber: String,
  examRegisterNumber: String,
});

module.exports = mongoose.model("Registration", registrationSchema);
