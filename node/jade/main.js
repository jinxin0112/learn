const jade = require('jade');
const fs = require('fs');

let html = jade.renderFile(__dirname + '/view/index.jade', { pretty: true });
fs.writeFile(__dirname + '/build/index.html',html,(err)=>{
    if(err)
        console.log('写入失败'+err);
    else
        console.log('写入成功');
});