class MathHandle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

let m = new MathHandle(1, 2);




// typeof MathHandle   // function
// MathHandle.prototype.constructor === MathHandle
// m.__proto__ === MathHandle.prototype;