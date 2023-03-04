const fs = require('fs');
const axios = require('axios');

const cat = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) process.kill(1);
        console.log(data);
    })
}

const webCat = (url) => {
    axios.get(url)
    .then(data => console.log(data))
    .catch(err => console.log(`Error fetching ${err.config.url} \n ${err}`));
}

(process.argv[2]==='one.txt')?cat(process.argv[2]):webCat(process.argv[2]);