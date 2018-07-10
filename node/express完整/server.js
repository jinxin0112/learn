const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
//const jade = require('jade');
//const ejs = require('ejs');
const consolidate = require('consolidate');


let server = express();
let keys = [];
for (let i = 0; i < 100000; i++) {
    keys.push('key_' + Math.random());
}

// 解析cookie
server.use(cookieParser('djwoiqdjwwcnxusyguo'));

// 解析session
server.use(cookieSession({
    name: 'sess',
    keys,
    maxAge: 20 * 3600 * 1000
}));

// post数据
server.use(bodyParser.urlencoded({ extended: false }));
server.use(multer({ dest: __dirname + '/www/upload/' }).any());

//配置模板引擎
//1.输出什么东西
server.set('view engine', 'html');
//2.模板文件在哪
server.set('views', __dirname + '/view/');
//3.哪种模板引擎
server.engine('html', consolidate.ejs);

// 用户请求
server.get('/index', (req, res) => {
    res.render('1.ejs', { name: 'king' }); //注意与send 的区别
});
/*
server.use('/', (req, res, next) => {
    console.log(req.query, req.body, req.files, req.cookies, req.session);
    res.send('ok')
});
*/
// static数据
server.use(expressStatic(__dirname + './www'));

server.listen(9000);