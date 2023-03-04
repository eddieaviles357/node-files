const fs = require('fs');

function cat(path) {
    fs.readFile(path, (err, data) => {
        console.log(data)
    })
}