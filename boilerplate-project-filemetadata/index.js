var express = require('express');
const multer = require("multer");
var cors = require('cors');
require('dotenv').config()
// from model file
const File = require("./model/fileSchema");
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


//Configuration for Multer

const upload = multer({ dest: "public/files" });

app.post('/api/fileanalyse', upload.single("myFile"), function (req, res) {
  res.json(req.body); // get the file infos
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
