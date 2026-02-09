function Laptop(manufacturer, memory, hddCapacity) {
  this.manufacturer = manufacturer;
  this.memory = memory;
  this.hddCapacity = hddCapacity;

  this.display = function () {
    console.log(this.manufacturer);
    console.log(this.memory);
    console.log(this.hddCapacity);
  };
}

var laptop1 = new Laptop("Asus", "8gb", "500gb");
var laptop2 = new Laptop("MSI", "16gb", "Itb");

laptop1.display();
laptop2.display();
