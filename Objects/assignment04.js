var License = {
  name: "Pasindu",
  number: 1,
};

Object.defineProperty(License, "name", {
  enumerable: false,
});

console.log(License.name);
console.log(License.propertyIsEnumerable("name"));
console.log(Object.keys(License)); // ["number"]

for (let key in License) {
  console.log(key); // only "number"
}

Object.defineProperty(License, "number", {
  configurable: false,
});

delete License.number; // this fails

var descriptors = Object.getOwnPropertyDescriptors(License);

console.log(descriptors);
