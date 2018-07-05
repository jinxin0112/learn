const queryString = require('querystring');

let bodyParser = {
    urlencoded(obj){
        let str = '';
        return function(req,res,next){
            req.on('data',(data)=>{
                str += data;
            });
            req.on('end',()=>{
                req.body = queryString.parse(str);
                next();
            });
        }
    }
}
module.exports = bodyParser