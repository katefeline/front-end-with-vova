let firstInput = +prompt('Enter first digit', '');
let secondInput = +prompt('Enter second digit', '');

let addition = function () {
    return `The result of ${firstInput} + ${secondInput} is ${firstInput + secondInput}`;
}

let subtraction = function () {
    return `The result of ${firstInput} - ${secondInput} is ${firstInput - secondInput}`;
}

let multiplication = function () {
    return `The result of ${firstInput} * ${secondInput} is ${firstInput * secondInput}`;
}

let division = function () {
    return `The result of ${firstInput} / ${secondInput} is ${firstInput / secondInput}`;
}

console.log(addition());
console.log(subtraction());
console.log(multiplication());
console.log(division());

