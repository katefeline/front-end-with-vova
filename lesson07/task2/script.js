'use strict';

let padString = function (str, length, symbol, boolean = true) {


    if (str.trim() === '' || str === null || isNaN(str)) {
        console.log('Symbol cannot be more than 1 char');
    } else {
        if (str.length >= length) {
            return str.substring(0,length);
        } else {
            let num = length - str.length;
            let symbol1 = symbol;
            for(let i = 0;i<num-1;i++) {
                symbol += symbol1;
            }
            if (boolean === false) {
                return symbol + str;
            } else {
                return str + symbol;
            }
        }
    }

}

console.log(padString('boom',19, '+'));
console.log(padString('wow', 11, '$', false));