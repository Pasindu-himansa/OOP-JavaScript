let courses = new Set(["Angular", "React", "Node"]);

console.log(courses.size);
courses.clear();
console.log(courses.size);
console.log(courses.has("Angular"));

for (let entry of courses) {
  console.log(entry);
}
