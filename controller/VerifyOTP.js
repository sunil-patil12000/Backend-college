const session = require("express-session");

module.exports = (req, res) => {
  const { otp } = req.body;

  // Compare the received OTP with the expected OTP
  const expectedOTP = otpdata;
  console.log(otp) // Replace with the OTP you generated and sent to the user
  console.log(expectedOTP);
  if (otp === expectedOTP) {
    console.log("OTP verification successful");
    res
      .status(200)
      .json({ message: `OTP verification successful` });
  } else {
    console.log("OTP verification failed");
    res.status(400).json({ error: "OTP verification failed" });
  }
};
