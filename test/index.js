import express from "express";
import multer from "multer";

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "upload");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded successfully");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
