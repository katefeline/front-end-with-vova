// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
//done
// const arr = ['a', 'b', 'c', 'd'];
//
// let string = arr.toString().replaceAll(',', '+');
// let firstPart = string.slice(0,3).concat(', ');
// let secondPart = string.slice(string.length - 3, string.length);
// let result = firstPart.concat(secondPart);
// console.log(result);

// 2. Создайте массив arr с элементами 2, 5, 3, 9.
// Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
//done

// const arr = [2,5,3,9];
// let result = (arr[0] * arr[1]) + (arr[2] * arr[3]);
// console.log(result);

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
//done
// const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
//
// arr.forEach((item) => {
//     item.forEach((num) => {
//         if (num === 4) {
//             console.log(num);
//         }
//     })
// })


// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
//done

// const obj = {
//     js:['jQuery', 'Angular'],
//     php:['hello'],
//     css:['world'],
// }
//
// console.log(obj.js[0]);

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
//done

// let newArray = [];
// let x = 'x';
// for (let i = 0; i < 10; i++) {
//     newArray.push(x);
//     x = x.concat('x');
//
// }
// console.log(newArray);

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
//done


// for (let i = 1; i<= 10; i++) {
//     newArray.push(i.toString().padEnd(i,i.toString()));
// }
//
// console.log(newArray);


// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
// Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
//done

// let arrayFill = function (elem, num) {
//     let array = [];
//     for (let i = 0; i < num; i++) {
//         array.push(elem);
//     }
//     return array;
//
// };
// console.log(arrayFill('x', 5));

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
//done

// let arrayWithNums = [1,2,3,4,5];
// arrayWithNums.reduce((acc, item, index) => {
//     acc = acc + item;
//     if (acc >= 10) {
//         console.log(`You have to sum ${index} elements of array to get 10`);
//         return index;
//     }
//     return acc;
//
// });


// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
//done

// let arrayReversed = [];
// for (let i = arrayWithNums.length-1; i>=0;i--) {
//     arrayReversed.push(arrayWithNums[i]);
// }
//
// console.log(arrayReversed);

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.

let sumOfNumInArray = function (array) {
    let sum = array.flat(Infinity).reduce((acc, val) => acc + val, 0);
    return sum;

}


console.log(sumOfNumInArray([[1,2,3], [4,5,6], [4,5,6]]));
console.log(sumOfNumInArray([1,2]));

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

let threeD = function (array) {
    let sum = array.flat(Infinity).reduce((acc, val) => acc + val, 0);
    return sum;
}

console.log(threeD([[1,2,3,4], [7,8,9,1], [[7], [9], [7,8,9], [7]]]));