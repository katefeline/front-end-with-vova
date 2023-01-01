let cookingBorsch = function (lt) {
    let potatoWeight = 0.075;
    let potatoPricePerKg = 13;
    let potatoPerLt = 4;

    let potatoWeightPerLt = potatoWeight * potatoPerLt;
    let potatoKgPerLt = potatoWeightPerLt * lt;
    let potatoPriceForMeal = potatoKgPerLt * potatoPricePerKg;
    return `For ${lt} litres of borsch you will need ${Math.ceil(potatoKgPerLt)} kg of potatoes which costs ${Math.ceil(potatoPriceForMeal)} hryvnas`;

}

console.log(cookingBorsch(48));