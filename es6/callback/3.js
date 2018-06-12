//哨兵变量
const fs = require('fs');
const path = require('path');

let load = (len,func) => {
    let txt = {};
    return function (key ,value){
        txt[key] = value;
        if(Object.keys(txt).length === len){
            func(txt);
        }
    }
}

let done = load(2,(txt)=>{
    console.log('完成:'+txt);
});
fs.readFile(path.join(__dirname, "./file/1.txt"),'utf8',(err,data)=>{
    done('1.txt',data);
});
fs.readFile(path.join(__dirname, "./file/2.txt"),'utf8',(err,data)=>{
    done('2.txt',data);
});