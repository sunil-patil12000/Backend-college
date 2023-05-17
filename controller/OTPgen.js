const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const session = require("express-session");

module.exports = (req, res) => {
  const { email } = req.body;

  console.log(email);
  const otp = otpGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  // Send OTP via email
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "spcomputersmlp@gmail.com",
      pass: "zzvajjkrijiieyqb",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "OTP Verification",
    text: `Your OTP: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to send OTP via email" });
    } else {
      console.log("OTP sent successfully");

      otpdata = otp;
      res.status(200).json({ message: "OTP sent successfully" ,
    otp: otpdata});
    }
  });
};
