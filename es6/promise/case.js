const fs = require('fs');
const path = require('path');
const Promise = require('./promise');

let readFile = function(src){
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname, src),'utf8',(err,data)=>{
            !!err?reject(err):resolve(data);
        }); 
        resolve(123)
    });
}

readFile("../callback/file/1.txt").then((data)=>{
    console.log('1.txt:'+data);
},(err)=>{
    console.log(err);
})
readFile("../callback/file/2.txt").then((data)=>{
    console.log('2.txt:'+data);
},(err)=>{
    console.log(err);
})