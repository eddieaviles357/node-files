const fs = require('fs');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) process.kill(1);
        console.log(data);
    })
}

cat('./one.txt')