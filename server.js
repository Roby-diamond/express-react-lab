const express = require("express");
const cors = require("cors");

const projects = require("./projects.json");
const about = require("./about.json");

const app = express();

require("dotenv").config();

const { PORT } = process.env;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.get("/about", (req, res) => {
  res.json(about);
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
