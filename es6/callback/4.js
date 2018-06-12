//promise 
const fs = require('fs');
const path = require('path');

let readFile = (src) => {
    return new Promise((resolved,rejected)=>{
        fs.readFile(path.join(__dirname, src),'utf8',(err,data)=>{
            if(!!err){
                rejected(err);
            }else{
                resolved(data);
            }
        });       
    });
}
readFile('./file/1.txt').then((value)=>{
    console.log('1.txt:'+value);
}).then(()=>{
    return readFile('./file/2.txt')
}).then((value)=>{
    console.log('2.txt:'+value);
}).catch((err)=>{
    console.log(err);
});

/*
Promise.all([readFile('./file/1.txt'),readFile('./file/2.txt')]).then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
});*/


