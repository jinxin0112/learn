const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');
const fs = require('fs');

http.createServer((req,res)=>{
    let obj = urlLib.parse(req.url,true);
    let url = obj.pathname;
    let GET = obj.query;
    let str = '';
    let POST;

    req.on('data',(data)=>{
        str += data
    });
    req.on('end',()=>{
        POST = querystring.parse(str); 
        console.log(url, GET, POST);
    });

    let file_name = __dirname + '/www' + url;
    fs.readFile(file_name,(err,data)=>{
        if(!err){
            res.write(data);
        }else{
            console.log(err);
        }
        res.end();
    });
}).listen(8090);