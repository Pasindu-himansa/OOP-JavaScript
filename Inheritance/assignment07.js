function Car(model, year) {
  this.model = model;
  this.year = year;
}

// Adding methods to prototype
Car.prototype.drive = function () {
  return "Let's Go";
};

Car.prototype.toString = function () {
  return "[Car " + this.model + " " + this.year + "]";
};

//BMW
const myCar1 = new Car("BMW", 2018);

// Invoke methods
console.log(myCar1.drive());
console.log(myCar1.toString());

//Honda
const myCar2 = new Car("Honda", 2023);

// Invoke methods
console.log(myCar2.drive());
console.log(myCar2.toString());
