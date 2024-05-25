import express from "express";
import multer from "multer";
import ejs from "ejs";
import path from "path";

//init app
const app = express();

//Set Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//init Upload
const upload = multer({
  storage,
}).single("image-file");

//EJS
app.set("view engine", "ejs");

app.post("/upload", upload, (req, res) => {
  res.render("index");
});

const port = 2000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
