const multer = require("multer");
const fs = require('fs');
const path = require('path');

const imageFilter = (req, file, cb) => {
  
//     console.log(file.mimetype);
//   if (file.mimetype.startsWith("image")) {
    cb(null, true);
//   } else {
//     cb("Please upload only images.", false);
//   }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,path.join(__dirname, '../assets/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-image-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;