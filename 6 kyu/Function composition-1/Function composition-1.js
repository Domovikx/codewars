function compose(...arr) {
    return function (n) {
        let result = n;
        while (arr.length !== 0) {
            result = arr.pop()(result);
        }
        return result;
    }
}


const compose = (...fns) => arg => fns.reduceRight((res, fn) => fn(res), arg);


const compose = (...fns) => (x) => fns.reduceRight((x, fn) => fn(x), x);


function compose() {
    var funcs = arguments;
    return function (input) {
        var num = input;
        for (var fid in funcs)
            num = funcs[funcs.length - fid - 1](num);
        return num;
    }
}