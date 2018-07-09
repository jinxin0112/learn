const jade = require('jade');
const fs = require('fs');


let html = jade.renderFile(__dirname + '/view/1.jade',{pretty:true,a:12,b:5,
    json:{width:'100px',height:'50px',border:'1px solid #ddd'},
    arr:['aaa','left-wrap','active']
});

//console.log(html);

fs.writeFile(__dirname + '/build/1.html',html,(err)=>{
    if(err)
        console.log('写入失败');
    else
        console.log('写入成功');
})