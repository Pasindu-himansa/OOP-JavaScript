// Parent constructor
function Vehicle(model, year) {
  this.model = model;
  this.year = year;
}

Vehicle.prototype.toString = function () {
  return "[Vehicle " + this.model + " " + this.year + "]";
};

// Child constructor
function Car(model, year) {
  Vehicle.call(this, model, year); // Constructor inheritance
}

// Inherit prototype
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Updated drive method
Car.prototype.drive = function (speed) {
  return this.model + " Lets go " + speed + "mph";
};

// Override toString
Car.prototype.toString = function () {
  return "[Car " + this.model + " " + this.year + "]";
};

// Example 1
const myCar1 = new Car("BMW", 2018);
console.log(myCar1.drive(80)); // BMW to Lets go 80mph
console.log(myCar1.toString());
console.log(myCar1 instanceof Car); // true
console.log(myCar1 instanceof Vehicle); // true

// Example 2
const myCar2 = new Car("Honda", 2023);
console.log(myCar2.drive(120)); // Honda to Lets go 120mph
console.log(myCar2.toString());
console.log(myCar2 instanceof Car); // true
console.log(myCar2 instanceof Vehicle); // true
