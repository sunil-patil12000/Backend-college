const { default: mongoose } = require("mongoose");
require("dotenv").config();

const conn = () => {
  const url = process.env.URL;

  mongoose
    .connect(url)
    .then(console.log("database connection successfully"))
    .catch((e) => {
      console.error(e);
    });
};

module.exports = conn();
