const num = +prompt('Enter your num and we shall tell you whether it is simple or not', '');

let simplicityCheck = 0;
for (let i = 2; i<num;i++) {
    if (num % i === 0) {
        simplicityCheck++;
    }
}

if (simplicityCheck === 0) {
    console.log(true);
} else {
    console.log(false);
}