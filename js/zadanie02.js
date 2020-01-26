function concatArray(array1, array2) {
    var tab = [];
    for (var i = 0; i < array1.length; i++) {
        tab.push(array1[i]);
    }
    for (var j = 0; j < array1.length; j++) {
        tab.push(array2[j]);
    }
    return tab;
}

console.log(concatArray([1, 3], [3, 5]));