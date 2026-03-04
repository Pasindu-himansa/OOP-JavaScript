let scores = new Map([
  ["maths", 90],
  ["physics", 80],
  ["chemistry", 95],
]);

for (let key of scores.keys()) {
  console.log(key);
  console.log(scores.get(key));
}

for (let v of scores.values()) {
  console.log(v);
}

for (let [k, v] of scores.entries()) {
  console.log(k, v);
}
