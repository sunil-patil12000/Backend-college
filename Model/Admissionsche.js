const mongoose = require("mongoose");

let Admissionschem = new mongoose.Schema(
  {
    lid: { type: String, required: true },

    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    fathername: {
      type: String,
    },
    mothername: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },

    cuttentaddress: {
      type: String,
      required: true,
    },
    permanentaddress: {
      type: String,
      required: true,
    },
    previous_year_percentage: {
      type: String,
      required: true,
    },
    previous_year_class: {
      type: String,
      required: true,
    },
    Board: {
      type: String,
    },
    dateofbirth: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    aadhaar: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: Object,
    },
    aadhaarimg: {
      type: Object,
    },
    pymc: { type: Object },
    ci: {
      type: Object,
    },

    // filename: String,
    // path: String,
    // originalname: String,
    // mimetype: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("admission", Admissionschem);
