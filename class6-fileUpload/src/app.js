import express from "express";
import multer from "multer";
import ejs from "ejs";
import path from "path";

//init app
const app = express();
//set Storage Engine
const storage = multer.diskStorage({
  destination: "../public/uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//Init Upload
const upload = multer({
  storage,
}).single("myImage");

app.post("/public/uploads", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.render('index', {
        msg: err,
        })}
    return res.end("File is uploaded");
  });
});

const port = 3000;

//EJS
app.set("view engine", "ejs");

//Public Folder
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("../view/index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
