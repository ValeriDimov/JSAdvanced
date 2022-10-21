class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables (vegetables) {

        let vegetablesArray = vegetables;

        for (const vegetable of vegetablesArray) {
            let [type, quantity, price] = vegetable.split(" ");

            let currentVegetable = this.availableProducts.find(v => v.type === type);

            if(!currentVegetable) {
                this.availableProducts.push({
                    type,
                    quantity: Number(quantity),
                    price: Number(price)
                });
            } else {           
                currentVegetable.quantity += Number(quantity);
                if(currentVegetable.price < price) {
                    currentVegetable.price = Number(price);
                }

                const index = this.availableProducts.indexOf(currentVegetable);
                this.availableProducts.splice(index, 1, currentVegetable);
            }
        }

        let result = [];
        this.availableProducts.forEach(v => result.push(v.type));

        return `Successfully added ${result.join(", ")}`;
    }

    buyingVegetables (selectedProducts) {
        let totalPrice = 0.00;
        for (const product of selectedProducts) {
            let [type, quantity] = product.split(" ");

            let currentVegetable = this.availableProducts.find(p => p.type === type);

            if(!currentVegetable) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if(currentVegetable.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            let currentPrice = currentVegetable.price * quantity;
            currentVegetable.quantity -= quantity;

            totalPrice += currentPrice;

            const index = this.availableProducts.indexOf(currentVegetable);
            this.availableProducts.splice(index, 1, currentVegetable);
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable (type, quantity) {

        let currentVegetable = this.availableProducts.find(v => v.type === type);

        if(!currentVegetable) {
            throw new Error(`${type} is not available in the store.`);
        }

        if(quantity > currentVegetable.quantity) {
            currentVegetable.quantity = 0;
            const index = this.availableProducts.indexOf(currentVegetable);
            this.availableProducts.splice(index, 1, currentVegetable);

            return `The entire quantity of the ${type} has been removed.`
        }

        currentVegetable.quantity -= quantity;
        const index = this.availableProducts.indexOf(currentVegetable);
        this.availableProducts.splice(index, 1, currentVegetable);

        return `Some quantity of the ${type} has been removed.`
    }

    revision () {
        let result = "";
        result += "Available vegetables:\n";

       let sortedProducts = this.availableProducts.sort((a, b) => a.price - b.price);
       sortedProducts.forEach(v => result += `${v.type}-${v.quantity}-$${v.price}\n`)

       result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`

       return result;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

