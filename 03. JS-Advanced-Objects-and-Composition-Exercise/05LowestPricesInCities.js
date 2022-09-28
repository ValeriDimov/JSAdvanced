function lowestPrices(inputArr) {
    let lowestPriceProducts = [];
    let product = {};

    for (const el of inputArr) {
        let [town, productName, price] = el.split(' | ');

        product = {
            productName,
            town,
            price: Number(price)
        };

        const result = lowestPriceProducts.find(p => p.productName === product.productName);
        if (result === undefined) {
            lowestPriceProducts.push(product);
        } else {
            if(result.productName === product.productName && result.price > product.price) {
                lowestPriceProducts.splice(lowestPriceProducts.indexOf(result), 1, product);
            }
        }
    }

    for (const p of lowestPriceProducts) {
        console.log(`${p.productName} -> ${p.price} (${p.town})`);
    }
}

lowestPrices(
    [
'Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000'
    ]);