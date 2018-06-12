const fs = require('fs');
const path = require('path');


//回调地狱
fs.readFile(path.join(__dirname, "./file/1.txt"),'utf8',(err,data)=>{
    console.log(data);
    fs.readFile(path.join(__dirname, "./file/2.txt"),'utf8',(err,data)=>{
        console.log(data);
    });
});



