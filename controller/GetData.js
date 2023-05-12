const Admissionsche = require("../Model/Admissionsche");
const fs = require("node:fs");

module.exports = async (req, res) => {
  try {
    console.log(req.body.id);
    const data = await Admissionsche.findOne({ lid: req.body.id });

    if (!data) {
      res.status(500).json({ message: "Admission Not Exists" });
    }
   

    
    res.setHeader("Content-Type", "multipart/form-data");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
