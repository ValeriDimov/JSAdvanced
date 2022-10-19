class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired) {
        
        if(this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(p => p.plantName === plantName);

        if(!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } 

        if(currentPlant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if(quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        currentPlant.ripe = true;
        currentPlant.quantity += quantity;
        
        return quantity === 1 ? `${quantity} ${currentPlant.plantName} has successfully ripened.` :
                                `${quantity} ${currentPlant.plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {

        let currentPlant = this.plants.find(p => p.plantName === plantName);

        if(!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(currentPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

       this.plants = this.plants.filter(p => p.plantName !== plantName);
        this.storage.push({
            plantName,
            quantity: currentPlant.quantity
        });
        this.spaceAvailable += currentPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = "";
        result += `The garden has ${this.spaceAvailable} free space left.\n`;

        let plantNames = [];
        this.plants.forEach(p => {
            plantNames.push(p.plantName);
        });

        plantNames.sort((a, b) => a.localeCompare(b));
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));

        result += "Plants in the garden: " + plantNames.join(", ") + "\n";
        
        if(this.storage.length === 0) {
            result += "Plants in storage: The storage is empty."
        } else {
            result += "Plants in storage: ";
            let buff = [];

            this.storage.forEach(p => buff.push(`${p.plantName} (${p.quantity})`));
            result += buff.join(", ");
        }

        return result;
                
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
