const Admissions = require("../Model/Admissionsche");

module.exports = async (req, res) => {
  try {
    let old = await Admissions.findOne({ aadhaar: req.body.aadhaar });
    console.log(old);
    if (!old) {
      const admissions = new Admissions({
        lid: req.body.lid,
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        fathername: req.body.fatherName,
        motherrname: req.body.motherName,
        gender: req.body.gender,
        cuttentaddress: req.body.currentAddress,
        permanentaddress: req.body.permanentAddress,
        previous_year_percentage: req.body.previousYearMarks,
        previous_year_class: req.body.previousClass,
        dateofbirth: req.body.dateOfBirth,
        phone: req.body.phoneNumber,
        email: req.body.email,
        aadhaar: req.body.aadhaarNumber,
        filename: req.file.filename,
        path: req.file.path,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
      });
      const data = await admissions.save();
      res.setHeader("Content-Type", "multipart/form-data");
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "Admission Already Exists" });
    }
  } catch (error) {
    console.log(error);
  }
};
