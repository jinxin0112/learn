const http = require('http');

var server = http.createServer((request, response) => {
    switch(request.url){
        case '/1.png':
            response.write('abc');
            break;
        case '/1.html':
            response.write('abc');
            break; 
        default:
            response.write('404');
            break;              
    }
    response.end();
});

//监听
server.listen(8090);