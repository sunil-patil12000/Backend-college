const RegisterSech = require("../Model/RegisterSech");

module.exports = async (req, res) => {
  const inuname = req.body.email;
  const pass = req.body.pass;

  const uname = await RegisterSech.findOne({ email: inuname });

  await console.log("server", uname);
  console.log(pass);

  if (uname != null) {
    if (pass === uname.password) {
      res.status(200).json(uname);
    } else {
      res.send("password miss match");
    }
  } else {
    res.send("login data not available");
  }
};
