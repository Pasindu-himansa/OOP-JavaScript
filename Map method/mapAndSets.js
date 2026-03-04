let scores = new Map();

scores.set("maths", 90);
scores.set("physics", 80);
scores.set("chemistry", 95);

console.log(scores.get("maths")); // 90
console.log(scores.get("physics")); // 80
console.log(scores.get("chemistry")); // 95

console.log(scores.size);

console.log(scores.has("english"));
