const { sum } = require('./app.js');

test('adds 14 + 9 to equeal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("ten dollars should be 1462.6168224299065 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(10);

    const expected = 1462.6168;


    expect(fromDollarToYen(10)).toBe(1462.6168224299065); 
})


test("1000 yenes should be 5.559105431309905 pounds", function() {

    const { fromYenToPound } = require('./app.js');

    const yens = fromYenToPound(1000);

    const expected = 5.559105431309905;

    expect(fromYenToPound(1000)).toBe(5.559105431309905); 
})