function digital_root(n) {

    let digits = n.toString().split('').map(Number);
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += digits[i];
    }

    let sumString = sum.toString();
    if (sumString.length > 1) {
        let sumDigits = sumString.split('').map(Number);
        let firstSumDigit = sumDigits.slice(0);
        let lastSumDigit = sumDigits.slice(-1);
        return firstSumDigit[0] + lastSumDigit[0];
    } else {
        return sum;
    }
}


function digital_root(n) {
    return (n - 1) % 9 + 1;
}


function digital_root(n) {
    return --n % 9 + 1;
}


function digital_root(n) {
    if (n < 10) return n;
    return digital_root(
        n.toString().split('').reduce(function (acc, d) { return acc + +d; }, 0));
}


function digital_root(n) {
    if (n < 10)
        return n;
    for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
        sum += Number(n[i]);
    return digital_root(sum);
}


function digital_root(n) {
    n = eval(n.toString().split('').join('+'));
    if (n > 9) {
        return digital_root(n);
    }
    return n;
}