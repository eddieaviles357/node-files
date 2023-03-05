const fs = require('fs');
const axios = require('axios');


const writeOutput = (data, out) => {
    const cb = (err) => {
        if (err) { 
            console.log('Failed to write')
            process.kill(1); 
        }
    }
    (out) ? fs.writeFile(out, data, 'utf-8', cb) : console.log(data);
}

const cat = (path, output) => {
    const cb = (err, data) => (err) ? process.kill(2) : writeOutput(data, output);
    fs.readFile(path, 'utf-8', cb)
}

const webCat = async (url, out) => {
    try {
        let {data} = await axios.get(url);
        writeOutput(data, out)
    } catch (err) {
        console.log(`Error fetching ${err.config.url} \n ${err}`);
        process.kill(3);
    }
}

(function() {
    let output;
    let path;
    if (process.argv[2]==='--out') {
        output = process.argv[3];
        path = process.argv[4];
    } else {
        path = process.argv[2];
    }
    (path==='one.txt') ? cat(path, output) : webCat(path, output);
})()