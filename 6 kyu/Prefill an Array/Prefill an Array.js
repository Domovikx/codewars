function prefill(n, v) {
    console.log('typeof(n)', typeof (n) + ' ' + n);
    if (n == 0) return [];
    if (n == 1) return [v];
    return [...[v], ...prefill(n - 1, v)];
}

function prefill(num, value) {
    if (typeof num === 'boolean' || ~~num != num || +num < 0) throw new TypeError(num + ' is invalid')
    return Array.apply(null, Array(+num)).map(function (d, i) { return value })
}

function prefill(n, v) {
    if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
    return +n ? Array(n).fill(v) : [];
}

function prefill(n, v) {
    if (/\D/g.test(n) || n < 0) { throw new TypeError(n + ' is invalid') }
    return Array.apply(null, new Array(parseInt(n, 10))).map(function () { return v; });
}

function prefill(n, v) {
    if (!Number.isInteger(+n) || +n < 0 || typeof n === 'boolean') throw new TypeError(`${n} is invalid`);
    return Array.from(Array(+n), x => v);

}

function prefill(n, v) {
    if (typeof (n) == 'boolean' || isNaN(Number(n)) || (n % 1) != 0 || Number(n) < 0) throw new TypeError(`${n} is invalid`)
    let array = new Array(Number(n));
    return array.fill(v);
}
