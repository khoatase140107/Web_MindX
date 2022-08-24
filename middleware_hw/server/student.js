const express = require("express");
const studentRouter = express.Router();
let count = 0;
studentRouter.get("/", (req, res) => {
  res.status(200).json({
    data: "hihi",
  });
});

studentRouter.post("/", (req, res) => {
  res.status(201).json({
    msg: "Add successfull",
  });
});

studentRouter.put("/:id", (req, res) => {
  res.status(200).json({
    msg: "Update successfull",
  });
});

studentRouter.delete("/:id", (req, res) => {
  res.status(200).json({
    msg: "Delete successfull",
  });
});

module.exports = count;
module.exports = studentRouter;
