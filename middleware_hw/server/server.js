const express = require("express");
const cors = require("cors");
const studentRouter = require("./student");
const teacherRouter = require("./teacher");
const subjectRouter = require("./subject");
const readWriteJson = require("./ReadWriteJson");
const app = express();
const PORT = 8080;

const dataUser = [
  { username: "alice", apiKey: "alice@123" },
  { username: "bob", apiKey: "bob@123" },
  { username: "charlie", apiKey: "charlie@123" },
];

const logMdw = (req, res, next) => {
  console.log("New Request: " + new Date());
  next();
};

const countRequest = (req, res, next) => {
  const url = req.originalUrl;
  const { username, api_key } = req.query;
  const oldDataJson = readWriteJson.readStats();
  if (typeof oldDataJson !== "boolean") {
    const findIndex = oldDataJson.findIndex(
      (item) => item.username === username
    );
    console.log(findIndex);
    if (findIndex !== -1) {
      url.includes("students")
        ? (oldDataJson[findIndex].student =
            +oldDataJson[findIndex].student + 1 + "")
        : url.includes("teachers")
        ? (oldDataJson[findIndex].teacher =
            +oldDataJson[findIndex].teacher + 1 + "")
        : (oldDataJson[findIndex].subject =
            +oldDataJson[findIndex].subject + 1 + "");
    } else {
      oldDataJson.push({
        username,
        student: url.includes("student") ? "1" : "0",
        teacher: url.includes("teacher") ? "1" : "0",
        subject: url.includes("subject") ? "1" : "0",
      });
    }
    readWriteJson.dumpStats(oldDataJson);
  } else {
    const newData = [
      {
        username,
        student: url.includes("student") ? "1" : "0",
        teacher: url.includes("teacher") ? "1" : "0",
        subject: url.includes("subject") ? "1" : "0",
      },
    ];
    readWriteJson.dumpStats(newData);
  }

  next();
};

const checkApiKeyMdw = (req, res, next) => {
  console.log(req.query);
  if (req.query.api_key !== undefined) {
    const findIndexUser = dataUser.findIndex(
      (user) => req.query.api_key === user.apiKey
    );
    if (findIndexUser === -1) return;
    else {
      next();
    }
  } else {
    res.send("API key is missing");
    return;
  }
};

//app.use(requireApiKey);
app.use(express.json());
app.use("/students", logMdw, checkApiKeyMdw, countRequest, studentRouter);
app.use("/teachers", logMdw, checkApiKeyMdw, countRequest, teacherRouter);
app.use("/subjects", logMdw, checkApiKeyMdw, countRequest, subjectRouter);

app.get("/system/statistic", (req, res) => {
  const data = readWriteJson.readStats();
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(PORT + " is running...");
});
