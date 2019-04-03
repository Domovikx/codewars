function crossProduct(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length != 3 || b.length != 3) throw "Arguments are not 3D vectors!";
    return [
        (a[1] * b[2]) - (a[2] * b[1]),
        (a[2] * b[0]) - (a[0] * b[2]),
        (a[0] * b[1]) - (a[1] * b[0]),
    ];
}

function crossProduct(vector1, vector2) {
    if (!(vector1 instanceof Array) || !(vector2 instanceof Array) || vector1.length !== 3 || vector2.length !== 3) {
        throw "Arguments are not 3D vectors!"
    }
    return [(vector1[1] * vector2[2] - vector2[1] * vector1[2]), (vector1[2] * vector2[0] - vector2[2] * vector1[0]), (vector1[0] * vector2[1] - vector2[0] * vector1[1])]
}

function crossProduct(v1, v2) {
    if (!v1 && !v2 || v1.length !== 3 || v2.length !== 3 || ![...v1, ...v2].every(v => typeof v === 'number')) throw 'Arguments are not 3D vectors!';
    const [a1, a2, a3] = v1;
    const [b1, b2, b3] = v2;
    return [
        a2 * b3 - a3 * b2,
        a3 * b1 - a1 * b3,
        a1 * b2 - a2 * b1
    ];
}

const crossProduct = (x, y) => {
    if (!x || !y || !x.pop || !y.pop || x.length !== 3 || y.length !== 3) throw 'Arguments are not 3D vectors!';
    return [
        x[1] * y[2] - x[2] * y[1],
        x[2] * y[0] - x[0] * y[2],
        x[0] * y[1] - x[1] * y[0]
    ];
}

