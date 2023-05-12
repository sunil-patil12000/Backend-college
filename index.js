const express = require("express");
const LoginC = require("./controller/LoginC");
const RegisterC = require("./controller/RegisterC");
const app = express();
const cors = require("cors");
const AdmissionC = require("./controller/AdmissionC");

app.use(cors());
app.use(express.json());
require("./conn");

require("dotenv").config();

const multer = require("multer");
const GetData = require("./controller/GetData");
const AllData = require("./controller/AllData");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));
app.get('/alldata',AllData)
app.post("/getdata", GetData);

app.post("/login", LoginC);
app.post("/admission", upload.single("image"), AdmissionC);

app.post("/register", RegisterC);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server stared at ${PORT}`);
});
