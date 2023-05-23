const Admissions = require("../Model/Admissionsche");

module.exports = async (req, res) => {
  try {
    let old = await Admissions.findOne({ aadhaar: req.body.aadhaar });
    console.log(req.files.ci[0].originalname);
    // res.json(req.files.ci)
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
        Board: req.body.board,
        dateofbirth: req.body.dateOfBirth,
        phone: req.body.phoneNumber,
        email: req.body.email,
        aadhaar: req.body.aadhaarNumber,
        photo: {
          filename: req.files.image[0].filename,
          path: req.files.image[0].path,
          originalname: req.files.image[0].originalname,
          mimetype: req.files.image[0].mimetype,
        },
        aadhaarimg: {
          filename: req.files.aadhaarimg[0].filename,
          path: req.files.aadhaarimg[0].path,
          originalname: req.files.aadhaarimg[0].originalname,
          mimetype: req.files.aadhaarimg[0].mimetype,
        },
        pymc: {
          filename: req.files.pymc[0].filename,
          path: req.files.pymc[0].path,
          originalname: req.files.pymc[0].originalname,
          mimetype: req.files.pymc[0].mimetype,
        },
        ci: {
          filename: req.files.ci[0].filename,
          path: req.files.ci[0].path,
          originalname: req.files.ci[0].originalname,
          mimetype: req.files.ci[0].mimetype,
        },
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
