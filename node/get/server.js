const http = require('http');
const urlLib = require('url');

http.createServer((req, res) => {
    let obj = urlLib.parse(req.url,true);
    let GET = obj.query;
    let url = obj.pathname;
    /*
    if(req.url.indexOf('?')>-1){
        arr = req.url.split('?')[1].split('&');
    }
    for(let i=0;i<arr.length;i++){
        let arr1 = arr[i].split('=');
        GET[arr1[0]] = arr1[1];
    }*/
    res.write(JSON.stringify(GET));
    res.end();
}).listen(8090);