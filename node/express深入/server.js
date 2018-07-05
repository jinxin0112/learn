const express = require('express');
const expressStatic = require('express-static');
//const bodyParser = require('body-parser');
const bodyParser = require('./lib/my-body-parser');

let server = express();

server.use('/login',bodyParser.urlencoded({}));
server.use('/login', (req,res,next) => {
    console.log(req.body);
});
server.use(expressStatic(__dirname+'/www'));
server.listen(9000);
