function partitionOn(isEven, items) {
    let arr = [], arrF = [], arrT = [];

    for (const i of items) isEven(i) ? arrT.push(i) : arrF.push(i);
    arr = [...arrF, ...arrT];

    for (const i in items) items[i] = arr[i];
    return arrF.length;
}