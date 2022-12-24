const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
projectData = {};
app.use(express.static("website"));
const getAllData = (req, res) => res.status(200).send(projectData);
app.get("/all", getAllData);
const postData = (req, res) => {
    projectData = req.body;
    console.log(projectData);
    res.status(200).send(projectData);
  }
app.post("/add", postData);
const port = 5000;
const localhost = "127.0.0.1";
const listening = () =>
console.log(`Server running at http://${localhost}:${port}/`);
app.listen(port, listening);
