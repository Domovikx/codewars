function spyOn(func) {
    const called = new Set(),
        returned = new Set();
    let counter = 0;
    const spy = (...args) => {
        counter++;
        args.forEach((item) => { called.add(item) });
        let value = func.apply(this, args);
        returned.add(value);
        return value;
    };
    spy.callCount = () => counter;
    spy.wasCalledWith = value => called.has(value);
    spy.returned = value => returned.has(value);
    return spy;
}


// **************************************

function spyOn(func) {
    let calls = 0, all = [], val;

    const spy = function (...args) {
        calls++;
        all.push(...args);
        val = func.apply(this, args);
        return val;
    }

    spy.callCount = () => calls;
    spy.wasCalledWith = (x) => all.some((a) => x === a);
    spy.returned = (x) => x === val;

    return spy;
}


// ****************************************

function spyOn(func) {
    let counter = 0,
        params = [],
        storage = [];
    function spy(...rest) {
        counter++;
        storage.push(func(...rest));
        params.push(...rest);
        return storage[storage.length - 1];
    }
    spy.callCount = () => counter;
    spy.wasCalledWith = (val) => params.indexOf(val) >= 0;
    spy.returned = (val) => storage.indexOf(val) >= 0;
    return spy;
}


// ****************************************

const spyOn = func => {
    let calls = [];

    function spy(...args) {
        let result = func.apply(null, args);
        calls.push({ args, result });
        return result;
    }

    spy.callCount = () => calls.length;
    spy.wasCalledWith = val => calls.some(call => call.args.some(arg => arg === val));
    spy.returned = val => calls.some(call => call.result === val);

    return spy;
};