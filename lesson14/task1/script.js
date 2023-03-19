// Task #1
// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
// getFactorial(3) // в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1

const getFactorial = function (num) {
    if (num === 1 ) {
        return 1;
    } else if (num <= 0) {
        return 'Impossible operation';
    } else {
        return num * getFactorial(num - 1);
    }

}

console.log(getFactorial(5));

// Task #2
// Реализовать рекурсивную функцию которая находит возводит число в степень.
//     Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию
// pow(num, degree)

const pow = function(num, degree) {
    if (degree === 1) {
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}

console.log(pow(3,5));

// Task #3
//
// Рекурсивное суммирование
//
// Задача: напишите рекурсивную функцию для вычисления суммы заданных положительных целых чисел a и b без прямого использования оператора +.
//
// Необходимоинкрементировать одно число на единицу до тех пор, пока другое число не окажется равным нулю.

const sum = function (a,b) {
    if (b === 0) {
        return a;
    } else {
        return sum(a +1, b - 1);
    }
}

console.log(sum(2,10));