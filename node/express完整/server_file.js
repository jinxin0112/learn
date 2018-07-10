const express = require('express');
const expressStatic = require('express-static');
const multer = require('multer');
const fs = require('fs');
const pathLib = require('path');

let server = express();
let multerObj = multer({ dest: __dirname + '/www/upload/' });

server.use(multerObj.any());

server.post('/', (req, res) => {
    let flieName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path, flieName, (err)=>{
        if(err)
            console.log('上传失败');
        else
            console.log('上传成功');
    });
    res.send('ok');
});

server.use(expressStatic(__dirname + '/www'));

server.listen(9000);