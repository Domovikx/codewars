function expression(number, operation) {
    if (!operation)
        return number;
    return operation(number);
}

function zero(operation) { return expression(0, operation); }
function one(operation) { return expression(1, operation); }
function two(operation) { return expression(2, operation); }
function three(operation) { return expression(3, operation); }
function four(operation) { return expression(4, operation); }
function five(operation) { return expression(5, operation); }
function six(operation) { return expression(6, operation); }
function seven(operation) { return expression(7, operation); }
function eight(operation) { return expression(8, operation); }
function nine(operation) { return expression(9, operation); }

function plus(x) {
    return function (y) {
        return y + x;
    }
}
function minus(x) {
    return function (y) {
        return y - x;
    }
}
function times(x) {
    return function (y) {
        return y * x;
    }
}
function dividedBy(x) {
    return function (y) {
        return Math.floor(y / x);
    }
}


// *******************************

var n = function (digit) {
    return function (op) {
        return op ? op(digit) : digit;
    }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function (l) { return l + r; }; }
function minus(r) { return function (l) { return l - r; }; }
function times(r) { return function (l) { return l * r; }; }
function dividedBy(r) { return function (l) { return l / r; }; }


// ************************************

function zero(func) { return func ? func(0) : 0; };
function one(func) { return func ? func(1) : 1; };
function two(func) { return func ? func(2) : 2; };
function three(func) { return func ? func(3) : 3; };
function four(func) { return func ? func(4) : 4; };
function five(func) { return func ? func(5) : 5; };
function six(func) { return func ? func(6) : 6; };
function seven(func) { return func ? func(7) : 7; };
function eight(func) { return func ? func(8) : 8; };
function nine(func) { return func ? func(9) : 9; };

function plus(b) { return function (a) { return a + b; }; };
function minus(b) { return function (a) { return a - b; }; };
function times(b) { return function (a) { return a * b; }; };
function dividedBy(b) { return function (a) { return a / b; }; };


// **************************

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    .forEach(function (name, n) {
        this[name] = function (f) { return f ? f(n) : n }
    });
function plus(n) { return function (a) { return a + n } }
function minus(n) { return function (a) { return a - n } }
function times(n) { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }


// ******************************

'zero one two three four five six seven eight nine'.split(' ').forEach(
    (mth, num) => this[mth] = (f = val => val) => f(num)
)
let plus = (r) => (l) => l + r
let minus = (r) => (l) => l - r
let times = (r) => (l) => l * r
let dividedBy = (r) => (l) => l / r


// ******************************

function template(n) {
    return function () {
        if (arguments.length > 0) {
            var operation = arguments[0];
            return operation(n);
        }
        return n;
    }
}
var zero = template(0);
var one = template(1);
var two = template(2);
var three = template(3);
var four = template(4);
var five = template(5);
var six = template(6);
var seven = template(7);
var eight = template(8);
var nine = template(9);

function plus(operand) {
    return function (n) { return n + operand; }
}
function minus(operand) {
    return function (n) { return n - operand; }
}
function times(operand) {
    return function (n) { return n * operand; }
}
function dividedBy(operand) {
    return function (n) { return n / operand; }
}