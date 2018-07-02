const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
    let str = '';

    //data 有一段数据到达就触发，有多次
    let i = 0;
    req.on('data', (data) => {
        console.log(`第${i++}次传输`);
        str += data;
    });
    //end 数据全部到达，仅一次
    req.on('end', () => {
        console.log(querystring.parse(str));
    });
}).listen(8090);