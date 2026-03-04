let scores = new Map([
  ["maths", 90],
  ["physics", 80],
  ["chemistry", 95],
]);

console.log(scores.get("maths")); // 90
console.log(scores.get("physics")); // 80
console.log(scores.get("chemistry")); // 95

console.log(scores.size);

console.log(scores.has("english"));

console.log(scores.has("maths"));

scores.delete("maths");

console.log(scores.has("maths"));

scores.clear();

console.log(scores.size);
