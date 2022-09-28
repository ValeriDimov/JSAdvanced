function storage(array) {
    let letters = [];
    let products = [];

    for (const el of array) {
        let [productName, price] = el.split(' : ');
        let firstLetter = productName.slice(0, 1);

        let letterIndex = letters.indexOf(firstLetter);
        if (letterIndex === -1) {
            letters.push(firstLetter);
            
        }          
        let product = {
            firstLetter: {
                productName,
                price: Number(price)
            }
        };

        products.push(product);
    }

    letters.sort((a, b) => a.localeCompare(b));
    products.sort((a, b) => a.firstLetter.productName.localeCompare(b.firstLetter.productName));

    for (let l of letters) {
        console.log(`${l}`);

        for (let i = 0; i < products.length; i++) {
            let firstLetter = products[i].firstLetter.productName.slice(0, 1);

            if(l === firstLetter) {
                console.log(`  ${products[i].firstLetter.productName}: ${products[i].firstLetter.price}`)
            }
            
        }
    }

    // console.log(letters.product);
}

storage(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);

console.log("----------");

storage(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);
