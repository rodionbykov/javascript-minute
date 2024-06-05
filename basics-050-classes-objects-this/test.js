'use strict' // removing this strict mode will disable exception on line 29

function Person(first, last, age, income) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.income = income;
}
Person.prototype.getName = function() {
    return this.firstName + " " + this.lastName;
};

Person.prototype.getTaxCalculator = function() {

    var taxes = {"income": 15, "socialsecurity": 2}; // closure, because it's used in returned function

    return function(tax){
        var taxAmount = taxes[tax]; // use of enclosed variable taxes
        return this.income * taxAmount / 100;
    }
};

var worker = new Person("John", "Smith", 40, 100000);

console.log(worker.getName());

var taxCalculator = worker.getTaxCalculator(); // new function in scope of global object (window)

// console.log(taxCalculator("socialsecurity")); // doesn't know about this.income, as global object doesn't have 'this.income'
// in strict mode: Uncaught TypeError: Cannot read property 'income' of undefined
// without strict mode: returns NaN

console.log(taxCalculator.call(worker, "socialsecurity")); // calling function in scope of worker object, and passing parameter
