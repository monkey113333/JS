//mmk to usd

const rate = {
    usd : 2100,
    sgd : 1569,
    eur : 2282
}

//from usd to mmk
function usdToMMK(inputUsd){
    return inputUsd * rate.usd + " MMK"
}

// console.log(usdToMMK(500))

//from any currency to mmk
function toMMK (input , cuurrency){
    return (input * rate[cuurrency]) + " MMK"
}

//from mmk to any currency
function toCurrency (inputMMK, currency){
    return (inputMMK / rate[currency]) +" "+ currency 
}

//from any currency to any currency

//input => mmk => currency

function toAnyCurrency (input,fromCurrency , toCurrency){
    let mmk = input * rate[fromCurrency];
    let result = mmk / rate[toCurrency];
    return result+toCurrency
}

console.log(toAnyCurrency(1,"usd","usd"))

// console.log(toCurrency(200000,"usd"))
// console.log(toCurrency(400000,"sgd"))
// console.log(toCurrency(600000,"eur"))


// console.log (toMMK(500,"usd"))
// console.log (toMMK(500,"sgd"))
// console.log (toMMK(500,"eur"))