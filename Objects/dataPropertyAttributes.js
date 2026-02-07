var creditCard = {};

Object.defineProperty(creditCard, "name", {
  value: "John",
  enumerable: true,
  configurable: true,
  writable: true, //All default values are false
});

console.log("name" in creditCard);
console.log(creditCard.propertyIsEnumerable("name"));

delete creditCard.name;

console.log("name" in creditCard);

creditCard.name = "Bob";

console.log(creditCard.name);
