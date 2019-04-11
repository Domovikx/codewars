function createMessage(str) {
    return function (next) {
        if (!next) return str;
        return createMessage(str + " " + next);
    }
}


function createMessage(str) {
    return function (next) {
        if (next === undefined) { return str; }
        return createMessage(str + " " + next);
    }
}


let createMessage = (msg) => m => m ? createMessage(msg + ' ' + m) : msg;


function createMessage(s) {
    var parts = []
    var f = (s) => s ? (parts.push(s), f) : parts.join(" ")
    return f(s)
}


const createMessage = str => n => {
    if (n == undefined) { return str; }
    return createMessage(str + " " + n);
}


function createMessage(a) {
    return (n) => (n == undefined) ? a : createMessage(a + " " + n);
}