const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;
const categoryRouter = require("./categories");

app.use(cors("*"));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.use("/categories", categoryRouter);

app.listen(PORT, () => {
  console.log(PORT + " is running");
});
