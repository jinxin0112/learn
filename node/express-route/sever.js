const express = require('express');

let server = express();

//userRouter
let userRouter = express.Router();
userRouter.get('/1.html', (req, res) => {
    res.send('111111');
});
userRouter.get('/2.html', (req, res) => {
    res.send('22222');
});

//article
let articleRouter = express.Router();
articleRouter.get('/1.html', (req, res) => {
    res.send('111111');
});
articleRouter.get('/2.html', (req, res) => {
    res.send('22222');
});

//注入
server.use('/user', userRouter);
server.use('/article', articleRouter);

server.listen(9000);