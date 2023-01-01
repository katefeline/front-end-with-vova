let fib = function (n=1) {
    let firstNum = 0;
    let secondNum = 1;
    let sequence = 0;
    for (let i = 0; i<n;i++) {
        firstNum = secondNum;
        secondNum = sequence;
        sequence = firstNum + secondNum;
    }
    return sequence;


}

console.log(fib(2));