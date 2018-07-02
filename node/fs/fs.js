const fs = require('fs');

fs.readFile(__dirname + '/src/1.txt', 'utf8', (err, data) => {
    if (!err) {
        console.log(data);
    }
});
fs.writeFile(__dirname + '/src/2.txt', 'hello gyh', (err) => {
    console.log(err);
});