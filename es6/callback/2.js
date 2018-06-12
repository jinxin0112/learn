// 事件发布订阅 

const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

let eve = new EventEmitter();
let txt = {};
eve.on('ready',(key, value)=>{
    txt[key] = value;
    if(Object.keys(txt).length === 2){
        console.log('cpt:'+txt);
    }
});

fs.readFile(path.join(__dirname, "./file/1.txt"),'utf8',(err,data)=>{
    eve.emit('ready','1.txt',data);
});
fs.readFile(path.join(__dirname, "./file/2.txt"),'utf8',(err,data)=>{
    eve.emit('ready','2.txt',data);
});