const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');
let users = {};

http.createServer((req, res) => {
    let obj = urlLib.parse(req.url, true);
    let url = obj.pathname;
    let GET = obj.query;
    let POST = {};
    let str = '';

    res.on('data', (data) => {
        str += data;
    });
    res.on('end', () => {
        POST = querystring.parse(str);
    });

    if (obj.pathname === '/user') {
        switch (GET.act) {
            case 'reg':
                if (users[GET.user]) {
                    res.write('{ "ok": false, msg: "用户名已存在" }');
                } else {
                    users[GET.user] = GET.pwd;
                    res.write('{ "ok": true, msg: "注册成功" }');
                }
                break;
            case 'login':
                if (!users[GET.user]) {
                    res.write('{ "ok": false, msg: "用户名不存在" }');
                } else if (users[GET.user] !== GET.pwd) {
                    res.write('{ "ok": false, msg: "用户名或密码错误" }');
                }else{
                    res.write('{ "ok": true, msg: "登录成功" }');
                }
                break;
            default:
                res.write('{ "ok": false, msg: "未知act" }'); 
        }
        res.end();
    } else {
        let path = __dirname + '/www' + url;
        fs.readFile(path, (err, data) => {
            if (err) {
                res.write('404');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
}).listen(8999);