const Admissionsche = require("../Model/Admissionsche");

module.exports = async (req, res) => {
  try {
    const newdata = await Admissionsche.find();

    console.log(newdata);
    res.status(200).json(newdata);
  } catch (error) {}
};
