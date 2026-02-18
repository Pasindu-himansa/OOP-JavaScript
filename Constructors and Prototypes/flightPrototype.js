function Flight(airlines, flightNumber) {
  this.airlines = airlines;
  this.flightNumber = flightNumber;
}

Flight.prototype.display = function () {
  console.log(this.airlines);
  console.log(this.flightNumber);
};

var flight1 = new Flight("American Airlines", "A134C");
var flight2 = new Flight("South West", "B2C245");

flight1.display();
flight2.display();
