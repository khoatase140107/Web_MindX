const express = require("express");

const app = express();
const PORT = 8080;
const students = [
  { name: "Alice", age: 10 },
  { name: "Bob", age: 11 },
  { name: "Charlie", age: 11 },
];
app.get("/", (req, res) => {
    //res.json(students)
    res.status(200).json({
        data:students
    })
  //console.log("Khoa hi hello")
});

app.get("/students/add", (req,res) => {
	students.push({name: "Daniel", age: 12})
	res.json(students)
})

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
