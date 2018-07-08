const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

let app = express();
let keys = [];
for (let i = 0; i < 100000; i++) {
    keys.push('sign_' + Math.random());
}
app.use(cookieParser());
app.use(cookieSession({
    name: 'sess',
    keys,
    maxAge: 2 * 3600 * 1000
}));

app.use('/', (req, res) => {
    if (req.path !== '/favicon.ico') {
        if (req.session['count'] == null) {
            req.session['count'] = 1;
        } else {
            req.session['count']++;
        }

        console.log(req.session['count']);

        //删除session 用delete
        res.send('ok');
    }
});

app.listen(9000);