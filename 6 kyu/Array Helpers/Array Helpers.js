function checkArr(arr) {
    return Array.isArray(arr) || Object.prototype.toString.call(arr) === '[object Array]';
}

let arrProto = Array.prototype;

arrProto.square = function () {
    if (checkArr(this)) {
        return this.map((item) => {
            return Math.pow(item, 2);
        });
    } else {
        throw 'params must be a array';
    }
};

arrProto.cube = function () {
    if (checkArr(this)) {
        return this.map((item) => {
            return Math.pow(item, 3);
        });
    } else {
        throw 'params must be a array';
    }
};

arrProto.sum = function () {
    if (checkArr(this)) {
        return this.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        }, 0);
    } else {
        throw 'params must be a array';
    }
};

arrProto.average = function () {
    if (checkArr(this)) {
        return this.sum() / this.length;
    } else {
        throw 'params must be a array';
    }
};

arrProto.even = function () {
    if (checkArr(this)) {
        return this.filter((item) => {
            return item % 2 === 0;
        });
    } else {
        throw 'params must be a array';
    }
};

arrProto.odd = function () {
    if (checkArr(this)) {
        return this.filter((item) => {
            return item % 2 !== 0;
        });
    } else {
        throw 'params must be a array';
    }
};


// **************************************

Array.prototype.square = function () { return this.map(function (n) { return n * n; }); }
Array.prototype.cube = function () { return this.map(function (n) { return n * n * n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum = function () { return this.reduce(function (a, b) { return a + b; }, 0); }
Array.prototype.even = function () { return this.filter(function (item) { return 0 == item % 2; }); }
Array.prototype.odd = function () { return this.filter(function (item) { return 0 != item % 2; }); }


// **************************************

Object.assign(Array.prototype, {
    square() { return this.map(n => n * n); },
    cube() { return this.map(n => Math.pow(n, 3)); },
    sum() { return this.reduce((p, n) => p + n, 0); },
    average() { return this.reduce((p, n) => p + n, 0) / this.length; },
    even() { return this.filter(n => !(n % 2)); },
    odd() { return this.filter(n => n % 2); }
});


// **************************************

Array.prototype.square = Square;
Array.prototype.cube = Cube;
Array.prototype.average = Average;
Array.prototype.sum = Sum;
Array.prototype.even = Even;
Array.prototype.odd = Odd;

function Square() { return this.map(function (e) { return e * e; }); }
function Cube() { return this.map(function (e) { return e * e * e; }); }
function Average() { return this.sum() / this.length; }
function Sum() { return (this == '') ? 0 : this.reduce(function (a, b) { return a + b; }); }
function Even() { return this.filter(function (e) { return e % 2 == 0; }); }
function Odd() { return this.filter(function (e) { return e % 2 != 0; }); }


// **************************************

Array.prototype.square = function () {
    return this.map(a => Math.pow(a, 2));
}

Array.prototype.cube = function () {
    return this.map(a => Math.pow(a, 3));
}

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
}

Array.prototype.average = function () {
    return this.sum() / this.length;
}

Array.prototype.even = function () {
    return this.filter(a => !(a % 2));
}

Array.prototype.odd = function () {
    return this.filter(a => !!(a % 2));
}


// *******************************

Object.assign(Array.prototype, {
    square() { return this.map(x => x * x) },
    cube() { return this.map(x => x * x * x) },
    sum() { return this.reduce((a, b) => a + b, 0) },
    average() { return this.sum() / this.length },
    even() { return this.filter(x => !(x % 2)) },
    odd() { return this.filter(x => (x % 2)) }
})


// **********************************

Array.prototype.square = function () { return this.map(n => n * n) }
Array.prototype.cube = function () { return this.map(n => n * n * n) }
Array.prototype.sum = function () { return this.reduce((n, s) => s + n, 0) }
Array.prototype.average = function () { return this.sum() / this.length }
Array.prototype.even = function () { return this.filter(n => !(n % 2)) }
Array.prototype.odd = function () { return this.filter(n => n % 2) }