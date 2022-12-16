// let question = prompt('What math operation do you want to do? There are 4 options: add, sub, mult, div', '');
// let firstInput = +prompt('Enter first value', '');
// let secondInput = +prompt('Enter second value', '');
//
// switch (question) {
//     case 'add': {
//         console.log(firstInput + secondInput);
//         break;
//     }
//     case 'sub': {
//         console.log(firstInput - secondInput);
//         break;
//     }
//     case 'mult': {
//         console.log(firstInput * secondInput);
//         break;
//     }
//     case 'div': {
//         console.log(firstInput / secondInput);
//         break;
//     }
//     default: {
//         console.log('Oops, I don`t know this operation. You can try again.');
//     }
// }

let question = prompt('What math operation do you want to do? There are 4 options: +, -, *, /', '');
let firstInput = +prompt('Enter first value', '');
let secondInput = +prompt('Enter second value', '');

let mathFunction = function () {
    return eval(`${firstInput} ${question} ${secondInput}`);
}

console.log(mathFunction());