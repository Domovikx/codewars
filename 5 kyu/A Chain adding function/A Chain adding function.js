function add(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () { return currentSum; }

    return f;
}


function add(n) {
    var fn = function (x) {
        return add(n + x);
    };

    fn.valueOf = function () {
        return n;
    };

    return fn;
}


var add = function (n) {
    const f = x => add(n + x)
    f.valueOf = () => n
    return f;
}


function add(n) {
    // Let the currying begin!
    var sum = n;
    function f(k) {
        sum += k;
        return f;
    }
    f.valueOf = function () { return sum }
    return f
}

