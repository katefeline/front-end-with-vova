//task1

let user = {};
user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';

delete user.name;

console.log(user);

//task2
const user1 = {
    name: 'John'
};

user1.name = 'Pete';

//будет работать, т.к. мы меняем внутреннее свойство объекта

//task3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = salaries.Ann + salaries.John + salaries.Pete;

console.log(sum);