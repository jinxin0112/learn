const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    let file_name = __dirname + '/www' + request.url;
    fs.readFile(file_name,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            response.write(data);
        }
        response.end();
    });
}).listen(8090);
