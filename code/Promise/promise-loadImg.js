function loadImg (src) {
    const promise = new Promise ( (resolve, reject) => {
        let img = document.createElement('img');
        img.onload = function () {
            resolve(img);
        }
        img.onerror = function () {
            reject();
        }
        img.src = src;
    })
    return promise;
}

let src = 'http://www.imooc.com/static/img/index/logo_new.png';

let result = loadImg(src);

result.then(function (img) {
    console.log(img.width);
}, function () {
    console.log('failed')
})