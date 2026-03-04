class BMW {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log("Start the engine");
  }

  stop() {
    console.log("Stop the engine");
  }
}

class ThreeSerises extends BMW {
  constructor(make, model, year, cruiseControlEnabled) {
    super(make, model, year);
    this.cruiseControlEnabled = cruiseControlEnabled;
  }
}

class FiveSerises extends BMW {
  constructor(make, model, year, parkingAssistEnabled) {
    super(make, model, year);
    this.parkingAssistEnabled = parkingAssistEnabled;
  }

  start() {
    console.log("Start the engine with keyless entry");
  }
}

let threeSeries1 = new ThreeSerises("BMW", "320i", 2020, true);
let fiveSeries1 = new FiveSerises("BMW", "520i", 2024, true);

console.log(threeSeries1.make);
console.log(threeSeries1.model);
console.log(threeSeries1.year);
console.log(threeSeries1.cruiseControlEnabled);
threeSeries1.start();
threeSeries1.stop();

console.log(fiveSeries1.make);
console.log(fiveSeries1.model);
console.log(fiveSeries1.year);
console.log(fiveSeries1.parkingAssistEnabled);
fiveSeries1.start();
fiveSeries1.stop();
