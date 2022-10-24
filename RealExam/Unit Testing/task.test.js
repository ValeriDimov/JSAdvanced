let { assert } = require("chai");
let chooseYourCar = require("./task");

describe("chooseYourCar testing", function () {

    describe("choosingType test", function () {
        it("Year input is under 1900", function () {
            assert.throw(() => chooseYourCar.choosingType("Sedan", "red", 150),
                "Invalid Year!");
        });
        it("Year input is over 2022", function () {
            assert.throw(() => chooseYourCar.choosingType("Sedan", "red", 2023),
                "Invalid Year!");
        });
        it("Type input is not Sedan", function () {
            assert.throw(() => chooseYourCar.choosingType("Cabrio", "red", 2019),
                "This type of car is not what you are looking for.");
        });
        it("Year input is under 2010", function () {
            assert.equal(chooseYourCar.choosingType("Sedan", "red", 2009),
                `This Sedan is too old for you, especially with that red color.`);
        });
        it("Year input is equal or over 2010", function () {
            assert.equal(chooseYourCar.choosingType("Sedan", "red", 2010),
                `This red Sedan meets the requirements, that you have.`);
        });

    });
    describe("brandName test", function () {
        let brands = ["BMW", "Toyota", "Peugeot"];
        it("Array input is not an array", function () {
            assert.throw(() => chooseYourCar.brandName(1, 10),
                "Invalid Information!");
        });
        it("Index input is not an integer", function () {
            assert.throw(() => chooseYourCar.brandName(brands, 10.5),
                "Invalid Information!");
        });
        it("Index input is not a number", function () {
            assert.throw(() => chooseYourCar.brandName(brands, "Peter"),
                "Invalid Information!");
        });
        it("Index input is a negative number", function () {
            assert.throw(() => chooseYourCar.brandName(brands, -2),
                "Invalid Information!");
        });
        it("Index input is outside the length of the array", function () {
            assert.throw(() => chooseYourCar.brandName(brands, 4),
                "Invalid Information!");
        });

        it("Successfully removed element from the array", function () {
            assert.equal(chooseYourCar.brandName(brands, 1),
                `BMW, Peugeot`);
        });

    });
    describe("carFuelConsumption test", function () {
        it("Distance input is not a number", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption("Petre", 10),
                "Invalid Information!");
        });
        it("Distance input is a negative number", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(-100, 10),
                "Invalid Information!");
        });
        it("Consumed fuel input is not a number", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(100, "George"),
                "Invalid Information!");
        });
        it("Distance input is a negative number", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(100, -10),
                "Invalid Information!");
        });
        it("Both inputs are not numbers", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption("Petre", "George"),
                "Invalid Information!");
        });
        it("Both inputs are negative numbers", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(-100, -10),
                "Invalid Information!");
        });
        it("Fuel consumption is over 7 litres", function () {
            assert.equal(chooseYourCar.carFuelConsumption(100, 10),
                `The car burns too much fuel - 10.00 liters!`);
        });
        it("Fuel consumption is equal or under 7 litres", function () {
            assert.equal(chooseYourCar.carFuelConsumption(100, 5),
                `The car is efficient enough, it burns 5.00 liters/100 km.`);
        });

    });

});
