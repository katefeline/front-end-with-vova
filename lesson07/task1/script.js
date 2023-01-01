'use strict';

let inputNum = +prompt('Input some number', '');
let inputDegree = +prompt('Input the degree you want to put your number in', '');

let numToDegree = function (num, degree) {
    num = inputNum;
    degree = inputDegree;

    if (num == '' || num === null || Number.isNaN(num)) {
        return alert('Error, number is incorrect');
    } else if (degree == '' || degree === null || Number.isNaN(degree)) {
        return alert('Error, degree is incorrect');
    } else return Math.pow(num, degree)
};

let result = numToDegree();
if (result !== undefined) {
    alert(result);
}
