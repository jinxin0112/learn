const mysql = require('mysql');

//1.连接
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jinxin2828',
    database: '20180710'
});
//2.查询
let sql = 'SELECT * FROM `user_table`';
db.query(sql, (err, data) => {
    if (err) {
        console.log('查询失败' + err);
    } else {
        console.log('查询成功', data);
    }
});