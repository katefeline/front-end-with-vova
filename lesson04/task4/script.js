'use strict';

//Вам даны две переменные x и y, менять их не нужно.
// При помощи тернарного оператора сравните их и если x больше, чем y, то выведите фразу:
// «x больше, чем y», иначе выведите фразу: «x не больше, чем y».

// let x, y;
//
// (x > y) ? console.log('X is bigger than Y') : console.log("X is no bigger than Y");

//Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос:
// «Введите число»
// Если посетитель вводит четное число, то выводить «»Число » + num + » четное»», если нечетное: «Число » + num + » нечетное

// let num = +prompt('Put some number here');
//
// if (num % 2 === 0) {
//     console.log(`Num ${num} is even`);
// } else console.log(`Num ${num} is odd`);

//Напишите код, который предлагает пользователю ввести целое число. Нужно вывести на экран сколько в этом числе цифр,
// а также положительное оно или отрицательное.
// Например, «Число » + num + » однозначное положительное».
// Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.

// if (num > 0) {
//     console.log(`Num ${num} is positive`);
// } else console.log(`Num ${num} is negative`);
//
// num = Math.abs(num);
// let numLength = num.toString().length;
//
// if (numLength === 1) {
//     console.log('Num contain 1 digit');
// } else {
//     console.log(`Num contains ${numLength} digits`);
// }

//Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
// Пользователь вводит поочерёдно через prompt числа. Используя конструкцию if..else, напишите код,
// который должен определять, какое из введенных чисел является наибольшим.

// let input;
// let previousInput;
// let theBiggestNum;
//
// for (let i = 1; i <= 3; i++) {
//     input = +prompt('You must enter some number');
//     if (input >= previousInput) {
//         theBiggestNum = input;
//     }
//     previousInput = input;
// }
//
// console.log(theBiggestNum, previousInput, input);

//У треугольника сумма любых двух сторон должна быть больше третьей.
// Иначе две стороны просто <лягут> на третью и треугольника не получится.
// Пользователь вводит поочерёдно через prompt длины трех сторон.
// Используя конструкцию if..else, напишите код, который должен определять, может ли существовать треугольник
// при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной.
// Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.

let input;
let previousInput;
let theSmallestSide;
let sumOfSides;

for (let i = 0; i <= 2; i++) {
    previousInput = input;
    input = +prompt('Enter the side of your triangle');
    if (input <= previousInput) {
        theSmallestSide = input;
    } else {
        sumOfSides = input + previousInput;
    }

}

if (sumOfSides > theSmallestSide) {
    console.log('This triangle can exit');
} else {
    console.log('This triangle cannot exit');
}

