const number = +prompt('Enter your number and we shall find it\'s smallest divider');

let divider = 0;
if (number <= 0) {
    console.log(NaN);
} else {
    for (let i = number; i > 1; i--) {
        if (number % i === 0) {
            divider = i;
        }
    }
    console.log(divider);
}

