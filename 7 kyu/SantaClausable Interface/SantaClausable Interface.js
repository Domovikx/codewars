function isSantaClausable(obj) {
    if (typeof obj.sayHoHoHo !== 'function') return false;
    if (typeof obj.distributeGifts !== 'function') return false;
    if (typeof obj.goDownTheChimney !== 'function') return false;
    else return true;
}

function isSantaClausable(obj) {
    return 'function' == typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney);
}

function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function (methodName) {
        return typeof obj[methodName] == 'function';
    });
}

function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(meth => typeof obj[meth] === 'function');
}

