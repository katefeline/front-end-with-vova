let age = +prompt('Сколько тебе лет?', '');

if (isNaN(age) || age == '') {
    alert('Это не число');
} else if (age < 0) {
    alert('You were never born');
} else if (age >= 11 && age <= 19 || age % 10 >= 11 && age % 10 <= 19) {
    alert(`Тебе ${age} лет`);
} else if (age % 10 === 1) {
    alert(`Тебе ${age} год`);
} else if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) {
    alert(`Тебе ${age} года`);
} else
    alert(`Тебе ${age} лет`);