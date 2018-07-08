const express = require('express');
const cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser('wjdoqjdoqwdj'));

app.use('/', (req, res) => {
    req.secret = 'wjdoqjdoqwdj';
    //res.cookie('user','king',{signed:true});  //向前台发送 签字cookie
    //res.cookie('age','24'); //发送普通cookie
    res.clearCookie('user'); //擅长cookie
    console.log('签名cookie',req.signedCookies);
    console.log('未签名cookie',req.cookies);
    res.send('hello cookie');
});

app.listen(9000);