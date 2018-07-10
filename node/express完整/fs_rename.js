const fs = require('fs');

fs.rename('a.txt','b.txt',(err)=>{
    console.log(err);
});