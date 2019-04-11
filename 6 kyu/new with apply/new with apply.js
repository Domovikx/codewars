function construct(Class) {
    let object = Object.create(Class.prototype);
    Class.apply(object, Array.from(arguments).slice(1));
    return object;
}


function construct(Class, ...arg) {
    return new Class(...arg);
}


function construct(Greeting, ...arg) {
    return new Greeting(...arg);
}


function construct(Class /*, args */) {
    var obj = Object.create(Class.prototype);
    Class.apply(obj, Array.prototype.slice.call(arguments, 1));
    return obj;
}


const construct = (c, ...args) => new c(...args);