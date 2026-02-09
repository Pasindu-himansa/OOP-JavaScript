var License = {
  name: "Pasindu",
  number: 1,
};

Object.seal(License);

console.log(Object.isSealed(License));

License.age = 25;

console.log("age" in License);

console.log(Object.getOwnPropertyDescriptors(License));
