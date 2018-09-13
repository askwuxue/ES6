const fs = require('fs');

const readFile = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

// readFile('./data/a.txt').then(res => {
//     console.log(res.toString());
//     return readFile('./data/b.txt');
// }).then(res => {
//     console.log(res.toString());
//     return readFile('./data/c.txt');
// }).then(res => {
//     console.log(res.toString());
// })

// function * gen () {
//     yield readFile('./data/a.txt');
//     yield readFile('./data/b.txt');
//     yield readFile('./data/c.txt');
// }

// let g1 = gen();
// g1.next().value.then(res => {
//     console.log(res.toString());
//     return g1.next().value;
// });

// g1.next().value.then(res => {
//     console.log(res.toString());
//     return g1.next().value;
// })

// g1.next().value.then(res => {
//     console.log(res.toString());
//     return g1.next().value;
// });

async function fn () {
    let f1 = await readFile('./data/a.txt');
    console.log(f1.toString());
    let f2 = await readFile('./data/b.txt');
    console.log(f2.toString());
    let f3 = await readFile('./data/c.txt');
    console.log(f3.toString());
}

fn();