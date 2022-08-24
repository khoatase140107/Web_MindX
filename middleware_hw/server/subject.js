const express = require("express");
const subjectRouter = express.Router();

subjectRouter.get("/", (req, res) => {
  res.status(200).json({
    data: "hihi",
  });
});

subjectRouter.post("/", (req, res) => {
  res.status(201).json({
    msg: "Add successfull",
  });
});

subjectRouter.put("/:id", (req, res) => {
  res.status(200).json({
    msg: "Update successfull",
  });
});

subjectRouter.delete("/:id", (req, res) => {
  res.status(200).json({
    msg: "Delete successfull",
  });
});

module.exports = subjectRouter;
