'use strict';

// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const newArray = firstArray.concat(secondArray);
console.log(newArray);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const array = [1, 2, 3];
array.reverse();

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

array.push(4, 5, 6);
console.log(array);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

array.unshift(4, 5, 6);
console.log(array);

// 5. Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран первый элемент.

const someArrayWithData = ['js', 'css', 'jq'];
console.log(someArrayWithData[0]);

// 6. Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран последний элемент.

console.log(someArrayWithData[someArrayWithData.length-1]);

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].

const arrayWithDigits = [1, 2, 3, 4, 5];
const newArrayWithDigits = arrayWithDigits.slice(0,3);
console.log(newArrayWithDigits);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].

const anotherNewArrayWithDigits = arrayWithDigits.slice(3, arrayWithDigits.length);
console.log(anotherNewArrayWithDigits);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].

arrayWithDigits.splice(1,2);
console.log(arrayWithDigits);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].

const centerDigitsInArray = arrayWithDigits.slice(1, -1);
console.log(centerDigitsInArray);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, ‘a’, ‘b’, ‘c’, 4, 5].

const firstHalfOfArray = arrayWithDigits.slice(0, Math.ceil(arrayWithDigits.length/2));
firstHalfOfArray.push('a', 'b', 'c');
const secondPartOfArray = arrayWithDigits.slice(Math.ceil(arrayWithDigits.length/2), arrayWithDigits.length);
const newBigFatArray = firstHalfOfArray.concat(secondPartOfArray);
console.log(newBigFatArray);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, ‘a’, ‘b’, 2, 3, 4, ‘c’, 5, ‘e’].

const arrayWithDigits = [1, 2, 3, 4, 5];
arrayWithDigits.splice(1, 0, 'a', 'b');
arrayWithDigits.splice(6, 0, 'c');
arrayWithDigits.splice(8, 0, 'e');
console.log(arrayWithDigits);


// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arrayToBeSorted = [3, 4, 1, 2, 7];
console.log(arrayToBeSorted.sort());

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.

const arrayToBeSummed = [5, 6, 7, 8, 9];
let sum = 0;
arrayToBeSummed.forEach((item) => sum = sum + item);
console.log(sum);

// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.

let squareRootsArray = 0;
arrayToBeSummed.forEach((item) => {
    squareRootsArray = squareRootsArray + (item ** 2)});
console.log(squareRootsArray);

// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
let arrayNew = [];
const arrayWithNegativeNumbers = [1,-3, 5, 6,-7, 8, 9,-11];
arrayWithNegativeNumbers.forEach((item) => {
    if (item < 0) {
        arrayNew.push(item);
    }
})
console.log(arrayNew);

// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.

const arrayWithEvenNumbers = [1,-3, 5, 6,-7, 8, 9,-11];
let arrayNew = [];
arrayWithEvenNumbers.forEach((item) => {
    if (item % 2 === 0) {
        arrayNew.push(item);
    }
})
console.log(arrayNew);
// 18. Дан массив со строками [‘aaa’, ‘aaaqqq’, ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arrayNew = [];
const arrayWithWords = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

arrayWithWords.forEach((item) => {
    if (item.length >= 5) {
        arrayNew.push(item);
    }
})
console.log(arrayNew);

// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

const arrayWithArraysInIt = [1, 2, [3, 4], 5, [6, 7]];
let arrayNew = [];
arrayWithArraysInIt.forEach((item) => {
    if (Array.isArray(item)) {
        arrayNew.push(item);
    }
})
console.log(arrayNew);


// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
const negativeNumbers = [5,-3, 6,-5, 0,-7, 8, 9];
let negative = 0;
negativeNumbers.forEach((item) => {
    if (item < 0) {
        negative++;
    }
});
console.log(negative);