var product = {
  name: "Iphone",
};

console.log(Object.isExtensible(product));
console.log(Object.isSealed(product));
console.log(Object.isFrozen(product));

Object.freeze(product);

console.log(Object.isExtensible(product));
console.log(Object.isSealed(product));
console.log(Object.isFrozen(product));

product.name = "Mac Book pro";

console.log(product.name);

var descripter = Object.getOwnPropertyDescriptor(product, "name");

console.log(descripter.configurable);
console.log(descripter.writable);
