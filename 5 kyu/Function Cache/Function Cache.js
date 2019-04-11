function cache(func) {
    var m = {};
    return function () {
        var key = JSON.stringify(arguments);
        if (key in m) return m[key];
        return m[key] = func.apply(null, arguments);
    };
}


function cache(func) {
    var calls = {};
    return function () {
        var key = JSON.stringify(arguments);
        if (!(key in calls)) {
            calls[key] = func.apply(null, arguments);
        }
        return calls[key];
    };
}


function cache(func) {
    var result = {};
    return function () {
        var args = JSON.stringify(arguments);
        if (!result.hasOwnProperty(args)) result[args] = func.apply(null, arguments);
        return result[args];
    };
}


function cache(func) {
    var cache = {};
    return function () {
        var args = JSON.stringify(arguments);
        if (cache.hasOwnProperty(args)) return cache[args];
        else return (cache[args] = func(...arguments));
    }
}


function cache(func) {
    const cachedResults = {};
    return (...args) => {
        const key = JSON.stringify(args);

        if (!(key in cachedResults)) {
            const result = func.apply(null, args);
            cachedResults[key] = result;
        }

        return cachedResults[key];
    };
}