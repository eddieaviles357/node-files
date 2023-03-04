const fs = require('fs');

function cat(path) {
    fs.readFile(path, 'utf-8', (err, data) => {
        console.log(data)
    })
}

cat('./one.txt')