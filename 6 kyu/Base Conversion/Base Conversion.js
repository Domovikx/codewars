let Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

let bin = Alphabet.BINARY,
    oct = Alphabet.OCTAL,
    dec = Alphabet.DECIMAL,
    hex = Alphabet.HEXA_DECIMAL,
    allow = Alphabet.ALPHA_LOWER,
    alup = Alphabet.ALPHA_UPPER,
    alpha = Alphabet.ALPHA,
    alnum = Alphabet.ALPHA_NUMERIC;

    
function convert(input, source, target) {
    const decnum = sourceToDec(input, source);
    return decToTarget(decnum, target);
}

function sourceToDec(input, source) {
    input = input.toString();
    let length = input.length,
        factor = source.length,
        sum = 0;
    for (let i = 0, pow = length - 1; i < length; i++ , pow--) {
        sum += source.indexOf(input[i]) * Math.pow(factor, pow);
    }
    return sum;
}

function decToTarget(input, target) {
    let length = target.length,
        str = '';
    do {
        let num = input % length;
        str = target[num] + str;
        input = (input - num) / length;
    } while (input > 0);
    return str;
}


// tests
// console.log(convert("15", dec, bin)); //1111
// console.log(convert("15", dec, oct)); //17
// console.log(convert("1010", bin, dec)); //10 
// console.log(convert("1010", bin, hex)); //a
// console.log(convert('hello', 'abcdefghijklmnopqrstuvwxyz', '0123456789abcdef')); //320048
// console.log(convert('0', '0123456789', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')); //a