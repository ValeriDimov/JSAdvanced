let {assert} = require("chai");
let companyAdministration = require("./companyAdministration");

describe("companyAdministration testing", function() {
    
    describe("hiringEmployee test", function() {
        it("Position input is not a programmer", function() {
            assert.throw(() => companyAdministration.hiringEmployee("Peter", "Driver", 15), 
            "We are not looking for workers for this position.");
        });
        it("Position input is a programmer, but with experience under 3 years", function() {
            assert.equal(companyAdministration.hiringEmployee("Peter", "Programmer", 1), 
            "Peter is not approved for this position.");
        });
        it("Position input is a programmer and with experience more than 3 years", function() {
            assert.equal(companyAdministration.hiringEmployee("Peter", "Programmer", 4), 
            "Peter was successfully hired for the position Programmer.");
        });
        
     });
     describe("calculateSalary test", function() {
        it("Hours input is not a number", function() {
            assert.throw(() => companyAdministration.calculateSalary("15"), "Invalid hours");
        });
        it("Hours input is a negative number", function() {
            assert.throw(() => companyAdministration.calculateSalary(-1), "Invalid hours");
        });
        it("Hours input is more than 160 hours", function() {
            assert.equal(companyAdministration.calculateSalary(200), (200 * 15 + 1000));
        });
        it("Hours input is less than 160 hours", function() {
            assert.equal(companyAdministration.calculateSalary(20), (20 * 15));
        });
     });

     describe("firedEmployee test", function() {
        it("Array input is not an array", function() {
            assert.throw(() => companyAdministration.firedEmployee(15, 1), "Invalid input");
        });

        it("Index input is not an integer. Test with double", function() {
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1.53), "Invalid input");
        });

        it("Index input is not an integer. Test with string", function() {
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], "Pesho"), "Invalid input");
        });

        it("Index input is a negative number", function() {
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1), "Invalid input");
        });

        it("Index input is bigger than the length of the array", function() {
            assert.throw(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3), "Invalid input");
        });
        
        it("test with fired employees", function() {
            let result = ["Ivan", "George"];
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0),
            result.join(", "));
        });
     });
     
});
