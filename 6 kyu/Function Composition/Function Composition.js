function compose(f, g) {
    return function (...args) {
        return f(g(...args));
    }
}


function compose(f, g) {
    return function (...a) {
        return f(g(...a));
    }
}


function compose(f, g) {
    return function () {
        return f(g.apply(this, arguments));
    };
}


var compose = (f, g) => (...args) => f(g(...args));


function compose(f, g) {
    return (...args) => f(g(...args));
}


function compose(f, g) {
    return function () {
        return f(g(...arguments)) //arguments is bad
    }
}