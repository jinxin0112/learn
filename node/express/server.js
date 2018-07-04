const express = require('express');
const expressStatic = require('express-static');
let users = {
    'king': 'jinxin2828'
};
let server = express();

server.get('/login', (req, res) => {
    let user = req.query.user;
    let pwd = req.query.pwd;

    if (!users[user]) {
        res.send({ ok: false, msg: '该用户不存在!' });
    } else {
        if (users[user] != pwd) {
            res.send({ ok: false, msg: '账号或密码错误' });
        } else {
            res.send({ ok: true, msg: '登录成功' });
        }
    }
    res.end();
});
server.use(expressStatic(__dirname + '/www'));

server.listen(9000);