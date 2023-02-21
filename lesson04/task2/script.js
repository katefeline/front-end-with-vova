let a;
let b;

// Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

(a === 0) ? console.log('Right') : console.log('Not right');

// // Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

(a > 0) ? console.log("Ok") : console.log("Not ok");

// // Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

(a < 0) ? console.log("True") : console.log("Not true");

// // Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

(a >= 0) ? console.log('You\'re doing great') : console.log("You\'re doing not great");

// // Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

(a <= 0) ? console.log('Cool') : console.log("Not cool, sorry");

// // Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

(a !== 0) ? console.log('Norm') : console.log('Not norm');

// // Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.

(a === 'test') ? console.log('Good') : console.log('Bad');

// // Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.

(a == 1) ? console.log('Well done') : console.log("Badly done");

// Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.

(a > 0 && a < 5) ? console.log('Magnificent') : console.log("Poor");

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
// Выведите новое значение переменной на экран.

(a === 0 || a === 2) ? console.log(a + 7) : console.log(a / 10);

//     Если переменная a равна или меньше 1, а переменная b больше или равна 3,
//     то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

(a <= 1 && b >= 3) ? console.log(a + b) : console.log(a - b);

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти,
// то выведите ‘Верно’, в противном случае выведите ‘Неверно’.

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Terrific');
} else console.log('Not terrific');

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’,
// то в переменную result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.

let num = 7;
switch (num) {
    case 1:
        console.log('winter');
        break
    case 2:
        console.log('spring');
        break
    case 3:
        console.log('summer');
        break
    case 4:
        console.log('autumn');
        break
    default:
        console.log('There is no such season on Earth, go back on Mars');
}

