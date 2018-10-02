class MathHandle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }
}

let m = new MathHandle(1, 2);