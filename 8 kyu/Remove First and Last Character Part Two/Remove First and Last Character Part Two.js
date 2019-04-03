function array(str) {
    let arr = str.split(',');
    const last = arr.splice(1, arr.length - 2).join(' ');
    if (last == '') return null;
    return last;
}

function array(arr) {
    return arr.split(",").slice(1, -1).join(" ") || null;
}

const array = str => {
    var arr = str.split(",");
    return arr.length > 2 ? arr.slice(1, -1).join(" ") : null;
}