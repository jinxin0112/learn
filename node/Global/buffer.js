let buf1 = new Buffer(8);
buf1.fill(1);
console.log(buf1);

let buf2 = new Buffer([1,2,3]);
console.log(buf2);

let buf3 = new Buffer([65,66,67]);
console.log(buf3); // 16进制显示

let buf4 = new Buffer('ABC');
console.log(buf4);

let name = '金鑫';
let buf5 = new Buffer(name,'utf8');
console.log(buf5.toString());

//Buffer 常用方法
Buffer.isBuffer(buf5); //true
Buffer.isBuffer(name); //false
Buffer.byteLength('金鑫'); //6

let buff1 = new Buffer('a');
let buff2 = new Buffer('b');
let buff3 = new Buffer('c');
let res = Buffer.concat([buff1,buff2,buff3]);
console.log(res.toString());