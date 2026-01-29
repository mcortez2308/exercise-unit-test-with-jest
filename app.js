const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

function fromDollarToYen(usdamount){
let mtoeur = usdamount / oneEuroIs["USD"]
let mtoyen = mtoeur * oneEuroIs["JPY"]
console.log(mtoyen)
return mtoyen
}

function fromEuroToDollar(euramount){
let mtousd = euramount * oneEuroIs["USD"]
console.log(mtousd)
return mtousd
}

function fromYenToPound(yenamount){
let mtoeur = yenamount / oneEuroIs["JPY"]
let mtolibra = mtoeur * oneEuroIs["GBP"]
console.log(mtolibra)
return mtolibra
}

fromDollarToYen(100)
fromEuroToDollar(1)
fromYenToPound(1000)

module.exports = {sum , fromDollarToYen, fromEuroToDollar, fromYenToPound};