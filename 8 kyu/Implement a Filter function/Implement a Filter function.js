Array.prototype.filter = function (fn) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) arr.push(this[i]);
    }
    return arr;
}