const fs = require('fs');

let readFiles = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                return resolve(data);
            }
        })
    })
}
let result = '';
readFiles('./a.js')
    .then((data) => {
        result += data;
        return readFiles('./b.js');
})
    .then(data => {
        result += data;
        return readFiles('./c.js')
})
    .then(data => {
        result += data;
        console.log(result);
    })



