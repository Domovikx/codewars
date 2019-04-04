function sequence(n, p) {
    let arr = Array.from({ length: n });
    if (typeof (p) == "function") return arr.map(p);
    return arr.fill(p);
}

function sequence(n, pattern) {
    return Array.from({ length: n }, typeof pattern === "function" ? pattern : () => pattern)
}

function sequence(n, pattern) {
    return [...Array(n)].map(typeof pattern == 'function' ? pattern : () => pattern);
}

function sequence(n, pattern) {
    return typeof pattern === "function" ? Array.from(Array(n), pattern) : Array.from(Array(n), x => x = pattern);
}

function sequence(n, p) {
    return [...Array(n)].map(typeof p == "function" ? p : x => p);
}