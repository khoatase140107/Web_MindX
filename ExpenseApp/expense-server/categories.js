const express = require("express");
const categoryRouter = express.Router();

const data = [
  "Business",
  "Investments",
  "Extra income",
  "Deposits",
  "Lottery",
  "Gifts",
  "Salary",
  "Savings",
  "Rental income",
];

categoryRouter.get("/", (req, res) => {
  res.status(200).json(data);
});

categoryRouter.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    msg: "Add successfully",
  });
});

categoryRouter.delete("/:id", (req, res) => {
  res.status(200).json({
    msg: "Delete successfully",
  });
});

module.exports = categoryRouter;
