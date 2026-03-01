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
  Vehicle.call(this, model, year); // constructor inheritance
}

// Inherit prototype
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Add drive method
Car.prototype.drive = function () {
  return "Let's Go";
};

// Override toString (optional)
Car.prototype.toString = function () {
  return "[Car " + this.model + " " + this.year + "]";
};

// Example
const myCar1 = new Car("BMW", 2018);

console.log(myCar1.drive());
console.log(myCar1.toString());

console.log(myCar1 instanceof Car);
console.log(myCar1 instanceof Vehicle);

const myCar2 = new Car("Honda", 2023);

console.log(myCar2.drive());
console.log(myCar2.toString());

console.log(myCar2 instanceof Car);
console.log(myCar2 instanceof Vehicle);
