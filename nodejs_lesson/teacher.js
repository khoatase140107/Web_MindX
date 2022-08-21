const express = require("express");
const teacherRouter = express.Router();

const data = [
    {id:1,name:"Khoa",value:10},
    {id:2,name:"Thanh",value:9}
]

teacherRouter.get("/",(req,res) => {
    
})