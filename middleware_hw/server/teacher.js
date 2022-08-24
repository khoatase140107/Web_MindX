const express = require("express");
const teacherRouter = express.Router();

teacherRouter.get("/", (req, res) => {
    res.status(200).json({
      data: "hihi",
    });
  });
  
  teacherRouter.post("/", (req, res) => {
    res.status(201).json({
      msg: "Add successfull",
    });
  });
  
  teacherRouter.put("/:id", (req, res) => {
    res.status(200).json({
      msg: "Update successfull",
    });
  });
  
  teacherRouter.delete("/:id", (req, res) => {
    res.status(200).json({
      msg: "Delete successfull",
    });
  });

module.exports = teacherRouter;
