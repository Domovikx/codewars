function countWords(str) {
    str = str.split(/[\s\.\?]+/);
    let count = 0;
    for (const i of str) {
        if (i != '') count++;
    }
    return count;
}

function countWords(str) {
    return (str.match(/[^\s]+/g) || []).length;
}

const countWords = str => str.split(/\s+/).filter(x => x).length

const countWords = str => str.split(/\S+/).length - 1

const countWords = (str) => str.split(/\s+/).filter(Boolean).length