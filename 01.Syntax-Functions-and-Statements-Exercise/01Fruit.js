function fruitCalc(fruit, weight, price) {

    let money = Number(weight / 1000 * price).toFixed(2);
    let weightInKilo = Number(weight / 1000).toFixed(2);


    console.log(`I need $${money} to buy ${weightInKilo} kilograms ${fruit}.`)
}

fruitCalc('orange', 2500, 1.80);
fruitCalc('apple', 1563, 2.35);
