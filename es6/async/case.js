let fs = require('fs');
let path = require('path');

let readFile = function (src){
    return new Promise((resolve, reject)=>{
        fs.readFile(__dirname + '/../callback/file/' + src,'utf8',(err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

let asyncReadFile = async function (){
   let f1 = await readFile('1.txt');
   let f2 = await readFile('2.txt');
   console.log(f1);
   console.log(f2);
} 

asyncReadFile();