const ejs = require('ejs');

ejs.renderFile(__dirname + '/view/1.ejs', {
    json: {
        arr: [
            { user: 'king' },
            { user: 'gyh' }
        ]
    }
}, function (err, data) {
    if (err)
        console.log('失败' + err);
    else
        console.log('成功' + data);
});