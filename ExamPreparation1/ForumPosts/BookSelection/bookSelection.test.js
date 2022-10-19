let { assert } = require("chai");
let bookSelection = require("./bookSelection");

describe("bookSelection test", function () {
    describe("isGenreSuitable test", function () {
        it("Age under allowed test with Thriller", function () {
            let expected = "Books with Thriller genre are not suitable for kids at 11 age"
            assert.equal(bookSelection.isGenreSuitable("Thriller", 11), expected);
        });

        it("Age under allowed test with Horror", function () {
            let expected = "Books with Horror genre are not suitable for kids at 10 age"
            assert.equal(bookSelection.isGenreSuitable("Horror", 10), expected);

        });

        it("Age is allowed and the genre is different", function () {
            let expected = "Those books are suitable"
            assert.equal(bookSelection.isGenreSuitable("Commedy", 18), expected);
        });

        it("Age is allowed and the genre is correct", function () {
            let expected = "Those books are suitable"
            assert.equal(bookSelection.isGenreSuitable("Horror", 19), expected);
        });
    });

    describe("isItAffordable test", function () {
        it("Price is not allowed type", function () {
            assert.throw(() => bookSelection.isItAffordable("Thriller", 11), "Invalid input");
        });

        it("Budget is not allowed type", function () {
            assert.throw(() => bookSelection.isItAffordable(18, []), "Invalid input");
        });

        it("Budget is less then the price", function () {
            assert.equal(bookSelection.isItAffordable(120, 100), "You don't have enough money");
        });

        it("Budget is enough based on the price", function () {
            assert.equal(bookSelection.isItAffordable(100, 120), "Book bought. You have 20$ left");
        });

    });

    describe("suitableTitles test", function () {
        it("The input for the array is not allowed type", function () {
            assert.throw(() => bookSelection.suitableTitles(11, "Thriller"), "Invalid input");
        });

        it("The input for the string is not allowed type", function () {
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Horror" }], []), "Invalid input");
        });

        it("The input for the string is not allowed type", function () {
            assert.throw(() => bookSelection.suitableTitles(["Thriller", "Horror"], 11), "Invalid input");
        });

        it("The input is the allowed type", function () {
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, 
            { title: "The Da Vinci Code2", genre: "Horror" }], "Thriller"), "The Da Vinci Code");
        });

        it("The input is the allowed type2", function () {
            let resultArr = ['The', 'The'];
            assert.equal(bookSelection.suitableTitles([{title: "The", genre: "Horror"}, 
            {title: "The", genre: "Horror"}], "Horror").join(", "), resultArr.join(", "));
        });


    });

});
