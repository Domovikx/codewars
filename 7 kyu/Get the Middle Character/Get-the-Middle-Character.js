function getMiddle(str) {
    const length = str.length;
    const i = length / 2;
    if (length % 2 == 0) return str.slice(i - 1, i + 1);
    if (length % 2 == 1) return str.slice(i, i + 1);
}

function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2)
        ? s.charAt(Math.floor(middle))
        : s.slice(middle - 1, middle + 1);
}

function getMiddle(s) {
    let middle = Math.floor(s.length / 2);

    return s.length % 2 === 0
        ? s.slice(middle - 1, middle + 1)
        : s.slice(middle, middle + 1);

}

function getMiddle(s) {
    return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}