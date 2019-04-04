

name();
function name(str = 'aabbbccccdde') {
    console.log('str', str)

    let arr1 = str.split('');
    let arr2 = [];
    arr2[0] = arr1[0];
    let strnew = '';
    console.log('arr', arr1);

    for (let i = 1, lenght = arr1.length + 1; i < lenght; i++) {

        if (arr1[i] == arr1[i - 1]) arr2.push(arr1[i])
        else {
            strnew += arr2.length + arr2[0];
            arr2 = [];
            arr2[0] = arr1[i];
        }
    console.log('strnew', strnew);      
    }

    return strnew;
}