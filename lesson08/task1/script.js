function mainFunction(callback) {
    let firstInput = +prompt('Enter first digit');
    let secondInput = +prompt('Enter second digit');

    return callback(firstInput, secondInput);
}

function exponential(firstInput, secondInput) {
    let a =  firstInput ** secondInput;
    return alert(a);
}

mainFunction(exponential);

function multiply(firstInput, secondInput) {
    let a = firstInput + secondInput;
    return alert(a);
}

mainFunction(multiply);

function division (firstInput, secondInput) {
    let a = firstInput / secondInput;
    return alert(a);
}

mainFunction(division);

function modulo(firstInput, secondInput) {
    let a = firstInput % secondInput;
    return alert(a);
}

mainFunction(modulo);