const arr = [1, 2, 3, -1, -2, -3];

function checkPositiveNum(array) {
    const newArray = [];
    if (array.length === 0) {
        return 'Initial array is empty';
    }
    for (let i = 0; i<array.length;i++) {
        if (array[i] > 0) {
            newArray.push(array[i]);
        }
    }
    if (newArray.length === 0) {
        return null;
    }
    return newArray;

}

console.log(checkPositiveNum(arr));
console.log(checkPositiveNum([]));
console.log(checkPositiveNum([1,-100,45,0.12,-0.12,-78,-7,11]));
console.log(checkPositiveNum([-1,-78]));
