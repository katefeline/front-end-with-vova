//1
let a = 1, b = 1;

let c = ++a; // равно 2, тк сначала к а прибавляется 1

let d = b++; // равно 1, тк б на этом этапе еще 1, 2 станет на следующей итерации

//2
let a1 = 2;

let x = 1 + (a1 *= 2); //x равен 5, тк сначала 2 умножаем на а1 и результат складываем с 1

//3
// "" + 1 + 0 - будет 10 тк строка приводит числовой тип к строке и далее конкатенация
// "" - 1 + 0 - будет - 1, тк минус приводит строку к числу
// true + false - будет 1, тк правда имеет значение 1, а ложь 0
// 6 / "3" - будет 2, тк деление и математический оператор
// "2" * "3" - 6, тк оператор умножения
// 4 + 5 + "px" - 9px, тк конкатенация
// "$" + 4 + 5 - $45, тк конкатенация
// "4" - 2 - 2, тк отрицание и есть число, которое приводит остальное все к числам
// "4px" - 2 - нан, тк строку з символами нельзя перевести к числу
// "  -9  " + 5 - будет строка -9 5, тк конкатенация
// "  -9  " - 5 - будет -14, тк все, кроме прибавление приводит к числу
// null + 1 - 1, тк null = 0
// undefined + 1 - нан, потому что underfined = Nan, а Nan с любой математеческой операцией всегда выдает Нан
// " \t \n" - 2 - будет -2 с табом и с новой строчкой

//4
// let a2 = prompt("Первое число?", 1);
// let b2 = prompt("Второе число?", 2);
//
// alert(a2 + b2); // 12
//необходимо преобразовать к числу, перед prompt ставить +
// let a2 = +prompt("Первое число?", 1);
// let b2 = +prompt("Второе число?", 2);
//
// console.log((a2 + b2)); // 3

//5
// 5 > 4 - truth
// "ананас" > "яблоко" - false, тк а стоит раньше, чем я
// "2" > "12" - строки, 2 больше 1
// undefined == null - правда, тк нестрогое сравнение
// undefined === null - ложь, тк строгое сравнение, это разный тип данных
// null == "\n0\n" - ложь, тк null равен только underfined при нестрогом сравнении
// null === +"\n0\n" - ложь, тк строгое сравнение